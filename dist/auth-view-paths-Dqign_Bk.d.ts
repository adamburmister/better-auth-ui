declare const authViewPaths: {
    /** @default "callback" */
    callback: string;
    /** @default "forgot-password" */
    forgotPassword: string;
    /** @default "magic-link" */
    magicLink: string;
    /** @default "email-otp" */
    emailOTP: string;
    /** @default "recover-account" */
    recoverAccount: string;
    /** @default "reset-password" */
    resetPassword: string;
    /** @default "settings" */
    settings: string;
    /** @default "sign-in" */
    signIn: string;
    /** @default "sign-out" */
    signOut: string;
    /** @default "sign-up" */
    signUp: string;
    /** @default "two-factor" */
    twoFactor: string;
};
type AuthViewPaths = typeof authViewPaths;
type AuthView = keyof AuthViewPaths;

export { type AuthViewPaths as A, type AuthView as a, authViewPaths as b };
