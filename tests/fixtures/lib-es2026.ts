const foo: unknown = new Error('foo');

if (Error.isError(foo)) {
	const bar: string = foo.message;
}
