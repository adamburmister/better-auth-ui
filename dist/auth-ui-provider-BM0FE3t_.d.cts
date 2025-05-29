import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ReactNode, ComponentType } from 'react';
import { SocialProvider } from 'better-auth/social-providers';
import { createAuthClient } from 'better-auth/react';
import { A as AuthHooks, a as AuthClient } from './auth-hooks-CrX9Yu7V.cjs';
import { A as AuthMutators } from './auth-mutators-CK8vxOJz.cjs';
import { A as AuthViewPaths } from './auth-view-paths-Dqign_Bk.cjs';

declare const authLocalization: {
    /** @default "Account" */
    account: string;
    /** @default "Accounts" */
    accounts: string;
    /** @default "Manage your currently signed in accounts." */
    accountsDescription: string;
    /** @default "Sign in to an additional account." */
    accountsInstructions: string;
    /** @default "Add Account" */
    addAccount: string;
    /** @default "Add Passkey" */
    addPasskey: string;
    /** @default "Already have an account?" */
    alreadyHaveAnAccount: string;
    /** @default "Avatar" */
    avatar: string;
    /** @default "Click on the avatar to upload a custom one from your files." */
    avatarDescription: string;
    /** @default "An avatar is optional but strongly recommended." */
    avatarInstructions: string;
    /** @default "Backup code is required" */
    backupCodeRequired: string;
    /** @default "Backup Codes" */
    backupCodes: string;
    /** @default "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method." */
    backupCodesDescription: string;
    /** @default "Enter one of your backup codes. Once used, each code can only be used once and will be invalidated after use." */
    backupCodePlaceholder: string;
    /** @default "Backup Code" */
    backupCode: string;
    /** @default "Recover account" */
    backupCodeAction: string;
    /** @default "Cancel" */
    cancel: string;
    /** @default "Change Password" */
    changePassword: string;
    /** @default "Enter your current password and a new password." */
    changePasswordDescription: string;
    /** @default "Please use 8 characters at minimum." */
    changePasswordInstructions: string;
    /** @default "Your password has been changed." */
    changePasswordSuccess: string;
    /** @default "Confirm Password" */
    confirmPassword: string;
    /** @default "Confirm Password" */
    confirmPasswordPlaceholder: string;
    /** @default "Confirm password is required" */
    confirmPasswordRequired: string;
    /** @default "Continue with Authenticator" */
    continueWithAuthenticator: string;
    /** @default "Copied to clipboard" */
    copiedToClipboard: string;
    /** @default "Copy to clipboard" */
    copyToClipboard: string;
    /** @default "Copy all codes" */
    copyAllCodes: string;
    /** @default "Continue" */
    continue: string;
    /** @default "Current Password" */
    currentPassword: string;
    /** @default "Current Password" */
    currentPasswordPlaceholder: string;
    /** @default "Current Session" */
    currentSession: string;
    /** @default "Delete" */
    delete: string;
    /** @default "Delete Avatar" */
    deleteAvatar: string;
    /** @default "Delete Account" */
    deleteAccount: string;
    /** @default "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution." */
    deleteAccountDescription: string;
    /** @default "Please confirm the deletion of your account. This action is not reversible, so please continue with caution." */
    deleteAccountInstructions: string;
    /** @default "Please check your email to verify the deletion of your account." */
    deleteAccountVerify: string;
    /** @default "Your account has been deleted." */
    deleteAccountSuccess: string;
    /** @default "You must be recently logged in to delete your account." */
    deleteAccountNotFresh: string;
    /** @default "Disable" */
    disable: string;
    /** @default "Choose a provider to login to your account" */
    disabledCredentialsDescription: string;
    /** @default "Don't have an account?" */
    dontHaveAnAccount: string;
    /** @default "Done" */
    done: string;
    /** @default "Email" */
    email: string;
    /** @default "Enter the email address you want to use to log in." */
    emailDescription: string;
    /** @default "Please enter a valid email address." */
    emailInstructions: string;
    /** @default "Email address is invalid" */
    emailInvalid: string;
    /** @default "Email is the same" */
    emailIsTheSame: string;
    /** @default "m@example.com" */
    emailPlaceholder: string;
    /** @default "Email address is required" */
    emailRequired: string;
    /** @default "Please check your email to verify the change." */
    emailVerifyChange: string;
    /** @default "Please check your email for the verification link." */
    emailVerification: string;
    /** @default "Enable" */
    enable: string;
    /** @default "Error" */
    error: string;
    /** @default "is invalid" */
    isInvalid: string;
    /** @default "is required" */
    isRequired: string;
    /** @default "is the same" */
    isTheSame: string;
    /** @default "Forgot authenticator?" */
    forgotAuthenticator: string;
    /** @default "Forgot Password" */
    forgotPassword: string;
    /** @default "Send reset link" */
    forgotPasswordAction: string;
    /** @default "Enter your email to reset your password" */
    forgotPasswordDescription: string;
    /** @default "Check your email for the password reset link." */
    forgotPasswordEmail: string;
    /** @default "Forgot your password?" */
    forgotPasswordLink: string;
    /** @default "Invalid two factor cookie" */
    invalidTwoFactorCookie: string;
    /** @default "Link" */
    link: string;
    /** @default "Magic Link" */
    magicLink: string;
    /** @default "Send magic link" */
    magicLinkAction: string;
    /** @default "Enter your email to receive a magic link" */
    magicLinkDescription: string;
    /** @default "Check your email for the magic link" */
    magicLinkEmail: string;
    /** @default "Email Code" */
    emailOTP: string;
    /** @default "Send code" */
    emailOTPSendAction: string;
    /** @default "Verify code" */
    emailOTPVerifyAction: string;
    /** @default "Enter your email to receive a code" */
    emailOTPDescription: string;
    /** @default "Please check your email for the verification code." */
    emailOTPVerificationSent: string;
    /** @default "Name" */
    name: string;
    /** @default "Please enter your full name, or a display name." */
    nameDescription: string;
    /** @default "Please use 32 characters at maximum." */
    nameInstructions: string;
    /** @default "Name" */
    namePlaceholder: string;
    /** @default "New Password" */
    newPassword: string;
    /** @default "New Password" */
    newPasswordPlaceholder: string;
    /** @default "New password is required" */
    newPasswordRequired: string;
    /** @default "One-Time Password" */
    oneTimePassword: string;
    /** @default "Or continue with" */
    orContinueWith: string;
    /** @default "Passkey" */
    passkey: string;
    /** @default "Passkeys" */
    passkeys: string;
    /** @default "Manage your passkeys for secure access." */
    passkeysDescription: string;
    /** @default "Securely access your account without a password." */
    passkeysInstructions: string;
    /** @default "API Keys" */
    apiKeys: string;
    /** @default "Manage your API keys for secure access." */
    apiKeysDescription: string;
    /** @default "Generate API keys to access your account programmatically." */
    apiKeysInstructions: string;
    /** @default "Create API Key" */
    createApiKey: string;
    /** @default "Enter a unique name for your API key to differentiate it from other keys." */
    createApiKeyDescription: string;
    /** @default "New API Key" */
    apiKeyNamePlaceholder: string;
    /** @default "API Key Created" */
    apiKeyCreated: string;
    /** @default "Please copy your API key and store it in a safe place. For security reasons we cannot show it again." */
    apiKeyCreatedDescription: string;
    /** @default "Never Expires" */
    neverExpires: string;
    /** @default "Expires" */
    expires: string;
    /** @default "No Expiration" */
    noExpiration: string;
    /** @default "Create" */
    create: string;
    /** @default "Password" */
    password: string;
    /** @default "Password" */
    passwordPlaceholder: string;
    /** @default "Password is required" */
    passwordRequired: string;
    /** @default "Passwords do not match" */
    passwordsDoNotMatch: string;
    /** @default "Providers" */
    providers: string;
    /** @default "Connect your account with a third-party service." */
    providersDescription: string;
    /** @default "Recover Account" */
    recoverAccount: string;
    /** @default "Recover account" */
    recoverAccountAction: string;
    /** @default "Please enter a backup code to access your account" */
    recoverAccountDescription: string;
    /** @default "Remember me" */
    rememberMe: string;
    /** @default "Resend code" */
    resendCode: string;
    /** @default "Resend verification email" */
    resendVerificationEmail: string;
    /** @default "Reset Password" */
    resetPassword: string;
    /** @default "Save new password" */
    resetPasswordAction: string;
    /** @default "Enter your new password below" */
    resetPasswordDescription: string;
    /** @default "Invalid reset password link" */
    resetPasswordInvalidToken: string;
    /** @default "Password reset successfully" */
    resetPasswordSuccess: string;
    /** @default "Request failed" */
    requestFailed: string;
    /** @default "Revoke" */
    revoke: string;
    /** @default "Delete API Key" */
    deleteApiKey: string;
    /** @default "Are you sure you want to delete this API key?" */
    deleteApiKeyConfirmation: string;
    /** @default "API Key" */
    apiKey: string;
    /** @default "Sign In" */
    signIn: string;
    /** @default "Login" */
    signInAction: string;
    /** @default "Enter your email below to login to your account" */
    signInDescription: string;
    /** @default "Enter your username or email below to login to your account" */
    signInUsernameDescription: string;
    /** @default "Sign in with" */
    signInWith: string;
    /** @default "Sign Out" */
    signOut: string;
    /** @default "Sign Up" */
    signUp: string;
    /** @default "Create an account" */
    signUpAction: string;
    /** @default "Enter your information to create an account" */
    signUpDescription: string;
    /** @default "Check your email for the verification link." */
    signUpEmail: string;
    /** @default "Sessions" */
    sessions: string;
    /** @default "Manage your active sessions and revoke access." */
    sessionsDescription: string;
    /** @default "Set Password" */
    setPassword: string;
    /** @default "Click the button below to receive an email to set up a password for your account." */
    setPasswordDescription: string;
    /** @default "Settings" */
    settings: string;
    /** @default "Save" */
    save: string;
    /** @default "Security" */
    security: string;
    /** @default "Switch Account" */
    switchAccount: string;
    /** @default "Trust this device" */
    trustDevice: string;
    /** @default "Two-Factor" */
    twoFactor: string;
    /** @default "Verify code" */
    twoFactorAction: string;
    /** @default "Please enter your one-time password to continue" */
    twoFactorDescription: string;
    /** @default "Add an extra layer of security to your account." */
    twoFactorCardDescription: string;
    /** @default "Please enter your password to disable 2FA." */
    twoFactorDisableInstructions: string;
    /** @default "Please enter your password to enable 2FA" */
    twoFactorEnableInstructions: string;
    /** @default "Two-factor authentication has been enabled" */
    twoFactorEnabled: string;
    /** @default "Two-Factor Authentication has been disabled" */
    twoFactorDisabled: string;
    /** @default "Two-Factor Authentication" */
    twoFactorPrompt: string;
    /** @default "Scan the QR Code with your Authenticator" */
    twoFactorTotpLabel: string;
    /** @default "Send verification code" */
    sendVerificationCode: string;
    /** @default "Unlink" */
    unlink: string;
    /** @default "Updated successfully" */
    updatedSuccessfully: string;
    /** @default "Username" */
    username: string;
    /** @default "Enter the username you want to use to log in." */
    usernameDescription: string;
    /** @default "Please use 32 characters at maximum." */
    usernameInstructions: string;
    /** @default "Username" */
    usernamePlaceholder: string;
    /** @default "Username or email" */
    signInUsernamePlaceholder: string;
    /** @default "Verify Your Email" */
    verifyYourEmail: string;
    /** @default "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend." */
    verifyYourEmailDescription: string;
    /** @default "Go back" */
    goBack: string;
    /** @default "Invalid email or password" */
    invalidEmailOrPassword: string;
    /** @default "Invalid password" */
    passwordInvalid: string;
    /** @default "Your session is not fresh. Please sign in again." */
    sessionNotFresh: string;
    /** @default "Session Expired" */
    sessionExpired: string;
    /** @default "Password too short" */
    passwordTooShort: string;
    /** @default "Password too long" */
    passwordTooLong: string;
    /** @default "Upload Avatar" */
    uploadAvatar: string;
    /** @default "Privacy Policy" */
    privacyPolicy: string;
    /** @default "Terms of Service" */
    termsOfService: string;
    /** @default "This site is protected by reCAPTCHA." */
    protectedByRecaptcha: string;
    /** @default "By continuing, you agree to the" */
    byContinuingYouAgree: string;
    /** @default "Missing CAPTCHA response" */
    missingCaptchaResponse: string;
};
type AuthLocalization = Partial<typeof authLocalization>;

