"use client"

import { useContext, useState } from "react"
import { useForm } from "react-hook-form"

import type { AuthLocalization } from "../../lib/auth-localization"
import { AuthUIContext } from "../../lib/auth-ui-provider"
import { cn, getLocalizedError } from "../../lib/utils"
import type { AuthClient } from "../../types/auth-client"
import { CardContent } from "../ui/card"
import { Form } from "../ui/form"
import { PasskeyCell } from "./passkey-cell"
import { SessionFreshnessDialog } from "./session-freshness-dialog"
import { SettingsCard } from "./shared/settings-card"
import type { SettingsCardClassNames } from "./shared/settings-card"
import { SettingsCellSkeleton } from "./skeletons/settings-cell-skeleton"

export interface PasskeysCardProps {
    className?: string
    classNames?: SettingsCardClassNames
    isPending?: boolean
    localization?: AuthLocalization
    passkeys?: { id: string; createdAt: Date }[] | null
    skipHook?: boolean
    refetch?: () => Promise<void>
}

export function PasskeysCard({
    className,
    classNames,
    isPending,
    localization,
    passkeys,
    skipHook,
    refetch
}: PasskeysCardProps) {
    const {
        authClient,
        freshAge,
        hooks: { useListPasskeys, useSession },
        localization: authLocalization,
        toast
    } = useContext(AuthUIContext)

    localization = { ...authLocalization, ...localization }

    if (!skipHook) {
        const result = useListPasskeys()
        passkeys = result.data
        isPending = result.isPending
        refetch = result.refetch
    }

    const { data: sessionData } = useSession()
    const session = sessionData?.session
    const isFresh = session ? Date.now() - session?.createdAt.getTime() < freshAge * 1000 : false

    const [showFreshnessDialog, setShowFreshnessDialog] = useState(false)

    const addPasskey = async () => {
        // If session isn't fresh, show the freshness dialog
        if (!isFresh) {
            setShowFreshnessDialog(true)
            return
        }

        try {
            await (authClient as AuthClient).passkey.addPasskey({ fetchOptions: { throw: true } })
            await refetch?.()
        } catch (error) {
            toast({
                variant: "error",
                message: getLocalizedError({ error, localization })
            })
        }
    }

    const form = useForm()

    return (
        <>
            <SessionFreshnessDialog
                open={showFreshnessDialog}
                onOpenChange={setShowFreshnessDialog}
                classNames={classNames}
                localization={localization}
            />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(addPasskey)}>
                    <SettingsCard
                        className={className}
                        classNames={classNames}
                        actionLabel={localization.addPasskey}
                        description={localization.passkeysDescription}
                        instructions={localization.passkeysInstructions}
                        isPending={isPending}
                        title={localization.passkeys}
                    >
                        {(isPending || (passkeys && passkeys.length > 0)) && (
                            <CardContent className={cn("grid gap-4", classNames?.content)}>
                                {isPending ? (
                                    <SettingsCellSkeleton classNames={classNames} />
                                ) : (
                                    passkeys?.map((passkey) => (
                                        <PasskeyCell
                                            key={passkey.id}
                                            classNames={classNames}
                                            localization={localization}
                                            passkey={passkey}
                                            refetch={refetch}
                                        />
                                    ))
                                )}
                            </CardContent>
                        )}
                    </SettingsCard>
                </form>
            </Form>
        </>
    )
}
