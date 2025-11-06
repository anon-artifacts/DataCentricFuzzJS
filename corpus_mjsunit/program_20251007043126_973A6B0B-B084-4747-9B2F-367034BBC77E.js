function f0() {
    var a = [0,1];
    [0];
    function f7(a8) {
        return a8 == 0;
    }
    a.filter(f7);
    [0,1];
    var o = { value: 42 };
    a = [1,42,3,42,4];
    [42,42];
    function f27(a28) {
        return this.value == a28;
    }
    a.filter(f27, o);
    a = [1,42,3,42,4];
    [42,42];
    function f42(a43, a44, a45) {
        a45[a44] = 43;
        return 42 == a43;
    }
    a.filter(f42);
    [43,43,43,43,43];
    a = [1,1];
    [];
    function f60(a61, a62, a63) {
        a63.push(a61 + 1);
        return a61 == 2;
    }
    a.filter(f60);
    [1,1,2,2];
    const v77 = new Array(20);
    a = v77;
    var count = 0;
    a[2] = 2;
    a[15] = 2;
    a[17] = 4;
    function f83(a84) {
        count++;
        return a84 == 2;
    }
    var a = a.filter(f83);
    for (const v91 in a) {
        a[v91];
    }
    a = { 0: 0, 2: 2, length: 3 };
    var received = [];
    [2];
    function f102(a103) {
        received.push(a103);
        return a103 == 2;
    }
    Array.prototype.filter.call(a, f102);
    [0,2];
    a = [0,,2];
    received = [];
    [2];
    function f120(a121) {
        a.__proto__ = null;
        received.push(a121);
        return a121 == 2;
    }
    Array.prototype.filter.call(a, f120);
    [0,2];
    a = [];
    function f133() {
        a.push(this);
    }
    ([1,2]).filter(f133, "");
    a[0] !== a[1];
    a = [];
    function f145() {
        a.push(this);
    }
    const v148 = {};
    ([1,2]).filter(f145, v148);
    a[0];
    a[1];
    a = [];
    function f156() {
        'use strict';
        a.push(this);
    }
    ([1,2]).filter(f156, "");
    a[0];
    a[0];
    a[1];
}
f0();
function f169() {
    var a = [0,1];
    var count = 0;
    function f176(a177) {
        count++;
    }
    a.forEach(f176);
    var o = { value: 42 };
    var result = [];
    function f186(a187) {
        result.push(this.value);
    }
    a.forEach(f186, o);
    [42,42];
    a = [0,1];
    count = 0;
    function f199(a200, a201, a202) {
        a202[a201] = a200 + 1;
        count++;
    }
    a.forEach(f199);
    [1,2];
    a = [1,1];
    count = 0;
    function f215(a216, a217, a218) {
        a218.push(a216 + 1);
        count++;
    }
    a.forEach(f215);
    [1,1,2,2];
    const v232 = new Array(20);
    a = v232;
    count = 0;
    a[15] = 2;
    function f235(a236) {
        count++;
    }
    a.forEach(f235);
    a = { 0: 0, 2: 2, length: 3 };
    var received = [];
    function f246(a247) {
        received.push(a247);
    }
    Array.prototype.forEach.call(a, f246);
    [0,2];
    a = [0,,2];
    received = [];
    function f260(a261) {
        a.__proto__ = null;
        received.push(a261);
        return a261 == 2;
    }
    Array.prototype.forEach.call(a, f260);
    [0,2];
    a = [];
    function f273() {
        a.push(this);
    }
    ([1,2]).forEach(f273, "");
    a[0] !== a[1];
    a = [];
    function f285() {
        a.push(this);
    }
    const v288 = {};
    ([1,2]).forEach(f285, v288);
    a[0];
    a[1];
    a = [];
    function f296() {
        'use strict';
        a.push(this);
    }
    ([1,2]).forEach(f296, "");
    a[0];
    a[0];
    a[1];
}
f169();
function f309() {
    var a = [0,1];
    function f314(a315) {
        return a315 == 0;
    }
    a.every(f314);
    a = [0,0];
    function f322(a323) {
        return a323 == 0;
    }
    a.every(f322);
    function f327(a328) {
        return a328 == 0;
    }
    ([]).every(f327);
    var o = { value: 42 };
    a = [0];
    function f338(a339) {
        return this.value == a339;
    }
    a.every(f338, o);
    a = [42];
    function f346(a347) {
        return this.value == a347;
    }
    a.every(f346, o);
    a = [0,1];
    function f355(a356, a357, a358) {
        a358[a357] = a356 + 1;
        return a356 == 1;
    }
    a.every(f355);
    [1,1];
    a = [1,1];
    function f370(a371, a372, a373) {
        a373.push(a371 + 1);
        return a371 == 1;
    }
    a.every(f370);
    [1,1,2,2];
    const v387 = new Array(20);
    a = v387;
    var count = 0;
    a[2] = 2;
    a[15] = 2;
    function f392(a393) {
        count++;
        return a393 == 2;
    }
    a.every(f392);
    a = { 0: 2, 2: 2, length: 3 };
    var received = [];
    function f405(a406) {
        received.push(a406);
        return a406 == 2;
    }
    Array.prototype.every.call(a, f405);
    [2,2];
    a = [2,,2];
    received = [];
    function f421(a422) {
        a.__proto__ = null;
        received.push(a422);
        return a422 == 2;
    }
    Array.prototype.every.call(a, f421);
    [2,2];
    a = [];
    function f434() {
        a.push(this);
        return true;
    }
    ([1,2]).every(f434, "");
    a[0] !== a[1];
    a = [];
    function f447() {
        a.push(this);
        return true;
    }
    const v451 = {};
    ([1,2]).every(f447, v451);
    a[0];
    a[1];
    a = [];
    function f459() {
        'use strict';
        a.push(this);
        return true;
    }
    ([1,2]).every(f459, "");
    a[0];
    a[0];
    a[1];
}
f309();
function f473() {
    var a = [0,1,2,3,4];
    var result = [1,2,3,4,5];
    function f488(a489) {
        return a489 + 1;
    }
    a.map(f488);
    var o = { delta: 42 };
    result = [42,43,44,45,46];
    function f502(a503) {
        return this.delta + a503;
    }
    a.map(f502, o);
    a = [0,1,2,3,4];
    result = [1,2,3,4,5];
    function f520(a521, a522, a523) {
        a523[a522] = a521 + 1;
        return a521 + 1;
    }
    a.map(f520);
    a = [0,1,2,3,4];
    result = [1,2,3,4,5];
    function f541(a542, a543, a544) {
        a544.push(a542);
        return a542 + 1;
    }
    a.map(f541);
    [0,1,2,3,4,0,1,2,3,4];
    const v562 = new Array(20);
    a = v562;
    a[15] = 2;
    function f564(a565) {
        return 2 * a565;
    }
    a = a.map(f564);
    for (const v569 in a) {
        a[v569];
    }
    a = { 0: 1, 2: 2, length: 3 };
    var received = [];
    [2,,4];
    function f582(a583) {
        received.push(a583);
        return a583 * 2;
    }
    Array.prototype.map.call(a, f582);
    [1,2];
    a = [1,,2];
    received = [];
    [2,,4];
    function f602(a603) {
        a.__proto__ = null;
        received.push(a603);
        return a603 * 2;
    }
    Array.prototype.map.call(a, f602);
    [1,2];
    a = [];
    function f615() {
        a.push(this);
    }
    ([1,2]).map(f615, "");
    a[0] !== a[1];
    a = [];
    function f627() {
        a.push(this);
    }
    const v630 = {};
    ([1,2]).map(f627, v630);
    a[0];
    a[1];
    a = [];
    function f638() {
        'use strict';
        a.push(this);
    }
    ([1,2]).map(f638, "");
    a[0];
    a[0];
    a[1];
}
f473();
function f651() {
    var a = [0,1,2,3,4];
    function f659(a660) {
        return a660 == 3;
    }
    a.some(f659);
    function f664(a665) {
        return a665 == 5;
    }
    a.some(f664);
    var o = { element: 42 };
    a = [1,42,3];
    function f676(a677) {
        return this.element == a677;
    }
    a.some(f676, o);
    a = [1];
    function f684(a685) {
        return this.element == a685;
    }
    a.some(f684, o);
    a = [0,1,2,3];
    function f695(a696, a697, a698) {
        a698[a697] = a696 + 1;
        return a696 == 2;
    }
    a.some(f695);
    [1,2,3,3];
    a = [0,1,2];
    function f713(a714, a715, a716) {
        a716.push(42);
        return a714 == 42;
    }
    a.some(f713);
    [0,1,2,42,42,42];
    const v731 = new Array(20);
    a = v731;
    var count = 0;
    a[2] = 42;
    a[10] = 2;
    a[15] = 42;
    function f737(a738) {
        count++;
        return a738 == 2;
    }
    a.some(f737);
    a = [];
    function f745() {
        a.push(this);
    }
    ([1,2]).some(f745, "");
    a[0] !== a[1];
    a = [];
    function f757() {
        a.push(this);
    }
    const v760 = {};
    ([1,2]).some(f757, v760);
    a[0];
    a[1];
    a = [];
    function f768() {
        'use strict';
        a.push(this);
    }
    ([1,2]).some(f768, "");
    a[0];
    a[0];
    a[1];
}
f651();