type FieldType = "string" | "number" | "boolean";
interface AdditionalField {
    description?: ReactNode;
    instructions?: ReactNode;
    label: ReactNode;
    placeholder?: string;
    required?: boolean;
    type: FieldType;
    validate?: (value: string) => Promise<boolean>;
}
interface AdditionalFields {
    [key: string]: AdditionalField;
}

type AnyAuthClient = Omit<ReturnType<typeof createAuthClient>, "signUp" | "getSession">;

type CaptchaProvider = "cloudflare-turnstile" | "google-recaptcha-v2-checkbox" | "google-recaptcha-v2-invisible" | "google-recaptcha-v3" | "hcaptcha";

type Link = ComponentType<{
    href: string;
    className?: string;
    children: ReactNode;
}>;

type ToastVariant = "default" | "success" | "error" | "info" | "warning";
type RenderToast = ({ variant, message }: {
    variant?: ToastVariant;
    message?: string;
}) => void;

interface ProviderIconProps {
    className?: string;
    variant?: "default" | "color";
}
type ProviderIcon = ComponentType<ProviderIconProps>;
declare const AppleIcon: ProviderIcon;
declare const DiscordIcon: ProviderIcon;
declare const DropboxIcon: ProviderIcon;
declare const FacebookIcon: ProviderIcon;
declare const GitHubIcon: ProviderIcon;
declare const GitLabIcon: ProviderIcon;
declare const GoogleIcon: ProviderIcon;
declare const KickIcon: ProviderIcon;
declare const LinkedInIcon: ProviderIcon;
declare const MicrosoftIcon: ProviderIcon;
declare const RedditIcon: ProviderIcon;
declare const RobloxIcon: ProviderIcon;
declare const SpotifyIcon: ProviderIcon;
declare const TikTokIcon: ProviderIcon;
declare const TwitchIcon: ProviderIcon;
declare const VKIcon: ProviderIcon;
declare const XIcon: ProviderIcon;
declare const ZoomIcon: ProviderIcon;

