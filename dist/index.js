"use client"
"use client";

import {
  EmailTemplate
} from "./chunk-BST632FY.js";
import {
  AuthUIContext,
  AuthUIProvider,
  authLocalization,
  useIsHydrated,
  useLang,
  useTheme
} from "./chunk-EVBW7AOY.js";
import {
  authViewPaths,
  cn,
  getAuthViewByPath,
  getLocalizedError,
  getPasswordSchema,
  getSearchParam,
  isValidEmail
} from "./chunk-PCSKNDIJ.js";

// src/components/auth/auth-callback.tsx
import { Loader2 } from "lucide-react";
import { useContext as useContext2, useEffect as useEffect2, useRef } from "react";

// src/hooks/use-success-transition.ts
import { useCallback, useContext, useEffect, useState, useTransition } from "react";
function useOnSuccessTransition({ redirectTo: redirectToProp }) {
  const { redirectTo: contextRedirectTo } = useContext(AuthUIContext);
  const getRedirectTo = useCallback(
    () => redirectToProp || getSearchParam("redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const {
    navigate,
    hooks: { useSession },
    onSessionChange
  } = useContext(AuthUIContext);
  const { refetch: refetchSession } = useSession();
  useEffect(() => {
    if (!success || isPending) return;
    startTransition(() => {
      navigate(getRedirectTo());
    });
  }, [success, isPending, navigate, getRedirectTo]);
  const onSuccess = useCallback(async () => {
    await (refetchSession == null ? void 0 : refetchSession());
    setSuccess(true);
    if (onSessionChange) startTransition(onSessionChange);
  }, [refetchSession, onSessionChange]);
  return { onSuccess, isPending };
}

// src/components/auth/auth-callback.tsx
import { jsx } from "react/jsx-runtime";
function AuthCallback({ redirectTo }) {
  const {
    hooks: { useIsRestoring },
    persistClient
  } = useContext2(AuthUIContext);
  const isRestoring = useIsRestoring == null ? void 0 : useIsRestoring();
  const isRedirecting = useRef(false);
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  useEffect2(() => {
    if (isRedirecting.current) return;
    if (!persistClient) {
      isRedirecting.current = true;
      onSuccess();
      return;
    }
    if (isRestoring) return;
    isRedirecting.current = true;
    onSuccess();
  }, [isRestoring, persistClient, onSuccess]);
  return /* @__PURE__ */ jsx(Loader2, { className: "animate-spin" });
}

// src/components/auth/auth-card.tsx
import { ArrowLeftIcon, Loader2 as Loader220 } from "lucide-react";
import { useContext as useContext51, useEffect as useEffect16, useState as useState21 } from "react";

// src/components/provider-icons.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var AppleIcon = ({ className }) => /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M9.438 31.401a7 7 0 0 1-1.656-1.536a20 20 0 0 1-1.422-1.938a18.9 18.9 0 0 1-2.375-4.849c-.667-2-.99-3.917-.99-5.792c0-2.094.453-3.922 1.339-5.458a7.7 7.7 0 0 1 2.797-2.906a7.45 7.45 0 0 1 3.786-1.12q.705.002 1.51.198c.385.109.854.281 1.427.495c.729.281 1.13.453 1.266.495c.427.156.786.224 1.068.224c.214 0 .516-.068.859-.172c.193-.068.557-.188 1.078-.411c.516-.188.922-.349 1.245-.469c.495-.146.974-.281 1.401-.349a6.7 6.7 0 0 1 1.531-.063a9 9 0 0 1 2.589.557c1.359.547 2.458 1.401 3.276 2.615a6.4 6.4 0 0 0-.969.734a8.2 8.2 0 0 0-1.641 2.005a6.8 6.8 0 0 0-.859 3.359c.021 1.443.391 2.714 1.12 3.813a7.2 7.2 0 0 0 2.047 2.047c.417.281.776.474 1.12.604c-.161.5-.333.984-.536 1.464a19 19 0 0 1-1.667 3.083c-.578.839-1.031 1.464-1.375 1.88c-.536.635-1.052 1.12-1.573 1.458c-.573.38-1.25.583-1.938.583a4.4 4.4 0 0 1-1.38-.167c-.385-.13-.766-.271-1.141-.432a9 9 0 0 0-1.203-.453a6.3 6.3 0 0 0-3.099-.005c-.417.12-.818.26-1.214.432c-.557.234-.927.391-1.141.458c-.427.125-.87.203-1.318.229c-.693 0-1.339-.198-1.979-.599zm9.14-24.615c-.906.453-1.771.646-2.63.583c-.135-.865 0-1.75.359-2.719a7.3 7.3 0 0 1 1.333-2.24A7.1 7.1 0 0 1 19.812.733q1.319-.68 2.521-.734c.104.906 0 1.797-.333 2.76a8 8 0 0 1-1.333 2.344a6.8 6.8 0 0 1-2.115 1.682z",
    fill: "currentColor"
  }
) });
var DiscordIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 256 199", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M216.856 16.597A208.5 208.5 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046q-29.538-4.442-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.8 207.8 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161 161 0 0 0 79.735 175.3a136.4 136.4 0 0 1-21.846-10.632a109 109 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a132 132 0 0 0 5.355 4.237a136 136 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36M85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2s23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18m85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18",
    fill: "#5865f2"
  }
) }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418",
    fill: "currentColor"
  }
) });
var DropboxIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 256 218", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M63.995 0L0 40.771l63.995 40.772L128 40.771zM192 0l-64 40.775l64 40.775l64.001-40.775zM0 122.321l63.995 40.772L128 122.321L63.995 81.55zM192 81.55l-64 40.775l64 40.774l64-40.774zM64 176.771l64.005 40.772L192 176.771L128.005 136z",
    fill: "#0061ff"
  }
) }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M6 1.807L0 5.629l6 3.822l6.001-3.822zm12 0l-6 3.822l6 3.822l6-3.822zM0 13.274l6 3.822l6.001-3.822L6 9.452zm18-3.822l-6 3.822l6 3.822l6-3.822zM6 18.371l6.001 3.822l6-3.822l-6-3.822z",
    fill: "currentColor"
  }
) });
var FacebookIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445",
      fill: "#1877f2"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z",
      fill: "#fff"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M32 16c0-8.839-7.167-16-16-16C7.161 0 0 7.161 0 16c0 7.984 5.849 14.604 13.5 15.803V20.626H9.437v-4.625H13.5v-3.527c0-4.009 2.385-6.223 6.041-6.223c1.751 0 3.584.312 3.584.312V10.5h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-.713 4.625H18.5v11.177C26.145 30.603 32 23.983 32 15.999z",
    fill: "currentColor"
  }
) });
var GitHubIcon = ({ className }) => /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    fill: "currentColor"
  }
) });
var GitLabIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 236", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2("path", { d: "m128.075 236.075l47.104-144.97H80.97z", fill: "#e24329" }),
  /* @__PURE__ */ jsx2("path", { d: "M128.075 236.074L80.97 91.104H14.956z", fill: "#fc6d26" }),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M14.956 91.104L.642 135.16a9.75 9.75 0 0 0 3.542 10.903l123.891 90.012z",
      fill: "#fca326"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z",
      fill: "#e24329"
    }
  ),
  /* @__PURE__ */ jsx2("path", { d: "m128.075 236.074l47.104-144.97h66.015z", fill: "#fc6d26" }),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "m241.194 91.104l14.314 44.056a9.75 9.75 0 0 1-3.543 10.903l-123.89 90.012z",
      fill: "#fca326"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z",
      fill: "#e24329"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "m31.937 18.115l-1.787-5.511l-3.552-10.921a.607.607 0 0 0-1.156 0L21.89 12.599H10.109L6.557 1.683c-.183-.563-.979-.563-1.156 0L1.849 12.599L.057 18.115c-.161.5.021 1.052.443 1.364L16 30.74l15.5-11.261c.421-.312.604-.859.437-1.364",
    fill: "currentColor"
  }
) });
var GoogleIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 262", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",
      fill: "#4285f4"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",
      fill: "#34a853"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z",
      fill: "#fbbc05"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",
      fill: "#eb4335"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 488 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4",
    fill: "currentColor"
  }
) });
var KickIcon = ({ className }) => /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        fill: "currentColor",
        d: "M1.333 0h8v5.333H12V2.667h2.667V0h8v8H20v2.667h-2.667v2.666H20V16h2.667v8h-8v-2.667H12v-2.666H9.333V24h-8Z"
      }
    )
  }
);
var LinkedInIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 128 128", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3",
      fill: "#0076b2"
    }
  ),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z",
      fill: "#fff"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M14.815 0a1.17 1.17 0 0 1 1.176 1.026l.009.127v13.692a1.17 1.17 0 0 1-1.058 1.15l-.127.005H1.18a1.17 1.17 0 0 1-1.173-1.028L0 14.845V1.155A1.17 1.17 0 0 1 1.053.006L1.181 0zM11 5.812l-.213-.004A2.5 2.5 0 0 0 8.64 6.887l-.098.154h-.031V5.998H6.235v7.635h2.37V9.856c0-.996.19-1.96 1.424-1.96c1.006 0 1.191.777 1.225 1.547l.008.477v3.713h2.37l.002-4.188c0-1.994-.417-3.54-2.633-3.633zm-6.256.186H2.372v7.635h2.373V5.998zM3.56 2.203a1.376 1.376 0 1 0 0 2.751a1.376 1.376 0 0 0 0-2.751",
    fill: "currentColor"
  }
) });
var MicrosoftIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2("path", { d: "M121.666 121.666H0V0h121.666z", fill: "#f1511b" }),
  /* @__PURE__ */ jsx2("path", { d: "M256 121.666H134.335V0H256z", fill: "#80cc28" }),
  /* @__PURE__ */ jsx2("path", { d: "M121.663 256.002H0V134.336h121.663z", fill: "#00adef" }),
  /* @__PURE__ */ jsx2("path", { d: "M256 256.002H134.335V134.336H256z", fill: "#fbbc09" })
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M15.198 32H0V16.802h15.198zM32 32H16.802V16.802H32zM15.198 15.198H0V0h15.198zm16.802 0H16.802V0H32z",
    fill: "currentColor"
  }
) });
var RedditIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2("circle", { cx: "128", cy: "128", fill: "#ff4500", r: "128" }),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.6 33.6 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35 35 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093M85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278m74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782s21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883m-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275",
      fill: "#fff"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxs("g", { fill: "currentColor", children: [
  /* @__PURE__ */ jsx2("path", { d: "M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306a.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487c-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0a.213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" }),
  /* @__PURE__ */ jsx2("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325c-.801-.573-1.9-.945-3.121-.993l.534-2.501l1.738.372a.83.83 0 1 0 .83-.869a.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028a.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992c-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353c.401-.181.688-.592.688-1.069c0-.65-.525-1.165-1.165-1.165" })
] }) });
var RobloxIcon = ({ className }) => /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M18.926 23.998L0 18.892L5.075.002L24 5.108ZM15.348 10.09l-5.282-1.453l-1.414 5.273l5.282 1.453z",
    fill: "currentColor"
  }
) });
var SpotifyIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.98 7.98 0 0 1-9.552-6.007a7.97 7.97 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975m15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187z",
    fill: "#1ed760"
  }
) }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M16 0C7.197 0 0 7.197 0 16s7.197 16 16 16s16-7.197 16-16S24.88 0 16 0m7.36 23.12c-.319.479-.881.64-1.36.317c-3.76-2.317-8.479-2.797-14.083-1.52c-.557.165-1.037-.235-1.199-.72c-.156-.557.24-1.036.719-1.197c6.084-1.36 11.365-.803 15.521 1.76c.563.24.64.88.401 1.36zm1.921-4.401c-.401.563-1.12.803-1.683.401c-4.317-2.641-10.88-3.437-15.916-1.839c-.641.156-1.365-.161-1.521-.803c-.161-.64.156-1.359.797-1.52c5.844-1.761 13.041-.876 18 2.161c.484.24.724 1.041.323 1.599zm.162-4.479c-5.125-3.043-13.683-3.36-18.563-1.839c-.801.239-1.599-.24-1.839-.964c-.239-.797.24-1.599.959-1.839c5.683-1.681 15.041-1.359 20.964 2.161c.719.401.957 1.36.557 2.079c-.401.563-1.36.801-2.079.401z",
    fill: "currentColor"
  }
) });
var TikTokIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 256 290", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9",
      fill: "#ff004f"
    }
  ),
  /* @__PURE__ */ jsx2("path", { d: "M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" }),
  /* @__PURE__ */ jsx2(
    "path",
    {
      d: "M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833",
      fill: "#00f2ea"
    }
  )
] }) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 448 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121 121 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z",
    fill: "currentColor"
  }
) });
var TwitchIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsxs(
  "svg",
  {
    className,
    id: "Layer_1",
    version: "1.1",
    viewBox: "0 0 2400 2800",
    x: "0px",
    xmlSpace: "preserve",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    y: "0px",
    children: [
      /* @__PURE__ */ jsx2("style", { type: "text/css", children: `
                .st0{fill:#FFFFFF}
                .st1{fill:#9146FF}
            ` }),
      /* @__PURE__ */ jsx2("title", { children: "Asset 2" }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx2(
          "polygon",
          {
            className: "st0",
            points: "2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200"
          }
        ),
        /* @__PURE__ */ jsx2("g", { children: /* @__PURE__ */ jsxs("g", { id: "Layer_1-2", children: [
          /* @__PURE__ */ jsx2(
            "path",
            {
              className: "st1",
              d: "M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600V1300z"
            }
          ),
          /* @__PURE__ */ jsx2("rect", { className: "st1", height: "600", width: "200", x: "1700", y: "550" }),
          /* @__PURE__ */ jsx2("rect", { className: "st1", height: "600", width: "200", x: "1150", y: "550" })
        ] }) })
      ] })
    ]
  }
) : /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M2.787 0L.698 5.568v22.255H8.35V32h4.177l4.167-4.177h6.26l8.349-8.344V0zm2.781 2.781h22.953v15.301l-4.871 4.871h-7.651l-4.172 4.172v-4.172h-6.26zm7.651 13.916H16V8.349h-2.781zm7.645 0h2.781V8.349h-2.781z",
    fill: "currentColor"
  }
) });
var VKIcon = ({ className }) => /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 576 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7c0 0-30 73.1-72.4 120.5c-13.7 13.7-20 18.1-27.5 18.1c-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5c0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5c-20 0-68.6-73.4-97.4-157.4c-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7c0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9c0-66.8-3.4-73.1 15.4-73.1c8.7 0 23.7 4.4 58.7 38.1c40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25c-11.2-34.9-86.9-106.7-90.3-111.5c-8.7-11.2-6.2-16.2 0-26.2c.1-.1 72-101.3 79.4-135.6",
    fill: "currentColor"
  }
) });
var XIcon = ({ className }) => /* @__PURE__ */ jsx2("svg", { className, viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx2(
  "path",
  {
    d: "M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z",
    fill: "currentColor"
  }
) });
var ZoomIcon = ({ className, variant }) => variant === "color" ? /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    width: 512,
    height: 117,
    viewBox: "0 0 512 117",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        fill: "#0b5cff",
        d: "M107.472 114.706H16.348c-5.968 0-11.791-3.203-14.557-8.589C-1.41 99.858-.247 92.434 4.702 87.63L68.17 24.164H22.607C10.088 24.164.044 13.974.044 1.6h83.992c5.968 0 11.79 3.203 14.556 8.589c3.203 6.259 2.038 13.683-2.911 18.486L32.214 92.143h52.55c12.518 0 22.708 10.19 22.708 22.563M468.183 0c-13.1 0-24.746 5.677-32.898 14.702C427.134 5.677 415.488 0 402.388 0c-24.164 0-43.961 20.67-43.961 44.834v69.872c12.518 0 22.562-10.19 22.562-22.563V44.689c0-11.646 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.315 22.272 21.397v48.037c0 12.519 10.19 22.563 22.563 22.563V44.543c0-11.645 9.025-21.544 20.67-21.98c12.228-.437 22.272 9.316 22.272 21.398v48.036c0 12.52 10.19 22.563 22.563 22.563V44.69C512.144 20.67 492.347 0 468.183 0M221.595 58.226c0 32.17-26.056 58.226-58.226 58.226s-58.226-26.056-58.226-58.226S131.199 0 163.369 0s58.226 26.056 58.226 58.226m-22.563 0c0-19.651-16.012-35.663-35.663-35.663s-35.664 16.012-35.664 35.663c0 19.652 16.013 35.664 35.664 35.664s35.663-16.012 35.663-35.664m148.04 0c0 32.17-26.056 58.226-58.226 58.226S230.62 90.396 230.62 58.226S256.676 0 288.846 0s58.227 26.056 58.227 58.226m-22.562 0c0-19.651-16.012-35.663-35.664-35.663c-19.65 0-35.663 16.012-35.663 35.663c0 19.652 16.012 35.664 35.663 35.664c19.652 0 35.664-16.012 35.664-35.664"
      }
    )
  }
) : /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        fill: "currentColor",
        d: "M5.033 14.649H.743a.74.74 0 0 1-.686-.458a.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338a2.068 2.068 0 0 0-3.603-1.38a2.06 2.06 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0a2.728 2.728 0 0 1 5.457 0m-1.06 0a1.669 1.669 0 1 0-3.338 0a1.669 1.669 0 0 0 3.338 0m-4.82 0a2.728 2.728 0 1 1-5.458 0a2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0a1.669 1.669 0 0 0 3.338 0"
      }
    )
  }
);

// src/lib/social-providers.ts
var socialProviders = [
  {
    provider: "apple",
    name: "Apple",
    icon: AppleIcon
  },
  {
    provider: "discord",
    name: "Discord",
    icon: DiscordIcon
  },
  {
    provider: "dropbox",
    name: "Dropbox",
    icon: DropboxIcon
  },
  {
    provider: "facebook",
    name: "Facebook",
    icon: FacebookIcon
  },
  {
    provider: "github",
    name: "GitHub",
    icon: GitHubIcon
  },
  {
    provider: "gitlab",
    name: "GitLab",
    icon: GitLabIcon
  },
  {
    provider: "google",
    name: "Google",
    icon: GoogleIcon
  },
  {
    provider: "kick",
    name: "Kick",
    icon: KickIcon
  },
  {
    provider: "linkedin",
    name: "LinkedIn",
    icon: LinkedInIcon
  },
  {
    provider: "microsoft",
    name: "Microsoft",
    icon: MicrosoftIcon
  },
  {
    provider: "reddit",
    name: "Reddit",
    icon: RedditIcon
  },
  {
    provider: "roblox",
    name: "Roblox",
    icon: RobloxIcon
  },
  {
    provider: "spotify",
    name: "Spotify",
    icon: SpotifyIcon
  },
  {
    provider: "tiktok",
    name: "TikTok",
    icon: TikTokIcon
  },
  {
    provider: "twitch",
    name: "Twitch",
    icon: TwitchIcon
  },
  {
    provider: "vk",
    name: "VK",
    icon: VKIcon
  },
  {
    provider: "twitter",
    name: "X",
    icon: XIcon
  },
  {
    provider: "zoom",
    name: "Zoom",
    icon: ZoomIcon
  }
];

// src/components/settings/settings-cards.tsx
import { KeyIcon as KeyIcon2, LockIcon, MenuIcon, UserIcon as UserIcon2 } from "lucide-react";
import { useContext as useContext30, useState as useState18 } from "react";

// src/hooks/use-authenticate.ts
import { useContext as useContext3, useEffect as useEffect3 } from "react";
function useAuthenticate(options) {
  const { authView = "signIn", enabled = true } = options ?? {};
  const {
    hooks: { useSession },
    basePath,
    viewPaths,
    replace
  } = useContext3(AuthUIContext);
  const { data: sessionData, isPending } = useSession();
  useEffect3(() => {
    if (!enabled || isPending || sessionData) return;
    replace(
      `${basePath}/${viewPaths[authView]}?redirectTo=${window.location.href.replace(window.location.origin, "")}`
    );
  }, [isPending, sessionData, basePath, viewPaths, replace, authView, enabled]);
}

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx3(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}

// src/components/settings/accounts-card.tsx
import { useContext as useContext5 } from "react";

// src/components/ui/card.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/settings/account-cell.tsx
import { EllipsisIcon, Loader2 as Loader22, LogOutIcon, RepeatIcon } from "lucide-react";
import { useContext as useContext4, useState as useState2 } from "react";

// src/components/ui/skeleton.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// src/components/user-avatar.tsx
import { UserIcon } from "lucide-react";

// src/components/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx7 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// src/components/user-avatar.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
function UserAvatar({
  user,
  classNames,
  className,
  isPending,
  ...props
}) {
  const name = (user == null ? void 0 : user.name) || (user == null ? void 0 : user.fullName) || (user == null ? void 0 : user.firstName) || (user == null ? void 0 : user.email);
  const src = (user == null ? void 0 : user.image) || (user == null ? void 0 : user.avatar) || (user == null ? void 0 : user.avatarUrl);
  if (isPending) {
    return /* @__PURE__ */ jsx8(
      Skeleton,
      {
        className: cn(
          "size-8 shrink-0 rounded-full",
          className,
          classNames == null ? void 0 : classNames.base,
          classNames == null ? void 0 : classNames.skeleton
        )
      }
    );
  }
  return /* @__PURE__ */ jsxs3(Avatar, { className: cn("bg-muted", className, classNames == null ? void 0 : classNames.base), ...props, children: [
    /* @__PURE__ */ jsx8(
      AvatarImage,
      {
        alt: name || "User image",
        className: classNames == null ? void 0 : classNames.image,
        src: src || void 0
      }
    ),
    /* @__PURE__ */ jsx8(
      AvatarFallback,
      {
        className: cn("uppercase", classNames == null ? void 0 : classNames.fallback),
        delayMs: src ? 600 : void 0,
        children: firstTwoCharacters(name) || /* @__PURE__ */ jsx8(UserIcon, { className: cn("size-[50%]", classNames == null ? void 0 : classNames.fallbackIcon) })
      }
    )
  ] });
}
var firstTwoCharacters = (name) => name == null ? void 0 : name.slice(0, 2);

