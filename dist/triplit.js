// src/lib/triplit/use-triplit-hooks.ts
import { useMemo as useMemo3 } from "react";

// src/lib/triplit/use-list-accounts.ts
import { useQuery } from "@triplit/react";
import { useMemo } from "react";

// src/lib/triplit/model-names.ts
var getModelName = ({
  namespace,
  modelNames,
  usePlural = false
}) => {
  return (modelNames == null ? void 0 : modelNames[namespace]) || `${namespace}${usePlural ? "s" : ""}`;
};

// src/lib/triplit/use-list-accounts.ts
function useListAccounts({
  triplit,
  modelNames,
  usePlural,
  isPending
}) {
  const modelName = getModelName({
    namespace: "account",
    modelNames,
    usePlural
  });
  const { results, error, fetching } = useQuery(triplit, triplit.query(modelName));
  const accounts = useMemo(() => {
    return results == null ? void 0 : results.map((account) => ({
      accountId: account.accountId,
      provider: account.providerId
    }));
  }, [results]);
  return {
    data: accounts,
    isPending: !accounts && (isPending || fetching),
    error
  };
}

// src/lib/triplit/use-list-sessions.ts
import { useQuery as useQuery2 } from "@triplit/react";
import { useMemo as useMemo2 } from "react";
function useListSessions({
  triplit,
  modelNames,
  usePlural,
  isPending
}) {
  const modelName = getModelName({
    namespace: "session",
    modelNames,
    usePlural
  });
  const now = useMemo2(() => Date.now(), []);
  const {
    results: sessions,
    error,
    fetching
  } = useQuery2(triplit, triplit.query(modelName).Where("expiresAt", ">=", now));
  return {
    data: sessions,
    isPending: !sessions && (isPending || fetching),
    error
  };
}

// src/lib/triplit/use-session.ts
import { useQueryOne } from "@triplit/react";
function useSession({
  triplit,
  sessionData,
  isPending,
  refetch,
  usePlural,
  modelNames
}) {
  const modelName = getModelName({
    namespace: "user",
    modelNames,
    usePlural
  });
  const { result: user } = useQueryOne(triplit, triplit.query(modelName));
  return {
    data: sessionData ? {
      session: sessionData.session,
      user: (sessionData == null ? void 0 : sessionData.user.id) === (user == null ? void 0 : user.id) ? user : sessionData.user
    } : void 0,
    isPending,
    refetch
  };
}

// src/lib/triplit/use-triplit-hooks.ts
function useTriplitHooks({
  triplit,
  usePlural = true,
  modelNames,
  sessionData,
  isPending
}) {
  const hooks = useMemo3(() => {
    return {
      useSession: () => useSession({
        triplit,
        modelNames,
        usePlural,
        sessionData,
        isPending
      }),
      useListAccounts: () => useListAccounts({
        triplit,
        modelNames,
        usePlural,
        sessionData,
        isPending
      }),
      useListSessions: () => useListSessions({
        triplit,
        modelNames,
        usePlural,
        sessionData,
        isPending
      })
    };
  }, [triplit, modelNames, usePlural, sessionData, isPending]);
  return {
    hooks
  };
}
export {
  useTriplitHooks
};
