typeof TEST_FILE_NAME;
let v4;
try { v4 = readbuffer(TEST_FILE_NAME); } catch (e) {}
let v5;
try { v5 = new Uint8Array(v4); } catch (e) {}
var a = v5;
var expected = "// Copyright 2014 the V8 project authors. All rights reserved.";
for (let i10 = 0; i10 < expected?.length; i10++) {
    try { expected.charCodeAt(i10); } catch (e) {}
    a?.[i10];
}
