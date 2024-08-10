import type { Context } from 'use-context-selector';
import { useContextSelector } from 'use-context-selector';

export function useDefinedContext<T>(ctx: Context<T>) {
  const context = useContextSelector(ctx, (context) => context);

  if (!context) {
    throw new Error(
      `${ctx.displayName} must be used within ${ctx.displayName}.Provider`,
    );
  }

  return context;
}
