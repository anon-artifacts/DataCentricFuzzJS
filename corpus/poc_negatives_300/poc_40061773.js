

const o1 = {valueOf:1337};
const o2 = Array(BigInt64Array,o1,..."short",o1);
const o3 = {__proto__:13.37,c:o2,e:"\u56FD\u52A1\u9662\u5173\u4E8E\u300A\u571F\u5730"};
const o4 = JSON.stringify(o3);
new Temporal.Calendar(o4);
// Stderr:
// #
// # Fatal error in ../../src/objects/intl-objects.cc, line 262
// # Debug check failed: s->IsFlat().
// #
// #
// #
// #FailureMessage Object: 0x7ffccb66ef40Received signal 6
// ==== C stack trace ===============================
//  [0x55ccf10ba15e]
//  [0x7fb08fbd53c0]
//  [0x7fb08f89f18b]
//  [0x7fb08f87e859]
//  [0x55ccf10b4eea]
//  [0x55ccf10aba02]
//  [0x55ccf10ab3a5]
//  [0x55ccf1c3135c]
//  [0x55ccf1d6e128]
//  [0x55ccf1d97575]
//  [0x55ccf12f1353]
//  [0x55ccf12f0ef8]
//  [0x55cc7fead1f8]
// [end of stack trace]
// flag:--allow-natives-syntax --harmony_temporal 