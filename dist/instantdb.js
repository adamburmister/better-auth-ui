// src/lib/instantdb/use-instant-options.ts
import { useMemo as useMemo4 } from "react";

// src/lib/instantdb/model-names.ts
var getModelName = ({
  namespace,
  modelNames,
  usePlural = false
}) => {
  return (modelNames == null ? void 0 : modelNames[namespace]) || `${namespace}${usePlural ? "s" : ""}`;
};

// src/lib/instantdb/use-list-accounts.ts
import { useMemo } from "react";
function useListAccounts({
  db,
  modelNames,
  usePlural,
  isPending
}) {
  const { user: authUser, isLoading: authLoading } = db.useAuth();
  const modelName = getModelName({
    namespace: "account",
    modelNames,
    usePlural
  });
  const { data, isLoading, error } = db.useQuery(
    authUser ? { [modelName]: { $: { where: { userId: authUser == null ? void 0 : authUser.id } } } } : null
  );
  const accounts = useMemo(() => {
    if (data == null ? void 0 : data[modelName]) {
      return data[modelName].map((account) => ({
        accountId: account.accountId,
        provider: account.providerId
      }));
    }
  }, [data, modelName]);
  return {
    data: accounts,
    isPending: !accounts && (isPending || authLoading || isLoading),
    error
  };
}

// src/lib/instantdb/use-list-sessions.ts
import { useMemo as useMemo2 } from "react";
function useListSessions({
  db,
  modelNames,
  usePlural,
  isPending
}) {
  const { user: authUser, isLoading: authLoading } = db.useAuth();
  const modelName = getModelName({
    namespace: "session",
    modelNames,
    usePlural
  });
  const now = useMemo2(() => Date.now(), []);
  const { data, isLoading } = db.useQuery(
    authUser ? {
      [modelName]: {
        $: {
          where: {
            userId: authUser == null ? void 0 : authUser.id,
            expiresAt: { $gte: now }
          }
        }
      }
    } : null
  );
  const sessions = useMemo2(() => {
    if (data == null ? void 0 : data[modelName]) {
      return data[modelName].map((session) => ({
        ...session,
        expiresAt: new Date(session.expiresAt),
        createdAt: new Date(session.createdAt),
        updatedAt: new Date(session.updatedAt)
      }));
    }
  }, [data, modelName]);
  return { data: sessions, isPending: !sessions && (isPending || authLoading || isLoading) };
}

// src/lib/instantdb/use-session.ts
import { useMemo as useMemo3 } from "react";
function useSession({
  db,
  sessionData,
  isPending,
  refetch,
  usePlural,
  modelNames
}) {
  const { user: authUser, error } = db.useAuth();
  const modelName = getModelName({
    namespace: "user",
    modelNames,
    usePlural
  });
  const { data } = db.useQuery(
    authUser ? { [modelName]: { $: { where: { id: authUser == null ? void 0 : authUser.id } } } } : null
  );
  const user = useMemo3(() => {
    var _a;
    if ((_a = data == null ? void 0 : data[modelName]) == null ? void 0 : _a.length) {
      const user2 = data[modelName][0];
      return {
        ...user2,
        createdAt: new Date(user2.createdAt),
        updatedAt: new Date(user2.updatedAt)
      };
    }
    return null;
  }, [data, modelName]);
  return {
    data: sessionData ? {
      session: sessionData.session,
      user: (sessionData == null ? void 0 : sessionData.user.id) === (user == null ? void 0 : user.id) ? user : sessionData.user
    } : void 0,
    isPending,
    refetch,
    error
  };
}

// src/lib/instantdb/use-instant-options.ts
function useInstantOptions({
  db,
  usePlural = true,
  modelNames,
  sessionData,
  isPending,
  user
}) {
  const userId = (user == null ? void 0 : user.id) || (sessionData == null ? void 0 : sessionData.user.id);
  const hooks = useMemo4(() => {
    return {
      useSession: () => useSession({
        db,
        modelNames,
        usePlural,
        sessionData,
        isPending
      }),
      useListAccounts: () => useListAccounts({
        db,
        modelNames,
        usePlural,
        sessionData,
        isPending
      }),
      useListSessions: () => useListSessions({
        db,
        modelNames,
        usePlural,
        sessionData,
        isPending
      })
    };
  }, [db, modelNames, usePlural, sessionData, isPending]);
  const mutators = useMemo4(() => {
    return {
      updateUser: async (data) => {
        if (!userId) {
          throw new Error("Unauthenticated");
        }
        const modelName = getModelName({
          namespace: "user",
          modelNames,
          usePlural
        });
        db.transact([
          db.tx[modelName][userId].update({
            ...data,
            updatedAt: Date.now()
          })
        ]);
      }
    };
  }, [db, userId, modelNames, usePlural]);
  return {
    hooks,
    mutators
  };
}
export {
  useInstantOptions
};
