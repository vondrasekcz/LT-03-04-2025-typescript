/**
 * Template Literal Types allow you to create types that describe patterns
 * or combinations of strings using template literal syntax
 * (like in JavaScript template strings).
 */


// Reverse a string using template literal types
type ReverseString<T extends string> = TODO



type Result1 = ReverseString<'Hello World'>;
//    ^?

type Result2 = ReverseString<'0123456789'>;
//    ^?

type Result3 = ReverseString<'Do you want to build a snowman?'>;
//    ^?
