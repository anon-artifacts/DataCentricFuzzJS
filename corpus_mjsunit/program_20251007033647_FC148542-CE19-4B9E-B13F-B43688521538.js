const t0 = Array.prototype;
t0[0] = 42;
const t2 = Array.prototype;
delete t2[0];
function TestBasics() {
    var a = [1,2];
    var b = [...a];
    [1,2];
    ["a","b","c","d","e","f"];
    ["a",..."bc","d",..."ef"];
}
TestBasics();
var log = [];
function* gen1(a32) {
    try { log.push(a32, 1); } catch (e) {}
    yield 1;
    try { log.push(a32, 2); } catch (e) {}
    yield 2;
    try { log.push(a32, 3); } catch (e) {}
    yield 3;
    try { log.push(a32, "done"); } catch (e) {}
}
function id(a48) {
    log.push(a48);
    return a48;
}
function TestGenerator() {
    [1,2,3];
    let v57;
    try { v57 = gen("a"); } catch (e) {}
    [...v57];
    ["x",1,2,3,"y",1,2,3,"z"];
    let v71;
    try { v71 = gen("a"); } catch (e) {}
    let v74;
    try { v74 = gen("b"); } catch (e) {}
    ["x",...v71,"y",...v74,"z"];
}
try { TestGenerator(); } catch (e) {}
function TestOrderOfExecution() {
    log = [];
    ["x",1,2,3,"y",1,2,3,"z"];
    const v91 = id("x");
    let v94;
    try { v94 = gen("a"); } catch (e) {}
    let v96;
    try { v96 = id("y"); } catch (e) {}
    let v98;
    try { v98 = gen("b"); } catch (e) {}
    let v100;
    try { v100 = id("z"); } catch (e) {}
    [v91,...v94,v96,...v98,v100];
    ["x","a",1,"a",2,"a",3,"a","done","y","b",1,"b",2,"b",3,"b","done","z"];
}
try { TestOrderOfExecution(); } catch (e) {}
function TestNotIterable() {
    var a;
    function f126() {
        a = [...42];
    }
    try { f126(); } catch (e) {}
}
TestNotIterable();
function TestInvalidIterator() {
    const v136 = Symbol.iterator;
    var iter = { [v136]: 42 };
    var a;
    function f141() {
        a = [...iter];
    }
    try { f141(); } catch (e) {}
}
TestInvalidIterator();
function TestIteratorNotAnObject() {
    const v149 = Symbol.iterator;
    const v152 = {
        [v149]() {
            return 42;
        },
    };
    var iter = v152;
    var a;
    function f156() {
        a = [...iter];
    }
    try { f156(); } catch (e) {}
}
TestIteratorNotAnObject();
function TestIteratorNoNext() {
    const v164 = Symbol.iterator;
    const v167 = {
        [v164]() {
            return {};
        },
    };
    var iter = v167;
    var a;
    function f171() {
        a = [...iter];
    }
    try { f171(); } catch (e) {}
}
TestIteratorNoNext();
function TestIteratorResultDoneThrows() {
    function MyError() {
    }
    const v180 = Symbol.iterator;
    const v187 = {
        [v180]() {
            const v186 = {
                next() {
                    const v185 = {
                        get done() {
                            const v184 = new MyError();
                            throw v184;
                        },
                    };
                    return v185;
                },
            };
            return v186;
        },
    };
    var iter = v187;
    var a;
    function f191() {
        a = [...iter];
    }
    try { f191(); } catch (e) {}
    MyError();
}
TestIteratorResultDoneThrows();
function TestIteratorResultValueThrows() {
    function MyError() {
    }
    const v200 = Symbol.iterator;
    const v208 = {
        [v200]() {
            const v207 = {
                next() {
                    const v206 = {
                        done: false,
                        get value() {
                            const v205 = new MyError();
                            throw v205;
                        },
                    };
                    return v206;
                },
            };
            return v207;
        },
    };
    var iter = v208;
    var a;
    function f212() {
        a = [...iter];
    }
    try { f212(); } catch (e) {}
    MyError();
}
TestIteratorResultValueThrows();
function TestOptimize() {
    function f() {
        return [..."abc"];
    }
    ["a","b","c"];
    f();
    ["a","b","c"];
    f();
}
TestOptimize();
function TestDeoptimize() {
    const v235 = Symbol.iterator;
    const v245 = {
        [v235]() {
            var i = 0;
            const v244 = {
                next() {
                    const v240 = ++i;
                    const v242 = i === 3;
                    return { value: v240, done: v242 };
                },
            };
            return v244;
        },
    };
    var iter = v245;
    function f() {
        return [0,...iter];
    }
    [0,1,2];
    f();
}
TestDeoptimize();
function TestPrototypeSetter1() {
    const v257 = Array.prototype;
    const v261 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v257, 3, v261);
    const v264 = Array.prototype;
    const v268 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v264, 4, v268);
    function f() {
        return ["a",...["b","c","d"],"e"];
    }
    ["a","b","c","d","e"];
    f();
    ["a","b","c","d","e"];
    f();
    const t213 = Array.prototype;
    delete t213[3];
    const t218 = Array.prototype;
    delete t218[4];
}
TestPrototypeSetter1();
function TestPrototypeSetter2() {
    const v301 = Array.prototype.__proto__;
    const v305 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v301, 3, v305);
    const v309 = Array.prototype.__proto__;
    const v313 = {
        set() {
            throw 666;
        },
    };
    Object.defineProperty(v309, 4, v313);
    function f() {
        return ["a",...["b","c","d"],"e"];
    }
    ["a","b","c","d","e"];
    f();
    ["a","b","c","d","e"];
    f();
    const t241 = Array.prototype.__proto__;
    delete t241[3];
    const t246 = Array.prototype.__proto__;
    delete t246[4];
}
TestPrototypeSetter2();
function TestPrototypeProxy() {
    const backup = Array.prototype.__proto__;
    const v351 = {};
    const v354 = {
        set() {
            throw 666;
        },
    };
    const v355 = new Proxy(v351, v354);
    const t260 = Array.prototype;
    t260.__proto__ = v355;
    function f() {
        return ["a",...["b","c","d"],"e"];
    }
    ["a","b","c","d","e"];
    f();
    ["a","b","c","d","e"];
    f();
    Object.setPrototypeOf(Array.prototype, backup);
}
TestPrototypeProxy();
