// src/lib/auth-view-paths.ts
var authViewPaths = {
  /** @default "callback" */
  callback: "callback",
  /** @default "forgot-password" */
  forgotPassword: "forgot-password",
  /** @default "magic-link" */
  magicLink: "magic-link",
  /** @default "email-otp" */
  emailOTP: "email-otp",
  /** @default "recover-account" */
  recoverAccount: "recover-account",
  /** @default "reset-password" */
  resetPassword: "reset-password",
  /** @default "settings" */
  settings: "settings",
  /** @default "sign-in" */
  signIn: "sign-in",
  /** @default "sign-out" */
  signOut: "sign-out",
  /** @default "sign-up" */
  signUp: "sign-up",
  /** @default "two-factor" */
  twoFactor: "two-factor"
};

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as z from "zod";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function errorCodeToCamelCase(errorCode) {
  return errorCode.toLowerCase().replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}
function getLocalizedError({
  error,
  localization
}) {
  if (error == null ? void 0 : error.error) {
    if (error.error.code) {
      const camelCaseErrorCode = errorCodeToCamelCase(
        error.error.code
      );
      if (localization == null ? void 0 : localization[camelCaseErrorCode]) return localization[camelCaseErrorCode];
    }
    return error.error.message || error.error.code || error.error.statusText || (localization == null ? void 0 : localization.requestFailed);
  }
  return (error == null ? void 0 : error.message) || (localization == null ? void 0 : localization.requestFailed) || "Request failed";
}
function getSearchParam(paramName) {
  return typeof window !== "undefined" ? new URLSearchParams(window.location.search).get(paramName) : null;
}
function getAuthViewByPath(authViewPaths2, path) {
  for (const authViewPathsKey in authViewPaths2) {
    if (authViewPaths2[authViewPathsKey] === path) {
      return authViewPathsKey;
    }
  }
}
function getPasswordSchema(passwordValidation, localization) {
  let schema = z.string().min(1, {
    message: localization == null ? void 0 : localization.passwordRequired
  });
  if (passwordValidation == null ? void 0 : passwordValidation.minLength) {
    schema = schema.min(passwordValidation.minLength, {
      message: localization == null ? void 0 : localization.passwordTooShort
    });
  }
  if (passwordValidation == null ? void 0 : passwordValidation.maxLength) {
    schema = schema.max(passwordValidation.maxLength, {
      message: localization == null ? void 0 : localization.passwordTooLong
    });
  }
  if (passwordValidation == null ? void 0 : passwordValidation.regex) {
    schema = schema.regex(passwordValidation.regex, {
      message: localization == null ? void 0 : localization.passwordInvalid
    });
  }
  return schema;
}

export {
  cn,
  isValidEmail,
  getLocalizedError,
  getSearchParam,
  getAuthViewByPath,
  getPasswordSchema,
  authViewPaths
};
