import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ComponentProps, ReactNode } from 'react';
import { a as AuthLocalization, P as PasswordValidation, F as FieldType } from './auth-ui-provider-DTuBWV7q.js';
export { d as AppleIcon, m as AuthUIContext, l as AuthUIContextType, n as AuthUIProvider, A as AuthUIProviderProps, D as DiscordIcon, e as DropboxIcon, f as FacebookIcon, G as GitHubIcon, g as GitLabIcon, h as GoogleIcon, K as KickIcon, L as LinkedInIcon, M as MicrosoftIcon, o as Provider, c as ProviderIcon, b as ProviderIconProps, R as RedditIcon, i as RobloxIcon, S as SpotifyIcon, T as TikTokIcon, j as TwitchIcon, V as VKIcon, X as XIcon, Z as ZoomIcon, k as authLocalization, s as socialProviders } from './auth-ui-provider-DTuBWV7q.js';
import { a as AuthView } from './auth-view-paths-Dqign_Bk.js';
export { A as AuthViewPaths, b as authViewPaths } from './auth-view-paths-Dqign_Bk.js';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
export { EmailTemplate, EmailTemplateClassNames, EmailTemplateProps } from './server.js';
import { User, Session } from 'better-auth';
import { b as ApiKey } from './auth-hooks-CrX9Yu7V.js';
import 'better-auth/social-providers';
import 'better-auth/react';
import './auth-mutators-CK8vxOJz.js';

declare function AuthCallback({ redirectTo }: {
    redirectTo?: string;
}): react_jsx_runtime.JSX.Element;

type Profile = {
    id?: string | number;
    email?: string | null;
    name?: string | null;
    firstName?: string | null;
    fullName?: string | null;
    isAnonymous?: boolean | null;
    emailVerified?: boolean | null;
    image?: string | null;
    avatar?: string | null;
    avatarUrl?: string | null;
};

declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;

interface UserAvatarClassNames {
    base?: string;
    image?: string;
    fallback?: string;
    fallbackIcon?: string;
    skeleton?: string;
}
interface UserAvatarProps {
    user?: Profile;
    classNames?: UserAvatarClassNames;
    isPending?: boolean;
}
/**
 * Displays a user avatar with image and fallback support
 *
 * Renders a user's avatar image when available, with appropriate fallbacks:
 * - Shows a skeleton when isPending is true
 * - Displays first two characters of user's name when no image is available
 * - Falls back to a generic user icon when neither image nor name is available
 */
declare function UserAvatar({ user, classNames, className, isPending, ...props }: UserAvatarProps & ComponentProps<typeof Avatar>): react_jsx_runtime.JSX.Element;

type SettingsCardClassNames = {
    base?: string;
    avatar?: UserAvatarClassNames;
    button?: string;
    cell?: string;
    checkbox?: string;
    destructiveButton?: string;
    content?: string;
    description?: string;
    dialog?: {
        content?: string;
        footer?: string;
        header?: string;
    };
    error?: string;
    footer?: string;
    header?: string;
    icon?: string;
    input?: string;
    instructions?: string;
    label?: string;
    primaryButton?: string;
    secondaryButton?: string;
    outlineButton?: string;
    skeleton?: string;
    title?: string;
};
interface SettingsCardProps {
    children?: ReactNode;
    className?: string;
    classNames?: SettingsCardClassNames;
    title: ReactNode;
    description?: ReactNode;
    instructions?: ReactNode;
    actionLabel?: ReactNode;
    isSubmitting?: boolean;
    disabled?: boolean;
    isPending?: boolean;
    optimistic?: boolean;
    variant?: "default" | "destructive";
    action?: () => Promise<unknown> | unknown;
}
declare function SettingsCard({ children, className, classNames, title, description, instructions, actionLabel, disabled, isPending, isSubmitting, optimistic, variant, action }: SettingsCardProps): react_jsx_runtime.JSX.Element;

type SettingsCardsClassNames = {
    base?: string;
    card?: SettingsCardClassNames;
    cards?: string;
    icon?: string;
    dropdown?: {
        base?: string;
        trigger?: string;
        content?: string;
        menuIcon?: string;
    };
    sidebar?: {
        base?: string;
        button?: string;
    };
};
interface SettingsCardsProps {
    className?: string;
    classNames?: SettingsCardsClassNames;
    localization?: AuthLocalization;
}
declare function SettingsCards({ className, classNames, localization }: SettingsCardsProps): react_jsx_runtime.JSX.Element;

