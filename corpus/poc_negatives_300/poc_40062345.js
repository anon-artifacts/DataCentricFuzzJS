const Probe = (function() {
    // Note: this code must generally assume that any operation performed on the object to explore, or any object obtained through it (e.g. a prototype), may raise an exception, for example due to triggering a Proxy trap.
    // Further, it must also assume that the environment has been modified arbitrarily. For example, the Array.prototype[@@iterator] may have been set to an invalid value, so using `for...of` syntax could trigger an exception.
    // Load all necessary routines into local variables as they may be overwritten by the program.
    const ProxyConstructor = Proxy;
    const ReflectGet = Reflect.get;
    const ReflectSet = Reflect.set;
    const ReflectHas = Reflect.has;
    const hasOwnProperty = Object.hasOwn;
    const getPrototypeOf = Object.getPrototypeOf;
    const setPrototypeOf = Object.setPrototypeOf;
    const stringify = JSON.stringify;
    const parseInteger = parseInt;
    const match = Function.prototype.call.bind(RegExp.prototype[Symbol.match]);
    const numberToString = Function.prototype.call.bind(Number.prototype.toString);
    const stringStartsWith = Function.prototype.call.bind(String.prototype.startsWith);
    const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
    // Action constants.
    const PROPERTY_LOAD = "loads";
    const PROPERTY_STORE = "stores";
    // Property access outcomes.
    const PROPERTY_NOT_FOUND = 0;
    const PROPERTY_FOUND = 1;
    //
    // Misc. helper routines.
    //
    // Helper function to determine if a string is "simple". We only include simple strings for property/method names or string literals.
    // A simple string is basically a valid, property name with a maximum length.
    function isSimpleString(s) {
        if (typeof s !== 'string') return false;
        return s.length < 50 && match(/^[0-9a-zA-Z_$]+$/, s);
    }
    // Helper function to determine if a string is numeric and its numeric value representable as an integer.
    function isNumericString(s) {
        if (typeof s !== 'string') return false;
        let number = parseInteger(s);
        return number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER && numberToString(number) === s;
    }
    function isSymbol(s) {
        return typeof s === 'symbol';
    }
    //
    // Result recording and reporting.
    //
    let results = { __proto__: null };
    function reportError(msg) {
			console.log(msg);
     //   fuzzilli('FUZZILLI_PRINT', 'PROBING_ERROR: ' + msg);
    }
    function reportResults() {
			console.log(stringify(results));
      //  fuzzilli('FUZZILLI_PRINT', 'PROBING_RESULTS: ' + stringify(results));
    }
    // Record a property action performed on a probe.
    // |target| is expected to be the original prototype of the probe object. It is used to determine whether the accessed property exists anywhere in the prototype chain of the probe.
    function recordAction(action, id, target, key) {
        let outcome = PROPERTY_NOT_FOUND;
        if (ReflectHas(target, key)) {
            outcome = PROPERTY_FOUND;
        }
        let keyString = key;
        if (typeof keyString !== 'string') {
            try {
                keyString = key.toString();
                if (typeof keyString !== 'string') throw 'not a string';
            } catch(e) {
                // Got some "weird" property key. Ignore it.
                return;
            }
        }
        if (!isSimpleString(keyString) && !isNumericString(keyString) && !isSymbol(key)) {
            // Cannot deal with this property name. Ignore it.
            return;
        }
        if (isSymbol(key) && !stringStartsWith(keyString, 'Symbol(Symbol.')) {
            // We can only deal with well-known symbols (e.g. "Symbol(Symbol.toPrimitive)"), and this isn't one. Ignore it.
            return;
        }
        if (!hasOwnProperty(results, id)) {
            results[id] = { [PROPERTY_LOAD]: { __proto__: null }, [PROPERTY_STORE]: { __proto__: null } };
        }
        // If the same action is performed on the same probe multiple times, we keep the last result.
        results[id][action][keyString] = outcome;
    }
    function recordActionWithErrorHandling(action, id, target, key) {
        try {
            recordAction(action, id, target, key);
        } catch(e) {
            reportError(e);
        }
    }
    //
    // Probe implementation.
    //
    function probe(id, value) {
        let originalPrototype, newPrototype;
        let handler = {
            get(target, key, receiver) {
                // Special logic to deal with programs that fetch the prototype of an object after it was turned into a probe.
                // In that case, the probe Proxy would leak to the script, potentially causing incorrect behaviour. To deal with that,
                // we (1) return the original prototype when __proto__ is loaded (but this can be "bypassed" through Object.getPrototypeOf)
                // and (2) attempt to detect property accesses on the prototype itself (instead of on the probe) and handle those separately.
                if (key === '__proto__' && receiver === value) return originalPrototype;
                if (receiver === newPrototype) return ReflectGet(target, key);
                recordActionWithErrorHandling(PROPERTY_LOAD, id, target, key);
                return ReflectGet(target, key, receiver);
            },
            set(target, key, value, receiver) {
                if (receiver === newPrototype) return ReflectSet(target, key, value);
                recordActionWithErrorHandling(PROPERTY_STORE, id, target, key);
                return ReflectSet(target, key, value, receiver);
            },
            has(target, key) {
                // Treat this as a load.
                recordActionWithErrorHandling(PROPERTY_LOAD, id, target, key);
                return ReflectHas(target, key);
            },
        };
        try {
            // This can fail, e.g. due to "Cannot convert undefined or null to object" or if the object is non-extensible. In that case, do nothing.
            originalPrototype = getPrototypeOf(value);
            newPrototype = new ProxyConstructor(originalPrototype, handler);
            setPrototypeOf(value, newPrototype);
        } catch (e) {}
    }
    function probeWithErrorHandling(id, value) {
        try {
            probe(id, value);
        } catch(e) {
            reportError(e);
        }
    }
    return {
        probe: probeWithErrorHandling,
        reportResults: reportResults
    };
})();
function main() {
const v2 = new WeakMap();
for (let v3 = 0; v3 < 1218; v3++) {
    const v5 = new Uint8ClampedArray();
    Probe.probe("v5", v5);
    const v6 = [];
    const v7 = [];
    const v9 = JSON.stringify();
    const v11 = eval();
    for (const v12 in Date) {
        let {"__proto__":v14,"constructor":v15,"length":v16,...v17} = "object";
        Probe.probe("v18", v14);
        const v19 = Proxy();
        for (const v20 in v19) {
        }
    }
    const v21 = Date();
    Probe.probe("v27", Math);
    const v24 = [ArrayBuffer,ArrayBuffer];
    const v27 = new Float64Array(27637);
    Probe.probe("v32", v27);
    const v28 = v2.set(v27,v21);
}
Probe.probe("v36", 3999);
Date[2] = 10;
gc();
}
%NeverOptimizeFunction(main);
main();
Probe.reportResults();
