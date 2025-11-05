
const option = {maxByteLength:6584357};
const ab = new ArrayBuffer(3782,option);
const u16a = new Int16Array(ab);
const source = [1337,12152449,2];
ab.resize();
function foo() {
    return u16a;
}
// Float64Array.from.call(foo,source);
Float64Array.of.call(foo,source);


// Stderr:
// Received signal 11 SEGV_ACCERR 7f5ebd113000
// ==== C stack trace ===============================
//  [0x55762bf51c5e]
//  [0x7f5f02b113c0]
//  [0x55762ca4e2e8]
//  [0x55762c92adcd]
//  [0x55762ca4bf74]
//  [0x55762d12782c]
//  [0x55762d1271c1]
//  [0x5575bfea5038]
// [end of stack trace]
// flag:--allow-natives-syntax --harmony-rab-gsab 

