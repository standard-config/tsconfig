function foo(value: number): boolean {
	switch (value) {
		/* @ts-expect-error */
		case 1:
			console.log();

		case 2:
			return true;

		default:
			return false;
	}
}
