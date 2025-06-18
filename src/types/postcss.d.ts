// Augment PostCSS types to fix Promise.finally and Symbol errors
import { Result, Root } from 'postcss';

declare module 'postcss' {
  interface Promise<T> {
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }
  
  // Add Symbol as a value
  const Symbol: SymbolConstructor;
} 