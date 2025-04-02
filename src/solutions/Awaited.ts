/**
 * 1. Without recursion
 * 2. With recursion
 */



type MyAwaited<T> = T extends Promise<infer InnerType>
  ? MyAwaited<InnerType>
  : T;



type Result1 = MyAwaited<Promise<string>>;
//    ^?

type Result2 = MyAwaited<Promise<Promise<Promise<Promise<Promise<string>>>>>>;
//    ^?
