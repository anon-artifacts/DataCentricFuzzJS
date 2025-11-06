function f0() {
}
function write(a2) {
    f0(a2 + "");
}
function PrintDescriptor(a7, a8) {
    const v12 = (a7 + ":configurable : ") + a8?.configurable;
    try { write(v12); } catch (e) {}
    const v17 = (a7 + ":enumerable   : ") + a8?.enumerable;
    try { write(v17); } catch (e) {}
    const v22 = (a7 + ":writable     : ") + a8?.writable;
    try { write(v22); } catch (e) {}
    const v27 = (a7 + ":getter       : ") + a8?.get;
    try { write(v27); } catch (e) {}
    const v32 = (a7 + ":setter       : ") + a8?.set;
    try { write(v32); } catch (e) {}
    const v37 = (a7 + ":value        : ") + a8?.value;
    try { write(v37); } catch (e) {}
}
function exceptToString(a40) {
    if (a40 instanceof TypeError) {
        return "TypeError";
    }
    if (a40 instanceof ReferenceError) {
        return "ReferenceError";
    }
    if (a40 instanceof EvalError) {
        return "EvalError";
    }
    if (a40 instanceof SyntaxError) {
        return "SyntaxError";
    }
    return "Unknown Error";
}
function Test1() {
    'use strict';
    var str = "function.caller get";
    try {
        Test1?.caller;
    } catch(e59) {
        const v63 = ("Exception: " + str) + " ";
        let v64;
        try { v64 = exceptToString(e59); } catch (e) {}
        const v65 = v63 + v64;
        try { write(v65); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test1();
function Test2() {
    'use strict';
    var str = "function.caller set";
    try {
        Test2.caller = 10;
    } catch(e76) {
        write((("Exception: " + str) + " ") + exceptToString(e76));
        return;
    }
    const v85 = "Return: " + str;
    try { write(v85); } catch (e) {}
}
Test2();
function Test3() {
    'use strict';
    var str = "function.arguments get";
    try {
        Test3?.arguments;
    } catch(e93) {
        const v97 = ("Exception: " + str) + " ";
        let v98;
        try { v98 = exceptToString(e93); } catch (e) {}
        const v99 = v97 + v98;
        try { write(v99); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test3();
function Test4() {
    'use strict';
    var str = "function.arguments set";
    try {
        Test4.arguments = 10;
    } catch(e110) {
        write((("Exception: " + str) + " ") + exceptToString(e110));
        return;
    }
    const v119 = "Return: " + str;
    try { write(v119); } catch (e) {}
}
Test4();
function Test5() {
    'use strict';
    var str = "function.arguments and function.caller descriptors are undefined";
    function f125() {
    }
    let v128;
    try { v128 = Object.getOwnPropertyDescriptor(f125, "caller"); } catch (e) {}
    var callerDescriptor = v128;
    function f130() {
    }
    let v132;
    try { v132 = Object.getOwnPropertyDescriptor(f130, "arguments"); } catch (e) {}
    var argumentsDescriptor = v132;
    const v145 = (((("Return: " + (callerDescriptor === undefined)) + " ") + (argumentsDescriptor === undefined)) + ": ") + str;
    try { write(v145); } catch (e) {}
}
Test5();
function Test5() {
    'use strict';
    var str = "arguments.caller and arguments.callee are equal/strictEqual to each other";
    var argumentsCallerGet = Object.getOwnPropertyDescriptor(arguments, "caller")?.get;
    var argumentsCallerSet = Object.getOwnPropertyDescriptor(arguments, "caller")?.set;
    var argumentsCalleeGet = Object.getOwnPropertyDescriptor(arguments, "callee").get;
    var argumentsCalleeSet = Object.getOwnPropertyDescriptor(arguments, "callee").set;
    write((((("Return: " + (((argumentsCallerGet == argumentsCalleeGet) && (argumentsCallerSet == argumentsCalleeSet)) && (argumentsCallerGet == argumentsCallerSet)).toString()) + " ") + (((argumentsCallerGet === argumentsCalleeGet) && (argumentsCallerSet === argumentsCalleeSet)) && (argumentsCallerGet === argumentsCallerSet)).toString()) + ": ") + str);
}
Test5();
function Test6() {
    var str = "function.caller's value is a strict mode function";
    function foo() {
        'use strict';
        return goo();
    }
    function goo() {
        return goo.caller;
    }
    try {
        foo();
    } catch(e203) {
        const v207 = ("Exception: " + str) + " ";
        let v208;
        try { v208 = exceptToString(e203); } catch (e) {}
        const v209 = v207 + v208;
        try { write(v209); } catch (e) {}
        return;
    }
    write("Return: " + str);
}
Test6();
