const foo = () => {
	/* @ts-expect-error */
	bar: 'baz';
};
