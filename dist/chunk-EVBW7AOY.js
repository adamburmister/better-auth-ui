"use client"

import {
  authViewPaths,
  getLocalizedError
} from "./chunk-PCSKNDIJ.js";

// src/lib/auth-localization.ts
var authLocalization = {
  /** @default "Account" */
  account: "Account",
  /** @default "Accounts" */
  accounts: "Accounts",
  /** @default "Manage your currently signed in accounts." */
  accountsDescription: "Switch between your currently signed in accounts.",
  /** @default "Sign in to an additional account." */
  accountsInstructions: "Sign in to an additional account.",
  /** @default "Add Account" */
  addAccount: "Add Account",
  /** @default "Add Passkey" */
  addPasskey: "Add Passkey",
  /** @default "Already have an account?" */
  alreadyHaveAnAccount: "Already have an account?",
  /** @default "Avatar" */
  avatar: "Avatar",
  /** @default "Click on the avatar to upload a custom one from your files." */
  avatarDescription: "Click on the avatar to upload a custom one from your files.",
  /** @default "An avatar is optional but strongly recommended." */
  avatarInstructions: "An avatar is optional but strongly recommended.",
  /** @default "Backup code is required" */
  backupCodeRequired: "Backup code is required",
  /** @default "Backup Codes" */
  backupCodes: "Backup Codes",
  /** @default "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method." */
  backupCodesDescription: "Save these backup codes in a secure place. You can use them to access your account if you lose your two-factor authentication method.",
  /** @default "Enter one of your backup codes. Once used, each code can only be used once and will be invalidated after use." */
  backupCodePlaceholder: "Backup Code",
  /** @default "Backup Code" */
  backupCode: "Backup Code",
  /** @default "Recover account" */
  backupCodeAction: "Recover account",
  /** @default "Cancel" */
  cancel: "Cancel",
  /** @default "Change Password" */
  changePassword: "Change Password",
  /** @default "Enter your current password and a new password." */
  changePasswordDescription: "Enter your current password and a new password.",
  /** @default "Please use 8 characters at minimum." */
  changePasswordInstructions: "Please use 8 characters at minimum.",
  /** @default "Your password has been changed." */
  changePasswordSuccess: "Your password has been changed.",
  /** @default "Confirm Password" */
  confirmPassword: "Confirm Password",
  /** @default "Confirm Password" */
  confirmPasswordPlaceholder: "Confirm Password",
  /** @default "Confirm password is required" */
  confirmPasswordRequired: "Confirm password is required",
  /** @default "Continue with Authenticator" */
  continueWithAuthenticator: "Continue with Authenticator",
  /** @default "Copied to clipboard" */
  copiedToClipboard: "Copied to clipboard",
  /** @default "Copy to clipboard" */
  copyToClipboard: "Copy to clipboard",
  /** @default "Copy all codes" */
  copyAllCodes: "Copy all codes",
  /** @default "Continue" */
  continue: "Continue",
  /** @default "Current Password" */
  currentPassword: "Current Password",
  /** @default "Current Password" */
  currentPasswordPlaceholder: "Current Password",
  /** @default "Current Session" */
  currentSession: "Current Session",
  /** @default "Delete" */
  delete: "Delete",
  /** @default "Delete Avatar" */
  deleteAvatar: "Delete Avatar",
  /** @default "Delete Account" */
  deleteAccount: "Delete Account",
  /** @default "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution." */
  deleteAccountDescription: "Permanently remove your account and all of its contents. This action is not reversible, so please continue with caution.",
  /** @default "Please confirm the deletion of your account. This action is not reversible, so please continue with caution." */
  deleteAccountInstructions: "Please confirm the deletion of your account. This action is not reversible, so please continue with caution.",
  /** @default "Please check your email to verify the deletion of your account." */
  deleteAccountVerify: "Please check your email to verify the deletion of your account.",
  /** @default "Your account has been deleted." */
  deleteAccountSuccess: "Your account has been deleted.",
  /** @default "You must be recently logged in to delete your account." */
  deleteAccountNotFresh: "You must be recently logged in to delete your account.",
  /** @default "Disable" */
  disable: "Disable",
  /** @default "Choose a provider to login to your account" */
  disabledCredentialsDescription: "Choose a provider to login to your account",
  /** @default "Don't have an account?" */
  dontHaveAnAccount: "Don't have an account?",
  /** @default "Done" */
  done: "Done",
  /** @default "Email" */
  email: "Email",
  /** @default "Enter the email address you want to use to log in." */
  emailDescription: "Enter the email address you want to use to log in.",
  /** @default "Please enter a valid email address." */
  emailInstructions: "Please enter a valid email address.",
  /** @default "Email address is invalid" */
  emailInvalid: "Email address is invalid",
  /** @default "Email is the same" */
  emailIsTheSame: "Email is the same",
  /** @default "m@example.com" */
  emailPlaceholder: "m@example.com",
  /** @default "Email address is required" */
  emailRequired: "Email address is required",
  /** @default "Please check your email to verify the change." */
  emailVerifyChange: "Please check your email to verify the change.",
  /** @default "Please check your email for the verification link." */
  emailVerification: "Please check your email for the verification link.",
  /** @default "Enable" */
  enable: "Enable",
  /** @default "Error" */
  error: "Error",
  /** @default "is invalid" */
  isInvalid: "is invalid",
  /** @default "is required" */
  isRequired: "is required",
  /** @default "is the same" */
  isTheSame: "is the same",
  /** @default "Forgot authenticator?" */
  forgotAuthenticator: "Forgot authenticator?",
  /** @default "Forgot Password" */
  forgotPassword: "Forgot Password",
  /** @default "Send reset link" */
  forgotPasswordAction: "Send reset link",
  /** @default "Enter your email to reset your password" */
  forgotPasswordDescription: "Enter your email to reset your password",
  /** @default "Check your email for the password reset link." */
  forgotPasswordEmail: "Check your email for the password reset link.",
  /** @default "Forgot your password?" */
  forgotPasswordLink: "Forgot your password?",
  /** @default "Invalid two factor cookie" */
  invalidTwoFactorCookie: "Invalid two factor cookie",
  /** @default "Link" */
  link: "Link",
  /** @default "Magic Link" */
  magicLink: "Magic Link",
  /** @default "Send magic link" */
  magicLinkAction: "Send magic link",
  /** @default "Enter your email to receive a magic link" */
  magicLinkDescription: "Enter your email to receive a magic link",
  /** @default "Check your email for the magic link" */
  magicLinkEmail: "Check your email for the magic link",
  /** @default "Email Code" */
  emailOTP: "Email Code",
  /** @default "Send code" */
  emailOTPSendAction: "Send code",
  /** @default "Verify code" */
  emailOTPVerifyAction: "Verify code",
  /** @default "Enter your email to receive a code" */
  emailOTPDescription: "Enter your email to receive a code",
  /** @default "Please check your email for the verification code." */
  emailOTPVerificationSent: "Please check your email for the verification code.",
  /** @default "Name" */
  name: "Name",
  /** @default "Please enter your full name, or a display name." */
  nameDescription: "Please enter your full name, or a display name.",
  /** @default "Please use 32 characters at maximum." */
  nameInstructions: "Please use 32 characters at maximum.",
  /** @default "Name" */
  namePlaceholder: "Name",
  /** @default "New Password" */
  newPassword: "New Password",
  /** @default "New Password" */
  newPasswordPlaceholder: "New Password",
  /** @default "New password is required" */
  newPasswordRequired: "New password is required",
  /** @default "One-Time Password" */
  oneTimePassword: "One-Time Password",
  /** @default "Or continue with" */
  orContinueWith: "Or continue with",
  /** @default "Passkey" */
  passkey: "Passkey",
  /** @default "Passkeys" */
  passkeys: "Passkeys",
  /** @default "Manage your passkeys for secure access." */
  passkeysDescription: "Manage your passkeys for secure access.",
  /** @default "Securely access your account without a password." */
  passkeysInstructions: "Securely access your account without a password.",
  /** @default "API Keys" */
  apiKeys: "API Keys",
  /** @default "Manage your API keys for secure access." */
  apiKeysDescription: "Manage your API keys for secure access.",
  /** @default "Generate API keys to access your account programmatically." */
  apiKeysInstructions: "Generate API keys to access your account programmatically.",
  /** @default "Create API Key" */
  createApiKey: "Create API Key",
  /** @default "Enter a unique name for your API key to differentiate it from other keys." */
  createApiKeyDescription: "Enter a unique name for your API key to differentiate it from other keys.",
  /** @default "New API Key" */
  apiKeyNamePlaceholder: "New API Key",
  /** @default "API Key Created" */
  apiKeyCreated: "API Key Created",
  /** @default "Please copy your API key and store it in a safe place. For security reasons we cannot show it again." */
  apiKeyCreatedDescription: "Please copy your API key and store it in a safe place. For security reasons we cannot show it again.",
  /** @default "Never Expires" */
  neverExpires: "Never Expires",
  /** @default "Expires" */
  expires: "Expires",
  /** @default "No Expiration" */
  noExpiration: "No Expiration",
  /** @default "Create" */
  create: "Create",
  /** @default "Password" */
  password: "Password",
  /** @default "Password" */
  passwordPlaceholder: "Password",
  /** @default "Password is required" */
  passwordRequired: "Password is required",
  /** @default "Passwords do not match" */
  passwordsDoNotMatch: "Passwords do not match",
  /** @default "Providers" */
  providers: "Providers",
  /** @default "Connect your account with a third-party service." */
  providersDescription: "Connect your account with a third-party service.",
  /** @default "Recover Account" */
  recoverAccount: "Recover Account",
  /** @default "Recover account" */
  recoverAccountAction: "Recover account",
  /** @default "Please enter a backup code to access your account" */
  recoverAccountDescription: "Please enter a backup code to access your account",
  /** @default "Remember me" */
  rememberMe: "Remember me",
  /** @default "Resend code" */
  resendCode: "Resend code",
  /** @default "Resend verification email" */
  resendVerificationEmail: "Resend Verification Email",
  /** @default "Reset Password" */
  resetPassword: "Reset Password",
  /** @default "Save new password" */
  resetPasswordAction: "Save new password",
  /** @default "Enter your new password below" */
  resetPasswordDescription: "Enter your new password below",
  /** @default "Invalid reset password link" */
  resetPasswordInvalidToken: "Invalid reset password link",
  /** @default "Password reset successfully" */
  resetPasswordSuccess: "Password reset successfully",
  /** @default "Request failed" */
  requestFailed: "Request failed",
  /** @default "Revoke" */
  revoke: "Revoke",
  /** @default "Delete API Key" */
  deleteApiKey: "Delete API Key",
  /** @default "Are you sure you want to delete this API key?" */
  deleteApiKeyConfirmation: "Are you sure you want to delete this API key?",
  /** @default "API Key" */
  apiKey: "API Key",
  /** @default "Sign In" */
  signIn: "Sign In",
  /** @default "Login" */
  signInAction: "Login",
  /** @default "Enter your email below to login to your account" */
  signInDescription: "Enter your email below to login to your account",
  /** @default "Enter your username or email below to login to your account" */
  signInUsernameDescription: "Enter your username or email to login to your account",
  /** @default "Sign in with" */
  signInWith: "Sign in with",
  /** @default "Sign Out" */
  signOut: "Sign Out",
  /** @default "Sign Up" */
  signUp: "Sign Up",
  /** @default "Create an account" */
  signUpAction: "Create an account",
  /** @default "Enter your information to create an account" */
  signUpDescription: "Enter your information to create an account",
  /** @default "Check your email for the verification link." */
  signUpEmail: "Check your email for the verification link.",
  /** @default "Sessions" */
  sessions: "Sessions",
  /** @default "Manage your active sessions and revoke access." */
  sessionsDescription: "Manage your active sessions and revoke access.",
  /** @default "Set Password" */
  setPassword: "Set Password",
  /** @default "Click the button below to receive an email to set up a password for your account." */
  setPasswordDescription: "Click the button below to receive an email to set up a password for your account.",
  /** @default "Settings" */
  settings: "Settings",
  /** @default "Save" */
  save: "Save",
  /** @default "Security" */
  security: "Security",
  /** @default "Switch Account" */
  switchAccount: "Switch Account",
  /** @default "Trust this device" */
  trustDevice: "Trust this device",
  /** @default "Two-Factor" */
  twoFactor: "Two-Factor",
  /** @default "Verify code" */
  twoFactorAction: "Verify code",
  /** @default "Please enter your one-time password to continue" */
  twoFactorDescription: "Please enter your one-time password to continue",
  /** @default "Add an extra layer of security to your account." */
  twoFactorCardDescription: "Add an extra layer of security to your account.",
  /** @default "Please enter your password to disable 2FA." */
  twoFactorDisableInstructions: "Please enter your password to disable 2FA.",
  /** @default "Please enter your password to enable 2FA" */
  twoFactorEnableInstructions: "Please enter your password to enable 2FA.",
  /** @default "Two-factor authentication has been enabled" */
  twoFactorEnabled: "Two-factor authentication has been enabled",
  /** @default "Two-Factor Authentication has been disabled" */
  twoFactorDisabled: "Two-Factor Authentication has been disabled",
  /** @default "Two-Factor Authentication" */
  twoFactorPrompt: "Two-Factor Authentication",
  /** @default "Scan the QR Code with your Authenticator" */
  twoFactorTotpLabel: "Scan the QR Code with your Authenticator",
  /** @default "Send verification code" */
  sendVerificationCode: "Send verification code",
  /** @default "Unlink" */
  unlink: "Unlink",
  /** @default "Updated successfully" */
  updatedSuccessfully: "updated successfully",
  /** @default "Username" */
  username: "Username",
  /** @default "Enter the username you want to use to log in." */
  usernameDescription: "Enter the username you want to use to log in.",
  /** @default "Please use 32 characters at maximum." */
  usernameInstructions: "Please use 32 characters at maximum.",
  /** @default "Username" */
  usernamePlaceholder: "Username",
  /** @default "Username or email" */
  signInUsernamePlaceholder: "Username or email",
  /** @default "Verify Your Email" */
  verifyYourEmail: "Verify Your Email",
  /** @default "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend." */
  verifyYourEmailDescription: "Please verify your email address. Check your inbox for the verification email. If you haven't received the email, click the button below to resend.",
  /** @default "Go back" */
  goBack: "Go back",
  /** @default "Invalid email or password" */
  invalidEmailOrPassword: "Invalid email or password",
  /** @default "Invalid password" */
  passwordInvalid: "Invalid password",
  /** @default "Your session is not fresh. Please sign in again." */
  sessionNotFresh: "Your session is not fresh. Please sign in again.",
  /** @default "Session Expired" */
  sessionExpired: "Session Expired",
  /** @default "Password too short" */
  passwordTooShort: "Password too short",
  /** @default "Password too long" */
  passwordTooLong: "Password too long",
  /** @default "Upload Avatar" */
  uploadAvatar: "Upload Avatar",
  /** @default "Privacy Policy" */
  privacyPolicy: "Privacy Policy",
  /** @default "Terms of Service" */
  termsOfService: "Terms of Service",
  /** @default "This site is protected by reCAPTCHA." */
  protectedByRecaptcha: "This site is protected by reCAPTCHA.",
  /** @default "By continuing, you agree to the" */
  byContinuingYouAgree: "By continuing, you agree to the",
  /** @default "Missing CAPTCHA response" */
  missingCaptchaResponse: "Missing CAPTCHA response"
};

