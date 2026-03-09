try {
	throw new Error();
} catch (error) {
	/* @ts-expect-error */
	error.message;
}