declare const socialProviders: readonly [{
    readonly provider: "apple";
    readonly name: "Apple";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "discord";
    readonly name: "Discord";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "dropbox";
    readonly name: "Dropbox";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "facebook";
    readonly name: "Facebook";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "github";
    readonly name: "GitHub";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "gitlab";
    readonly name: "GitLab";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "google";
    readonly name: "Google";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "kick";
    readonly name: "Kick";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "linkedin";
    readonly name: "LinkedIn";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "microsoft";
    readonly name: "Microsoft";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "reddit";
    readonly name: "Reddit";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "roblox";
    readonly name: "Roblox";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "spotify";
    readonly name: "Spotify";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "tiktok";
    readonly name: "TikTok";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "twitch";
    readonly name: "Twitch";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "vk";
    readonly name: "VK";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "twitter";
    readonly name: "X";
    readonly icon: ProviderIcon;
}, {
    readonly provider: "zoom";
    readonly name: "Zoom";
    readonly icon: ProviderIcon;
}];
type Provider = {
    provider: string;
    name: string;
    icon?: ProviderIcon;
};

declare const defaultNavigate: (href: string) => void;
declare const defaultReplace: (href: string) => void;
type PasswordValidation = {
    /**
     * Maximum password length
     */
    maxLength?: number;
    /**
     * Minimum password length
     */
    minLength?: number;
    /**
     * Password validation regex
     */
    regex?: RegExp;
};
type AuthUIContextType = {
    authClient: AnyAuthClient;
    /**
     * Additional fields for users
     */
    additionalFields?: AdditionalFields;
    /**
     * API Keys plugin configuration
     */
    apiKeys?: {
        /**
         * Prefix for API Keys
         */
        prefix?: string;
        /**
         * Metadata for API Keys
         */
        metadata?: Record<string, unknown>;
    } | boolean;
    /**
     * Enable or disable Avatar support
     * @default false
     */
    avatar?: boolean;
    /**
     * File extension for Avatar uploads
     * @default "png"
     */
    avatarExtension: string;
    /**
     * Avatars are resized to 128px unless uploadAvatar is provided, then 256px
     * @default 128 | 256
     */
    avatarSize: number;
    /**
     * Base path for the auth views
     * @default "/auth"
     */
    basePath: string;
    /**
     * Front end base URL for auth API callbacks
     */
    baseURL?: string;
    /**
     * Captcha configuration
     */
    captcha?: {
        siteKey: string;
        provider: CaptchaProvider;
        hideBadge?: boolean;
        recaptchaNet?: boolean;
        enterprise?: boolean;
        /**
         * Overrides the default array of paths where captcha validation is enforced
         * @default ["/sign-up/email", "/sign-in/email", "/forget-password"]
         */
        endpoints?: string[];
    };
    /**
     * Force color icons for both light and dark themes
     * @default false
     */
    colorIcons?: boolean;
    /**
     * Enable or disable the Confirm Password input
     * @default false
     */
    confirmPassword?: boolean;
    /**
     * Enable or disable Credentials support
     * @default true
     */
    credentials?: boolean;
    /**
     * Default redirect URL after authenticating
     * @default "/"
     */
    redirectTo: string;
    /**
     * Enable or disable email verification for account deletion
     * @default false
     */
    deleteAccountVerification?: boolean;
    /**
     * Enable or disable user change email support
     * @default true
     */
    changeEmail?: boolean;
    /**
     * Enable or disable User Account deletion
     * @default false
     */
    deleteUser?: boolean;
    /**
     * Show Verify Email card for unverified emails
     */
    emailVerification?: boolean;
    /**
     * Enable or disable Forgot Password flow
     * @default true
     */
    forgotPassword?: boolean;
    /**
     * Freshness age for Session data
     * @default 60 * 60 * 24
     */
    freshAge: number;
    /**
     * @internal
     */
    hooks: AuthHooks;
    localization: AuthLocalization;
    /**
     * Enable or disable Magic Link support
     * @default false
     */
    magicLink?: boolean;
    /**
     * Enable or disable Email OTP support
     * @default false
     */
    emailOTP?: boolean;
    /**
     * Enable or disable Multi Session support
     * @default false
     */
    multiSession?: boolean;
    /** @internal */
    mutators: AuthMutators;
    /**
     * Enable or disable name requirement for Sign Up
     * @default true
     */
    nameRequired?: boolean;
    /**
     * Force black & white icons for both light and dark themes
     * @default false
     */
    noColorIcons?: boolean;
    /**
     * Enable or disable One Tap support
     * @default false
     */
    oneTap?: boolean;
    /**
     * Perform some User updates optimistically
     * @default false
     */
    optimistic?: boolean;
    /**
     * Enable or disable Passkey support
     * @default false
     */
    passkey?: boolean;
    /**
     * Forces better-auth-tanstack to refresh the Session on the auth callback page
     * @default false
     */
    persistClient?: boolean;
    /**
     * Array of Social Providers to enable
     * @remarks `SocialProvider[]`
     */
    providers?: SocialProvider[];
    /**
     * Custom OAuth Providers
     * @default false
     */
    otherProviders?: Provider[];
    /**
     * Enable or disable Remember Me checkbox
     * @default false
     */
    rememberMe?: boolean;
    /**
     * Array of fields to show in `<SettingsCards />`
     * @default ["name"]
     */
    settingsFields?: string[];
    /**
     * Custom Settings URL
     */
    settingsURL?: string;
    /**
     * Enable or disable Sign Up form
     * @default true
     */
    signUp?: boolean;
    /**
     * Array of fields to show in Sign Up form
     * @default ["name"]
     */
    signUpFields?: string[];
    /**
     * Custom social sign in function
     */
    signInSocial?: (params: Parameters<AuthClient["signIn"]["social"]>[0]) => Promise<unknown>;
    toast: RenderToast;
    /**
     * Enable or disable two-factor authentication support
     * @default undefined
     */
    twoFactor?: ("otp" | "totp")[];
    /**
     * Enable or disable Username support
     * @default false
     */
    username?: boolean;
    viewPaths: AuthViewPaths;
    /**
     * Navigate to a new URL
     * @default window.location.href
     */
    navigate: typeof defaultNavigate;
    /**
     * Called whenever the Session changes
     */
    onSessionChange?: () => void | Promise<void>;
    /**
     * Replace the current URL
     * @default navigate
     */
    replace: typeof defaultReplace;
    /**
     * Upload an Avatar image and return the URL string
     * @remarks `(file: File) => Promise<string>`
     */
    uploadAvatar?: (file: File) => Promise<string | undefined | null>;
    /**
     * Custom Link component for navigation
     * @default <a>
     */
    Link: Link;
    /**
     * Customize the password validation
     */
    passwordValidation?: PasswordValidation;
};
type AuthUIProviderProps = {
    children: ReactNode;
    /**
     * Better Auth client returned from createAuthClient
     * @default Required
     * @remarks `AuthClient`
     */
    authClient: AnyAuthClient;
    /**
     * ADVANCED: Custom hooks for fetching auth data
     */
    hooks?: Partial<AuthHooks>;
    /**
     * Customize the paths for the auth views
     * @default authViewPaths
     * @remarks `AuthViewPaths`
     */
    viewPaths?: Partial<AuthViewPaths>;
    /**
     * Render custom Toasts
     * @default Sonner
     */
    toast?: RenderToast;
    /**
     * Customize the Localization strings
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
    /**
     * ADVANCED: Custom mutators for updating auth data
     */
    mutators?: Partial<AuthMutators>;
} & Partial<Omit<AuthUIContextType, "viewPaths" | "localization" | "mutators" | "toast" | "hooks">>;
declare const AuthUIContext: React.Context<AuthUIContextType>;
declare const AuthUIProvider: ({ children, authClient, avatarExtension, avatarSize, basePath, baseURL, captcha, redirectTo, credentials, changeEmail, forgotPassword, freshAge, hooks: hooksProp, mutators: mutatorsProp, localization: localizationProp, nameRequired, settingsFields, signUp, signUpFields, toast, viewPaths: viewPathsProp, navigate, replace, uploadAvatar, Link, ...props }: AuthUIProviderProps) => react_jsx_runtime.JSX.Element;

export { type AuthUIProviderProps as A, DiscordIcon as D, type FieldType as F, GitHubIcon as G, KickIcon as K, LinkedInIcon as L, MicrosoftIcon as M, type PasswordValidation as P, RedditIcon as R, SpotifyIcon as S, TikTokIcon as T, VKIcon as V, XIcon as X, ZoomIcon as Z, type AuthLocalization as a, type ProviderIconProps as b, type ProviderIcon as c, AppleIcon as d, DropboxIcon as e, FacebookIcon as f, GitLabIcon as g, GoogleIcon as h, RobloxIcon as i, TwitchIcon as j, authLocalization as k, type AuthUIContextType as l, AuthUIContext as m, AuthUIProvider as n, type Provider as o, socialProviders as s };
