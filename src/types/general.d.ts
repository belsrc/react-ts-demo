/* eslint-disable no-unused-vars, no-undef, fp-jxl/no-nil */
type nil = null | undefined;

type Nilable<T> = T | nil;

type Nullable<T> = T | null;

type Undefinable<T> = T | undefined;

type Primitive = boolean | string | number;

type Truthy = boolean | string | number;

type Falsey = boolean | string | number | null | undefined;

type BoolLike = Truthy | Falsey;

type AnyKey = string | number | symbol;

type AnyFunction = (...args: any) => any;

interface AnyClass {
  prototype: any;
  new (...args: any): any;
}

interface AnyObject {
  [key: string]: any;
  [key: number]: any;
}
