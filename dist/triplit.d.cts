import { TriplitClient } from '@triplit/client';
import { User } from 'better-auth';
import { S as Session, A as AuthHooks } from './auth-hooks-CrX9Yu7V.cjs';
import 'better-auth/react';

declare const namespaces: readonly ["user", "session", "account", "passkey"];
type Namespace = (typeof namespaces)[number];
type ModelNames = {
    [key in Namespace]: string;
};
interface UseTriplitOptionsProps {
    triplit: TriplitClient<any>;
    modelNames?: Partial<ModelNames>;
    usePlural?: boolean;
    sessionData?: {
        user: User;
        session: Session;
    };
    refetch?: () => Promise<unknown> | unknown;
    isPending: boolean;
}
declare function useTriplitHooks({ triplit, usePlural, modelNames, sessionData, isPending }: UseTriplitOptionsProps): {
    hooks: AuthHooks;
};

export { type UseTriplitOptionsProps, useTriplitHooks };
