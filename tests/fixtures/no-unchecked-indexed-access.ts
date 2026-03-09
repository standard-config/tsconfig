const foo: Record<string, string> = {};

/* @ts-expect-error */
foo.bar.toUpperCase();
