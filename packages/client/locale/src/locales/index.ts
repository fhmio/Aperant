/**
 * The common-namespace dictionary pair. en is the source of truth for the
 * key set; ar is checked complete against it — a missing or extra ar key is
 * a compile error.
 */
export { en } from './en.ts'
export { ar } from './ar.ts'
export type { CommonKey } from './en.ts'
