const foo = ['foo'].values().next();

/* @ts-expect-error */
const bar: string = foo.value;

if (!foo.done) {
	const baz: string = foo.value;
}