// src/components/user-view.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
function UserView({ user, className, classNames, isPending }) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("flex items-center gap-2 truncate", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ jsx9(
      UserAvatar,
      {
        isPending,
        user,
        className: "my-0.5",
        classNames: classNames == null ? void 0 : classNames.avatar
      }
    ),
    /* @__PURE__ */ jsx9("div", { className: "flex flex-col truncate text-left", children: isPending ? /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsx9(Skeleton, { className: cn("my-0.5 h-4 w-24 max-w-full", classNames == null ? void 0 : classNames.p) }),
      /* @__PURE__ */ jsx9(Skeleton, { className: cn("my-0.5 h-3 w-32 max-w-full", classNames == null ? void 0 : classNames.small) })
    ] }) : /* @__PURE__ */ jsxs4(Fragment, { children: [
      /* @__PURE__ */ jsx9("span", { className: cn("truncate font-medium text-sm", classNames == null ? void 0 : classNames.p), children: (user == null ? void 0 : user.name) || (user == null ? void 0 : user.email) || "User" }),
      (user == null ? void 0 : user.name) && (user == null ? void 0 : user.email) && /* @__PURE__ */ jsx9(
        "span",
        {
          className: cn(
            "!font-light truncate text-muted-foreground text-xs",
            classNames == null ? void 0 : classNames.small
          ),
          children: user.email
        }
      )
    ] }) })
  ] });
}

