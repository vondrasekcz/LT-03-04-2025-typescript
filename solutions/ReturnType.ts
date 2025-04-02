/**
 * 1. Function type definition
 * 2. What infer does
 */




const add = (a: number, b: number) => {
  return a + b;
};




// Extract the return type of a function type.
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = MyReturnType<typeof add>;
//    ^?