type AuthFormClassNames = {
    base?: string;
    button?: string;
    checkbox?: string;
    description?: string;
    error?: string;
    forgotPasswordLink?: string;
    icon?: string;
    input?: string;
    label?: string;
    otpInput?: string;
    otpInputContainer?: string;
    outlineButton?: string;
    primaryButton?: string;
    providerButton?: string;
    qrCode?: string;
    secondaryButton?: string;
};
interface AuthFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization?: Partial<AuthLocalization>;
    pathname?: string;
    redirectTo?: string;
    view?: AuthView;
    otpSeparators?: 0 | 1 | 2;
    setIsSubmitting?: (isSubmitting: boolean) => void;
}
declare function AuthForm({ className, classNames, callbackURL, isSubmitting, localization, pathname, redirectTo, view, otpSeparators, setIsSubmitting }: AuthFormProps): false | react_jsx_runtime.JSX.Element | null | undefined;

interface AuthCardClassNames {
    base?: string;
    content?: string;
    description?: string;
    footer?: string;
    footerLink?: string;
    form?: AuthFormClassNames;
    header?: string;
    separator?: string;
    settings?: SettingsCardsClassNames;
    title?: string;
}
interface AuthCardProps {
    className?: string;
    classNames?: AuthCardClassNames;
    callbackURL?: string;
    cardHeader?: ReactNode;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
    pathname?: string;
    redirectTo?: string;
    /**
     * @default "auto"
     */
    socialLayout?: "auto" | "horizontal" | "grid" | "vertical";
    /**
     * @remarks `AuthView`
     */
    view?: AuthView;
    /**
     * @default 0
     */
    otpSeparators?: 0 | 1 | 2;
}
declare function AuthCard({ className, classNames, callbackURL, cardHeader, localization, pathname, redirectTo, socialLayout, view, otpSeparators }: AuthCardProps): react_jsx_runtime.JSX.Element;

interface ForgotPasswordFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    setIsSubmitting?: (value: boolean) => void;
}
declare function ForgotPasswordForm({ className, classNames, isSubmitting, localization, setIsSubmitting }: ForgotPasswordFormProps): react_jsx_runtime.JSX.Element;

interface MagicLinkFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function MagicLinkForm({ className, classNames, callbackURL: callbackURLProp, isSubmitting, localization, redirectTo: redirectToProp, setIsSubmitting }: MagicLinkFormProps): react_jsx_runtime.JSX.Element;

interface RecoverAccountFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function RecoverAccountForm({ className, classNames, isSubmitting, localization, redirectTo, setIsSubmitting }: RecoverAccountFormProps): react_jsx_runtime.JSX.Element;

interface ResetPasswordFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    localization: Partial<AuthLocalization>;
    passwordValidation?: PasswordValidation;
}
declare function ResetPasswordForm({ className, classNames, localization, passwordValidation }: ResetPasswordFormProps): react_jsx_runtime.JSX.Element;

interface SignInFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (isSubmitting: boolean) => void;
    passwordValidation?: PasswordValidation;
}
declare function SignInForm({ className, classNames, isSubmitting, localization, redirectTo, setIsSubmitting, passwordValidation, }: SignInFormProps): react_jsx_runtime.JSX.Element;

interface SignUpFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    callbackURL?: string;
    isSubmitting?: boolean;
    localization: Partial<AuthLocalization>;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
    passwordValidation?: PasswordValidation;
}
declare function SignUpForm({ className, classNames, callbackURL, isSubmitting, localization, redirectTo, setIsSubmitting, passwordValidation }: SignUpFormProps): react_jsx_runtime.JSX.Element;

interface TwoFactorFormProps {
    className?: string;
    classNames?: AuthFormClassNames;
    isSubmitting?: boolean;
    localization?: Partial<AuthLocalization>;
    otpSeparators?: 0 | 1 | 2;
    redirectTo?: string;
    setIsSubmitting?: (value: boolean) => void;
}
declare function TwoFactorForm({ className, classNames, isSubmitting, localization, otpSeparators, redirectTo, setIsSubmitting }: TwoFactorFormProps): react_jsx_runtime.JSX.Element;

declare function SignOut(): react_jsx_runtime.JSX.Element;

/**
 * Conditionally renders content during authentication loading state
 *
 * Renders its children only when the authentication state is being determined
 * (during the loading/pending phase). Once the authentication state is resolved,
 * nothing is rendered. Useful for displaying loading indicators or temporary
 * content while waiting for the authentication check to complete.
 */
declare function AuthLoading({ children }: {
    children: ReactNode;
}): ReactNode;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): react_jsx_runtime.JSX.Element;

declare function PasswordInput({ className, enableToggle, onChange, ...props }: ComponentProps<typeof Input> & {
    enableToggle?: boolean;
}): react_jsx_runtime.JSX.Element;

/**
 * Redirects the user to the sign-in page
 *
 * Renders nothing and automatically redirects the current user to the authentication
 * sign-in page. Useful for protecting routes that require authentication or
 * redirecting users to sign in from various parts of the application.
 */
