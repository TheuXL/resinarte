declare module 'postcss/lib/lazy-result' {
  // Fix for Promise.finally
  interface Promise<T> {
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }
  
  // Fix for Symbol
  const Symbol: SymbolConstructor;
}

declare module 'postcss/lib/no-work-result' {
  // Fix for Promise.finally
  interface Promise<T> {
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }
  
  // Fix for Symbol
  const Symbol: SymbolConstructor;
} 