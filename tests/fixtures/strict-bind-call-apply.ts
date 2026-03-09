function foo(value: number): number {
	return value;
}

/* @ts-expect-error */
foo.apply(undefined, 'bar');
