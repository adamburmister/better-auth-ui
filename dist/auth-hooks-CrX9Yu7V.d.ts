import { User as User$1 } from 'better-auth';
import { createAuthClient } from 'better-auth/react';

type AuthClient = ReturnType<typeof createAuthClient<{
    plugins: [
        ApiKeyClientPlugin,
        MultiSessionClientPlugin,
        PasskeyClientPlugin,
        OneTapClientPlugin,
        GenericOAuthClientPlugin,
        AnonymousClientPlugin,
        UsernameClientPlugin,
        MagicLinkClientPlugin,
        EmailOTPClientPlugin,
        TwoFactorClientPlugin
    ];
}>>;
type Session = AuthClient["$Infer"]["Session"]["session"];
type User = AuthClient["$Infer"]["Session"]["user"];

type ApiKey = {
    id: string;
    name: string;
    start: string;
    expiresAt?: Date;
    createdAt: Date;
    updatedAt: Date;
};

type FetchError = {
    code?: string | undefined;
    message?: string | undefined;
    status?: number;
    statusText?: string;
};

type AuthHook<T> = {
    isPending: boolean;
    data?: T | null;
    error?: FetchError | null;
    refetch?: () => Promise<any> | any;
};
type AuthHooks = {
    useSession: () => AuthHook<{
        session: Session;
        user: User;
    }>;
    useListAccounts: () => AuthHook<{
        accountId: string;
        provider: string;
    }[]>;
    useListDeviceSessions: () => AuthHook<{
        session: Session;
        user: User$1;
    }[]>;
    useListSessions: () => AuthHook<Session[]>;
    useListPasskeys: () => AuthHook<{
        id: string;
        createdAt: Date;
    }[]>;
    useListApiKeys: () => AuthHook<ApiKey[]>;
    useIsRestoring?: () => boolean;
};

export type { AuthHooks as A, Session as S, AuthClient as a, ApiKey as b };
