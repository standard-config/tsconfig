const foo = (value: string) => {
	void value;
};

/* @ts-expect-error */
const bar: (value?: string) => void = foo;