declare function RedirectToSignIn(): ReactNode;

/**
 * Redirects the user to the sign-up page
 *
 * Renders nothing and automatically redirects the current user to the authentication
 * sign-up page. Useful for directing new users to create an account or
 * for redirecting from marketing pages to the registration flow.
 */
declare function RedirectToSignUp(): ReactNode;

interface AccountsCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    deviceSessions?: {
        user: User;
        session: Session;
    }[] | null;
    isPending?: boolean;
    localization?: Partial<AuthLocalization>;
    skipHook?: boolean;
    refetch?: () => Promise<void>;
}
declare function AccountsCard({ className, classNames, deviceSessions, isPending, localization, skipHook, refetch }: AccountsCardProps): react_jsx_runtime.JSX.Element;

interface APIKeysCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    apiKeys?: ApiKey[] | null;
    isPending?: boolean;
    localization?: AuthLocalization;
    skipHook?: boolean;
    refetch?: () => Promise<void>;
}
declare function APIKeysCard({ className, classNames, apiKeys, isPending, localization, skipHook, refetch }: APIKeysCardProps): react_jsx_runtime.JSX.Element;

interface ChangeEmailCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: AuthLocalization;
}
declare function ChangeEmailCard({ className, classNames, isPending, localization }: ChangeEmailCardProps): react_jsx_runtime.JSX.Element;

interface ChangePasswordCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: AuthLocalization;
    skipHook?: boolean;
    passwordValidation?: PasswordValidation;
}
declare function ChangePasswordCard({ className, classNames, accounts, isPending, localization, skipHook, passwordValidation }: ChangePasswordCardProps): react_jsx_runtime.JSX.Element;

interface DeleteAccountCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: AuthLocalization;
    skipHook?: boolean;
}
declare function DeleteAccountCard({ className, classNames, accounts, isPending, localization, skipHook }: DeleteAccountCardProps): react_jsx_runtime.JSX.Element;

interface PasskeysCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: AuthLocalization;
    passkeys?: {
        id: string;
        createdAt: Date;
    }[] | null;
    skipHook?: boolean;
    refetch?: () => Promise<void>;
}
declare function PasskeysCard({ className, classNames, isPending, localization, passkeys, skipHook, refetch }: PasskeysCardProps): react_jsx_runtime.JSX.Element;

interface ProvidersCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    accounts?: {
        accountId: string;
        provider: string;
    }[] | null;
    isPending?: boolean;
    localization?: Partial<AuthLocalization>;
    skipHook?: boolean;
    refetch?: () => Promise<void>;
}
declare function ProvidersCard({ className, classNames, accounts, isPending, localization, skipHook, refetch }: ProvidersCardProps): react_jsx_runtime.JSX.Element;

interface SessionsCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: Partial<AuthLocalization>;
    sessions?: Session[] | null;
    skipHook?: boolean;
    refetch?: () => Promise<void>;
}
declare function SessionsCard({ className, classNames, isPending, localization, sessions, skipHook, refetch }: SessionsCardProps): react_jsx_runtime.JSX.Element;

interface TwoFactorCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    localization?: AuthLocalization;
}
declare function TwoFactorCard({ className, classNames, localization }: TwoFactorCardProps): react_jsx_runtime.JSX.Element;

interface UpdateAvatarCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: AuthLocalization;
}
declare function UpdateAvatarCard({ className, classNames, isPending: externalIsPending, localization }: UpdateAvatarCardProps): react_jsx_runtime.JSX.Element;

interface UpdateFieldCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    description?: ReactNode;
    instructions?: ReactNode;
    isPending?: boolean;
    localization?: Partial<AuthLocalization>;
    name: string;
    placeholder?: string;
    required?: boolean;
    label?: ReactNode;
    type?: FieldType;
    value?: unknown;
    validate?: (value: string) => boolean | Promise<boolean>;
}
declare function UpdateFieldCard({ className, classNames, description, instructions, isPending, localization, name, placeholder, required, label, type, value, validate }: UpdateFieldCardProps): react_jsx_runtime.JSX.Element;

interface UpdateNameCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: AuthLocalization;
}
declare function UpdateNameCard({ className, classNames, isPending, localization }: UpdateNameCardProps): react_jsx_runtime.JSX.Element;

interface UpdateUsernameCardProps {
    className?: string;
    classNames?: SettingsCardClassNames;
    isPending?: boolean;
    localization?: AuthLocalization;
}
declare function UpdateUsernameCard({ className, classNames, isPending, localization }: UpdateUsernameCardProps): react_jsx_runtime.JSX.Element;

