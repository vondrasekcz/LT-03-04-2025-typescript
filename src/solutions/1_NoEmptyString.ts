/**
 * 'never'
 * -----------------
 * The 'never' is a special type indicating a value or function that never occurs or returns.
 */

// Can be some type assigned into `never`, for example 'any'?
// const value: never = ;


// Disallow empty strings
type NoEmptyString<T extends string> = T extends '' ? never : T;


type Result1 = NoEmptyString<'Hello World'>;
//    ^?

type Result2 = NoEmptyString<''>;
//    ^?


// Example 1
const throwOnEmptyString = <T extends string>(str: NoEmptyString<T>): void => {
    if (str === '') {
        throw new Error('String cannot be empty');
    }
};

throwOnEmptyString('Hello World'); // Valid
throwOnEmptyString(''); // Error: Argument of type '""' is not assignable to parameter of type 'never'.
