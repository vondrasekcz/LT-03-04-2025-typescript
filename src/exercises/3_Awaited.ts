/**
 * Recursion refers to a function or type calling itself repeatedly
 * until reaching a base condition.
 */



type MyAwaited<T> = TODO



type Result1 = MyAwaited<Promise<string>>;
//    ^?

type Result2 = MyAwaited<Promise<Promise<Promise<Promise<Promise<string>>>>>>;
//    ^?
