// Mock Database client (Database disabled)
const dummyQuery: any = {
  select: () => dummyQuery,
  insert: () => dummyQuery,
  update: () => dummyQuery,
  delete: () => dummyQuery,
  eq: () => dummyQuery,
  match: () => dummyQuery,
  single: () => Promise.resolve({ data: null, error: null }),
  then: (resolve: any) => resolve({ data: [], error: null }),
};

export const supabase: any = {
  from: () => dummyQuery,
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signInWithPassword: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signOut: async () => {},
    updateUser: async () => ({ data: { user: null }, error: null }),
    refreshSession: async () => {},
  },
  channel: () => ({
    on: () => ({ on: () => ({ subscribe: () => {} }) }),
    subscribe: () => {},
    unsubscribe: () => {},
    send: () => {},
    track: () => {},
  }),
};

export const supabaseAdmin: any = supabase;