// src/lib/auth-ui-provider.tsx
import { createContext, useMemo } from "react";
import { toast } from "sonner";

// src/components/captcha/recaptcha-v3.tsx
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "@wojtekmaj/react-recaptcha-v3";
import { useContext, useEffect as useEffect3 } from "react";

// src/hooks/use-hydrated.ts
import { useSyncExternalStore } from "react";
function subscribe() {
  return () => {
  };
}
function useIsHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

// src/hooks/use-lang.ts
import { useEffect, useState } from "react";
function useLang() {
  const [lang, setLang] = useState();
  useEffect(() => {
    const checkLang = () => {
      const currentLang = document.documentElement.getAttribute("lang");
      setLang(currentLang ?? void 0);
    };
    checkLang();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "lang") {
          checkLang();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return { lang };
}

// src/hooks/use-theme.ts
import { useEffect as useEffect2, useState as useState2 } from "react";
function useTheme() {
  const [theme, setTheme] = useState2("light");
  useEffect2(() => {
    const checkTheme = () => {
      var _a;
      const isDark = document.documentElement.classList.contains("dark") || ((_a = document.documentElement.getAttribute("style")) == null ? void 0 : _a.includes("color-scheme: dark"));
      setTheme(isDark ? "dark" : "light");
    };
    checkTheme();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "style" || mutation.attributeName === "class") {
          checkTheme();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);
  return { theme };
}

// src/components/captcha/recaptcha-v3.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function RecaptchaV3({
  children
}) {
  const isHydrated = useIsHydrated();
  const { captcha } = useContext(AuthUIContext);
  if ((captcha == null ? void 0 : captcha.provider) !== "google-recaptcha-v3") return children;
  return /* @__PURE__ */ jsxs(
    GoogleReCaptchaProvider,
    {
      reCaptchaKey: captcha.siteKey,
      useEnterprise: captcha.enterprise,
      useRecaptchaNet: captcha.recaptchaNet,
      children: [
        isHydrated && /* @__PURE__ */ jsx("style", { children: `
                    .grecaptcha-badge {
                        visibility: hidden;
                        border-radius: var(--radius) !important;
                        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, #0000000d);
                        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
                        border-style: var(--tw-border-style) !important;
                        border-width: 1px;
                    }

                    .dark .grecaptcha-badge {
                        border-color: var(--input) !important;
                    }
                ` }),
        /* @__PURE__ */ jsx(RecaptchaV3Style, {}),
        children
      ]
    }
  );
}
function RecaptchaV3Style() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { theme } = useTheme();
  const { lang } = useLang();
  useEffect3(() => {
    if (!executeRecaptcha) return;
    const updateRecaptcha = async () => {
      const iframe = document.querySelector("iframe[title='reCAPTCHA']");
      if (iframe) {
        const iframeSrcUrl = new URL(iframe.src);
        iframeSrcUrl.searchParams.set("theme", theme);
        if (lang) iframeSrcUrl.searchParams.set("hl", lang);
        iframe.src = iframeSrcUrl.toString();
      }
    };
    updateRecaptcha();
  }, [executeRecaptcha, theme, lang]);
  return null;
}

