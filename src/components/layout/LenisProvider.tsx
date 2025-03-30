'use client';

import { useLenis } from '@/hooks/useLenis';
import { ReactNode } from 'react';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  // Initialize Lenis
  useLenis();

  return <>{children}</>;
}