function test1() {
    function foo() {
        'use strict';
    }
    function bar() {
        function baz() {
            'use strict';
        }
    }
    try {
        foo.caller;
        return false;
    } catch(e6) {
        bar.caller;
        return e6 instanceof TypeError;
    }
}
function test2() {
    function foo() {
        'use strict';
    }
    function bar() {
        function baz() {
            'use strict';
        }
    }
    try {
        foo.caller = 42;
        return false;
    } catch(e16) {
        bar.caller = 42;
        return e16 instanceof TypeError;
    }
}
function test3() {
    function foo() {
        'use strict';
    }
    function bar() {
        function baz() {
            'use strict';
        }
    }
    try {
        foo.arguments;
        return false;
    } catch(e26) {
        bar.arguments;
        return e26 instanceof TypeError;
    }
}
function test4() {
    function foo() {
        'use strict';
    }
    function bar() {
        function baz() {
            'use strict';
        }
    }
    try {
        foo.arguments = 42;
        return false;
    } catch(e36) {
        bar.arguments = 42;
        return e36 instanceof TypeError;
    }
}
test1.caller;
test2.caller = 42;
test3.arguments;
test4.arguments = 42;
print(test1());
print(test2());
print(test3());
print(test4());
