function main() {

function foo() {
    try {
       foo();
    } catch(e) {
        for (let i = 0; i < 10000; i++) {
        }
        function x(){}
        class p4nda extends x {
            constructor(a1,a2){
                super(a1,a2);
            }            
        }
        p4nda(1,1);
    }
}
foo();

// #
// # Fatal error in ../../src/runtime/runtime-object.cc, line 1015
// # Check failed: args[1].IsJSReceiver().
// #
// #
// #
// #FailureMessage Object: 0x7ffc3cb3a130

}

main();
