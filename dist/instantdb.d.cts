import { InstantReactWebDatabase } from '@instantdb/react';
import { User } from 'better-auth';
import { S as Session, A as AuthHooks } from './auth-hooks-CrX9Yu7V.cjs';
import { A as AuthMutators } from './auth-mutators-CK8vxOJz.cjs';
import 'better-auth/react';

declare const namespaces: readonly ["user", "session", "account", "passkey"];
type Namespace = (typeof namespaces)[number];
type ModelNames = {
    [key in Namespace]: string;
};
interface UseInstantOptionsProps {
    db: InstantReactWebDatabase<any>;
    modelNames?: Partial<ModelNames>;
    usePlural?: boolean;
    sessionData?: {
        user: User;
        session: Session;
    };
    refetch?: () => Promise<unknown> | unknown;
    user?: {
        id: string;
    } | null;
    isPending: boolean;
}
declare function useInstantOptions({ db, usePlural, modelNames, sessionData, isPending, user }: UseInstantOptionsProps): {
    hooks: AuthHooks;
    mutators: AuthMutators;
};

export { type UseInstantOptionsProps, useInstantOptions };