// src/hooks/use-auth-data.ts
import { useCallback, useContext as useContext2, useEffect as useEffect4, useRef, useState as useState3 } from "react";
function useAuthData({
  queryFn
}) {
  const { authClient, toast: toast2, localization } = useContext2(AuthUIContext);
  const { data: sessionData, isPending: sessionPending } = authClient.useSession();
  const [data, setData] = useState3(null);
  const [isPending, setIsPending] = useState3(true);
  const initialized = useRef(false);
  const refetch = useCallback(async () => {
    const { data: data2, error } = await queryFn();
    if (error)
      toast2({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    setData(data2);
    setIsPending(false);
  }, [queryFn, toast2, localization]);
  useEffect4(() => {
    if (!sessionData) {
      setIsPending(sessionPending);
      setData(null);
      initialized.current = false;
      return;
    }
    if (initialized.current) return;
    initialized.current = true;
    refetch();
  }, [refetch, sessionData, sessionPending]);
  return {
    data,
    isPending,
    refetch
  };
}

// src/lib/auth-ui-provider.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var DefaultLink = ({ href, className, children }) => /* @__PURE__ */ jsx2("a", { className, href, children });
var defaultNavigate = (href) => {
  window.location.href = href;
};
var defaultReplace = (href) => {
  window.location.replace(href);
};
var defaultToast = ({ variant = "default", message }) => {
  if (variant === "default") {
    toast(message);
  } else {
    toast[variant](message);
  }
};
var AuthUIContext = createContext({});
var AuthUIProvider = ({
  children,
  authClient,
  avatarExtension = "png",
  avatarSize,
  basePath = "/auth",
  baseURL = "",
  captcha,
  redirectTo = "/",
  credentials = true,
  changeEmail = true,
  forgotPassword = true,
  freshAge = 60 * 60 * 24,
  hooks: hooksProp,
  mutators: mutatorsProp,
  localization: localizationProp,
  nameRequired = true,
  settingsFields = ["name"],
  signUp = true,
  signUpFields = ["name"],
  toast: toast2 = defaultToast,
  viewPaths: viewPathsProp,
  navigate,
  replace,
  uploadAvatar,
  Link = DefaultLink,
  ...props
}) => {
  const defaultMutators = useMemo(() => {
    return {
      deleteApiKey: (params) => authClient.apiKey.delete({
        ...params,
        fetchOptions: { throw: true }
      }),
      deletePasskey: (params) => authClient.passkey.deletePasskey({
        ...params,
        fetchOptions: { throw: true }
      }),
      revokeDeviceSession: (params) => authClient.multiSession.revoke({
        ...params,
        fetchOptions: { throw: true }
      }),
      revokeSession: (params) => authClient.revokeSession({
        ...params,
        fetchOptions: { throw: true }
      }),
      setActiveSession: (params) => authClient.multiSession.setActive({
        ...params,
        fetchOptions: { throw: true }
      }),
      updateUser: (params) => authClient.updateUser({
        ...params,
        fetchOptions: { throw: true }
      }),
      unlinkAccount: (params) => authClient.unlinkAccount({
        ...params,
        fetchOptions: { throw: true }
      })
    };
  }, [authClient]);
  const defaultHooks = useMemo(() => {
    return {
      useSession: authClient.useSession,
      useListAccounts: () => useAuthData({ queryFn: authClient.listAccounts }),
      useListDeviceSessions: () => useAuthData({
        queryFn: authClient.multiSession.listDeviceSessions
      }),
      useListSessions: () => useAuthData({ queryFn: authClient.listSessions }),
      useListPasskeys: authClient.useListPasskeys,
      useListApiKeys: () => useAuthData({ queryFn: authClient.apiKey.list })
    };
  }, [authClient]);
  const viewPaths = useMemo(() => {
    return { ...authViewPaths, ...viewPathsProp };
  }, [viewPathsProp]);
  const localization = useMemo(() => {
    return { ...authLocalization, ...localizationProp };
  }, [localizationProp]);
  const hooks = useMemo(() => {
    return { ...defaultHooks, ...hooksProp };
  }, [defaultHooks, hooksProp]);
  const mutators = useMemo(() => {
    return { ...defaultMutators, ...mutatorsProp };
  }, [defaultMutators, mutatorsProp]);
  baseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  basePath = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return /* @__PURE__ */ jsx2(
    AuthUIContext.Provider,
    {
      value: {
        authClient,
        avatarExtension,
        avatarSize: avatarSize || (uploadAvatar ? 256 : 128),
        basePath: basePath === "/" ? "" : basePath,
        baseURL,
        captcha,
        redirectTo,
        changeEmail,
        credentials,
        forgotPassword,
        freshAge,
        hooks,
        mutators,
        localization,
        nameRequired,
        settingsFields,
        signUp,
        signUpFields,
        toast: toast2,
        navigate: navigate || defaultNavigate,
        replace: replace || navigate || defaultReplace,
        viewPaths,
        uploadAvatar,
        Link,
        ...props
      },
      children: (captcha == null ? void 0 : captcha.provider) === "google-recaptcha-v3" ? /* @__PURE__ */ jsx2(RecaptchaV3, { children }) : children
    }
  );
};

export {
  useIsHydrated,
  useLang,
  useTheme,
  authLocalization,
  AuthUIContext,
  AuthUIProvider
};
