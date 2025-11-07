type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type pNum = Promise<number>;
type regularNum = number;

let val1: UnwrapPromise<pNum> = 10;             //  number
let val2: UnwrapPromise<regularNum> = 20;       //  number

// @ts-expect-error - Bu satırın HATA vermesi beklenir
let val3: UnwrapPromise<pNum> = "string";       //  string değil number olmalı

console.log("Soru 11 Başarılı!", val1, val2);