/**
 * 'infer'
 * ---------
 * the 'infer' keyword allows you to extract and use a type from a complex type definition,
 * especially within conditional types.
 * 
 * It acts as a type variable that TypeScript tries to "infer" based on usage.
 */


type MyReturnType<T> = TODO


// Example 1
const add = (a: number, b: number): number => {
  return a + b;
};
type Result1 = MyReturnType<typeof add>;
//    ^?

// Example 2
const getShowman = (): string => {
  return 'snowman';
};
type Result2 = MyReturnType<typeof getShowman>;
//    ^?
