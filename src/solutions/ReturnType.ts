/**
 * 1. Function type definition
 * 2. What infer does
 */




const add = (a: number, b: number): number => {
  return a + b;
};



type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Result = MyReturnType<typeof add>;
//    ^?
