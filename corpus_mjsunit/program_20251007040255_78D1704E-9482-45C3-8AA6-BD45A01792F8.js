function shouldBe(a1, a2) {
}
function shouldThrow(a4, a5) {
    var error = null;
    try {
        a4();
    } catch(e9) {
        error = e9;
    }
}
var originalArray = [0,1,2,3,4,5,6,7,8,9];
var array = Array.from(originalArray.values());
shouldBe(array.length, originalArray.length);
for (let i30 = 0; i30 < array.length; ++i30) {
    shouldBe(array[i30], originalArray[i30]);
}
function createIterator(a40) {
    var array = [0,1,2,3,4,5];
    var iterator = array[Symbol.iterator]();
    function f53() {
        iterator.returned = true;
        if (a40) {
            return a40(this);
        }
        return { done: true, value: undefined };
    }
    iterator.return = f53;
    iterator.returned = false;
    return iterator;
}
var iterator = createIterator();
var result = Array.from(iterator);
shouldBe(result.length, 6);
for (let i69 = 0; i69 < 6; ++i69) {
    shouldBe(result[i69], i69);
}
shouldBe(iterator.returned, false);
var iterator = createIterator();
function f82() {
    function f83() {
        const v86 = new Error("map func");
        throw v86;
    }
    var result = Array.from(iterator, f83);
}
shouldThrow(f82, "Error: map func");
shouldBe(iterator.returned, true);
function f94() {
    const v97 = new Error("iterator.return");
    throw v97;
}
var iterator = createIterator(f94);
function f100() {
    function f101() {
        const v104 = new Error("map func");
        throw v104;
    }
    var result = Array.from(iterator, f101);
}
shouldThrow(f100, "Error: map func");
shouldBe(iterator.returned, true);
function f112() {
    var iterator = ([]).values();
    const v116 = {};
    iterator[Symbol.iterator] = v116;
    Array.from(iterator);
}
shouldThrow(f112, "TypeError: Array.from requires that the property of the first argument, items[Symbol.iterator], when exists, be a function");
function f122() {
    var iterable = [];
    function f125() {
        const v128 = new Error("iterator");
        throw v128;
    }
    iterable[Symbol.iterator] = f125;
    Array.from(iterable);
}
shouldThrow(f122, "Error: iterator");
function f134() {
    var iterable = [0,1,2,3,4,5];
    var count = 0;
    var iteratorCallCount = 0;
    const v148 = Symbol.iterator;
    const v154 = {
        get() {
            ++count;
            function f151() {
                ++iteratorCallCount;
                return this.values();
            }
            return f151;
        },
    };
    Object.defineProperty(iterable, v148, v154);
    var generated = Array.from(iterable);
    shouldBe(generated.length, iterable.length);
    for (let i163 = 0; i163 < iterable.length; ++i163) {
        shouldBe(generated[i163], iterable[i163]);
    }
    shouldBe(count, 1);
    shouldBe(iteratorCallCount, 1);
}
f134();
function f177() {
    var iterable = [0,1,2,3,4,5];
    var count = 0;
    function f188() {
        ++count;
        var iterator = this.values();
        const v194 = Symbol.iterator;
        const v199 = {
            get() {
                const v198 = new Error("iterator[@@iterator] is touched");
                throw v198;
            },
        };
        Object.defineProperty(iterator, v194, v199);
        return iterator;
    }
    iterable[Symbol.iterator] = f188;
    var generated = Array.from(iterable);
    shouldBe(generated.length, iterable.length);
    for (let i210 = 0; i210 < iterable.length; ++i210) {
        shouldBe(generated[i210], iterable[i210]);
    }
    shouldBe(count, 1);
}
f177();