/**
 * Conditionally renders content for authenticated users only
 *
 * Renders its children only when a user is authenticated with a valid session.
 * If no session exists, nothing is rendered. Useful for displaying protected
 * content or UI elements that should only be visible to signed-in users.
 */
declare function SignedIn({ children }: {
    children: ReactNode;
}): ReactNode;

/**
 * Conditionally renders content for unauthenticated users only
 *
 * Renders its children only when no user is authenticated and the authentication
 * state is not pending. If a session exists or is being loaded, nothing is rendered.
 * Useful for displaying sign-in prompts or content exclusive to guests.
 */
declare function SignedOut({ children }: {
    children: ReactNode;
}): ReactNode;

interface UserViewClassNames {
    base?: string;
    avatar?: UserAvatarClassNames;
    p?: string;
    small?: string;
}
interface UserViewProps {
    className?: string;
    classNames?: UserViewClassNames;
    isPending?: boolean;
    user?: Profile;
}
/**
 * Displays user information with avatar and details in a compact view
 *
 * Renders a user's profile information with appropriate fallbacks:
 * - Shows avatar alongside user name and email when available
 * - Shows loading skeletons when isPending is true
 * - Falls back to generic "User" text when neither name nor email is available
 * - Supports customization through classNames prop
 */
declare function UserView({ user, className, classNames, isPending }: UserViewProps): react_jsx_runtime.JSX.Element;

interface UserButtonClassNames {
    base?: string;
    skeleton?: string;
    trigger?: {
        base?: string;
        avatar?: UserAvatarClassNames;
        user?: UserViewClassNames;
        skeleton?: string;
    };
    content?: {
        base?: string;
        user?: UserViewClassNames;
        avatar?: UserAvatarClassNames;
        menuItem?: string;
        separator?: string;
    };
}
interface UserButtonProps {
    className?: string;
    classNames?: UserButtonClassNames;
    additionalLinks?: {
        href: string;
        icon?: ReactNode;
        label: ReactNode;
        signedIn?: boolean;
    }[];
    disableDefaultLinks?: boolean;
    /**
     * @default authLocalization
     * @remarks `AuthLocalization`
     */
    localization?: AuthLocalization;
    /**
     * @default "icon"
     */
    size?: "icon" | "full";
}
/**
 * Displays an interactive user button with dropdown menu functionality
 *
 * Renders a user interface element that can be displayed as either an icon or full button:
 * - Shows a user avatar or placeholder when in icon mode
 * - Displays user name and email with dropdown indicator in full mode
 * - Provides dropdown menu with authentication options (sign in/out, settings, etc.)
 * - Supports multi-session functionality for switching between accounts
 * - Can be customized with additional links and styling options
 */
declare function UserButton({ className, classNames, additionalLinks, disableDefaultLinks, localization, size }: UserButtonProps): react_jsx_runtime.JSX.Element;

interface AuthenticateOptions {
    authView?: AuthView;
    enabled?: boolean;
}
declare function useAuthenticate(options?: AuthenticateOptions): void;

export { APIKeysCard, type APIKeysCardProps, AccountsCard, type AccountsCardProps, AuthCallback, AuthCard, type AuthCardClassNames, type AuthCardProps, AuthForm, type AuthFormClassNames, type AuthFormProps, AuthLoading, AuthLocalization, AuthView, ChangeEmailCard, type ChangeEmailCardProps, ChangePasswordCard, type ChangePasswordCardProps, DeleteAccountCard, type DeleteAccountCardProps, ForgotPasswordForm, type ForgotPasswordFormProps, MagicLinkForm, type MagicLinkFormProps, PasskeysCard, type PasskeysCardProps, PasswordInput, PasswordValidation, ProvidersCard, type ProvidersCardProps, RecoverAccountForm, type RecoverAccountFormProps, RedirectToSignIn, RedirectToSignUp, ResetPasswordForm, type ResetPasswordFormProps, SessionsCard, type SessionsCardProps, SettingsCard, type SettingsCardClassNames, type SettingsCardProps, SettingsCards, type SettingsCardsClassNames, type SettingsCardsProps, SignInForm, type SignInFormProps, SignOut, SignUpForm, type SignUpFormProps, SignedIn, SignedOut, TwoFactorCard, type TwoFactorCardProps, TwoFactorForm, type TwoFactorFormProps, UpdateAvatarCard, type UpdateAvatarCardProps, UpdateFieldCard, type UpdateFieldCardProps, UpdateNameCard, type UpdateNameCardProps, UpdateUsernameCard, type UpdateUsernameCardProps, UserAvatar, type UserAvatarClassNames, type UserAvatarProps, UserButton, type UserButtonClassNames, type UserButtonProps, UserView, type UserViewClassNames, type UserViewProps, useAuthenticate };
