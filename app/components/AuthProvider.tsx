// @ts-nocheck
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: any;
  session: any;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithGoogle: () => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  updateUserMeta: (data: any) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signInWithGoogle: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  updateUserMeta: async () => ({ error: null }),
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('valor_local_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        // Default local profile
        const defaultUser = {
          id: 'local-user',
          user_metadata: {
            display_name: 'Pengguna',
            avatar_url: '/avatar.jpeg',
            level: 1,
            exp: 0,
          }
        };
        setUser(defaultUser);
        localStorage.setItem('valor_local_user', JSON.stringify(defaultUser));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = async () => ({ error: null });
  const signInWithGoogle = async () => ({ error: null });
  const signUp = async () => ({ error: null });
  const signOut = async () => {
    localStorage.removeItem('valor_local_user');
    setUser(null);
  };

  const updateUserMeta = async (data: any) => {
    if (!user) return { error: null };
    const updatedUser = {
      ...user,
      user_metadata: {
        ...user.user_metadata,
        ...data,
      }
    };
    setUser(updatedUser);
    localStorage.setItem('valor_local_user', JSON.stringify(updatedUser));
    return { error: null };
  };

  return (
    <AuthContext.Provider value={{ user, session: null, loading, signIn, signInWithGoogle, signUp, signOut, updateUserMeta }}>
      {children}
    </AuthContext.Provider>
  );
}
