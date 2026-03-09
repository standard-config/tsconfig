class Foo {
	method() {}
}

class Bar extends Foo {
	/* @ts-expect-error */
	method() {}
}
