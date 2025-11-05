function f0(a1, a2) {
    ("-453370177").replaceAll(a2, a1);
    const v3 = "-453370177";
    v3.__proto__ += v3;
    for (const v5 of v3) {
        v5[0];
    }
}
function f7() {
    f7();
    function f10(a11) {
        const v8 = this;
        v8.toString = f7;
    }
    v8.onmessage = f10;
}
const o14 = {
    "type": "function",
};
const v15 = new Worker(f7, o14);
for (let v16 = 0; v16 < 100; v16++) {
    f0(f0);
}
// Program is interesting due to new coverage: 4 newly discovered edges in the CFG of the target
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/heap/scavenger.cc, line 135
// # Debug check failed: !MarkCompactCollector::IsOnEvacuationCandidate(target).
// #
// #
// #
// #FailureMessage Object: 0x7faf2efc2500
// ==== C stack trace ===============================
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x71a852) [0x55edec6a3852]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x719367) [0x55edec6a2367]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x70ba4a) [0x55edec694a4a]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x70b3a5) [0x55edec6943a5]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xebed5d) [0x55edece47d5d]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xec8405) [0x55edece51405]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xeba6d3) [0x55edece436d3]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xeb5185) [0x55edece3e185]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xeb4a50) [0x55edece3da50]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x71bcde) [0x55edec6a4cde]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x71c61f) [0x55edec6a561f]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xeb7340) [0x55edece40340]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xd33f67) [0x55edeccbcf67]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xd2f25b) [0x55edeccb825b]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xd2b994) [0x55edeccb4994]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xcff10a) [0x55edecc8810a]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xcff204) [0x55edecc88204]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0xcb79c3) [0x55edecc409c3]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x19155b7) [0x55eded89e5b7]
//     /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8(+0x1914f46) [0x55eded89df46]
//     [0x55ed7feafdf8]
// Received signal 6
// STDOUT:
// ARGS: /usr/local/google/home/saelo/Workspace/v8/v8/out/fuzzbuild/d8 --expose-gc --omit-quit --future --harmony --assert-types --harmony-struct --allow-natives-syntax --interrupt-budget=1000 --fuzzing
// EXECUTION TIME: 134 ms