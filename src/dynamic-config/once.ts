export function once<T>(fn: () => T): () => T {
    let cache: { value: T } | undefined;
    return () => (cache ??= { value: fn() }).value;
}
