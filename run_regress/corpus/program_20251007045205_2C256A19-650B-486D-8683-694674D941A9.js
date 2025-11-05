const p = ("")[Symbol.iterator]().__proto__;
let x = Object.create(p);
x.next = 42;
