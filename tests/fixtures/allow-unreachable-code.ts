function foo(): boolean {
	return true;

	/* @ts-expect-error */
	return false;
}