// src/components/settings/account-cell.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function AccountCell({
  className,
  classNames,
  deviceSession,
  localization,
  refetch
}) {
  const {
    basePath,
    localization: contextLocalization,
    hooks: { useSession },
    mutators: { revokeDeviceSession, setActiveSession },
    toast,
    viewPaths,
    navigate
  } = useContext4(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const [isLoading, setIsLoading] = useState2(false);
  const handleRevoke = async () => {
    setIsLoading(true);
    try {
      await revokeDeviceSession({ sessionToken: deviceSession.session.token });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  const handleSetActiveSession = async () => {
    setIsLoading(true);
    try {
      await setActiveSession({ sessionToken: deviceSession.session.token });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  const isCurrentSession = deviceSession.session.id === (sessionData == null ? void 0 : sessionData.session.id);
  return /* @__PURE__ */ jsxs5(Card, { className: cn("flex-row p-4", className, classNames == null ? void 0 : classNames.cell), children: [
    /* @__PURE__ */ jsx10(UserView, { user: deviceSession.user }),
    /* @__PURE__ */ jsxs5(DropdownMenu, { children: [
      /* @__PURE__ */ jsx10(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx10(
        Button,
        {
          className: cn(
            "relative ms-auto",
            classNames == null ? void 0 : classNames.button,
            classNames == null ? void 0 : classNames.outlineButton
          ),
          disabled: isLoading,
          size: "icon",
          type: "button",
          variant: "outline",
          children: isLoading ? /* @__PURE__ */ jsx10(Loader22, { className: "animate-spin" }) : /* @__PURE__ */ jsx10(EllipsisIcon, { className: classNames == null ? void 0 : classNames.icon })
        }
      ) }),
      /* @__PURE__ */ jsxs5(DropdownMenuContent, { children: [
        !isCurrentSession && /* @__PURE__ */ jsxs5(DropdownMenuItem, { onClick: handleSetActiveSession, children: [
          /* @__PURE__ */ jsx10(RepeatIcon, { className: classNames == null ? void 0 : classNames.icon }),
          localization.switchAccount
        ] }),
        /* @__PURE__ */ jsxs5(
          DropdownMenuItem,
          {
            onClick: () => {
              if (isCurrentSession) {
                navigate(`${basePath}/${viewPaths.signOut}`);
                return;
              }
              handleRevoke();
            },
            children: [
              /* @__PURE__ */ jsx10(LogOutIcon, { className: classNames == null ? void 0 : classNames.icon }),
              isCurrentSession ? localization.signOut : localization.revoke
            ]
          }
        )
      ] })
    ] })
  ] });
}

// src/components/settings/shared/settings-action-button.tsx
import { Loader2 as Loader23 } from "lucide-react";
import { useFormState } from "react-hook-form";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
function SettingsActionButton({
  classNames,
  actionLabel,
  disabled,
  isSubmitting,
  variant,
  onClick,
  ...props
}) {
  if (!onClick) {
    const formState = useFormState();
    isSubmitting = formState.isSubmitting;
  }
  return /* @__PURE__ */ jsxs6(
    Button,
    {
      className: cn(
        "md:ms-auto",
        classNames == null ? void 0 : classNames.button,
        variant === "default" && (classNames == null ? void 0 : classNames.primaryButton),
        variant === "destructive" && (classNames == null ? void 0 : classNames.destructiveButton)
      ),
      disabled: isSubmitting || disabled,
      size: "sm",
      type: onClick ? "button" : "submit",
      variant,
      onClick,
      ...props,
      children: [
        isSubmitting && /* @__PURE__ */ jsx11(Loader23, { className: "animate-spin" }),
        actionLabel
      ]
    }
  );
}

// src/components/settings/shared/settings-card-footer.tsx
import { Fragment as Fragment2, jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
function SettingsCardFooter({
  className,
  classNames,
  actionLabel,
  disabled,
  instructions,
  isPending,
  isSubmitting,
  variant,
  action
}) {
  return /* @__PURE__ */ jsx12(
    CardFooter,
    {
      className: cn(
        "flex flex-col justify-between gap-4 rounded-b-xl md:flex-row",
        (actionLabel || instructions) && "!py-4 border-t",
        variant === "destructive" ? "border-destructive/30 bg-destructive/10" : "bg-muted dark:bg-transparent",
        className,
        classNames == null ? void 0 : classNames.footer
      ),
      children: isPending ? /* @__PURE__ */ jsxs7(Fragment2, { children: [
        instructions && /* @__PURE__ */ jsx12(
          Skeleton,
          {
            className: cn(
              "my-0.5 h-3 w-48 max-w-full md:h-4 md:w-56",
              classNames == null ? void 0 : classNames.skeleton
            )
          }
        ),
        actionLabel && /* @__PURE__ */ jsx12(Skeleton, { className: cn("h-8 w-14 md:ms-auto", classNames == null ? void 0 : classNames.skeleton) })
      ] }) : /* @__PURE__ */ jsxs7(Fragment2, { children: [
        instructions && /* @__PURE__ */ jsx12(
          CardDescription,
          {
            className: cn(
              "text-center text-muted-foreground text-xs md:text-start md:text-sm",
              classNames == null ? void 0 : classNames.instructions
            ),
            children: instructions
          }
        ),
        actionLabel && /* @__PURE__ */ jsx12(
          SettingsActionButton,
          {
            classNames,
            actionLabel,
            disabled,
            isSubmitting,
            variant,
            onClick: action
          }
        )
      ] })
    }
  );
}

// src/components/settings/shared/settings-card-header.tsx
import { Fragment as Fragment3, jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
function SettingsCardHeader({
  className,
  classNames,
  description,
  isPending,
  title
}) {
  return /* @__PURE__ */ jsx13(CardHeader, { className: cn(classNames == null ? void 0 : classNames.header, className), children: isPending ? /* @__PURE__ */ jsxs8(Fragment3, { children: [
    /* @__PURE__ */ jsx13(Skeleton, { className: cn("my-0.5 h-5 w-1/3 md:h-5.5", classNames == null ? void 0 : classNames.skeleton) }),
    description && /* @__PURE__ */ jsx13(
      Skeleton,
      {
        className: cn("mt-1.5 mb-0.5 h-3 w-2/3 md:h-3.5", classNames == null ? void 0 : classNames.skeleton)
      }
    )
  ] }) : /* @__PURE__ */ jsxs8(Fragment3, { children: [
    /* @__PURE__ */ jsx13(CardTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: title }),
    description && /* @__PURE__ */ jsx13(
      CardDescription,
      {
        className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
        children: description
      }
    )
  ] }) });
}

// src/components/settings/shared/settings-card.tsx
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function SettingsCard({
  children,
  className,
  classNames,
  title,
  description,
  instructions,
  actionLabel,
  disabled,
  isPending,
  isSubmitting,
  optimistic,
  variant,
  action
}) {
  return /* @__PURE__ */ jsxs9(
    Card,
    {
      className: cn(
        "w-full pb-0 text-start",
        variant === "destructive" && "border-destructive/40",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ jsx14(
          SettingsCardHeader,
          {
            classNames,
            description,
            isPending,
            title
          }
        ),
        children,
        /* @__PURE__ */ jsx14(
          SettingsCardFooter,
          {
            classNames,
            actionLabel,
            disabled,
            isPending,
            isSubmitting,
            instructions,
            optimistic,
            variant,
            action
          }
        )
      ]
    }
  );
}

// src/components/settings/skeletons/settings-cell-skeleton.tsx
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
function SettingsCellSkeleton({ classNames }) {
  return /* @__PURE__ */ jsxs10(Card, { className: cn("flex-row p-4", classNames == null ? void 0 : classNames.cell), children: [
    /* @__PURE__ */ jsxs10("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx15(Skeleton, { className: cn("size-8 rounded-full", classNames == null ? void 0 : classNames.skeleton) }),
      /* @__PURE__ */ jsxs10("div", { children: [
        /* @__PURE__ */ jsx15(Skeleton, { className: cn("h-4 w-24", classNames == null ? void 0 : classNames.skeleton) }),
        /* @__PURE__ */ jsx15(Skeleton, { className: cn("mt-1 h-3 w-36", classNames == null ? void 0 : classNames.skeleton) })
      ] })
    ] }),
    /* @__PURE__ */ jsx15(Skeleton, { className: cn("ms-auto size-9", classNames == null ? void 0 : classNames.skeleton) })
  ] });
}

// src/components/settings/accounts-card.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function AccountsCard({
  className,
  classNames,
  deviceSessions,
  isPending,
  localization,
  skipHook,
  refetch
}) {
  const {
    basePath,
    hooks: { useListDeviceSessions },
    localization: contextLocalization,
    viewPaths,
    navigate
  } = useContext5(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (!skipHook) {
    const result = useListDeviceSessions();
    deviceSessions = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  return /* @__PURE__ */ jsx16(
    SettingsCard,
    {
      className,
      classNames,
      title: localization.accounts,
      description: localization.accountsDescription,
      actionLabel: localization.addAccount,
      instructions: localization.accountsInstructions,
      isPending,
      action: () => navigate(`${basePath}/${viewPaths.signIn}`),
      children: /* @__PURE__ */ jsx16(CardContent, { className: cn("grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ jsx16(SettingsCellSkeleton, { classNames }) : deviceSessions == null ? void 0 : deviceSessions.map((deviceSession) => /* @__PURE__ */ jsx16(
        AccountCell,
        {
          classNames,
          deviceSession,
          localization,
          refetch
        },
        deviceSession.session.id
      )) })
    }
  );
}

// src/components/settings/api-key/api-keys-card.tsx
import { useContext as useContext11, useState as useState6 } from "react";

// src/components/settings/api-key/api-key-cell.tsx
import { KeyIcon } from "lucide-react";
import { useContext as useContext7, useState as useState4 } from "react";

// src/components/settings/api-key/api-key-delete-dialog.tsx
import { Loader2 as Loader24 } from "lucide-react";
import { useContext as useContext6, useState as useState3 } from "react";

// src/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon as XIcon2 } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx17(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx17(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs11(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx17(DialogOverlay, {}),
    /* @__PURE__ */ jsxs11(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs11(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", children: [
            /* @__PURE__ */ jsx17(XIcon2, {}),
            /* @__PURE__ */ jsx17("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/settings/api-key/api-key-delete-dialog.tsx
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
function ApiKeyDeleteDialog({
  classNames,
  apiKey,
  localization,
  refetch,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    localization: contextLocalization,
    mutators: { deleteApiKey },
    toast
  } = useContext6(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [isLoading, setIsLoading] = useState3(false);
  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteApiKey({ keyId: apiKey.id });
      await (refetch == null ? void 0 : refetch());
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsx18(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs12(
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ jsxs12(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ jsxs12(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: [
            localization.delete,
            " ",
            localization.apiKey
          ] }),
          /* @__PURE__ */ jsx18(
            DialogDescription,
            {
              className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
              children: localization.deleteApiKeyConfirmation
            }
          )
        ] }),
        /* @__PURE__ */ jsxs12(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ jsx18(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              disabled: isLoading,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
              children: localization.cancel
            }
          ),
          /* @__PURE__ */ jsxs12(
            Button,
            {
              type: "button",
              variant: "destructive",
              onClick: handleDelete,
              disabled: isLoading,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.destructiveButton),
              children: [
                isLoading && /* @__PURE__ */ jsx18(Loader24, { className: "animate-spin" }),
                localization.delete
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/api-key/api-key-cell.tsx
import { Fragment as Fragment4, jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
function APIKeyCell({
  className,
  classNames,
  apiKey,
  localization,
  refetch
}) {
  const { localization: contextLocalization } = useContext7(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { lang } = useLang();
  const [showDeleteDialog, setShowDeleteDialog] = useState4(false);
  const formatExpiration = () => {
    if (!apiKey.expiresAt) return localization.neverExpires;
    const expiresDate = new Date(apiKey.expiresAt);
    return `${localization.expires} ${expiresDate.toLocaleDateString(lang ?? "en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })}`;
  };
  return /* @__PURE__ */ jsxs13(Fragment4, { children: [
    /* @__PURE__ */ jsxs13(
      Card,
      {
        className: cn("flex-row items-center gap-3 px-4 py-3", className, classNames == null ? void 0 : classNames.cell),
        children: [
          /* @__PURE__ */ jsx19(KeyIcon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon) }),
          /* @__PURE__ */ jsxs13("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx19("span", { className: "font-semibold text-sm", children: apiKey.name }),
              /* @__PURE__ */ jsxs13("span", { className: "text-muted-foreground text-sm", children: [
                apiKey.start,
                "******"
              ] })
            ] }),
            /* @__PURE__ */ jsx19("div", { className: "text-muted-foreground text-xs", children: formatExpiration() })
          ] }),
          /* @__PURE__ */ jsx19(
            Button,
            {
              className: cn(
                "relative ms-auto",
                classNames == null ? void 0 : classNames.button,
                classNames == null ? void 0 : classNames.outlineButton
              ),
              size: "sm",
              variant: "outline",
              onClick: () => setShowDeleteDialog(true),
              children: localization.delete
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx19(
      ApiKeyDeleteDialog,
      {
        classNames,
        apiKey,
        localization,
        open: showDeleteDialog,
        onOpenChange: setShowDeleteDialog,
        refetch
      }
    )
  ] });
}

// src/components/settings/api-key/api-key-display-dialog.tsx
import { CheckIcon as CheckIcon2, CopyIcon } from "lucide-react";
import { useContext as useContext8, useState as useState5 } from "react";
import { Fragment as Fragment5, jsx as jsx20, jsxs as jsxs14 } from "react/jsx-runtime";
function ApiKeyDisplayDialog({
  classNames,
  apiKey,
  localization,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const { localization: contextLocalization } = useContext8(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [copied, setCopied] = useState5(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsx20(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs14(
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ jsxs14(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ jsx20(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: localization.apiKeyCreated }),
          /* @__PURE__ */ jsx20(
            DialogDescription,
            {
              className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
              children: localization.apiKeyCreatedDescription
            }
          )
        ] }),
        /* @__PURE__ */ jsx20("div", { className: "break-all rounded-md bg-muted p-4 font-mono text-sm", children: apiKey }),
        /* @__PURE__ */ jsxs14(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ jsx20(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: handleCopy,
              disabled: copied,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
              children: copied ? /* @__PURE__ */ jsxs14(Fragment5, { children: [
                /* @__PURE__ */ jsx20(CheckIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                localization.copiedToClipboard
              ] }) : /* @__PURE__ */ jsxs14(Fragment5, { children: [
                /* @__PURE__ */ jsx20(CopyIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.copyToClipboard
              ] })
            }
          ),
          /* @__PURE__ */ jsx20(
            Button,
            {
              type: "button",
              variant: "default",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
              children: localization.done
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/api-key/api-key-name-dialog.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 as Loader25 } from "lucide-react";
import { useContext as useContext10 } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// src/components/ui/form.tsx
import * as React from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState as useFormState2
} from "react-hook-form";

// src/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx21 } from "react/jsx-runtime";
function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/form.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx22(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx22(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState2({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx22(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx22(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx22(
    Label2,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx22(
    Slot2,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String((error == null ? void 0 : error.message) ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx22(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}

// src/components/ui/input.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx23(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/select.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon as CheckIcon3, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { jsx as jsx24, jsxs as jsxs15 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx24(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx24(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx24(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx24(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx24(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs15(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx24(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx24(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx24(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx24("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx24(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx24(CheckIcon3, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx24(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx24(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx24(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/components/settings/api-key/api-key-name-dialog.tsx
import { jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
function ApiKeyNameDialog({
  classNames,
  localization,
  onSuccess,
  refetch,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    apiKeys,
    localization: contextLocalization,
    toast
  } = useContext10(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { lang } = useLang();
  const formSchema = z.object({
    name: z.string().min(1, `${localization.name} ${localization.isRequired}`),
    expiresInDays: z.string().optional()
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      expiresInDays: "none"
    }
  });
  const { isSubmitting } = form.formState;
  const onSubmit = async (values) => {
    try {
      const expiresIn = values.expiresInDays && values.expiresInDays !== "none" ? Number.parseInt(values.expiresInDays) * 60 * 60 * 24 : void 0;
      const result = await authClient.apiKey.create({
        name: values.name,
        expiresIn,
        prefix: typeof apiKeys === "object" ? apiKeys.prefix : void 0,
        metadata: typeof apiKeys === "object" ? apiKeys.metadata : void 0,
        fetchOptions: { throw: true }
      });
      await (refetch == null ? void 0 : refetch());
      onSuccess(result.key);
      onOpenChange == null ? void 0 : onOpenChange(false);
      form.reset();
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  const rtf = new Intl.RelativeTimeFormat(lang ?? "en");
  return /* @__PURE__ */ jsx25(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs16(
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ jsxs16(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ jsx25(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: localization.createApiKey }),
          /* @__PURE__ */ jsx25(
            DialogDescription,
            {
              className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
              children: localization.createApiKeyDescription
            }
          )
        ] }),
        /* @__PURE__ */ jsx25(Form, { ...form, children: /* @__PURE__ */ jsxs16("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4", children: [
          /* @__PURE__ */ jsxs16("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx25(
              FormField,
              {
                control: form.control,
                name: "name",
                render: ({ field }) => /* @__PURE__ */ jsxs16(FormItem, { className: "flex-1", children: [
                  /* @__PURE__ */ jsx25(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.name }),
                  /* @__PURE__ */ jsx25(FormControl, { children: /* @__PURE__ */ jsx25(
                    Input,
                    {
                      className: classNames == null ? void 0 : classNames.input,
                      placeholder: localization.apiKeyNamePlaceholder,
                      autoFocus: true,
                      disabled: isSubmitting,
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ jsx25(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx25(
              FormField,
              {
                control: form.control,
                name: "expiresInDays",
                render: ({ field }) => /* @__PURE__ */ jsxs16(FormItem, { children: [
                  /* @__PURE__ */ jsx25(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.expires }),
                  /* @__PURE__ */ jsxs16(
                    Select,
                    {
                      onValueChange: field.onChange,
                      defaultValue: field.value,
                      disabled: isSubmitting,
                      children: [
                        /* @__PURE__ */ jsx25(FormControl, { children: /* @__PURE__ */ jsx25(SelectTrigger, { className: classNames == null ? void 0 : classNames.input, children: /* @__PURE__ */ jsx25(
                          SelectValue,
                          {
                            placeholder: localization.noExpiration
                          }
                        ) }) }),
                        /* @__PURE__ */ jsxs16(SelectContent, { children: [
                          /* @__PURE__ */ jsx25(SelectItem, { value: "none", children: localization.noExpiration }),
                          [1, 7, 30, 60, 90, 180, 365].map((days) => /* @__PURE__ */ jsx25(SelectItem, { value: days.toString(), children: days === 365 ? rtf.format(1, "year") : rtf.format(days, "day") }, days))
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx25(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs16(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
            /* @__PURE__ */ jsx25(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
                disabled: isSubmitting,
                children: localization.cancel
              }
            ),
            /* @__PURE__ */ jsxs16(
              Button,
              {
                type: "submit",
                variant: "default",
                className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
                disabled: isSubmitting,
                children: [
                  isSubmitting && /* @__PURE__ */ jsx25(Loader25, { className: "animate-spin" }),
                  localization.create
                ]
              }
            )
          ] })
        ] }) })
      ]
    }
  ) });
}

// src/components/settings/api-key/api-keys-card.tsx
import { Fragment as Fragment6, jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
function APIKeysCard({
  className,
  classNames,
  apiKeys,
  isPending,
  localization,
  skipHook,
  refetch
}) {
  const {
    hooks: { useListApiKeys },
    localization: authLocalization2
  } = useContext11(AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  if (!skipHook) {
    const result = useListApiKeys();
    apiKeys = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  const [nameDialogOpen, setNameDialogOpen] = useState6(false);
  const [displayDialogOpen, setDisplayDialogOpen] = useState6(false);
  const [createdApiKey, setCreatedApiKey] = useState6("");
  const handleCreateApiKey = (apiKey) => {
    setCreatedApiKey(apiKey);
    setDisplayDialogOpen(true);
  };
  return /* @__PURE__ */ jsxs17(Fragment6, { children: [
    /* @__PURE__ */ jsx26(
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization.create,
        description: localization.apiKeysDescription,
        instructions: localization.apiKeysInstructions,
        isPending,
        title: localization.apiKeys,
        action: () => setNameDialogOpen(true),
        children: (isPending || apiKeys && apiKeys.length > 0) && /* @__PURE__ */ jsx26(CardContent, { className: cn("grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ jsx26(SettingsCellSkeleton, { classNames }) : apiKeys == null ? void 0 : apiKeys.map((apiKey) => /* @__PURE__ */ jsx26(
          APIKeyCell,
          {
            classNames,
            apiKey,
            localization,
            refetch
          },
          apiKey.id
        )) })
      }
    ),
    /* @__PURE__ */ jsx26(
      ApiKeyNameDialog,
      {
        classNames,
        localization,
        open: nameDialogOpen,
        onOpenChange: setNameDialogOpen,
        onSuccess: handleCreateApiKey,
        refetch
      }
    ),
    /* @__PURE__ */ jsx26(
      ApiKeyDisplayDialog,
      {
        classNames,
        apiKey: createdApiKey,
        localization,
        open: displayDialogOpen,
        onOpenChange: setDisplayDialogOpen
      }
    )
  ] });
}

// src/components/settings/change-email-card.tsx
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { useContext as useContext12, useState as useState7 } from "react";
import { useForm as useForm2 } from "react-hook-form";
import * as z2 from "zod";
import { Fragment as Fragment7, jsx as jsx27, jsxs as jsxs18 } from "react/jsx-runtime";
function ChangeEmailCard({
  className,
  classNames,
  isPending,
  localization
}) {
  const {
    authClient,
    emailVerification,
    hooks: { useSession },
    localization: contextLocalization,
    toast
  } = useContext12(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData, isPending: sessionPending, refetch } = useSession();
  const [resendDisabled, setResendDisabled] = useState7(false);
  const formSchema = z2.object({
    email: z2.string().min(1, { message: localization.emailRequired }).email({ message: localization.emailInvalid })
  });
  const form = useForm2({
    resolver: zodResolver2(formSchema),
    values: {
      email: (sessionData == null ? void 0 : sessionData.user.email) || ""
    }
  });
  const resendForm = useForm2();
  const { isSubmitting } = form.formState;
  const changeEmail = async ({ email }) => {
    if (email === (sessionData == null ? void 0 : sessionData.user.email)) {
      await new Promise((resolve) => setTimeout(resolve));
      toast({
        variant: "error",
        message: localization.emailIsTheSame
      });
      return;
    }
    try {
      await authClient.changeEmail({
        newEmail: email,
        callbackURL: window.location.pathname,
        fetchOptions: { throw: true }
      });
      if (sessionData == null ? void 0 : sessionData.user.emailVerified) {
        toast({ variant: "success", message: localization.emailVerifyChange });
      } else {
        await (refetch == null ? void 0 : refetch());
        toast({
          variant: "success",
          message: `${localization.email} ${localization.updatedSuccessfully}`
        });
      }
    } catch (error) {
      toast({ variant: "error", message: getLocalizedError({ error, localization }) });
    }
  };
  const resendVerification = async () => {
    if (!sessionData) return;
    const email = sessionData.user.email;
    setResendDisabled(true);
    try {
      await authClient.sendVerificationEmail({
        email,
        fetchOptions: { throw: true }
      });
      toast({ variant: "success", message: localization.emailVerification });
    } catch (error) {
      toast({ variant: "error", message: getLocalizedError({ error, localization }) });
      setResendDisabled(false);
      throw error;
    }
  };
  return /* @__PURE__ */ jsxs18(Fragment7, { children: [
    /* @__PURE__ */ jsx27(Form, { ...form, children: /* @__PURE__ */ jsx27("form", { noValidate: true, onSubmit: form.handleSubmit(changeEmail), children: /* @__PURE__ */ jsx27(
      SettingsCard,
      {
        className,
        classNames,
        description: localization.emailDescription,
        instructions: localization.emailInstructions,
        isPending: isPending || sessionPending,
        title: localization.email,
        actionLabel: localization.save,
        children: /* @__PURE__ */ jsx27(CardContent, { className: classNames == null ? void 0 : classNames.content, children: isPending || sessionPending ? /* @__PURE__ */ jsx27(Skeleton, { className: cn("h-9 w-full", classNames == null ? void 0 : classNames.skeleton) }) : /* @__PURE__ */ jsx27(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs18(FormItem, { children: [
              /* @__PURE__ */ jsx27(FormControl, { children: /* @__PURE__ */ jsx27(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.emailPlaceholder,
                  type: "email",
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx27(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ) })
      }
    ) }) }),
    emailVerification && (sessionData == null ? void 0 : sessionData.user) && !(sessionData == null ? void 0 : sessionData.user.emailVerified) && /* @__PURE__ */ jsx27(Form, { ...resendForm, children: /* @__PURE__ */ jsx27("form", { onSubmit: resendForm.handleSubmit(resendVerification), children: /* @__PURE__ */ jsx27(
      SettingsCard,
      {
        className,
        classNames,
        title: localization.verifyYourEmail,
        description: localization.verifyYourEmailDescription,
        actionLabel: localization.resendVerificationEmail,
        disabled: resendDisabled
      }
    ) }) })
  ] });
}

// src/components/settings/change-password-card.tsx
import { zodResolver as zodResolver3 } from "@hookform/resolvers/zod";
import { useContext as useContext13 } from "react";
import { useForm as useForm3 } from "react-hook-form";
import * as z3 from "zod";

// src/components/password-input.tsx
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState as useState8 } from "react";
import { Fragment as Fragment8, jsx as jsx28, jsxs as jsxs19 } from "react/jsx-runtime";
function PasswordInput({
  className,
  enableToggle,
  onChange,
  ...props
}) {
  const [disabled, setDisabled] = useState8(true);
  const [isVisible, setIsVisible] = useState8(false);
  return /* @__PURE__ */ jsxs19("div", { className: "relative", children: [
    /* @__PURE__ */ jsx28(
      Input,
      {
        className: cn(enableToggle && "pr-10", className),
        ...props,
        type: isVisible && enableToggle ? "text" : "password",
        onChange: (event) => {
          setDisabled(!event.target.value);
          onChange == null ? void 0 : onChange(event);
        }
      }
    ),
    enableToggle && /* @__PURE__ */ jsxs19(Fragment8, { children: [
      /* @__PURE__ */ jsx28(
        Button,
        {
          className: "!bg-transparent absolute top-0 right-0",
          disabled,
          size: "icon",
          type: "button",
          variant: "ghost",
          onClick: () => setIsVisible(!isVisible),
          children: isVisible ? /* @__PURE__ */ jsx28(EyeIcon, {}) : /* @__PURE__ */ jsx28(EyeOffIcon, {})
        }
      ),
      /* @__PURE__ */ jsx28("style", { children: `
                        .hide-password-toggle::-ms-reveal,
                        .hide-password-toggle::-ms-clear {
                            visibility: hidden;
                            pointer-events: none;
                            display: none;
                        }
                    ` })
    ] })
  ] });
}

// src/components/settings/skeletons/input-field-skeleton.tsx
import { jsx as jsx29, jsxs as jsxs20 } from "react/jsx-runtime";
function InputFieldSkeleton({ classNames }) {
  return /* @__PURE__ */ jsxs20("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsx29(Skeleton, { className: cn("h-4 w-32", classNames == null ? void 0 : classNames.skeleton) }),
    /* @__PURE__ */ jsx29(Skeleton, { className: cn("h-9 w-full", classNames == null ? void 0 : classNames.skeleton) })
  ] });
}

// src/components/settings/change-password-card.tsx
import { Fragment as Fragment9, jsx as jsx30, jsxs as jsxs21 } from "react/jsx-runtime";
function ChangePasswordCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook,
  passwordValidation
}) {
  const {
    authClient,
    basePath,
    baseURL,
    confirmPassword: confirmPasswordEnabled,
    hooks: { useSession, useListAccounts },
    localization: contextLocalization,
    viewPaths,
    toast,
    passwordValidation: contextPasswordValidation
  } = useContext13(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const { data: sessionData } = useSession();
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
  }
  const formSchema = z3.object({
    currentPassword: getPasswordSchema(passwordValidation, localization),
    newPassword: getPasswordSchema(passwordValidation, {
      passwordRequired: localization.newPasswordRequired,
      passwordTooShort: localization.passwordTooShort,
      passwordTooLong: localization.passwordTooLong,
      passwordInvalid: localization.passwordInvalid
    }),
    confirmPassword: confirmPasswordEnabled ? getPasswordSchema(passwordValidation, {
      passwordRequired: localization.confirmPasswordRequired,
      passwordTooShort: localization.passwordTooShort,
      passwordTooLong: localization.passwordTooLong,
      passwordInvalid: localization.passwordInvalid
    }) : z3.string().optional()
  }).refine((data) => !confirmPasswordEnabled || data.newPassword === data.confirmPassword, {
    message: localization.passwordsDoNotMatch,
    path: ["confirmPassword"]
  });
  const form = useForm3({
    resolver: zodResolver3(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }
  });
  const setPasswordForm = useForm3();
  const { isSubmitting } = form.formState;
  const setPassword = async () => {
    if (!sessionData) return;
    const email = sessionData == null ? void 0 : sessionData.user.email;
    try {
      await authClient.forgetPassword({
        email,
        redirectTo: `${baseURL}${basePath}/${viewPaths.resetPassword}`,
        fetchOptions: { throw: true }
      });
      toast({ variant: "success", message: localization.forgotPasswordEmail });
    } catch (error) {
      toast({ variant: "error", message: getLocalizedError({ error, localization }) });
    }
  };
  const changePassword = async ({ currentPassword, newPassword }) => {
    try {
      await authClient.changePassword({
        currentPassword,
        newPassword,
        revokeOtherSessions: true,
        fetchOptions: { throw: true }
      });
      toast({ variant: "success", message: localization.changePasswordSuccess });
    } catch (error) {
      toast({ variant: "error", message: getLocalizedError({ error, localization }) });
    }
    form.reset();
  };
  const credentialsLinked = accounts == null ? void 0 : accounts.some((acc) => acc.provider === "credential");
  if (!isPending && !credentialsLinked) {
    return /* @__PURE__ */ jsx30(Form, { ...setPasswordForm, children: /* @__PURE__ */ jsx30("form", { onSubmit: setPasswordForm.handleSubmit(setPassword), children: /* @__PURE__ */ jsx30(
      SettingsCard,
      {
        title: localization.setPassword,
        description: localization.setPasswordDescription,
        actionLabel: localization.setPassword,
        isPending,
        className,
        classNames
      }
    ) }) });
  }
  return /* @__PURE__ */ jsx30(Form, { ...form, children: /* @__PURE__ */ jsx30("form", { onSubmit: form.handleSubmit(changePassword), children: /* @__PURE__ */ jsx30(
    SettingsCard,
    {
      className,
      classNames,
      actionLabel: localization.save,
      description: localization.changePasswordDescription,
      instructions: localization.changePasswordInstructions,
      isPending,
      title: localization.changePassword,
      children: /* @__PURE__ */ jsx30(CardContent, { className: cn("grid gap-6", classNames == null ? void 0 : classNames.content), children: isPending || !accounts ? /* @__PURE__ */ jsxs21(Fragment9, { children: [
        /* @__PURE__ */ jsx30(InputFieldSkeleton, { classNames }),
        /* @__PURE__ */ jsx30(InputFieldSkeleton, { classNames }),
        confirmPasswordEnabled && /* @__PURE__ */ jsx30(InputFieldSkeleton, { classNames })
      ] }) : /* @__PURE__ */ jsxs21(Fragment9, { children: [
        /* @__PURE__ */ jsx30(
          FormField,
          {
            control: form.control,
            name: "currentPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs21(FormItem, { children: [
              /* @__PURE__ */ jsx30(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.currentPassword }),
              /* @__PURE__ */ jsx30(FormControl, { children: /* @__PURE__ */ jsx30(
                PasswordInput,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  autoComplete: "current-password",
                  placeholder: localization.currentPasswordPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx30(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx30(
          FormField,
          {
            control: form.control,
            name: "newPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs21(FormItem, { children: [
              /* @__PURE__ */ jsx30(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.newPassword }),
              /* @__PURE__ */ jsx30(FormControl, { children: /* @__PURE__ */ jsx30(
                PasswordInput,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  autoComplete: "new-password",
                  disabled: isSubmitting,
                  placeholder: localization.newPasswordPlaceholder,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx30(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        confirmPasswordEnabled && /* @__PURE__ */ jsx30(
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs21(FormItem, { children: [
              /* @__PURE__ */ jsx30(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.confirmPassword }),
              /* @__PURE__ */ jsx30(FormControl, { children: /* @__PURE__ */ jsx30(
                PasswordInput,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  autoComplete: "new-password",
                  placeholder: localization.confirmPasswordPlaceholder,
                  disabled: isSubmitting,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx30(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        )
      ] }) })
    }
  ) }) });
}

// src/components/settings/delete-account-card.tsx
import { useContext as useContext15, useState as useState9 } from "react";

// src/components/settings/delete-account-dialog.tsx
import { zodResolver as zodResolver4 } from "@hookform/resolvers/zod";
import { Loader2 as Loader26 } from "lucide-react";
import { useContext as useContext14 } from "react";
import { useForm as useForm4 } from "react-hook-form";
import * as z4 from "zod";
import { jsx as jsx31, jsxs as jsxs22 } from "react/jsx-runtime";
function DeleteAccountDialog({
  classNames,
  accounts,
  localization,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    authClient,
    basePath,
    baseURL,
    deleteAccountVerification,
    freshAge,
    hooks: { useSession },
    localization: contextLocalization,
    viewPaths,
    navigate,
    toast
  } = useContext14(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const credentialsLinked = accounts == null ? void 0 : accounts.some((acc) => acc.provider === "credential");
  const formSchema = z4.object({
    password: credentialsLinked ? z4.string().min(1, { message: localization.passwordRequired }) : z4.string().optional()
  });
  const form = useForm4({
    resolver: zodResolver4(formSchema),
    defaultValues: {
      password: ""
    }
  });
  const { isSubmitting } = form.formState;
  const deleteAccount = async ({ password }) => {
    const params = {};
    if (credentialsLinked) {
      params.password = password;
    } else if (!isFresh) {
      navigate(`${basePath}/${viewPaths.signOut}`);
      return;
    }
    if (deleteAccountVerification) {
      params.callbackURL = `${baseURL}${basePath}/${viewPaths.signOut}`;
    }
    try {
      await authClient.deleteUser({
        ...params,
        fetchOptions: {
          throw: true
        }
      });
      if (deleteAccountVerification) {
        toast({ variant: "success", message: localization.deleteAccountVerify });
      } else {
        toast({ variant: "success", message: localization.deleteAccountSuccess });
        navigate(`${basePath}/${viewPaths.signOut}`);
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
    onOpenChange == null ? void 0 : onOpenChange(false);
  };
  return /* @__PURE__ */ jsx31(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs22(DialogContent, { className: cn("sm:max-w-md", (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content), children: [
    /* @__PURE__ */ jsxs22(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
      /* @__PURE__ */ jsx31(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: localization == null ? void 0 : localization.deleteAccount }),
      /* @__PURE__ */ jsx31(
        DialogDescription,
        {
          className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
          children: isFresh ? localization == null ? void 0 : localization.deleteAccountInstructions : localization == null ? void 0 : localization.deleteAccountNotFresh
        }
      )
    ] }),
    /* @__PURE__ */ jsx31(Form, { ...form, children: /* @__PURE__ */ jsxs22("form", { onSubmit: form.handleSubmit(deleteAccount), className: "grid gap-4", children: [
      credentialsLinked && /* @__PURE__ */ jsx31(
        FormField,
        {
          control: form.control,
          name: "password",
          render: ({ field }) => /* @__PURE__ */ jsxs22(FormItem, { children: [
            /* @__PURE__ */ jsx31(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization == null ? void 0 : localization.password }),
            /* @__PURE__ */ jsx31(FormControl, { children: /* @__PURE__ */ jsx31(
              Input,
              {
                autoComplete: "current-password",
                placeholder: localization == null ? void 0 : localization.passwordPlaceholder,
                type: "password",
                className: classNames == null ? void 0 : classNames.input,
                ...field
              }
            ) }),
            /* @__PURE__ */ jsx31(FormMessage, { className: classNames == null ? void 0 : classNames.error })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs22(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
        /* @__PURE__ */ jsx31(
          Button,
          {
            type: "button",
            variant: "secondary",
            className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.secondaryButton),
            onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
            children: localization.cancel
          }
        ),
        /* @__PURE__ */ jsxs22(
          Button,
          {
            className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.destructiveButton),
            disabled: isSubmitting,
            variant: "destructive",
            type: "submit",
            children: [
              isSubmitting && /* @__PURE__ */ jsx31(Loader26, { className: "animate-spin" }),
              isFresh ? localization == null ? void 0 : localization.deleteAccount : localization == null ? void 0 : localization.signOut
            ]
          }
        )
      ] })
    ] }) })
  ] }) });
}

// src/components/settings/delete-account-card.tsx
import { jsx as jsx32, jsxs as jsxs23 } from "react/jsx-runtime";
function DeleteAccountCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook
}) {
  const {
    hooks: { useListAccounts },
    localization: contextLocalization
  } = useContext15(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [showDialog, setShowDialog] = useState9(false);
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
  }
  return /* @__PURE__ */ jsxs23("div", { children: [
    /* @__PURE__ */ jsx32(
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization == null ? void 0 : localization.deleteAccount,
        description: localization == null ? void 0 : localization.deleteAccountDescription,
        isPending,
        title: localization == null ? void 0 : localization.deleteAccount,
        variant: "destructive",
        action: () => setShowDialog(true)
      }
    ),
    /* @__PURE__ */ jsx32(
      DeleteAccountDialog,
      {
        classNames,
        accounts,
        localization,
        open: showDialog,
        onOpenChange: setShowDialog
      }
    )
  ] });
}

// src/components/settings/passkeys-card.tsx
import { useContext as useContext18, useState as useState11 } from "react";
import { useForm as useForm5 } from "react-hook-form";

// src/components/settings/passkey-cell.tsx
import { FingerprintIcon, Loader2 as Loader27 } from "lucide-react";
import { useContext as useContext17, useState as useState10 } from "react";

// src/components/settings/session-freshness-dialog.tsx
import { useContext as useContext16 } from "react";
import { jsx as jsx33, jsxs as jsxs24 } from "react/jsx-runtime";
function SessionFreshnessDialog({
  classNames,
  localization,
  title,
  description,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const {
    basePath,
    localization: contextLocalization,
    viewPaths,
    navigate
  } = useContext16(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const handleSignOut = () => {
    navigate(`${basePath}/${viewPaths.signOut}`);
    onOpenChange == null ? void 0 : onOpenChange(false);
  };
  return /* @__PURE__ */ jsx33(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs24(DialogContent, { className: cn("sm:max-w-md", (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content), children: [
    /* @__PURE__ */ jsxs24(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
      /* @__PURE__ */ jsx33(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: title || (localization == null ? void 0 : localization.sessionExpired) || "Session Expired" }),
      /* @__PURE__ */ jsx33(
        DialogDescription,
        {
          className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
          children: description || (localization == null ? void 0 : localization.sessionNotFresh)
        }
      )
    ] }),
    /* @__PURE__ */ jsxs24(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
      /* @__PURE__ */ jsx33(
        Button,
        {
          type: "button",
          variant: "secondary",
          className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.secondaryButton),
          onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
          children: localization.cancel
        }
      ),
      /* @__PURE__ */ jsx33(
        Button,
        {
          className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
          variant: "default",
          onClick: handleSignOut,
          children: localization == null ? void 0 : localization.signOut
        }
      )
    ] })
  ] }) });
}

// src/components/settings/passkey-cell.tsx
import { Fragment as Fragment10, jsx as jsx34, jsxs as jsxs25 } from "react/jsx-runtime";
function PasskeyCell({
  className,
  classNames,
  localization,
  passkey,
  refetch
}) {
  const {
    freshAge,
    hooks: { useSession },
    localization: contextLocalization,
    mutators: { deletePasskey },
    toast
  } = useContext17(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const [showFreshnessDialog, setShowFreshnessDialog] = useState10(false);
  const [isLoading, setIsLoading] = useState10(false);
  const handleDeletePasskey = async () => {
    if (!isFresh) {
      setShowFreshnessDialog(true);
      return;
    }
    setIsLoading(true);
    try {
      await deletePasskey({ id: passkey.id });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  return /* @__PURE__ */ jsxs25(Fragment10, { children: [
    /* @__PURE__ */ jsx34(
      SessionFreshnessDialog,
      {
        open: showFreshnessDialog,
        onOpenChange: setShowFreshnessDialog,
        classNames,
        localization
      }
    ),
    /* @__PURE__ */ jsxs25(Card, { className: cn("flex-row items-center p-4", className, classNames == null ? void 0 : classNames.cell), children: [
      /* @__PURE__ */ jsxs25("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx34(FingerprintIcon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon) }),
        /* @__PURE__ */ jsx34("span", { className: "text-sm", children: passkey.createdAt.toLocaleString() })
      ] }),
      /* @__PURE__ */ jsxs25(
        Button,
        {
          className: cn(
            "relative ms-auto",
            classNames == null ? void 0 : classNames.button,
            classNames == null ? void 0 : classNames.outlineButton
          ),
          disabled: isLoading,
          size: "sm",
          variant: "outline",
          onClick: handleDeletePasskey,
          children: [
            isLoading && /* @__PURE__ */ jsx34(Loader27, { className: "animate-spin" }),
            localization.delete
          ]
        }
      )
    ] })
  ] });
}

// src/components/settings/passkeys-card.tsx
import { Fragment as Fragment11, jsx as jsx35, jsxs as jsxs26 } from "react/jsx-runtime";
function PasskeysCard({
  className,
  classNames,
  isPending,
  localization,
  passkeys,
  skipHook,
  refetch
}) {
  const {
    authClient,
    freshAge,
    hooks: { useListPasskeys, useSession },
    localization: authLocalization2,
    toast
  } = useContext18(AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  if (!skipHook) {
    const result = useListPasskeys();
    passkeys = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  const { data: sessionData } = useSession();
  const session = sessionData == null ? void 0 : sessionData.session;
  const isFresh = session ? Date.now() - (session == null ? void 0 : session.createdAt.getTime()) < freshAge * 1e3 : false;
  const [showFreshnessDialog, setShowFreshnessDialog] = useState11(false);
  const addPasskey = async () => {
    if (!isFresh) {
      setShowFreshnessDialog(true);
      return;
    }
    try {
      await authClient.passkey.addPasskey({ fetchOptions: { throw: true } });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  const form = useForm5();
  return /* @__PURE__ */ jsxs26(Fragment11, { children: [
    /* @__PURE__ */ jsx35(
      SessionFreshnessDialog,
      {
        open: showFreshnessDialog,
        onOpenChange: setShowFreshnessDialog,
        classNames,
        localization
      }
    ),
    /* @__PURE__ */ jsx35(Form, { ...form, children: /* @__PURE__ */ jsx35("form", { onSubmit: form.handleSubmit(addPasskey), children: /* @__PURE__ */ jsx35(
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: localization.addPasskey,
        description: localization.passkeysDescription,
        instructions: localization.passkeysInstructions,
        isPending,
        title: localization.passkeys,
        children: (isPending || passkeys && passkeys.length > 0) && /* @__PURE__ */ jsx35(CardContent, { className: cn("grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ jsx35(SettingsCellSkeleton, { classNames }) : passkeys == null ? void 0 : passkeys.map((passkey) => /* @__PURE__ */ jsx35(
          PasskeyCell,
          {
            classNames,
            localization,
            passkey,
            refetch
          },
          passkey.id
        )) })
      }
    ) }) })
  ] });
}

// src/components/settings/providers-card.tsx
import { useContext as useContext20 } from "react";

// src/components/settings/provider-cell.tsx
import { Loader2 as Loader28 } from "lucide-react";
import { useContext as useContext19, useState as useState12 } from "react";
import { Fragment as Fragment12, jsx as jsx36, jsxs as jsxs27 } from "react/jsx-runtime";
function ProviderCell({
  className,
  classNames,
  account,
  localization,
  other,
  provider,
  refetch
}) {
  const {
    authClient,
    basePath,
    baseURL,
    colorIcons,
    localization: contextLocalization,
    mutators: { unlinkAccount },
    noColorIcons,
    viewPaths,
    toast
  } = useContext19(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const [isLoading, setIsLoading] = useState12(false);
  const handleLink = async () => {
    setIsLoading(true);
    const callbackURL = `${baseURL}${basePath}/${viewPaths.callback}?redirectTo=${window.location.pathname}`;
    try {
      if (other) {
        await authClient.oauth2.link({
          providerId: provider.provider,
          callbackURL,
          fetchOptions: { throw: true }
        });
      } else {
        await authClient.linkSocial({
          provider: provider.provider,
          callbackURL,
          fetchOptions: { throw: true }
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      setIsLoading(false);
    }
  };
  const handleUnlink = async () => {
    setIsLoading(true);
    try {
      await unlinkAccount({
        accountId: account == null ? void 0 : account.accountId,
        providerId: provider.provider
      });
      await (refetch == null ? void 0 : refetch());
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxs27(Card, { className: cn("flex-row items-center gap-3 px-4 py-3", className, classNames == null ? void 0 : classNames.cell), children: [
    provider.icon && (colorIcons ? /* @__PURE__ */ jsx36(provider.icon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon), variant: "color" }) : noColorIcons ? /* @__PURE__ */ jsx36(provider.icon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon) }) : /* @__PURE__ */ jsxs27(Fragment12, { children: [
      /* @__PURE__ */ jsx36(
        provider.icon,
        {
          className: cn("size-4 dark:hidden", classNames == null ? void 0 : classNames.icon),
          variant: "color"
        }
      ),
      /* @__PURE__ */ jsx36(
        provider.icon,
        {
          className: cn("hidden size-4 dark:block", classNames == null ? void 0 : classNames.icon)
        }
      )
    ] })),
    /* @__PURE__ */ jsx36("span", { className: "text-sm", children: provider.name }),
    /* @__PURE__ */ jsxs27(
      Button,
      {
        className: cn("relative ms-auto", classNames == null ? void 0 : classNames.button),
        disabled: isLoading,
        size: "sm",
        type: "button",
        variant: account ? "outline" : "default",
        onClick: account ? handleUnlink : handleLink,
        children: [
          isLoading && /* @__PURE__ */ jsx36(Loader28, { className: "animate-spin" }),
          account ? localization.unlink : localization.link
        ]
      }
    )
  ] });
}

// src/components/settings/providers-card.tsx
import { Fragment as Fragment13, jsx as jsx37, jsxs as jsxs28 } from "react/jsx-runtime";
function ProvidersCard({
  className,
  classNames,
  accounts,
  isPending,
  localization,
  skipHook,
  refetch
}) {
  const {
    hooks: { useListAccounts },
    localization: contextLocalization,
    otherProviders,
    providers
  } = useContext20(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (!skipHook) {
    const result = useListAccounts();
    accounts = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  return /* @__PURE__ */ jsx37(
    SettingsCard,
    {
      className,
      classNames,
      title: localization.providers,
      description: localization.providersDescription,
      isPending,
      children: /* @__PURE__ */ jsx37(CardContent, { className: cn("grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ jsx37(SettingsCellSkeleton, { classNames }) : /* @__PURE__ */ jsxs28(Fragment13, { children: [
        providers == null ? void 0 : providers.map((provider) => {
          const socialProvider = socialProviders.find(
            (socialProvider2) => socialProvider2.provider === provider
          );
          if (!socialProvider) return null;
          return /* @__PURE__ */ jsx37(
            ProviderCell,
            {
              classNames,
              account: accounts == null ? void 0 : accounts.find((acc) => acc.provider === provider),
              provider: socialProvider,
              refetch
            },
            provider
          );
        }),
        otherProviders == null ? void 0 : otherProviders.map((provider) => /* @__PURE__ */ jsx37(
          ProviderCell,
          {
            classNames,
            account: accounts == null ? void 0 : accounts.find(
              (acc) => acc.provider === provider.provider
            ),
            provider,
            refetch,
            other: true
          },
          provider.provider
        ))
      ] }) })
    }
  );
}

// src/components/settings/sessions-card.tsx
import { useContext as useContext22 } from "react";

// src/components/settings/session-cell.tsx
import { LaptopIcon, Loader2 as Loader29, SmartphoneIcon } from "lucide-react";
import { useContext as useContext21, useState as useState13 } from "react";
import { UAParser } from "ua-parser-js";
import { jsx as jsx38, jsxs as jsxs29 } from "react/jsx-runtime";
function SessionCell({
  className,
  classNames,
  localization,
  session,
  refetch
}) {
  var _a;
  const {
    basePath,
    hooks: { useSession },
    localization: contextLocalization,
    mutators: { revokeSession },
    viewPaths,
    navigate,
    toast
  } = useContext21(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const isCurrentSession = session.id === ((_a = sessionData == null ? void 0 : sessionData.session) == null ? void 0 : _a.id);
  const [isLoading, setIsLoading] = useState13(false);
  const handleRevoke = async () => {
    setIsLoading(true);
    if (isCurrentSession) {
      navigate(`${basePath}/${viewPaths.signOut}`);
      return;
    }
    try {
      await revokeSession({ token: session.token });
      refetch == null ? void 0 : refetch();
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      setIsLoading(false);
    }
  };
  const parser = UAParser(session.userAgent);
  const isMobile = parser.device.type === "mobile";
  return /* @__PURE__ */ jsxs29(Card, { className: cn("flex-row items-center gap-3 px-4 py-3", className, classNames == null ? void 0 : classNames.cell), children: [
    isMobile ? /* @__PURE__ */ jsx38(SmartphoneIcon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon) }) : /* @__PURE__ */ jsx38(LaptopIcon, { className: cn("size-4", classNames == null ? void 0 : classNames.icon) }),
    /* @__PURE__ */ jsxs29("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx38("span", { className: "font-semibold text-sm", children: isCurrentSession ? localization.currentSession : session == null ? void 0 : session.ipAddress }),
      /* @__PURE__ */ jsxs29("span", { className: "text-muted-foreground text-xs", children: [
        parser.os.name,
        ", ",
        parser.browser.name
      ] })
    ] }),
    /* @__PURE__ */ jsxs29(
      Button,
      {
        className: cn("relative ms-auto", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
        disabled: isLoading,
        size: "sm",
        variant: "outline",
        onClick: handleRevoke,
        children: [
          isLoading && /* @__PURE__ */ jsx38(Loader29, { className: "animate-spin" }),
          isCurrentSession ? localization.signOut : localization.revoke
        ]
      }
    )
  ] });
}

// src/components/settings/sessions-card.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
function SessionsCard({
  className,
  classNames,
  isPending,
  localization,
  sessions,
  skipHook,
  refetch
}) {
  const {
    hooks: { useListSessions },
    localization: contextLocalization
  } = useContext22(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (!skipHook) {
    const result = useListSessions();
    sessions = result.data;
    isPending = result.isPending;
    refetch = result.refetch;
  }
  return /* @__PURE__ */ jsx39(
    SettingsCard,
    {
      className,
      classNames,
      description: localization.sessionsDescription,
      isPending,
      title: localization.sessions,
      children: /* @__PURE__ */ jsx39(CardContent, { className: cn("grid gap-4", classNames == null ? void 0 : classNames.content), children: isPending ? /* @__PURE__ */ jsx39(SettingsCellSkeleton, { classNames }) : sessions == null ? void 0 : sessions.map((session) => /* @__PURE__ */ jsx39(
        SessionCell,
        {
          classNames,
          localization,
          session,
          refetch
        },
        session.id
      )) })
    }
  );
}

// src/components/settings/shared/update-field-card.tsx
import { zodResolver as zodResolver5 } from "@hookform/resolvers/zod";
import { useContext as useContext23 } from "react";
import { useForm as useForm6 } from "react-hook-form";
import * as z5 from "zod";

// src/components/ui/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon as CheckIcon4 } from "lucide-react";
import { jsx as jsx40 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx40(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx40(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsx40(CheckIcon4, { className: "size-3.5" })
        }
      )
    }
  );
}

// src/components/settings/shared/update-field-card.tsx
import { jsx as jsx41, jsxs as jsxs30 } from "react/jsx-runtime";
function UpdateFieldCard({
  className,
  classNames,
  description,
  instructions,
  isPending,
  localization,
  name,
  placeholder,
  required,
  label,
  type,
  value,
  validate
}) {
  const {
    hooks: { useSession },
    mutators: { updateUser },
    localization: contextLocalization,
    optimistic,
    toast
  } = useContext23(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { isPending: sessionPending, refetch } = useSession();
  let fieldSchema = z5.unknown();
  if (type === "number") {
    fieldSchema = required ? z5.preprocess(
      (val) => !val ? void 0 : Number(val),
      z5.number({
        required_error: `${label} ${localization.isRequired}`,
        invalid_type_error: `${label} ${localization.isInvalid}`
      })
    ) : z5.coerce.number({
      invalid_type_error: `${label} ${localization.isInvalid}`
    }).optional();
  } else if (type === "boolean") {
    fieldSchema = required ? z5.coerce.boolean({
      required_error: `${label} ${localization.isRequired}`,
      invalid_type_error: `${label} ${localization.isInvalid}`
    }).refine((val) => val === true, {
      message: `${label} ${localization.isRequired}`
    }) : z5.coerce.boolean({
      invalid_type_error: `${label} ${localization.isInvalid}`
    });
  } else {
    fieldSchema = required ? z5.string().min(1, `${label} ${localization.isRequired}`) : z5.string().optional();
  }
  const form = useForm6({
    resolver: zodResolver5(z5.object({ [name]: fieldSchema })),
    values: { [name]: value || "" }
  });
  const { isSubmitting } = form.formState;
  const updateField = async (values) => {
    await new Promise((resolve) => setTimeout(resolve));
    const newValue = values[name];
    if (value === newValue) {
      toast({
        variant: "error",
        message: `${label} ${localization.isTheSame}`
      });
      return;
    }
    if (validate && typeof newValue === "string" && !await validate(newValue)) {
      form.setError(name, {
        message: `${label} ${localization.isInvalid}`
      });
      return;
    }
    try {
      await updateUser({ [name]: newValue });
      await (refetch == null ? void 0 : refetch());
      toast({
        variant: "success",
        message: `${label} ${localization.updatedSuccessfully}`
      });
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  };
  return /* @__PURE__ */ jsx41(Form, { ...form, children: /* @__PURE__ */ jsx41("form", { onSubmit: form.handleSubmit(updateField), children: /* @__PURE__ */ jsx41(
    SettingsCard,
    {
      className,
      classNames,
      description,
      instructions,
      isPending: isPending || sessionPending,
      title: label,
      actionLabel: localization.save,
      optimistic,
      children: /* @__PURE__ */ jsx41(CardContent, { className: classNames == null ? void 0 : classNames.content, children: type === "boolean" ? /* @__PURE__ */ jsx41(
        FormField,
        {
          control: form.control,
          name,
          render: ({ field }) => /* @__PURE__ */ jsxs30(FormItem, { className: "flex", children: [
            /* @__PURE__ */ jsx41(FormControl, { children: /* @__PURE__ */ jsx41(
              Checkbox,
              {
                checked: field.value,
                onCheckedChange: field.onChange,
                disabled: isSubmitting,
                className: classNames == null ? void 0 : classNames.checkbox
              }
            ) }),
            /* @__PURE__ */ jsx41(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: label }),
            /* @__PURE__ */ jsx41(FormMessage, { className: classNames == null ? void 0 : classNames.error })
          ] })
        }
      ) : isPending ? /* @__PURE__ */ jsx41(Skeleton, { className: cn("h-9 w-full", classNames == null ? void 0 : classNames.skeleton) }) : /* @__PURE__ */ jsx41(
        FormField,
        {
          control: form.control,
          name,
          render: ({ field }) => /* @__PURE__ */ jsxs30(FormItem, { children: [
            /* @__PURE__ */ jsx41(FormControl, { children: /* @__PURE__ */ jsx41(
              Input,
              {
                className: classNames == null ? void 0 : classNames.input,
                placeholder: placeholder || (typeof label === "string" ? label : ""),
                type,
                disabled: isSubmitting,
                ...field,
                value: field.value
              }
            ) }),
            /* @__PURE__ */ jsx41(FormMessage, { className: classNames == null ? void 0 : classNames.error })
          ] })
        }
      ) })
    }
  ) }) });
}

// src/components/settings/two-factor/two-factor-card.tsx
import { useContext as useContext26, useState as useState16 } from "react";

// src/components/settings/two-factor/two-factor-password-dialog.tsx
import { zodResolver as zodResolver6 } from "@hookform/resolvers/zod";
import { Loader2 as Loader210 } from "lucide-react";
import { useContext as useContext25, useState as useState15 } from "react";
import { useForm as useForm7 } from "react-hook-form";
import * as z6 from "zod";

// src/components/settings/two-factor/backup-codes-dialog.tsx
import { CheckIcon as CheckIcon5, CopyIcon as CopyIcon2 } from "lucide-react";
import { useContext as useContext24, useState as useState14 } from "react";
import { Fragment as Fragment14, jsx as jsx42, jsxs as jsxs31 } from "react/jsx-runtime";
function BackupCodesDialog({
  classNames,
  backupCodes,
  onOpenChange,
  ...props
}) {
  var _a, _b, _c;
  const { localization } = useContext24(AuthUIContext);
  const [copied, setCopied] = useState14(false);
  const handleCopy = () => {
    const codeText = backupCodes.join("\n");
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsx42(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs31(
    DialogContent,
    {
      onOpenAutoFocus: (e) => e.preventDefault(),
      className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.content,
      children: [
        /* @__PURE__ */ jsxs31(DialogHeader, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.header, children: [
          /* @__PURE__ */ jsx42(DialogTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: localization.backupCodes }),
          /* @__PURE__ */ jsx42(
            DialogDescription,
            {
              className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
              children: localization.backupCodesDescription
            }
          )
        ] }),
        /* @__PURE__ */ jsx42("div", { className: "grid grid-cols-2 gap-2", children: backupCodes.map((code, index) => /* @__PURE__ */ jsx42(
          "div",
          {
            className: "rounded-md bg-muted p-2 text-center font-mono text-sm",
            children: code
          },
          index
        )) }),
        /* @__PURE__ */ jsxs31(DialogFooter, { className: (_c = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _c.footer, children: [
          /* @__PURE__ */ jsx42(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: handleCopy,
              disabled: copied,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
              children: copied ? /* @__PURE__ */ jsxs31(Fragment14, { children: [
                /* @__PURE__ */ jsx42(CheckIcon5, { className: classNames == null ? void 0 : classNames.icon }),
                localization.copiedToClipboard
              ] }) : /* @__PURE__ */ jsxs31(Fragment14, { children: [
                /* @__PURE__ */ jsx42(CopyIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                localization.copyAllCodes
              ] })
            }
          ),
          /* @__PURE__ */ jsx42(
            Button,
            {
              type: "button",
              variant: "default",
              onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
              children: localization.continue
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/settings/two-factor/two-factor-password-dialog.tsx
import { Fragment as Fragment15, jsx as jsx43, jsxs as jsxs32 } from "react/jsx-runtime";
function TwoFactorPasswordDialog({
  classNames,
  onOpenChange,
  isTwoFactorEnabled,
  ...props
}) {
  var _a, _b;
  const { localization, authClient, basePath, viewPaths, navigate, toast, twoFactor } = useContext25(AuthUIContext);
  const [showBackupCodesDialog, setShowBackupCodesDialog] = useState15(false);
  const [backupCodes, setBackupCodes] = useState15([]);
  const [totpURI, setTotpURI] = useState15(null);
  const formSchema = z6.object({
    password: z6.string().min(1, { message: localization.passwordRequired })
  });
  const form = useForm7({
    resolver: zodResolver6(formSchema),
    defaultValues: {
      password: ""
    }
  });
  const { isSubmitting } = form.formState;
  async function enableTwoFactor({ password }) {
    try {
      const response = await authClient.twoFactor.enable({
        password,
        fetchOptions: { throw: true }
      });
      onOpenChange == null ? void 0 : onOpenChange(false);
      setBackupCodes(response.backupCodes);
      if (twoFactor == null ? void 0 : twoFactor.includes("totp")) {
        setTotpURI(response.totpURI);
      }
      setTimeout(() => {
        setShowBackupCodesDialog(true);
      }, 250);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  async function disableTwoFactor({ password }) {
    try {
      await authClient.twoFactor.disable({
        password,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.twoFactorDisabled
      });
      onOpenChange == null ? void 0 : onOpenChange(false);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  return /* @__PURE__ */ jsxs32(Fragment15, { children: [
    /* @__PURE__ */ jsx43(Dialog, { onOpenChange, ...props, children: /* @__PURE__ */ jsxs32(DialogContent, { className: cn("sm:max-w-md", classNames == null ? void 0 : classNames.dialog), children: [
      /* @__PURE__ */ jsxs32(DialogHeader, { className: (_a = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _a.header, children: [
        /* @__PURE__ */ jsx43(DialogTitle, { className: classNames == null ? void 0 : classNames.title, children: localization.twoFactor }),
        /* @__PURE__ */ jsx43(DialogDescription, { className: classNames == null ? void 0 : classNames.description, children: isTwoFactorEnabled ? localization.twoFactorDisableInstructions : localization.twoFactorEnableInstructions })
      ] }),
      /* @__PURE__ */ jsx43(Form, { ...form, children: /* @__PURE__ */ jsxs32(
        "form",
        {
          onSubmit: form.handleSubmit(
            isTwoFactorEnabled ? disableTwoFactor : enableTwoFactor
          ),
          className: "grid gap-4",
          children: [
            /* @__PURE__ */ jsx43(
              FormField,
              {
                control: form.control,
                name: "password",
                render: ({ field }) => /* @__PURE__ */ jsxs32(FormItem, { children: [
                  /* @__PURE__ */ jsx43(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.password }),
                  /* @__PURE__ */ jsx43(FormControl, { children: /* @__PURE__ */ jsx43(
                    PasswordInput,
                    {
                      className: classNames == null ? void 0 : classNames.input,
                      placeholder: localization.passwordPlaceholder,
                      autoComplete: "current-password",
                      ...field
                    }
                  ) }),
                  /* @__PURE__ */ jsx43(FormMessage, { className: classNames == null ? void 0 : classNames.error })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs32(DialogFooter, { className: (_b = classNames == null ? void 0 : classNames.dialog) == null ? void 0 : _b.footer, children: [
              /* @__PURE__ */ jsx43(
                Button,
                {
                  type: "button",
                  variant: "secondary",
                  onClick: () => onOpenChange == null ? void 0 : onOpenChange(false),
                  className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.secondaryButton),
                  children: localization.cancel
                }
              ),
              /* @__PURE__ */ jsxs32(
                Button,
                {
                  type: "submit",
                  disabled: isSubmitting,
                  className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
                  children: [
                    isSubmitting && /* @__PURE__ */ jsx43(Loader210, { className: "animate-spin" }),
                    isTwoFactorEnabled ? localization.disable : localization.enable
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx43(
      BackupCodesDialog,
      {
        classNames,
        open: showBackupCodesDialog,
        onOpenChange: (open) => {
          setShowBackupCodesDialog(open);
          if (!open) {
            const url = `${basePath}/${viewPaths.twoFactor}`;
            navigate(
              (twoFactor == null ? void 0 : twoFactor.includes("totp")) && totpURI ? `${url}?totpURI=${totpURI}` : url
            );
          }
        },
        backupCodes
      }
    )
  ] });
}

// src/components/settings/two-factor/two-factor-card.tsx
import { jsx as jsx44, jsxs as jsxs33 } from "react/jsx-runtime";
function TwoFactorCard({ className, classNames, localization }) {
  const {
    localization: contextLocalization,
    hooks: { useSession }
  } = useContext26(AuthUIContext);
  const [showPasswordDialog, setShowPasswordDialog] = useState16(false);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData, isPending } = useSession();
  const isTwoFactorEnabled = sessionData == null ? void 0 : sessionData.user.twoFactorEnabled;
  return /* @__PURE__ */ jsxs33("div", { children: [
    /* @__PURE__ */ jsx44(
      SettingsCard,
      {
        className,
        classNames,
        actionLabel: isTwoFactorEnabled ? localization.disable : localization.enable,
        description: localization.twoFactorCardDescription,
        instructions: isTwoFactorEnabled ? localization.twoFactorDisableInstructions : localization.twoFactorEnableInstructions,
        isPending,
        title: localization.twoFactor,
        action: () => setShowPasswordDialog(true)
      }
    ),
    /* @__PURE__ */ jsx44(
      TwoFactorPasswordDialog,
      {
        classNames,
        open: showPasswordDialog,
        onOpenChange: setShowPasswordDialog,
        isTwoFactorEnabled: !!isTwoFactorEnabled
      }
    )
  ] });
}

// src/components/settings/update-avatar-card.tsx
import { Trash2Icon, UploadCloudIcon } from "lucide-react";
import { useContext as useContext27, useRef as useRef2, useState as useState17 } from "react";
import { jsx as jsx45, jsxs as jsxs34 } from "react/jsx-runtime";
async function resizeAndCropImage(file, name, size, avatarExtension) {
  const image = await loadImage(file);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  const minEdge = Math.min(image.width, image.height);
  const sx = (image.width - minEdge) / 2;
  const sy = (image.height - minEdge) / 2;
  const sWidth = minEdge;
  const sHeight = minEdge;
  ctx == null ? void 0 : ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, size, size);
  const resizedImageBlob = await new Promise(
    (resolve) => canvas.toBlob(resolve, `image/${avatarExtension}`)
  );
  return new File([resizedImageBlob], `${name}.${avatarExtension}`, {
    type: `image/${avatarExtension}`
  });
}
async function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();
    reader.onload = (e) => {
      var _a;
      image.src = (_a = e.target) == null ? void 0 : _a.result;
    };
    image.onload = () => resolve(image);
    image.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
function UpdateAvatarCard({
  className,
  classNames,
  isPending: externalIsPending,
  localization
}) {
  var _a;
  const {
    hooks: { useSession },
    mutators: { updateUser },
    localization: authLocalization2,
    optimistic,
    uploadAvatar,
    avatarSize,
    avatarExtension,
    toast
  } = useContext27(AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  const { data: sessionData, isPending: sessionPending } = useSession();
  const fileInputRef = useRef2(null);
  const [loading, setLoading] = useState17(false);
  const handleAvatarChange = async (file) => {
    if (!sessionData) return;
    setLoading(true);
    const resizedFile = await resizeAndCropImage(
      file,
      sessionData.user.id,
      avatarSize,
      avatarExtension
    );
    let image;
    if (uploadAvatar) {
      image = await uploadAvatar(resizedFile);
    } else {
      image = await fileToBase64(resizedFile);
    }
    if (!image) {
      setLoading(false);
      return;
    }
    if (optimistic && !uploadAvatar) setLoading(false);
    try {
      await updateUser({ image });
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
    setLoading(false);
  };
  const handleDeleteAvatar = async () => {
    if (!sessionData) return;
    setLoading(true);
    try {
      await updateUser({ image: null });
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
    setLoading(false);
  };
  const openFileDialog = () => {
    var _a2;
    return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
  };
  const isPending = externalIsPending || sessionPending;
  return /* @__PURE__ */ jsxs34(Card, { className: cn("w-full pb-0 text-start", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ jsx45(
      "input",
      {
        ref: fileInputRef,
        accept: "image/*",
        disabled: loading,
        hidden: true,
        type: "file",
        onChange: (e) => {
          var _a2;
          const file = (_a2 = e.target.files) == null ? void 0 : _a2.item(0);
          if (file) handleAvatarChange(file);
          e.target.value = "";
        }
      }
    ),
    /* @__PURE__ */ jsxs34("div", { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx45(
        SettingsCardHeader,
        {
          className: "grow self-start",
          title: localization.avatar,
          description: localization.avatarDescription,
          isPending,
          classNames
        }
      ),
      /* @__PURE__ */ jsxs34(DropdownMenu, { children: [
        /* @__PURE__ */ jsx45(DropdownMenuTrigger, { className: "me-6 rounded-full", children: isPending || loading ? /* @__PURE__ */ jsx45(
          Skeleton,
          {
            className: cn("size-20 rounded-full", (_a = classNames == null ? void 0 : classNames.avatar) == null ? void 0 : _a.base)
          }
        ) : /* @__PURE__ */ jsx45(
          UserAvatar,
          {
            className: "size-20 text-2xl",
            classNames: classNames == null ? void 0 : classNames.avatar,
            user: sessionData == null ? void 0 : sessionData.user
          },
          sessionData == null ? void 0 : sessionData.user.image
        ) }),
        /* @__PURE__ */ jsxs34(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsxs34(DropdownMenuItem, { onClick: openFileDialog, disabled: loading, children: [
            /* @__PURE__ */ jsx45(UploadCloudIcon, {}),
            localization.uploadAvatar
          ] }),
          (sessionData == null ? void 0 : sessionData.user.image) && /* @__PURE__ */ jsxs34(
            DropdownMenuItem,
            {
              onClick: handleDeleteAvatar,
              disabled: loading,
              variant: "destructive",
              children: [
                /* @__PURE__ */ jsx45(Trash2Icon, {}),
                localization.deleteAvatar
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx45(
      SettingsCardFooter,
      {
        className: "!py-5",
        instructions: localization.avatarInstructions,
        classNames,
        isPending,
        isSubmitting: loading
      }
    )
  ] });
}
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// src/components/settings/update-name-card.tsx
import { useContext as useContext28 } from "react";
import { jsx as jsx46 } from "react/jsx-runtime";
function UpdateNameCard({
  className,
  classNames,
  isPending,
  localization
}) {
  const {
    hooks: { useSession },
    localization: contextLocalization,
    nameRequired
  } = useContext28(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  return /* @__PURE__ */ jsx46(
    UpdateFieldCard,
    {
      className,
      classNames,
      value: sessionData == null ? void 0 : sessionData.user.name,
      description: localization.nameDescription,
      name: "name",
      instructions: localization.nameInstructions,
      isPending,
      label: localization.name,
      localization,
      placeholder: localization.namePlaceholder,
      required: nameRequired
    }
  );
}

// src/components/settings/update-username-card.tsx
import { useContext as useContext29 } from "react";
import { jsx as jsx47 } from "react/jsx-runtime";
function UpdateUsernameCard({
  className,
  classNames,
  isPending,
  localization
}) {
  const {
    hooks: { useSession },
    localization: contextLocalization
  } = useContext29(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { data: sessionData } = useSession();
  const value = (sessionData == null ? void 0 : sessionData.user.displayUsername) || (sessionData == null ? void 0 : sessionData.user.username);
  return /* @__PURE__ */ jsx47(
    UpdateFieldCard,
    {
      className,
      classNames,
      value,
      description: localization.usernameDescription,
      name: "username",
      instructions: localization.usernameInstructions,
      isPending,
      label: localization.username,
      localization,
      placeholder: localization.usernamePlaceholder,
      required: true
    }
  );
}

// src/components/settings/settings-cards.tsx
import { Fragment as Fragment16, jsx as jsx48, jsxs as jsxs35 } from "react/jsx-runtime";
function SettingsCards({ className, classNames, localization }) {
  var _a, _b, _c, _d, _e, _f, _g;
  useAuthenticate();
  const [tab, setTab] = useState18("account");
  const {
    additionalFields,
    apiKeys: contextApiKeys,
    avatar,
    credentials,
    changeEmail,
    deleteUser,
    hooks,
    localization: contextLocalization,
    multiSession,
    nameRequired,
    otherProviders,
    passkey,
    providers,
    settingsFields,
    username,
    twoFactor
  } = useContext30(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const {
    useListAccounts,
    useListDeviceSessions,
    useListPasskeys,
    useListSessions,
    useListApiKeys,
    useSession
  } = hooks;
  const { data: sessionData, isPending: sessionPending } = useSession();
  const {
    data: accounts,
    isPending: accountsPending,
    refetch: refetchAccounts
  } = useListAccounts();
  const credentialsLinked = accounts == null ? void 0 : accounts.some((acc) => acc.provider === "credential");
  const {
    data: sessions,
    isPending: sessionsPending,
    refetch: refetchSessions
  } = useListSessions();
  let passkeys = void 0;
  let passkeysPending = void 0;
  let refetchPasskeys = void 0;
  if (passkey) {
    const result = useListPasskeys();
    passkeys = result.data;
    passkeysPending = result.isPending;
    refetchPasskeys = result.refetch;
  }
  let deviceSessions = void 0;
  let deviceSessionsPending = void 0;
  let refetchDeviceSessions = void 0;
  if (multiSession) {
    const result = useListDeviceSessions();
    deviceSessions = result.data;
    deviceSessionsPending = result.isPending;
    refetchDeviceSessions = result.refetch;
  }
  let apiKeys = void 0;
  let apiKeysPending = void 0;
  let refetchApiKeys = void 0;
  if (contextApiKeys) {
    const result = useListApiKeys();
    apiKeys = result.data;
    apiKeysPending = result.isPending;
    refetchApiKeys = result.refetch;
  }
  return /* @__PURE__ */ jsxs35(
    "div",
    {
      className: cn(
        "flex w-full grow flex-col gap-4 md:flex-row md:gap-12",
        className,
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        /* @__PURE__ */ jsxs35(DropdownMenu, { children: [
          /* @__PURE__ */ jsx48(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs35(
            Button,
            {
              size: "lg",
              className: cn(
                "w-full justify-start md:hidden",
                (_a = classNames == null ? void 0 : classNames.dropdown) == null ? void 0 : _a.trigger
              ),
              children: [
                tab === "account" && /* @__PURE__ */ jsxs35(Fragment16, { children: [
                  /* @__PURE__ */ jsx48(UserIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                  localization.account
                ] }),
                tab === "security" && /* @__PURE__ */ jsxs35(Fragment16, { children: [
                  /* @__PURE__ */ jsx48(LockIcon, { className: classNames == null ? void 0 : classNames.icon }),
                  localization.security
                ] }),
                tab === "api-keys" && /* @__PURE__ */ jsxs35(Fragment16, { children: [
                  /* @__PURE__ */ jsx48(KeyIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                  localization.apiKeys
                ] }),
                /* @__PURE__ */ jsx48(MenuIcon, { className: cn("ml-auto", (_b = classNames == null ? void 0 : classNames.dropdown) == null ? void 0 : _b.menuIcon) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxs35(
            DropdownMenuContent,
            {
              className: cn("w-[calc(100svw-1rem)]", (_c = classNames == null ? void 0 : classNames.dropdown) == null ? void 0 : _c.content),
              children: [
                /* @__PURE__ */ jsxs35(DropdownMenuItem, { onClick: () => setTab("account"), children: [
                  /* @__PURE__ */ jsx48(UserIcon2, {}),
                  localization.account
                ] }),
                /* @__PURE__ */ jsxs35(DropdownMenuItem, { onClick: () => setTab("security"), children: [
                  /* @__PURE__ */ jsx48(LockIcon, {}),
                  localization.security
                ] }),
                /* @__PURE__ */ jsxs35(DropdownMenuItem, { onClick: () => setTab("api-keys"), children: [
                  /* @__PURE__ */ jsx48(KeyIcon2, {}),
                  localization.apiKeys
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx48("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs35("div", { className: cn("grid w-64 gap-1 xl:w-72", (_d = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _d.base), children: [
          /* @__PURE__ */ jsxs35(
            Button,
            {
              size: "lg",
              className: cn("w-full justify-start", (_e = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _e.button),
              variant: tab === "account" ? "default" : "ghost",
              onClick: () => setTab("account"),
              children: [
                /* @__PURE__ */ jsx48(UserIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                localization.account
              ]
            }
          ),
          /* @__PURE__ */ jsxs35(
            Button,
            {
              size: "lg",
              className: cn("w-full justify-start", (_f = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _f.button),
              variant: tab === "security" ? "default" : "ghost",
              onClick: () => setTab("security"),
              children: [
                /* @__PURE__ */ jsx48(LockIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.security
              ]
            }
          ),
          contextApiKeys && /* @__PURE__ */ jsxs35(
            Button,
            {
              size: "lg",
              className: cn("w-full justify-start", (_g = classNames == null ? void 0 : classNames.sidebar) == null ? void 0 : _g.button),
              variant: tab === "api-keys" ? "default" : "ghost",
              onClick: () => setTab("api-keys"),
              children: [
                /* @__PURE__ */ jsx48(KeyIcon2, { className: classNames == null ? void 0 : classNames.icon }),
                localization.apiKeys
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs35("div", { className: cn("flex w-full flex-col gap-4 md:gap-6", classNames == null ? void 0 : classNames.cards), children: [
          tab === "account" && /* @__PURE__ */ jsxs35(Fragment16, { children: [
            avatar && /* @__PURE__ */ jsx48(
              UpdateAvatarCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization
              }
            ),
            username && /* @__PURE__ */ jsx48(
              UpdateUsernameCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization
              }
            ),
            ((settingsFields == null ? void 0 : settingsFields.includes("name")) || nameRequired) && /* @__PURE__ */ jsx48(
              UpdateNameCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization
              }
            ),
            changeEmail && /* @__PURE__ */ jsx48(
              ChangeEmailCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization
              }
            ),
            settingsFields == null ? void 0 : settingsFields.map((field) => {
              const additionalField = additionalFields == null ? void 0 : additionalFields[field];
              if (!additionalField) return null;
              const {
                label,
                description,
                instructions,
                placeholder,
                required,
                type,
                validate
              } = additionalField;
              const defaultValue = sessionData == null ? void 0 : sessionData.user[field];
              return /* @__PURE__ */ jsx48(
                UpdateFieldCard,
                {
                  classNames: classNames == null ? void 0 : classNames.card,
                  value: defaultValue,
                  description,
                  name: field,
                  instructions,
                  isPending: sessionPending,
                  label,
                  localization,
                  placeholder,
                  required,
                  type,
                  validate
                },
                field
              );
            }),
            multiSession && /* @__PURE__ */ jsx48(
              AccountsCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                deviceSessions,
                isPending: deviceSessionsPending,
                localization,
                refetch: refetchDeviceSessions,
                skipHook: true
              }
            )
          ] }),
          tab === "security" && /* @__PURE__ */ jsxs35(Fragment16, { children: [
            credentials && /* @__PURE__ */ jsx48(
              ChangePasswordCard,
              {
                accounts,
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization,
                skipHook: true
              }
            ),
            ((providers == null ? void 0 : providers.length) || (otherProviders == null ? void 0 : otherProviders.length)) && /* @__PURE__ */ jsx48(
              ProvidersCard,
              {
                accounts,
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: accountsPending,
                localization,
                refetch: refetchAccounts,
                skipHook: true
              }
            ),
            twoFactor && credentialsLinked && /* @__PURE__ */ jsx48(
              TwoFactorCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                localization
              }
            ),
            passkey && /* @__PURE__ */ jsx48(
              PasskeysCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: passkeysPending,
                localization,
                passkeys,
                refetch: refetchPasskeys,
                skipHook: true
              }
            ),
            /* @__PURE__ */ jsx48(
              SessionsCard,
              {
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionsPending,
                localization,
                sessions,
                refetch: refetchSessions,
                skipHook: true
              }
            ),
            deleteUser && /* @__PURE__ */ jsx48(
              DeleteAccountCard,
              {
                accounts,
                classNames: classNames == null ? void 0 : classNames.card,
                isPending: sessionPending,
                localization,
                skipHook: true
              }
            )
          ] }),
          tab === "api-keys" && contextApiKeys && /* @__PURE__ */ jsx48(
            APIKeysCard,
            {
              classNames: classNames == null ? void 0 : classNames.card,
              isPending: apiKeysPending,
              localization,
              apiKeys,
              refetch: refetchApiKeys,
              skipHook: true
            }
          )
        ] })
      ]
    }
  );
}

// src/components/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx49 } from "react/jsx-runtime";
function Separator3({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx49(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// src/components/auth/auth-form.tsx
import { useContext as useContext45, useEffect as useEffect14 } from "react";

// src/components/auth/forms/email-otp-form.tsx
import { zodResolver as zodResolver7 } from "@hookform/resolvers/zod";
import { Loader2 as Loader211 } from "lucide-react";
import { useContext as useContext32, useEffect as useEffect4, useState as useState19 } from "react";
import { useForm as useForm8 } from "react-hook-form";
import * as z7 from "zod";

// src/components/ui/input-otp.tsx
import * as React2 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { jsx as jsx50, jsxs as jsxs36 } from "react/jsx-runtime";
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx50(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React2.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = (inputOTPContext == null ? void 0 : inputOTPContext.slots[index]) ?? {};
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx50("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx50("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx50("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ jsx50(MinusIcon, {}) });
}

// src/components/auth/otp-input-group.tsx
import { Fragment as Fragment17, jsx as jsx51, jsxs as jsxs37 } from "react/jsx-runtime";
function OTPInputGroup({
  otpSeparators = 0
}) {
  if (otpSeparators === 0) {
    return /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 0 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 1 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 2 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 3 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 4 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 5 })
    ] });
  }
  if (otpSeparators === 1) {
    return /* @__PURE__ */ jsxs37(Fragment17, { children: [
      /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 0 }),
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 1 }),
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 2 })
      ] }),
      /* @__PURE__ */ jsx51(InputOTPSeparator, {}),
      /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 3 }),
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 4 }),
        /* @__PURE__ */ jsx51(InputOTPSlot, { index: 5 })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs37(Fragment17, { children: [
    /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 0 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 1 })
    ] }),
    /* @__PURE__ */ jsx51(InputOTPSeparator, {}),
    /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 2 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 3 })
    ] }),
    /* @__PURE__ */ jsx51(InputOTPSeparator, {}),
    /* @__PURE__ */ jsxs37(InputOTPGroup, { children: [
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 4 }),
      /* @__PURE__ */ jsx51(InputOTPSlot, { index: 5 })
    ] })
  ] });
}

// src/components/auth/forms/email-otp-form.tsx
import { jsx as jsx52, jsxs as jsxs38 } from "react/jsx-runtime";
function EmailOTPForm(props) {
  const [email, setEmail] = useState19();
  if (!email) {
    return /* @__PURE__ */ jsx52(EmailForm, { ...props, setEmail });
  }
  return /* @__PURE__ */ jsx52(OTPForm, { ...props, email });
}
function EmailForm({
  className,
  classNames,
  isSubmitting,
  localization,
  setIsSubmitting,
  setEmail
}) {
  const isHydrated = useIsHydrated();
  const { authClient, localization: contextLocalization, toast } = useContext32(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const formSchema = z7.object({
    email: z7.string().min(1, { message: `${localization.email} ${localization.isRequired}` }).email({ message: `${localization.email} ${localization.isInvalid}` })
  });
  const form = useForm8({
    resolver: zodResolver7(formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  useEffect4(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function sendEmailOTP({ email }) {
    try {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.emailOTPVerificationSent
      });
      setEmail(email);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  return /* @__PURE__ */ jsx52(Form, { ...form, children: /* @__PURE__ */ jsxs38(
    "form",
    {
      onSubmit: form.handleSubmit(sendEmailOTP),
      noValidate: isHydrated,
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx52(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs38(FormItem, { children: [
              /* @__PURE__ */ jsx52(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.email }),
              /* @__PURE__ */ jsx52(FormControl, { children: /* @__PURE__ */ jsx52(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.emailPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx52(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx52(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn("w-full", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx52(Loader211, { className: "animate-spin" }) : localization.emailOTPSendAction
          }
        )
      ]
    }
  ) });
}
function OTPForm({
  className,
  classNames,
  isSubmitting,
  localization,
  otpSeparators = 0,
  redirectTo,
  setIsSubmitting,
  email
}) {
  const { authClient, localization: contextLocalization, toast } = useContext32(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({ redirectTo });
  const formSchema = z7.object({
    code: z7.string().min(1, {
      message: `${localization.emailOTP} ${localization.isRequired}`
    }).min(6, {
      message: `${localization.emailOTP} ${localization.isInvalid}`
    })
  });
  const form = useForm8({
    resolver: zodResolver7(formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  useEffect4(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function verifyCode({ code }) {
    try {
      await authClient.signIn.emailOtp({
        email,
        otp: code,
        fetchOptions: { throw: true }
      });
      await onSuccess();
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ jsx52(Form, { ...form, children: /* @__PURE__ */ jsxs38(
    "form",
    {
      onSubmit: form.handleSubmit(verifyCode),
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx52(
          FormField,
          {
            control: form.control,
            name: "code",
            render: ({ field }) => /* @__PURE__ */ jsxs38(FormItem, { children: [
              /* @__PURE__ */ jsx52(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.emailOTP }),
              /* @__PURE__ */ jsx52(FormControl, { children: /* @__PURE__ */ jsx52(
                InputOTP,
                {
                  ...field,
                  maxLength: 6,
                  onChange: (value) => {
                    field.onChange(value);
                    if (value.length === 6) {
                      form.handleSubmit(verifyCode)();
                    }
                  },
                  containerClassName: classNames == null ? void 0 : classNames.otpInputContainer,
                  className: classNames == null ? void 0 : classNames.otpInput,
                  disabled: isSubmitting,
                  children: /* @__PURE__ */ jsx52(OTPInputGroup, { otpSeparators })
                }
              ) }),
              /* @__PURE__ */ jsx52(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx52("div", { className: "grid gap-4", children: /* @__PURE__ */ jsxs38(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: [
              isSubmitting && /* @__PURE__ */ jsx52(Loader211, { className: "animate-spin" }),
              localization.emailOTPVerifyAction
            ]
          }
        ) })
      ]
    }
  ) });
}

// src/components/auth/forms/forgot-password-form.tsx
import { zodResolver as zodResolver8 } from "@hookform/resolvers/zod";
import { Loader2 as Loader212 } from "lucide-react";
import { useContext as useContext37, useEffect as useEffect6 } from "react";
import { useForm as useForm9 } from "react-hook-form";
import * as z8 from "zod";

// src/hooks/use-captcha.tsx
import { useGoogleReCaptcha } from "@wojtekmaj/react-recaptcha-v3";
import { useContext as useContext33, useRef as useRef3 } from "react";
var DEFAULT_CAPTCHA_ENDPOINTS = ["/sign-up/email", "/sign-in/email", "/forget-password"];
var sanitizeActionName = (action) => {
  let result = action.startsWith("/") ? action.substring(1) : action;
  result = result.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/\/([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/\//g, "").replace(/[^A-Za-z0-9_]/g, "");
  return result;
};
function useCaptcha({
  localization
}) {
  const { captcha, localization: contextLocalization } = useContext33(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const captchaRef = useRef3(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const executeCaptcha = async (action) => {
    if (!captcha) throw new Error(localization.missingCaptchaResponse);
    let response;
    switch (captcha.provider) {
      case "google-recaptcha-v3": {
        const sanitizedAction = sanitizeActionName(action);
        response = await (executeRecaptcha == null ? void 0 : executeRecaptcha(sanitizedAction));
        break;
      }
      case "google-recaptcha-v2-checkbox": {
        const recaptchaRef = captchaRef;
        response = recaptchaRef.current.getValue();
        break;
      }
      case "google-recaptcha-v2-invisible": {
        const recaptchaRef = captchaRef;
        response = await recaptchaRef.current.executeAsync();
        break;
      }
      case "cloudflare-turnstile": {
        const turnstileRef = captchaRef;
        response = turnstileRef.current.getResponse();
        break;
      }
      case "hcaptcha": {
        const hcaptchaRef = captchaRef;
        response = hcaptchaRef.current.getResponse();
        break;
      }
    }
    if (!response) {
      throw new Error(localization.missingCaptchaResponse);
    }
    return response;
  };
  const getCaptchaHeaders = async (action) => {
    if (!captcha) return void 0;
    const endpoints = captcha.endpoints || DEFAULT_CAPTCHA_ENDPOINTS;
    if (endpoints.includes(action)) {
      return { "x-captcha-response": await executeCaptcha(action) };
    }
    return void 0;
  };
  return {
    captchaRef,
    getCaptchaHeaders
  };
}

// src/components/captcha/captcha.tsx
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Turnstile } from "@marsidev/react-turnstile";
import { useContext as useContext36 } from "react";

// src/components/captcha/recaptcha-badge.tsx
import { useContext as useContext34 } from "react";
import { Fragment as Fragment18, jsx as jsx53, jsxs as jsxs39 } from "react/jsx-runtime";
function RecaptchaBadge({
  className,
  localization: propLocalization
}) {
  const isHydrated = useIsHydrated();
  const { captcha, localization: contextLocalization } = useContext34(AuthUIContext);
  const localization = { ...contextLocalization, ...propLocalization };
  if (!captcha) return null;
  if (!captcha.hideBadge) {
    return isHydrated ? /* @__PURE__ */ jsx53("style", { children: `
                .grecaptcha-badge { visibility: visible !important; }
            ` }) : null;
  }
  return /* @__PURE__ */ jsxs39(Fragment18, { children: [
    /* @__PURE__ */ jsx53("style", { children: `
                .grecaptcha-badge { visibility: hidden; }
            ` }),
    /* @__PURE__ */ jsxs39("p", { className: cn("text-muted-foreground text-xs", className), children: [
      localization.protectedByRecaptcha,
      " ",
      localization.byContinuingYouAgree,
      " Google",
      " ",
      /* @__PURE__ */ jsx53(
        "a",
        {
          className: "text-foreground hover:underline",
          href: "https://policies.google.com/privacy",
          target: "_blank",
          rel: "noreferrer",
          children: localization.privacyPolicy
        }
      ),
      " ",
      "&",
      " ",
      /* @__PURE__ */ jsx53(
        "a",
        {
          className: "text-foreground hover:underline",
          href: "https://policies.google.com/terms",
          target: "_blank",
          rel: "noreferrer",
          children: localization.termsOfService
        }
      ),
      "."
    ] })
  ] });
}

// src/components/captcha/recaptcha-v2.tsx
import { useContext as useContext35, useEffect as useEffect5 } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Fragment as Fragment19, jsx as jsx54, jsxs as jsxs40 } from "react/jsx-runtime";
function RecaptchaV2({
  ref
}) {
  const { captcha } = useContext35(AuthUIContext);
  const { theme } = useTheme();
  const { lang } = useLang();
  useEffect5(() => {
    ;
    window.recaptchaOptions = {
      useRecaptchaNet: captcha == null ? void 0 : captcha.recaptchaNet,
      enterprise: captcha == null ? void 0 : captcha.enterprise
    };
  }, [captcha]);
  if (!captcha) return null;
  return /* @__PURE__ */ jsxs40(Fragment19, { children: [
    /* @__PURE__ */ jsx54("style", { children: `
                .grecaptcha-badge {
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
    /* @__PURE__ */ jsx54(
      ReCAPTCHA,
      {
        ref,
        sitekey: captcha.siteKey,
        theme,
        hl: lang,
        size: captcha.provider === "google-recaptcha-v2-invisible" ? "invisible" : "normal",
        className: cn(
          captcha.provider === "google-recaptcha-v2-invisible" ? "absolute" : "mx-auto h-[76px] w-[302px] overflow-hidden rounded bg-muted"
        )
      },
      `${theme}-${lang}-${captcha.provider}`
    )
  ] });
}

// src/components/captcha/captcha.tsx
import { Fragment as Fragment20, jsx as jsx55, jsxs as jsxs41 } from "react/jsx-runtime";
var DEFAULT_CAPTCHA_ENDPOINTS2 = ["/sign-up/email", "/sign-in/email", "/forget-password"];
function Captcha({ ref, localization, action }) {
  const { captcha } = useContext36(AuthUIContext);
  if (!captcha) return null;
  if (action) {
    const endpoints = captcha.endpoints || DEFAULT_CAPTCHA_ENDPOINTS2;
    if (!endpoints.includes(action)) {
      return null;
    }
  }
  const { theme } = useTheme();
  const showRecaptchaV2 = captcha.provider === "google-recaptcha-v2-checkbox" || captcha.provider === "google-recaptcha-v2-invisible";
  const showRecaptchaBadge = captcha.provider === "google-recaptcha-v3" || captcha.provider === "google-recaptcha-v2-invisible";
  const showTurnstile = captcha.provider === "cloudflare-turnstile";
  const showHCaptcha = captcha.provider === "hcaptcha";
  return /* @__PURE__ */ jsxs41(Fragment20, { children: [
    showRecaptchaV2 && /* @__PURE__ */ jsx55(RecaptchaV2, { ref }),
    showRecaptchaBadge && /* @__PURE__ */ jsx55(RecaptchaBadge, { localization }),
    showTurnstile && /* @__PURE__ */ jsx55(
      Turnstile,
      {
        className: "mx-auto",
        ref,
        siteKey: captcha.siteKey,
        options: {
          theme,
          size: "flexible"
        }
      }
    ),
    showHCaptcha && /* @__PURE__ */ jsx55("div", { className: "mx-auto", children: /* @__PURE__ */ jsx55(HCaptcha, { ref, sitekey: captcha.siteKey, theme }) })
  ] });
}

// src/components/auth/forms/forgot-password-form.tsx
import { jsx as jsx56, jsxs as jsxs42 } from "react/jsx-runtime";
function ForgotPasswordForm({
  className,
  classNames,
  isSubmitting,
  localization,
  setIsSubmitting
}) {
  const isHydrated = useIsHydrated();
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    baseURL,
    localization: contextLocalization,
    navigate,
    toast,
    viewPaths
  } = useContext37(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const formSchema = z8.object({
    email: z8.string().min(1, {
      message: `${localization.email} ${localization.isRequired}`
    }).email({
      message: `${localization.email} ${localization.isInvalid}`
    })
  });
  const form = useForm9({
    resolver: zodResolver8(formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  useEffect6(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function forgotPassword({ email }) {
    try {
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/forget-password")
      };
      await authClient.forgetPassword({
        email,
        redirectTo: `${baseURL}${basePath}/${viewPaths.resetPassword}`,
        fetchOptions
      });
      toast({
        variant: "success",
        message: localization.forgotPasswordEmail
      });
      navigate(`${basePath}/${viewPaths.signIn}${window.location.search}`);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  return /* @__PURE__ */ jsx56(Form, { ...form, children: /* @__PURE__ */ jsxs42(
    "form",
    {
      onSubmit: form.handleSubmit(forgotPassword),
      noValidate: isHydrated,
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx56(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs42(FormItem, { children: [
              /* @__PURE__ */ jsx56(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.email }),
              /* @__PURE__ */ jsx56(FormControl, { children: /* @__PURE__ */ jsx56(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.emailPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx56(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx56(Captcha, { ref: captchaRef, localization, action: "/forget-password" }),
        /* @__PURE__ */ jsx56(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn("w-full", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx56(Loader212, { className: "animate-spin" }) : localization.forgotPasswordAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/magic-link-form.tsx
import { zodResolver as zodResolver9 } from "@hookform/resolvers/zod";
import { Loader2 as Loader213 } from "lucide-react";
import { useCallback as useCallback2, useContext as useContext38, useEffect as useEffect7 } from "react";
import { useForm as useForm10 } from "react-hook-form";
import * as z9 from "zod";
import { jsx as jsx57, jsxs as jsxs43 } from "react/jsx-runtime";
function MagicLinkForm({
  className,
  classNames,
  callbackURL: callbackURLProp,
  isSubmitting,
  localization,
  redirectTo: redirectToProp,
  setIsSubmitting
}) {
  const isHydrated = useIsHydrated();
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    baseURL,
    persistClient,
    localization: contextLocalization,
    redirectTo: contextRedirectTo,
    viewPaths,
    toast
  } = useContext38(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const getRedirectTo = useCallback2(
    () => redirectToProp || getSearchParam("redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const getCallbackURL = useCallback2(
    () => `${baseURL}${callbackURLProp || (persistClient ? `${basePath}/${viewPaths.callback}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [callbackURLProp, persistClient, basePath, viewPaths, baseURL, getRedirectTo]
  );
  const formSchema = z9.object({
    email: z9.string().min(1, { message: `${localization.email} ${localization.isRequired}` }).email({ message: `${localization.email} ${localization.isInvalid}` })
  });
  const form = useForm10({
    resolver: zodResolver9(formSchema),
    defaultValues: {
      email: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting;
  useEffect7(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting);
  }, [form.formState.isSubmitting, setIsSubmitting]);
  async function sendMagicLink({ email }) {
    try {
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/sign-in/magic-link")
      };
      await authClient.signIn.magicLink({
        email,
        callbackURL: getCallbackURL(),
        fetchOptions
      });
      toast({
        variant: "success",
        message: localization.magicLinkEmail
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  return /* @__PURE__ */ jsx57(Form, { ...form, children: /* @__PURE__ */ jsxs43(
    "form",
    {
      onSubmit: form.handleSubmit(sendMagicLink),
      noValidate: isHydrated,
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx57(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs43(FormItem, { children: [
              /* @__PURE__ */ jsx57(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.email }),
              /* @__PURE__ */ jsx57(FormControl, { children: /* @__PURE__ */ jsx57(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.emailPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx57(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx57(
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/sign-in/magic-link"
          }
        ),
        /* @__PURE__ */ jsx57(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn("w-full", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx57(Loader213, { className: "animate-spin" }) : localization.magicLinkAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/recover-account-form.tsx
import { zodResolver as zodResolver10 } from "@hookform/resolvers/zod";
import { Loader2 as Loader214 } from "lucide-react";
import { useContext as useContext39, useEffect as useEffect8 } from "react";
import { useForm as useForm11 } from "react-hook-form";
import * as z10 from "zod";
import { jsx as jsx58, jsxs as jsxs44 } from "react/jsx-runtime";
function RecoverAccountForm({
  className,
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting
}) {
  const { authClient, localization: contextLocalization, toast } = useContext39(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({ redirectTo });
  const formSchema = z10.object({
    code: z10.string().min(1, { message: localization.backupCodeRequired })
  });
  const form = useForm11({
    resolver: zodResolver10(formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  useEffect8(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function verifyBackupCode({ code }) {
    try {
      await authClient.twoFactor.verifyBackupCode({
        code,
        fetchOptions: { throw: true }
      });
      await onSuccess();
    } catch (error) {
      toast({ variant: "error", message: getLocalizedError({ error, localization }) });
      form.reset();
    }
  }
  return /* @__PURE__ */ jsx58(Form, { ...form, children: /* @__PURE__ */ jsxs44(
    "form",
    {
      onSubmit: form.handleSubmit(verifyBackupCode),
      className: cn("grid gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx58(
          FormField,
          {
            control: form.control,
            name: "code",
            render: ({ field }) => /* @__PURE__ */ jsxs44(FormItem, { children: [
              /* @__PURE__ */ jsx58(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.backupCode }),
              /* @__PURE__ */ jsx58(FormControl, { children: /* @__PURE__ */ jsx58(
                Input,
                {
                  placeholder: localization.backupCodePlaceholder,
                  autoComplete: "off",
                  className: classNames == null ? void 0 : classNames.input,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx58(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx58(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx58(Loader214, { className: "animate-spin" }) : localization.recoverAccountAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/reset-password-form.tsx
import { zodResolver as zodResolver11 } from "@hookform/resolvers/zod";
import { Loader2 as Loader215 } from "lucide-react";
import { useContext as useContext40, useEffect as useEffect9, useRef as useRef4 } from "react";
import { useForm as useForm12 } from "react-hook-form";
import * as z11 from "zod";
import { jsx as jsx59, jsxs as jsxs45 } from "react/jsx-runtime";
function ResetPasswordForm({
  className,
  classNames,
  localization,
  passwordValidation
}) {
  const tokenChecked = useRef4(false);
  const {
    authClient,
    basePath,
    confirmPassword: confirmPasswordEnabled,
    localization: contextLocalization,
    viewPaths,
    navigate,
    toast,
    passwordValidation: contextPasswordValidation
  } = useContext40(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const formSchema = z11.object({
    newPassword: getPasswordSchema(passwordValidation, {
      passwordRequired: localization.newPasswordRequired,
      passwordTooShort: localization.passwordTooShort,
      passwordTooLong: localization.passwordTooLong,
      passwordInvalid: localization.passwordInvalid
    }),
    confirmPassword: confirmPasswordEnabled ? getPasswordSchema(passwordValidation, {
      passwordRequired: localization.confirmPasswordRequired,
      passwordTooShort: localization.passwordTooShort,
      passwordTooLong: localization.passwordTooLong,
      passwordInvalid: localization.passwordInvalid
    }) : z11.string().optional()
  }).refine((data) => !confirmPasswordEnabled || data.newPassword === data.confirmPassword, {
    message: localization.passwordsDoNotMatch,
    path: ["confirmPassword"]
  });
  const form = useForm12({
    resolver: zodResolver11(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: ""
    }
  });
  const isSubmitting = form.formState.isSubmitting;
  useEffect9(() => {
    if (tokenChecked.current) return;
    tokenChecked.current = true;
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("token");
    if (!token || token === "INVALID_TOKEN") {
      navigate(`${basePath}/${viewPaths.signIn}${window.location.search}`);
      toast({ variant: "error", message: localization.resetPasswordInvalidToken });
    }
  }, [basePath, navigate, toast, viewPaths, localization]);
  async function resetPassword({ newPassword }) {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const token = searchParams.get("token");
      await authClient.resetPassword({
        newPassword,
        token,
        fetchOptions: { throw: true }
      });
      toast({
        variant: "success",
        message: localization.resetPasswordSuccess
      });
      navigate(`${basePath}/${viewPaths.signIn}${window.location.search}`);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ jsx59(Form, { ...form, children: /* @__PURE__ */ jsxs45(
    "form",
    {
      onSubmit: form.handleSubmit(resetPassword),
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx59(
          FormField,
          {
            control: form.control,
            name: "newPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs45(FormItem, { children: [
              /* @__PURE__ */ jsx59(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.newPassword }),
              /* @__PURE__ */ jsx59(FormControl, { children: /* @__PURE__ */ jsx59(
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.newPasswordPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx59(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        confirmPasswordEnabled && /* @__PURE__ */ jsx59(
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs45(FormItem, { children: [
              /* @__PURE__ */ jsx59(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.confirmPassword }),
              /* @__PURE__ */ jsx59(FormControl, { children: /* @__PURE__ */ jsx59(
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.confirmPasswordPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx59(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx59(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn("w-full", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx59(Loader215, { className: "animate-spin" }) : localization.resetPasswordAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/sign-in-form.tsx
import { zodResolver as zodResolver12 } from "@hookform/resolvers/zod";
import { Loader2 as Loader216 } from "lucide-react";
import { useContext as useContext41, useEffect as useEffect10 } from "react";
import { useForm as useForm13 } from "react-hook-form";
import * as z12 from "zod";
import { jsx as jsx60, jsxs as jsxs46 } from "react/jsx-runtime";
function SignInForm({
  className,
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting,
  passwordValidation
}) {
  const isHydrated = useIsHydrated();
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    authClient,
    basePath,
    forgotPassword,
    localization: contextLocalization,
    rememberMe: rememberMeEnabled,
    username: usernameEnabled,
    viewPaths,
    navigate,
    toast,
    Link,
    passwordValidation: contextPasswordValidation
  } = useContext41(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({
    redirectTo
  });
  const formSchema = z12.object({
    email: usernameEnabled ? z12.string().min(1, {
      message: `${localization.username} ${localization.isRequired}`
    }) : z12.string().min(1, {
      message: `${localization.email} ${localization.isRequired}`
    }).email({
      message: `${localization.email} ${localization.isInvalid}`
    }),
    password: getPasswordSchema(passwordValidation, localization),
    rememberMe: z12.boolean().optional()
  });
  const form = useForm13({
    resolver: zodResolver12(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: !rememberMeEnabled
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  useEffect10(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function signIn({
    email,
    password,
    rememberMe
  }) {
    try {
      let response = {};
      if (usernameEnabled && !isValidEmail(email)) {
        const fetchOptions = {
          throw: true,
          headers: await getCaptchaHeaders("/sign-in/username")
        };
        response = await authClient.signIn.username({
          username: email,
          password,
          rememberMe,
          fetchOptions
        });
      } else {
        const fetchOptions = {
          throw: true,
          headers: await getCaptchaHeaders("/sign-in/email"),
          credentials: "include"
        };
        response = await authClient.signIn.email({
          email,
          password,
          rememberMe,
          fetchOptions
        });
      }
      if (response.twoFactorRedirect) {
        navigate(`${basePath}/${viewPaths.twoFactor}${window.location.search}`);
      } else {
        await onSuccess();
      }
    } catch (error) {
      form.resetField("password");
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }
  return /* @__PURE__ */ jsx60(Form, { ...form, children: /* @__PURE__ */ jsxs46(
    "form",
    {
      onSubmit: form.handleSubmit(signIn),
      noValidate: isHydrated,
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        /* @__PURE__ */ jsx60(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs46(FormItem, { children: [
              /* @__PURE__ */ jsx60(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: usernameEnabled ? localization.username : localization.email }),
              /* @__PURE__ */ jsx60(FormControl, { children: /* @__PURE__ */ jsx60(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: usernameEnabled ? "text" : "email",
                  placeholder: usernameEnabled ? localization.signInUsernamePlaceholder : localization.emailPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx60(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx60(
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ jsxs46(FormItem, { children: [
              /* @__PURE__ */ jsxs46("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx60(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.password }),
                forgotPassword && /* @__PURE__ */ jsx60(
                  Link,
                  {
                    className: cn(
                      "text-sm hover:underline",
                      classNames == null ? void 0 : classNames.forgotPasswordLink
                    ),
                    href: `${basePath}/${viewPaths.forgotPassword}${isHydrated ? window.location.search : ""}`,
                    children: localization.forgotPasswordLink
                  }
                )
              ] }),
              /* @__PURE__ */ jsx60(FormControl, { children: /* @__PURE__ */ jsx60(
                PasswordInput,
                {
                  autoComplete: "current-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.passwordPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx60(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        rememberMeEnabled && /* @__PURE__ */ jsx60(
          FormField,
          {
            control: form.control,
            name: "rememberMe",
            render: ({ field }) => /* @__PURE__ */ jsxs46(FormItem, { className: "flex", children: [
              /* @__PURE__ */ jsx60(FormControl, { children: /* @__PURE__ */ jsx60(
                Checkbox,
                {
                  checked: field.value,
                  onCheckedChange: field.onChange,
                  disabled: isSubmitting
                }
              ) }),
              /* @__PURE__ */ jsx60(FormLabel, { children: localization.rememberMe })
            ] })
          }
        ),
        /* @__PURE__ */ jsx60(
          Captcha,
          {
            ref: captchaRef,
            localization,
            action: "/sign-in/email"
          }
        ),
        /* @__PURE__ */ jsx60(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn(
              "w-full",
              classNames == null ? void 0 : classNames.button,
              classNames == null ? void 0 : classNames.primaryButton
            ),
            children: isSubmitting ? /* @__PURE__ */ jsx60(Loader216, { className: "animate-spin" }) : localization.signInAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/sign-up-form.tsx
import { zodResolver as zodResolver13 } from "@hookform/resolvers/zod";
import { Loader2 as Loader217 } from "lucide-react";
import { useCallback as useCallback3, useContext as useContext42, useEffect as useEffect11 } from "react";
import { useForm as useForm14 } from "react-hook-form";
import * as z13 from "zod";
import { jsx as jsx61, jsxs as jsxs47 } from "react/jsx-runtime";
function SignUpForm({
  className,
  classNames,
  callbackURL,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting,
  passwordValidation
}) {
  const isHydrated = useIsHydrated();
  const { captchaRef, getCaptchaHeaders } = useCaptcha({ localization });
  const {
    additionalFields,
    authClient,
    basePath,
    baseURL,
    confirmPassword: confirmPasswordEnabled,
    emailVerification,
    localization: contextLocalization,
    nameRequired,
    persistClient,
    redirectTo: contextRedirectTo,
    signUpFields,
    username: usernameEnabled,
    viewPaths,
    navigate,
    toast,
    passwordValidation: contextPasswordValidation
  } = useContext42(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  passwordValidation = { ...contextPasswordValidation, ...passwordValidation };
  const getRedirectTo = useCallback3(
    () => redirectTo || getSearchParam("redirectTo") || contextRedirectTo,
    [redirectTo, contextRedirectTo]
  );
  const getCallbackURL = useCallback3(
    () => `${baseURL}${callbackURL || (persistClient ? `${basePath}/${viewPaths.callback}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [callbackURL, persistClient, basePath, viewPaths, baseURL, getRedirectTo]
  );
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({ redirectTo });
  const schemaFields = {
    email: z13.string().min(1, {
      message: `${localization.email} ${localization.isRequired}`
    }).email({
      message: `${localization.email} ${localization.isInvalid}`
    }),
    password: getPasswordSchema(passwordValidation, localization)
  };
  if (confirmPasswordEnabled) {
    schemaFields.confirmPassword = getPasswordSchema(passwordValidation, {
      passwordRequired: localization.confirmPasswordRequired,
      passwordTooShort: localization.passwordTooShort,
      passwordTooLong: localization.passwordTooLong,
      passwordInvalid: localization.passwordInvalid
    });
  }
  if (nameRequired || (signUpFields == null ? void 0 : signUpFields.includes("name"))) {
    schemaFields.name = nameRequired ? z13.string().min(1, {
      message: `${localization.name} ${localization.isRequired}`
    }) : z13.string().optional();
  }
  if (usernameEnabled) {
    schemaFields.username = z13.string().min(1, {
      message: `${localization.username} ${localization.isRequired}`
    });
  }
  if (signUpFields) {
    for (const field of signUpFields) {
      if (field === "name") continue;
      const additionalField = additionalFields == null ? void 0 : additionalFields[field];
      if (!additionalField) continue;
      let fieldSchema;
      if (additionalField.type === "number") {
        fieldSchema = additionalField.required ? z13.preprocess(
          (val) => !val ? void 0 : Number(val),
          z13.number({
            required_error: `${additionalField.label} ${localization.isRequired}`,
            invalid_type_error: `${additionalField.label} ${localization.isInvalid}`
          })
        ) : z13.coerce.number({
          invalid_type_error: `${additionalField.label} ${localization.isInvalid}`
        }).optional();
      } else if (additionalField.type === "boolean") {
        fieldSchema = additionalField.required ? z13.coerce.boolean({
          required_error: `${additionalField.label} ${localization.isRequired}`,
          invalid_type_error: `${additionalField.label} ${localization.isInvalid}`
        }).refine((val) => val === true, {
          message: `${additionalField.label} ${localization.isRequired}`
        }) : z13.coerce.boolean({
          invalid_type_error: `${additionalField.label} ${localization.isInvalid}`
        }).optional();
      } else {
        fieldSchema = additionalField.required ? z13.string().min(1, `${additionalField.label} ${localization.isRequired}`) : z13.string().optional();
      }
      schemaFields[field] = fieldSchema;
    }
  }
  const formSchema = z13.object(schemaFields).refine(
    (data) => {
      if (!confirmPasswordEnabled) return true;
      return data.password === data.confirmPassword;
    },
    {
      message: localization.passwordsDoNotMatch,
      path: ["confirmPassword"]
    }
  );
  const defaultValues = {
    email: "",
    password: "",
    ...confirmPasswordEnabled && { confirmPassword: "" },
    ...nameRequired || (signUpFields == null ? void 0 : signUpFields.includes("name")) ? { name: "" } : {},
    ...usernameEnabled ? { username: "" } : {}
  };
  if (signUpFields) {
    for (const field of signUpFields) {
      if (field === "name") continue;
      const additionalField = additionalFields == null ? void 0 : additionalFields[field];
      if (!additionalField) continue;
      defaultValues[field] = additionalField.type === "boolean" ? false : "";
    }
  }
  const form = useForm14({
    resolver: zodResolver13(formSchema),
    defaultValues
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  useEffect11(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  async function signUp({
    email,
    password,
    name,
    username,
    confirmPassword,
    ...additionalFieldValues
  }) {
    try {
      for (const [field, value] of Object.entries(additionalFieldValues)) {
        const additionalField = additionalFields == null ? void 0 : additionalFields[field];
        if (!(additionalField == null ? void 0 : additionalField.validate)) continue;
        if (typeof value === "string" && !await additionalField.validate(value)) {
          form.setError(field, {
            message: `${additionalField.label} ${localization.isInvalid}`
          });
          return;
        }
      }
      const fetchOptions = {
        throw: true,
        headers: await getCaptchaHeaders("/sign-up/email")
      };
      const data = await authClient.signUp.email({
        email,
        password,
        name: name || "",
        ...username !== void 0 && { username },
        ...additionalFieldValues,
        ...emailVerification && persistClient && { callbackURL: getCallbackURL() },
        fetchOptions
      });
      if ("token" in data && data.token) {
        await onSuccess();
      } else {
        navigate(`${basePath}/${viewPaths.signIn}${window.location.search}`);
        toast({ variant: "success", message: localization.signUpEmail });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      form.resetField("password");
      form.resetField("confirmPassword");
    }
  }
  return /* @__PURE__ */ jsx61(Form, { ...form, children: /* @__PURE__ */ jsxs47(
    "form",
    {
      onSubmit: form.handleSubmit(signUp),
      noValidate: isHydrated,
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        (nameRequired || (signUpFields == null ? void 0 : signUpFields.includes("name"))) && /* @__PURE__ */ jsx61(
          FormField,
          {
            control: form.control,
            name: "name",
            render: ({ field }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
              /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.name }),
              /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.namePlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        usernameEnabled && /* @__PURE__ */ jsx61(
          FormField,
          {
            control: form.control,
            name: "username",
            render: ({ field }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
              /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.username }),
              /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.usernamePlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx61(
          FormField,
          {
            control: form.control,
            name: "email",
            render: ({ field }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
              /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.email }),
              /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                Input,
                {
                  className: classNames == null ? void 0 : classNames.input,
                  type: "email",
                  placeholder: localization.emailPlaceholder,
                  disabled: isSubmitting,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        /* @__PURE__ */ jsx61(
          FormField,
          {
            control: form.control,
            name: "password",
            render: ({ field }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
              /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.password }),
              /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.passwordPlaceholder,
                  disabled: isSubmitting,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        confirmPasswordEnabled && /* @__PURE__ */ jsx61(
          FormField,
          {
            control: form.control,
            name: "confirmPassword",
            render: ({ field }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
              /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.confirmPassword }),
              /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                PasswordInput,
                {
                  autoComplete: "new-password",
                  className: classNames == null ? void 0 : classNames.input,
                  placeholder: localization.confirmPasswordPlaceholder,
                  disabled: isSubmitting,
                  enableToggle: true,
                  ...field
                }
              ) }),
              /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
            ] })
          }
        ),
        signUpFields == null ? void 0 : signUpFields.filter((field) => field !== "name").map((field) => {
          const additionalField = additionalFields == null ? void 0 : additionalFields[field];
          if (!additionalField) {
            console.error(`Additional field ${field} not found`);
            return null;
          }
          return additionalField.type === "boolean" ? /* @__PURE__ */ jsx61(
            FormField,
            {
              control: form.control,
              name: field,
              render: ({ field: formField }) => /* @__PURE__ */ jsxs47(FormItem, { className: "flex", children: [
                /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                  Checkbox,
                  {
                    checked: formField.value,
                    onCheckedChange: formField.onChange,
                    disabled: isSubmitting
                  }
                ) }),
                /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: additionalField.label }),
                /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
              ] })
            },
            field
          ) : /* @__PURE__ */ jsx61(
            FormField,
            {
              control: form.control,
              name: field,
              render: ({ field: formField }) => /* @__PURE__ */ jsxs47(FormItem, { children: [
                /* @__PURE__ */ jsx61(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: additionalField.label }),
                /* @__PURE__ */ jsx61(FormControl, { children: /* @__PURE__ */ jsx61(
                  Input,
                  {
                    className: classNames == null ? void 0 : classNames.input,
                    type: additionalField.type === "number" ? "number" : "text",
                    placeholder: additionalField.placeholder || (typeof additionalField.label === "string" ? additionalField.label : ""),
                    disabled: isSubmitting,
                    ...formField
                  }
                ) }),
                /* @__PURE__ */ jsx61(FormMessage, { className: classNames == null ? void 0 : classNames.error })
              ] })
            },
            field
          );
        }),
        /* @__PURE__ */ jsx61(Captcha, { ref: captchaRef, localization, action: "/sign-up/email" }),
        /* @__PURE__ */ jsx61(
          Button,
          {
            type: "submit",
            disabled: isSubmitting,
            className: cn("w-full", classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
            children: isSubmitting ? /* @__PURE__ */ jsx61(Loader217, { className: "animate-spin" }) : localization.signUpAction
          }
        )
      ]
    }
  ) });
}

// src/components/auth/forms/two-factor-form.tsx
import { zodResolver as zodResolver14 } from "@hookform/resolvers/zod";
import { Loader2 as Loader218, QrCodeIcon, SendIcon } from "lucide-react";
import { useContext as useContext43, useEffect as useEffect12, useRef as useRef5, useState as useState20 } from "react";
import { useForm as useForm15 } from "react-hook-form";
import QRCode from "react-qr-code";
import * as z14 from "zod";
import { Fragment as Fragment21, jsx as jsx62, jsxs as jsxs48 } from "react/jsx-runtime";
function TwoFactorForm({
  className,
  classNames,
  isSubmitting,
  localization,
  otpSeparators = 0,
  redirectTo,
  setIsSubmitting
}) {
  const isHydrated = useIsHydrated();
  const totpURI = isHydrated ? getSearchParam("totpURI") : null;
  const initialSendRef = useRef5(false);
  const {
    authClient,
    basePath,
    hooks: { useSession },
    localization: contextLocalization,
    twoFactor,
    viewPaths,
    toast,
    Link
  } = useContext43(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess, isPending: transitionPending } = useOnSuccessTransition({ redirectTo });
  const { data: sessionData } = useSession();
  const isTwoFactorEnabled = sessionData == null ? void 0 : sessionData.user.twoFactorEnabled;
  const [method, setMethod] = useState20(
    (twoFactor == null ? void 0 : twoFactor.length) === 1 ? twoFactor[0] : null
  );
  const [isSendingOtp, setIsSendingOtp] = useState20(false);
  const [cooldownSeconds, setCooldownSeconds] = useState20(0);
  const formSchema = z14.object({
    code: z14.string().min(1, {
      message: `${localization.oneTimePassword} ${localization.isRequired}`
    }).min(6, {
      message: `${localization.oneTimePassword} ${localization.isInvalid}`
    }),
    trustDevice: z14.boolean().optional()
  });
  const form = useForm15({
    resolver: zodResolver14(formSchema),
    defaultValues: {
      code: ""
    }
  });
  isSubmitting = isSubmitting || form.formState.isSubmitting || transitionPending;
  useEffect12(() => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(form.formState.isSubmitting || transitionPending);
  }, [form.formState.isSubmitting, transitionPending, setIsSubmitting]);
  useEffect12(() => {
    if (method === "otp" && cooldownSeconds <= 0 && !initialSendRef.current) {
      initialSendRef.current = true;
      sendOtp();
    }
  }, [method]);
  useEffect12(() => {
    if (cooldownSeconds <= 0) return;
    const timer = setTimeout(() => {
      setCooldownSeconds((prev) => prev - 1);
    }, 1e3);
    return () => clearTimeout(timer);
  }, [cooldownSeconds]);
  const sendOtp = async () => {
    if (isSendingOtp || cooldownSeconds > 0) return;
    try {
      setIsSendingOtp(true);
      await authClient.twoFactor.sendOtp({ fetchOptions: { throw: true } });
      setCooldownSeconds(60);
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      if (error.error.code === "INVALID_TWO_FACTOR_COOKIE") {
        history.back();
      }
    }
    initialSendRef.current = false;
    setIsSendingOtp(false);
  };
  async function verifyCode({ code, trustDevice }) {
    try {
      const verifyMethod = method === "totp" ? authClient.twoFactor.verifyTotp : authClient.twoFactor.verifyOtp;
      await verifyMethod({
        code,
        trustDevice,
        fetchOptions: { throw: true }
      });
      await onSuccess();
      if (sessionData && !isTwoFactorEnabled) {
        toast({
          variant: "success",
          message: localization == null ? void 0 : localization.twoFactorEnabled
        });
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      form.reset();
    }
  }
  return /* @__PURE__ */ jsx62(Form, { ...form, children: /* @__PURE__ */ jsxs48(
    "form",
    {
      onSubmit: form.handleSubmit(verifyCode),
      className: cn("grid w-full gap-6", className, classNames == null ? void 0 : classNames.base),
      children: [
        (twoFactor == null ? void 0 : twoFactor.includes("totp")) && totpURI && method === "totp" && /* @__PURE__ */ jsxs48("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx62(Label2, { className: classNames == null ? void 0 : classNames.label, children: localization.twoFactorTotpLabel }),
          /* @__PURE__ */ jsx62(
            QRCode,
            {
              className: cn("border shadow-xs", classNames == null ? void 0 : classNames.qrCode),
              value: totpURI
            }
          )
        ] }),
        method !== null && /* @__PURE__ */ jsxs48(Fragment21, { children: [
          /* @__PURE__ */ jsx62(
            FormField,
            {
              control: form.control,
              name: "code",
              render: ({ field }) => /* @__PURE__ */ jsxs48(FormItem, { children: [
                /* @__PURE__ */ jsxs48("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx62(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.oneTimePassword }),
                  /* @__PURE__ */ jsx62(
                    Link,
                    {
                      className: cn(
                        "text-sm hover:underline",
                        classNames == null ? void 0 : classNames.forgotPasswordLink
                      ),
                      href: `${basePath}/${viewPaths.recoverAccount}${isHydrated ? window.location.search : ""}`,
                      children: localization.forgotAuthenticator
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx62(FormControl, { children: /* @__PURE__ */ jsx62(
                  InputOTP,
                  {
                    ...field,
                    maxLength: 6,
                    onChange: (value) => {
                      field.onChange(value);
                      if (value.length === 6) {
                        form.handleSubmit(verifyCode)();
                      }
                    },
                    containerClassName: classNames == null ? void 0 : classNames.otpInputContainer,
                    className: classNames == null ? void 0 : classNames.otpInput,
                    disabled: isSubmitting,
                    children: /* @__PURE__ */ jsx62(OTPInputGroup, { otpSeparators })
                  }
                ) }),
                /* @__PURE__ */ jsx62(FormMessage, { className: classNames == null ? void 0 : classNames.error })
              ] })
            }
          ),
          /* @__PURE__ */ jsx62(
            FormField,
            {
              control: form.control,
              name: "trustDevice",
              render: ({ field }) => /* @__PURE__ */ jsxs48(FormItem, { className: "flex", children: [
                /* @__PURE__ */ jsx62(FormControl, { children: /* @__PURE__ */ jsx62(
                  Checkbox,
                  {
                    checked: field.value,
                    onCheckedChange: field.onChange,
                    disabled: isSubmitting,
                    className: classNames == null ? void 0 : classNames.checkbox
                  }
                ) }),
                /* @__PURE__ */ jsx62(FormLabel, { className: classNames == null ? void 0 : classNames.label, children: localization.trustDevice })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs48("div", { className: "grid gap-4", children: [
          method !== null && /* @__PURE__ */ jsxs48(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.primaryButton),
              children: [
                isSubmitting && /* @__PURE__ */ jsx62(Loader218, { className: "animate-spin" }),
                localization.twoFactorAction
              ]
            }
          ),
          method === "otp" && (twoFactor == null ? void 0 : twoFactor.includes("otp")) && /* @__PURE__ */ jsxs48(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: sendOtp,
              disabled: cooldownSeconds > 0 || isSendingOtp || isSubmitting,
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.outlineButton),
              children: [
                isSendingOtp ? /* @__PURE__ */ jsx62(Loader218, { className: "animate-spin" }) : /* @__PURE__ */ jsx62(SendIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.resendCode,
                cooldownSeconds > 0 && ` (${cooldownSeconds})`
              ]
            }
          ),
          method !== "otp" && (twoFactor == null ? void 0 : twoFactor.includes("otp")) && /* @__PURE__ */ jsxs48(
            Button,
            {
              type: "button",
              variant: "secondary",
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.secondaryButton),
              onClick: () => setMethod("otp"),
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ jsx62(SendIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.sendVerificationCode
              ]
            }
          ),
          method !== "totp" && (twoFactor == null ? void 0 : twoFactor.includes("totp")) && /* @__PURE__ */ jsxs48(
            Button,
            {
              type: "button",
              variant: "secondary",
              className: cn(classNames == null ? void 0 : classNames.button, classNames == null ? void 0 : classNames.secondaryButton),
              onClick: () => setMethod("totp"),
              disabled: isSubmitting,
              children: [
                /* @__PURE__ */ jsx62(QrCodeIcon, { className: classNames == null ? void 0 : classNames.icon }),
                localization.continueWithAuthenticator
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

// src/components/auth/sign-out.tsx
import { Loader2 as Loader219 } from "lucide-react";
import { useContext as useContext44, useEffect as useEffect13, useRef as useRef6 } from "react";
import { jsx as jsx63 } from "react/jsx-runtime";
function SignOut() {
  const signingOut = useRef6(false);
  const { authClient, basePath, viewPaths } = useContext44(AuthUIContext);
  const { onSuccess } = useOnSuccessTransition({ redirectTo: `${basePath}/${viewPaths.signIn}` });
  useEffect13(() => {
    if (signingOut.current) return;
    signingOut.current = true;
    authClient.signOut().finally(onSuccess);
  }, [authClient, onSuccess]);
  return /* @__PURE__ */ jsx63(Loader219, { className: "animate-spin" });
}

// src/components/auth/auth-form.tsx
import { jsx as jsx64 } from "react/jsx-runtime";
function AuthForm({
  className,
  classNames,
  callbackURL,
  isSubmitting,
  localization,
  pathname,
  redirectTo,
  view,
  otpSeparators = 0,
  setIsSubmitting
}) {
  const {
    basePath,
    credentials,
    localization: contextLocalization,
    magicLink,
    emailOTP,
    signUp: signUpEnabled,
    twoFactor: twoFactorEnabled,
    viewPaths,
    replace
  } = useContext45(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const path = pathname == null ? void 0 : pathname.split("/").pop();
  useEffect14(() => {
    if (path && !getAuthViewByPath(viewPaths, path)) {
      console.error(`Invalid auth view: ${path}`);
      replace(`${basePath}/${viewPaths.signIn}${window.location.search}`);
    }
  }, [path, viewPaths, basePath, replace]);
  view = view || getAuthViewByPath(viewPaths, path) || "signIn";
  useEffect14(() => {
    let isInvalidView = false;
    if (view === "magicLink" && (!magicLink || !credentials && !emailOTP)) {
      isInvalidView = true;
    }
    if (view === "emailOTP" && (!emailOTP || !credentials && !magicLink)) {
      isInvalidView = true;
    }
    if (view === "signUp" && !signUpEnabled) {
      isInvalidView = true;
    }
    if (!credentials && ["signUp", "forgotPassword", "resetPassword", "twoFactor", "recoverAccount"].includes(
      view
    )) {
      isInvalidView = true;
    }
    if (["twoFactor", "recoverAccount"].includes(view) && !twoFactorEnabled) {
      isInvalidView = true;
    }
    if (isInvalidView) {
      replace(`${basePath}/${viewPaths.signIn}${window.location.search}`);
    }
  }, [
    basePath,
    view,
    viewPaths,
    credentials,
    replace,
    emailOTP,
    signUpEnabled,
    magicLink,
    twoFactorEnabled
  ]);
  if (view === "signOut") return /* @__PURE__ */ jsx64(SignOut, {});
  if (view === "callback") return /* @__PURE__ */ jsx64(AuthCallback, { redirectTo });
  if (view === "signIn") {
    return credentials ? /* @__PURE__ */ jsx64(
      SignInForm,
      {
        className,
        classNames,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : magicLink ? /* @__PURE__ */ jsx64(
      MagicLinkForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : emailOTP ? /* @__PURE__ */ jsx64(
      EmailOTPForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    ) : null;
  }
  if (view === "twoFactor") {
    return /* @__PURE__ */ jsx64(
      TwoFactorForm,
      {
        className,
        classNames,
        localization,
        otpSeparators,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "recoverAccount") {
    return /* @__PURE__ */ jsx64(
      RecoverAccountForm,
      {
        className,
        classNames,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "magicLink") {
    return /* @__PURE__ */ jsx64(
      MagicLinkForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "emailOTP") {
    return /* @__PURE__ */ jsx64(
      EmailOTPForm,
      {
        className,
        classNames,
        callbackURL,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "forgotPassword") {
    return /* @__PURE__ */ jsx64(
      ForgotPasswordForm,
      {
        className,
        classNames,
        localization,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
  if (view === "resetPassword") {
    return /* @__PURE__ */ jsx64(
      ResetPasswordForm,
      {
        className,
        classNames,
        localization
      }
    );
  }
  if (view === "signUp") {
    return signUpEnabled && /* @__PURE__ */ jsx64(
      SignUpForm,
      {
        className,
        classNames,
        localization,
        redirectTo,
        isSubmitting,
        setIsSubmitting
      }
    );
  }
}

// src/components/auth/email-otp-button.tsx
import { LockIcon as LockIcon2, MailIcon } from "lucide-react";
import { useContext as useContext46 } from "react";
import { jsx as jsx65, jsxs as jsxs49 } from "react/jsx-runtime";
function EmailOTPButton({
  classNames,
  isSubmitting,
  localization,
  view
}) {
  var _a, _b, _c, _d;
  const { viewPaths, navigate, basePath } = useContext46(AuthUIContext);
  return /* @__PURE__ */ jsxs49(
    Button,
    {
      className: cn("w-full", (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button, (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton),
      disabled: isSubmitting,
      type: "button",
      variant: "secondary",
      onClick: () => navigate(
        `${basePath}/${view === "emailOTP" ? viewPaths.signIn : viewPaths.emailOTP}${window.location.search}`
      ),
      children: [
        view === "emailOTP" ? /* @__PURE__ */ jsx65(LockIcon2, { className: (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.icon }) : /* @__PURE__ */ jsx65(MailIcon, { className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }),
        localization.signInWith,
        " ",
        view === "emailOTP" ? localization.password : localization.emailOTP
      ]
    }
  );
}

// src/components/auth/magic-link-button.tsx
import { LockIcon as LockIcon3, MailIcon as MailIcon2 } from "lucide-react";
import { useContext as useContext47 } from "react";
import { jsx as jsx66, jsxs as jsxs50 } from "react/jsx-runtime";
function MagicLinkButton({
  classNames,
  isSubmitting,
  localization,
  view
}) {
  var _a, _b, _c, _d;
  const { viewPaths, navigate, basePath, credentials } = useContext47(AuthUIContext);
  return /* @__PURE__ */ jsxs50(
    Button,
    {
      className: cn("w-full", (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button, (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton),
      disabled: isSubmitting,
      type: "button",
      variant: "secondary",
      onClick: () => navigate(
        `${basePath}/${view === "magicLink" || !credentials ? viewPaths.signIn : viewPaths.magicLink}${window.location.search}`
      ),
      children: [
        view === "magicLink" ? /* @__PURE__ */ jsx66(LockIcon3, { className: (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.icon }) : /* @__PURE__ */ jsx66(MailIcon2, { className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }),
        localization.signInWith,
        " ",
        view === "magicLink" ? localization.password : localization.magicLink
      ]
    }
  );
}

// src/components/auth/one-tap.tsx
import { useContext as useContext48, useEffect as useEffect15, useMemo, useRef as useRef7 } from "react";
function OneTap({ localization, redirectTo }) {
  const { authClient, localization: contextLocalization, toast } = useContext48(AuthUIContext);
  const oneTapFetched = useRef7(false);
  localization = useMemo(
    () => ({ ...contextLocalization, ...localization }),
    [contextLocalization, localization]
  );
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  useEffect15(() => {
    if (oneTapFetched.current) return;
    oneTapFetched.current = true;
    try {
      ;
      authClient.oneTap({
        fetchOptions: {
          throw: true,
          onSuccess
        }
      });
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
    }
  }, [authClient, localization, onSuccess, toast]);
  return null;
}

// src/components/auth/passkey-button.tsx
import { KeyIcon as KeyIcon3 } from "lucide-react";
import { useContext as useContext49 } from "react";
import { jsx as jsx67, jsxs as jsxs51 } from "react/jsx-runtime";
function PasskeyButton({
  classNames,
  isSubmitting,
  localization,
  redirectTo,
  setIsSubmitting
}) {
  var _a, _b;
  const { authClient, localization: contextLocalization, toast } = useContext49(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  const { onSuccess } = useOnSuccessTransition({ redirectTo });
  const signInPassKey = async () => {
    setIsSubmitting == null ? void 0 : setIsSubmitting(true);
    try {
      const response = await authClient.signIn.passkey({
        fetchOptions: { throw: true }
      });
      if (response == null ? void 0 : response.error) {
        toast({
          variant: "error",
          message: getLocalizedError({ error: response.error, localization })
        });
        setIsSubmitting == null ? void 0 : setIsSubmitting(false);
      } else {
        onSuccess();
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      setIsSubmitting == null ? void 0 : setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs51(
    Button,
    {
      className: cn("w-full", (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button, (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.secondaryButton),
      disabled: isSubmitting,
      formNoValidate: true,
      name: "passkey",
      value: "true",
      variant: "secondary",
      onClick: signInPassKey,
      children: [
        /* @__PURE__ */ jsx67(KeyIcon3, {}),
        localization.signInWith,
        " ",
        localization.passkey
      ]
    }
  );
}

// src/components/auth/provider-button.tsx
import { useCallback as useCallback4, useContext as useContext50 } from "react";
import { Fragment as Fragment22, jsx as jsx68, jsxs as jsxs52 } from "react/jsx-runtime";
function ProviderButton({
  className,
  classNames,
  callbackURL: callbackURLProp,
  isSubmitting,
  localization,
  other,
  provider,
  redirectTo: redirectToProp,
  socialLayout,
  setIsSubmitting
}) {
  var _a, _b, _c, _d, _e, _f, _g;
  const {
    authClient,
    basePath,
    baseURL,
    colorIcons,
    noColorIcons,
    persistClient,
    redirectTo: contextRedirectTo,
    viewPaths,
    signInSocial,
    toast
  } = useContext50(AuthUIContext);
  const getRedirectTo = useCallback4(
    () => redirectToProp || getSearchParam("redirectTo") || contextRedirectTo,
    [redirectToProp, contextRedirectTo]
  );
  const getCallbackURL = useCallback4(
    () => `${baseURL}${callbackURLProp || (persistClient ? `${basePath}/${viewPaths.callback}?redirectTo=${getRedirectTo()}` : getRedirectTo())}`,
    [callbackURLProp, persistClient, basePath, viewPaths, baseURL, getRedirectTo]
  );
  const doSignInSocial = async () => {
    setIsSubmitting(true);
    try {
      if (other) {
        await authClient.signIn.oauth2({
          providerId: provider.provider,
          callbackURL: getCallbackURL(),
          fetchOptions: { throw: true }
        });
      } else {
        const socialParams = {
          provider: provider.provider,
          callbackURL: getCallbackURL(),
          fetchOptions: { throw: true }
        };
        if (signInSocial) {
          await signInSocial(socialParams);
          setTimeout(() => {
            setIsSubmitting(false);
          }, 1e4);
        } else {
          await authClient.signIn.social(socialParams);
        }
      }
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs52(
    Button,
    {
      className: cn(
        socialLayout === "vertical" ? "w-full" : "grow",
        className,
        (_a = classNames == null ? void 0 : classNames.form) == null ? void 0 : _a.button,
        (_b = classNames == null ? void 0 : classNames.form) == null ? void 0 : _b.outlineButton,
        (_c = classNames == null ? void 0 : classNames.form) == null ? void 0 : _c.providerButton
      ),
      disabled: isSubmitting,
      variant: "outline",
      onClick: doSignInSocial,
      children: [
        provider.icon && (colorIcons ? /* @__PURE__ */ jsx68(provider.icon, { variant: "color", className: (_d = classNames == null ? void 0 : classNames.form) == null ? void 0 : _d.icon }) : noColorIcons ? /* @__PURE__ */ jsx68(provider.icon, { className: (_e = classNames == null ? void 0 : classNames.form) == null ? void 0 : _e.icon }) : /* @__PURE__ */ jsxs52(Fragment22, { children: [
          /* @__PURE__ */ jsx68(
            provider.icon,
            {
              className: cn("dark:hidden", (_f = classNames == null ? void 0 : classNames.form) == null ? void 0 : _f.icon),
              variant: "color"
            }
          ),
          /* @__PURE__ */ jsx68(
            provider.icon,
            {
              className: cn("hidden dark:block", (_g = classNames == null ? void 0 : classNames.form) == null ? void 0 : _g.icon)
            }
          )
        ] })),
        socialLayout === "grid" && provider.name,
        socialLayout === "vertical" && `${localization.signInWith} ${provider.name}`
      ]
    }
  );
}

// src/components/auth/auth-card.tsx
import { Fragment as Fragment23, jsx as jsx69, jsxs as jsxs53 } from "react/jsx-runtime";
function AuthCard({
  className,
  classNames,
  callbackURL,
  cardHeader,
  localization,
  pathname,
  redirectTo,
  socialLayout = "auto",
  view,
  otpSeparators = 0
}) {
  const isHydrated = useIsHydrated();
  const {
    basePath,
    credentials,
    localization: contextLocalization,
    magicLink,
    emailOTP,
    oneTap,
    otherProviders,
    passkey,
    providers,
    settingsURL,
    signUp,
    viewPaths,
    replace,
    Link
  } = useContext51(AuthUIContext);
  localization = { ...contextLocalization, ...localization };
  if (socialLayout === "auto") {
    socialLayout = !credentials ? "vertical" : providers && providers.length > 2 ? "horizontal" : "vertical";
  }
  const path = pathname == null ? void 0 : pathname.split("/").pop();
  view = view || getAuthViewByPath(viewPaths, path) || "signIn";
  const [isSubmitting, setIsSubmitting] = useState21(false);
  useEffect16(() => {
    const handlePageHide = () => {
      setIsSubmitting(false);
    };
    window.addEventListener("pagehide", handlePageHide);
    return () => {
      setIsSubmitting(false);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);
  useEffect16(() => {
    if (view === "settings" && settingsURL) replace(settingsURL);
  }, [replace, settingsURL, view]);
  if (view === "callback") return /* @__PURE__ */ jsx69(AuthCallback, { redirectTo });
  if (view === "signOut") return /* @__PURE__ */ jsx69(SignOut, {});
  if (view === "settings")
    return settingsURL ? /* @__PURE__ */ jsx69(Loader220, { className: "animate-spin" }) : /* @__PURE__ */ jsx69(
      SettingsCards,
      {
        localization,
        className: cn(className),
        classNames: classNames == null ? void 0 : classNames.settings
      }
    );
  const description = !credentials && !magicLink && !emailOTP ? localization.disabledCredentialsDescription : localization[`${view}Description`];
  return /* @__PURE__ */ jsxs53(Card, { className: cn("w-full max-w-sm", className, classNames == null ? void 0 : classNames.base), children: [
    /* @__PURE__ */ jsx69(CardHeader, { className: classNames == null ? void 0 : classNames.header, children: cardHeader ? cardHeader : /* @__PURE__ */ jsxs53(Fragment23, { children: [
      /* @__PURE__ */ jsx69(CardTitle, { className: cn("text-lg md:text-xl", classNames == null ? void 0 : classNames.title), children: localization[view] }),
      description && /* @__PURE__ */ jsx69(
        CardDescription,
        {
          className: cn("text-xs md:text-sm", classNames == null ? void 0 : classNames.description),
          children: description
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs53(CardContent, { className: cn("grid gap-6", classNames == null ? void 0 : classNames.content), children: [
      oneTap && ["signIn", "signUp", "magicLink", "emailOTP"].includes(view) && /* @__PURE__ */ jsx69(OneTap, { localization, redirectTo }),
      (credentials || magicLink || emailOTP) && /* @__PURE__ */ jsxs53("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsx69(
          AuthForm,
          {
            classNames: classNames == null ? void 0 : classNames.form,
            callbackURL,
            isSubmitting,
            localization,
            otpSeparators,
            pathname,
            redirectTo,
            setIsSubmitting
          }
        ),
        magicLink && (credentials && [
          "forgotPassword",
          "signUp",
          "signIn",
          "magicLink",
          "emailOTP"
        ].includes(view) || emailOTP && view === "emailOTP") && /* @__PURE__ */ jsx69(
          MagicLinkButton,
          {
            classNames,
            localization,
            view,
            isSubmitting
          }
        ),
        emailOTP && (credentials && [
          "forgotPassword",
          "signUp",
          "signIn",
          "magicLink",
          "emailOTP"
        ].includes(view) || magicLink && ["signIn", "magicLink"].includes(view)) && /* @__PURE__ */ jsx69(
          EmailOTPButton,
          {
            classNames,
            localization,
            view,
            isSubmitting
          }
        )
      ] }),
      view !== "resetPassword" && ((providers == null ? void 0 : providers.length) || (otherProviders == null ? void 0 : otherProviders.length) || passkey) && /* @__PURE__ */ jsxs53(Fragment23, { children: [
        (credentials || magicLink || emailOTP) && /* @__PURE__ */ jsxs53("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx69(
            Separator3,
            {
              className: cn("!w-auto grow", classNames == null ? void 0 : classNames.separator)
            }
          ),
          /* @__PURE__ */ jsx69("span", { className: "flex-shrink-0 text-muted-foreground text-sm", children: localization.orContinueWith }),
          /* @__PURE__ */ jsx69(
            Separator3,
            {
              className: cn("!w-auto grow", classNames == null ? void 0 : classNames.separator)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs53("div", { className: "grid gap-4", children: [
          ((providers == null ? void 0 : providers.length) || (otherProviders == null ? void 0 : otherProviders.length)) && /* @__PURE__ */ jsxs53(
            "div",
            {
              className: cn(
                "flex w-full items-center justify-between gap-4",
                socialLayout === "horizontal" && "flex-wrap",
                socialLayout === "vertical" && "flex-col",
                socialLayout === "grid" && "grid grid-cols-2"
              ),
              children: [
                providers == null ? void 0 : providers.map((provider) => {
                  const socialProvider = socialProviders.find(
                    (socialProvider2) => socialProvider2.provider === provider
                  );
                  if (!socialProvider) return null;
                  return /* @__PURE__ */ jsx69(
                    ProviderButton,
                    {
                      classNames,
                      callbackURL,
                      isSubmitting,
                      localization,
                      provider: socialProvider,
                      redirectTo,
                      setIsSubmitting,
                      socialLayout
                    },
                    provider
                  );
                }),
                otherProviders == null ? void 0 : otherProviders.map((provider) => /* @__PURE__ */ jsx69(
                  ProviderButton,
                  {
                    classNames,
                    callbackURL,
                    isSubmitting,
                    localization,
                    provider,
                    redirectTo,
                    setIsSubmitting,
                    socialLayout,
                    other: true
                  },
                  provider.provider
                ))
              ]
            }
          ),
          passkey && [
            "signIn",
            "magicLink",
            "emailOTP",
            "recoverAccount",
            "twoFactor",
            "forgotPassword"
          ].includes(view) && /* @__PURE__ */ jsx69(
            PasskeyButton,
            {
              classNames,
              isSubmitting,
              localization,
              redirectTo,
              setIsSubmitting
            }
          )
        ] })
      ] })
    ] }),
    credentials && signUp && /* @__PURE__ */ jsxs53(
      CardFooter,
      {
        className: cn(
          "justify-center gap-1.5 text-muted-foreground text-sm",
          classNames == null ? void 0 : classNames.footer
        ),
        children: [
          view === "signIn" || view === "magicLink" || view === "emailOTP" ? localization.dontHaveAnAccount : view === "signUp" ? localization.alreadyHaveAnAccount : /* @__PURE__ */ jsx69(ArrowLeftIcon, { className: "size-3" }),
          view === "signIn" || view === "magicLink" || view === "emailOTP" || view === "signUp" ? /* @__PURE__ */ jsx69(
            Link,
            {
              className: cn("text-foreground underline", classNames == null ? void 0 : classNames.footerLink),
              href: `${basePath}/${viewPaths[view === "signIn" || view === "magicLink" || view === "emailOTP" ? "signUp" : "signIn"]}${isHydrated ? window.location.search : ""}`,
              children: /* @__PURE__ */ jsx69(
                Button,
                {
                  variant: "link",
                  size: "sm",
                  className: cn(
                    "px-0 text-foreground underline",
                    classNames == null ? void 0 : classNames.footerLink
                  ),
                  children: view === "signIn" || view === "magicLink" || view === "emailOTP" ? localization.signUp : localization.signIn
                }
              )
            }
          ) : /* @__PURE__ */ jsx69(
            Button,
            {
              variant: "link",
              size: "sm",
              className: cn("px-0 text-foreground underline", classNames == null ? void 0 : classNames.footerLink),
              onClick: () => window.history.back(),
              children: localization.goBack
            }
          )
        ]
      }
    )
  ] });
}

// src/components/auth-loading.tsx
import { useContext as useContext52 } from "react";
function AuthLoading({ children }) {
  const {
    hooks: { useSession }
  } = useContext52(AuthUIContext);
  const { isPending } = useSession();
  return isPending ? children : null;
}

// src/components/redirect-to-sign-in.tsx
function RedirectToSignIn() {
  useAuthenticate({ authView: "signIn" });
  return null;
}

// src/components/redirect-to-sign-up.tsx
function RedirectToSignUp() {
  useAuthenticate({ authView: "signUp" });
  return null;
}

// src/components/signed-in.tsx
import { useContext as useContext53 } from "react";
function SignedIn({ children }) {
  const {
    hooks: { useSession }
  } = useContext53(AuthUIContext);
  const { data } = useSession();
  return data ? children : null;
}

// src/components/signed-out.tsx
import { useContext as useContext54 } from "react";
function SignedOut({ children }) {
  const {
    hooks: { useSession }
  } = useContext54(AuthUIContext);
  const { data, isPending } = useSession();
  return !data && !isPending ? children : null;
}

// src/components/user-button.tsx
import {
  ChevronsUpDown,
  LogInIcon,
  LogOutIcon as LogOutIcon2,
  PlusCircleIcon,
  SettingsIcon,
  UserRoundPlus
} from "lucide-react";
import { Fragment as Fragment24, useContext as useContext55, useEffect as useEffect17, useState as useState22 } from "react";
import { Fragment as Fragment25, jsx as jsx70, jsxs as jsxs54 } from "react/jsx-runtime";
function UserButton({
  className,
  classNames,
  additionalLinks,
  disableDefaultLinks,
  localization,
  size = "icon"
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const {
    basePath,
    hooks: { useSession, useListDeviceSessions },
    mutators: { setActiveSession },
    localization: authLocalization2,
    multiSession,
    settingsURL,
    signUp,
    toast,
    viewPaths,
    onSessionChange,
    Link
  } = useContext55(AuthUIContext);
  localization = { ...authLocalization2, ...localization };
  let deviceSessions = null;
  let deviceSessionsPending = false;
  if (multiSession) {
    const { data, isPending: isPending2 } = useListDeviceSessions();
    deviceSessions = data;
    deviceSessionsPending = isPending2;
  }
  const { data: sessionData, isPending: sessionPending } = useSession();
  const user = sessionData == null ? void 0 : sessionData.user;
  const [activeSessionPending, setActiveSessionPending] = useState22(false);
  const isPending = sessionPending || activeSessionPending;
  const switchAccount = async (sessionToken) => {
    setActiveSessionPending(true);
    try {
      await setActiveSession({ sessionToken });
      onSessionChange == null ? void 0 : onSessionChange();
    } catch (error) {
      toast({
        variant: "error",
        message: getLocalizedError({ error, localization })
      });
      setActiveSessionPending(false);
    }
  };
  useEffect17(() => {
    if (!multiSession) return;
    setActiveSessionPending(false);
  }, [sessionData, multiSession]);
  return /* @__PURE__ */ jsxs54(DropdownMenu, { children: [
    /* @__PURE__ */ jsx70(
      DropdownMenuTrigger,
      {
        asChild: size === "full",
        className: cn(size === "icon" && "rounded-full", (_a = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _a.base),
        children: size === "icon" ? /* @__PURE__ */ jsx70(
          UserAvatar,
          {
            isPending,
            className: cn("size-8", className, classNames == null ? void 0 : classNames.base),
            classNames: (_b = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _b.avatar,
            user,
            "aria-label": localization.account
          },
          user == null ? void 0 : user.image
        ) : /* @__PURE__ */ jsxs54(
          Button,
          {
            className: cn(
              "h-fit justify-between",
              className,
              (_c = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _c.base
            ),
            variant: "outline",
            children: [
              user && !user.isAnonymous || isPending ? /* @__PURE__ */ jsx70(
                UserView,
                {
                  user,
                  isPending,
                  classNames: (_d = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _d.user
                }
              ) : /* @__PURE__ */ jsxs54("div", { className: "flex items-center gap-2 truncate", children: [
                /* @__PURE__ */ jsx70(UserAvatar, { className: cn("my-0.5", (_e = classNames == null ? void 0 : classNames.trigger) == null ? void 0 : _e.avatar) }),
                /* @__PURE__ */ jsx70("span", { className: "truncate font-medium text-sm", children: localization == null ? void 0 : localization.account })
              ] }),
              /* @__PURE__ */ jsx70(ChevronsUpDown, {})
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs54(
      DropdownMenuContent,
      {
        className: cn("max-w-64", (_f = classNames == null ? void 0 : classNames.content) == null ? void 0 : _f.base),
        onCloseAutoFocus: (e) => e.preventDefault(),
        children: [
          /* @__PURE__ */ jsx70("div", { className: cn("p-2", (_g = classNames == null ? void 0 : classNames.content) == null ? void 0 : _g.menuItem), children: user && !user.isAnonymous || isPending ? /* @__PURE__ */ jsx70(
            UserView,
            {
              user,
              isPending,
              classNames: (_h = classNames == null ? void 0 : classNames.content) == null ? void 0 : _h.user
            }
          ) : /* @__PURE__ */ jsx70("div", { className: "-my-1 text-muted-foreground text-xs", children: localization.account }) }),
          /* @__PURE__ */ jsx70(DropdownMenuSeparator, { className: (_i = classNames == null ? void 0 : classNames.content) == null ? void 0 : _i.separator }),
          additionalLinks == null ? void 0 : additionalLinks.map(
            ({ href, icon, label, signedIn }, index) => {
              var _a2;
              return (signedIn === void 0 || signedIn && !!sessionData || !signedIn && !sessionData) && /* @__PURE__ */ jsx70(Link, { href, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_a2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _a2.menuItem, children: [
                icon,
                label
              ] }) }, index);
            }
          ),
          !user || user.isAnonymous ? /* @__PURE__ */ jsxs54(Fragment25, { children: [
            /* @__PURE__ */ jsx70(Link, { href: `${basePath}/${viewPaths.signIn}`, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_j = classNames == null ? void 0 : classNames.content) == null ? void 0 : _j.menuItem, children: [
              /* @__PURE__ */ jsx70(LogInIcon, {}),
              localization.signIn
            ] }) }),
            signUp && /* @__PURE__ */ jsx70(Link, { href: `${basePath}/${viewPaths.signUp}`, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_k = classNames == null ? void 0 : classNames.content) == null ? void 0 : _k.menuItem, children: [
              /* @__PURE__ */ jsx70(UserRoundPlus, {}),
              localization.signUp
            ] }) })
          ] }) : /* @__PURE__ */ jsxs54(Fragment25, { children: [
            !disableDefaultLinks && /* @__PURE__ */ jsx70(Link, { href: settingsURL || `${basePath}/${viewPaths.settings}`, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_l = classNames == null ? void 0 : classNames.content) == null ? void 0 : _l.menuItem, children: [
              /* @__PURE__ */ jsx70(SettingsIcon, {}),
              localization.settings
            ] }) }),
            /* @__PURE__ */ jsx70(Link, { href: `${basePath}/${viewPaths.signOut}`, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_m = classNames == null ? void 0 : classNames.content) == null ? void 0 : _m.menuItem, children: [
              /* @__PURE__ */ jsx70(LogOutIcon2, {}),
              localization.signOut
            ] }) })
          ] }),
          user && multiSession && /* @__PURE__ */ jsxs54(Fragment25, { children: [
            /* @__PURE__ */ jsx70(DropdownMenuSeparator, { className: (_n = classNames == null ? void 0 : classNames.content) == null ? void 0 : _n.separator }),
            !deviceSessions && deviceSessionsPending && /* @__PURE__ */ jsxs54(Fragment25, { children: [
              /* @__PURE__ */ jsx70(
                DropdownMenuItem,
                {
                  disabled: true,
                  className: (_o = classNames == null ? void 0 : classNames.content) == null ? void 0 : _o.menuItem,
                  children: /* @__PURE__ */ jsx70(
                    UserView,
                    {
                      isPending: true,
                      classNames: (_p = classNames == null ? void 0 : classNames.content) == null ? void 0 : _p.user
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsx70(DropdownMenuSeparator, { className: (_q = classNames == null ? void 0 : classNames.content) == null ? void 0 : _q.separator })
            ] }),
            deviceSessions == null ? void 0 : deviceSessions.filter((sessionData2) => sessionData2.user.id !== (user == null ? void 0 : user.id)).map(({ session, user: user2 }) => {
              var _a2, _b2, _c2;
              return /* @__PURE__ */ jsxs54(Fragment24, { children: [
                /* @__PURE__ */ jsx70(
                  DropdownMenuItem,
                  {
                    className: (_a2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _a2.menuItem,
                    onClick: () => switchAccount(session.token),
                    children: /* @__PURE__ */ jsx70(
                      UserView,
                      {
                        user: user2,
                        classNames: (_b2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _b2.user
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx70(
                  DropdownMenuSeparator,
                  {
                    className: (_c2 = classNames == null ? void 0 : classNames.content) == null ? void 0 : _c2.separator
                  }
                )
              ] }, session.id);
            }),
            /* @__PURE__ */ jsx70(Link, { href: `${basePath}/${viewPaths.signIn}`, children: /* @__PURE__ */ jsxs54(DropdownMenuItem, { className: (_r = classNames == null ? void 0 : classNames.content) == null ? void 0 : _r.menuItem, children: [
              /* @__PURE__ */ jsx70(PlusCircleIcon, {}),
              localization.addAccount
            ] }) })
          ] })
        ]
      }
    )
  ] });
}
export {
  APIKeysCard,
  AccountsCard,
  AppleIcon,
  AuthCallback,
  AuthCard,
  AuthForm,
  AuthLoading,
  AuthUIContext,
  AuthUIProvider,
  ChangeEmailCard,
  ChangePasswordCard,
  DeleteAccountCard,
  DiscordIcon,
  DropboxIcon,
  EmailTemplate,
  FacebookIcon,
  ForgotPasswordForm,
  GitHubIcon,
  GitLabIcon,
  GoogleIcon,
  KickIcon,
  LinkedInIcon,
  MagicLinkForm,
  MicrosoftIcon,
  PasskeysCard,
  PasswordInput,
  ProvidersCard,
  RecoverAccountForm,
  RedditIcon,
  RedirectToSignIn,
  RedirectToSignUp,
  ResetPasswordForm,
  RobloxIcon,
  SessionsCard,
  SettingsCard,
  SettingsCards,
  SignInForm,
  SignOut,
  SignUpForm,
  SignedIn,
  SignedOut,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwoFactorCard,
  TwoFactorForm,
  UpdateAvatarCard,
  UpdateFieldCard,
  UpdateNameCard,
  UpdateUsernameCard,
  UserAvatar,
  UserButton,
  UserView,
  VKIcon,
  XIcon,
  ZoomIcon,
  authLocalization,
  authViewPaths,
  socialProviders,
  useAuthenticate
};
