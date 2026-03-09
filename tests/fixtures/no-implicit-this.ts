function foo() {
	/* @ts-expect-error */
	return this.property;
}
