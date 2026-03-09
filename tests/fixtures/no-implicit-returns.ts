/* @ts-expect-error */
function foo(value: number): number {
	if (value) {
		return value;
	}
}
