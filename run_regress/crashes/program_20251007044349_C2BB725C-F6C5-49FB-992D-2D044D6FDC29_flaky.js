// If a sample with this instrumentation crashes, it may need the `fuzzilli` function to reproduce the crash.
if (typeof fuzzilli === 'undefined') fuzzilli = function() {};

const fixup = (function() {
    //
    // "Import" the common runtime-assisted mutator code. This will make various utility functions available.
    //
        // Note: runtime instrumentation code must generally assume that any operation performed on any object coming from the "outside", may raise an exception, for example due to triggering a Proxy trap.
    // Further, it must also assume that the environment has been modified arbitrarily. For example, the Array.prototype[@@iterator] may have been set to an invalid value, so using `for...of` syntax could trigger an exception.

    // Load all necessary routines and objects into local variables as they may be overwritten by the program.
    // We generally want to avoid triggerring observable side-effects, such as storing or loading
    // properties. For that reason, we prefer to use builtins like Object.defineProperty.

    const ProxyConstructor = Proxy;
    const BigIntConstructor = BigInt;
    const SetConstructor = Set;

    const ObjectPrototype = Object.prototype;

    const getOwnPropertyNames = Object.getOwnPropertyNames;
    const getPrototypeOf = Object.getPrototypeOf;
    const setPrototypeOf = Object.setPrototypeOf;
    const stringify = JSON.stringify;
    const hasOwnProperty = Object.hasOwn;
    const defineProperty = Object.defineProperty;
    const propertyValues = Object.values;
    const parseInteger = parseInt;
    const NumberIsInteger = Number.isInteger;
    const isNaN = Number.isNaN;
    const isFinite = Number.isFinite;
    const truncate = Math.trunc;
    const apply = Reflect.apply;
    const construct = Reflect.construct;
    const ReflectGet = Reflect.get;
    const ReflectSet = Reflect.set;
    const ReflectHas = Reflect.has;

    // Bind methods to local variables. These all expect the 'this' object as first parameter.
    const concat = Function.prototype.call.bind(Array.prototype.concat);
    const findIndex = Function.prototype.call.bind(Array.prototype.findIndex);
    const includes = Function.prototype.call.bind(Array.prototype.includes);
    const shift = Function.prototype.call.bind(Array.prototype.shift);
    const pop = Function.prototype.call.bind(Array.prototype.pop);
    const push = Function.prototype.call.bind(Array.prototype.push);
    const filter = Function.prototype.call.bind(Array.prototype.filter);
    const execRegExp = Function.prototype.call.bind(RegExp.prototype.exec);
    const stringSlice = Function.prototype.call.bind(String.prototype.slice);
    const toUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);
    const numberToString = Function.prototype.call.bind(Number.prototype.toString);
    const bigintToString = Function.prototype.call.bind(BigInt.prototype.toString);
    const stringStartsWith = Function.prototype.call.bind(String.prototype.startsWith);
    const setAdd = Function.prototype.call.bind(Set.prototype.add);
    const setHas = Function.prototype.call.bind(Set.prototype.has);

    const MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER;
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

    // Simple, seedable PRNG based on a LCG.
    class RNG {
        m = 2 ** 32;
        a = 1664525;
        c = 1013904223;
        x;

        constructor(seed) {
            this.x = seed;
        }
        randomInt() {
            this.x = (this.x * this.a + this.c) % this.m;
            if (!isInteger(this.x)) throw "RNG state is not an Integer!"
            return this.x;
        }
        randomFloat() {
            return this.randomInt() / this.m;
        }
        probability(p) {
            return this.randomFloat() < p;
        }
        reseed(seed) {
            this.x = seed;
        }
    }

    // When creating empty arrays to which elements are later added, use a custom array type that has a null prototype. This way, the arrays are not
    // affected by changes to the Array.prototype that could interfere with array builtins (e.g. indexed setters or a modified .constructor property).
    function EmptyArray() {
        let array = [];
        setPrototypeOf(array, null);
        return array;
    }

    //
    // Misc. helper functions.
    //
    // Type check helpers. These are less error-prone than manually using typeof and comparing against a string.
    function isObject(v) {
        return typeof v === 'object';
    }
    function isFunction(v) {
        return typeof v === 'function';
    }
    function isString(v) {
        return typeof v === 'string';
    }
    function isNumber(v) {
        return typeof v === 'number';
    }
    function isBigint(v) {
        return typeof v === 'bigint';
    }
    function isSymbol(v) {
        return typeof v === 'symbol';
    }
    function isBoolean(v) {
        return typeof v === 'boolean';
    }
    function isUndefined(v) {
        return typeof v === 'undefined';
    }

    // Helper function to determine if a value is an integer, and within [MIN_SAFE_INTEGER, MAX_SAFE_INTEGER].
    function isInteger(n) {
        return isNumber(n) && NumberIsInteger(n) && n>= MIN_SAFE_INTEGER && n <= MAX_SAFE_INTEGER;
    }

    // Helper function to determine if a string is "simple". We only include simple strings for property/method names or string literals.
    // A simple string is basically a valid, property name with a maximum length.
    const simpleStringRegExp = /^[0-9a-zA-Z_$]+$/;
    function isSimpleString(s) {
        if (!isString(s)) throw "Non-string argument to isSimpleString: " + s;
        return s.length < 50 && execRegExp(simpleStringRegExp, s) !== null;
    }

    // Helper function to determine if a string is numeric and its numeric value representable as an integer.
    function isNumericString(s) {
        if (!isString(s)) return false;
        let number = parseInteger(s);
        return number >= MIN_SAFE_INTEGER && number <= MAX_SAFE_INTEGER && numberToString(number) === s;
    }

    // Helper function to determine whether a property can be accessed without raising an exception.
    function tryAccessProperty(prop, obj) {
        try {
            obj[prop];
            return true;
        } catch (e) {
            return false;
        }
    }

    // Helper function to determine if a property exists on an object or one of its prototypes. If an exception is raised, false is returned.
    function tryHasProperty(prop, obj) {
        try {
            return prop in obj;
        } catch (e) {
            return false;
        }
    }

    // Helper function to load a property from an object. If an exception is raised, undefined is returned.
    function tryGetProperty(prop, obj) {
        try {
            return obj[prop];
        } catch (e) {
            return undefined;
        }
    }

    // Helper function to obtain the own properties of an object. If that raises an exception (e.g. on a Proxy object), an empty array is returned.
    function tryGetOwnPropertyNames(obj) {
        try {
            return getOwnPropertyNames(obj);
        } catch (e) {
            return new Array();
        }
    }

    // Helper function to fetch the prototype of an object. If that raises an exception (e.g. on a Proxy object), null is returned.
    function tryGetPrototypeOf(obj) {
        try {
            return getPrototypeOf(obj);
        } catch (e) {
            return null;
        }
    }

    // Helper function to that creates a wrapper function for the given function which will call it in a try-catch and return false on exception.
    function wrapInTryCatch(f) {
        return function() {
            try {
                return apply(f, this, arguments);
            } catch (e) {
                return false;
            }
        };
    }

    //
    // Basic random number generation utility functions.
    //

    // Initially the rng is seeded randomly, specific mutators can reseed() the rng if they need deterministic behavior.
    // See the explore operation in JsOperations.swift for an example.
    let rng = new RNG(truncate(Math.random() * 2**32));

    function probability(p) {
        if (p < 0 || p > 1) throw "Argument to probability must be a number between zero and one";
        return rng.probability(p);
    }

    function randomIntBetween(start, end) {
        if (!isInteger(start) || !isInteger(end)) throw "Arguments to randomIntBetween must be integers";
        return (rng.randomInt() % (end - start)) + start;
    }

    function randomFloat() {
        return rng.randomFloat();
    }

    function randomBigintBetween(start, end) {
        if (!isBigint(start) || !isBigint(end)) throw "Arguments to randomBigintBetween must be bigints";
        if (!isInteger(Number(start)) || !isInteger(Number(end))) throw "Arguments to randomBigintBetween must be representable as regular intergers";
        return BigIntConstructor(randomIntBetween(Number(start), Number(end)));
    }

    function randomIntBelow(n) {
        if (!isInteger(n)) throw "Argument to randomIntBelow must be an integer";
        return rng.randomInt() % n;
    }

    function randomElement(array) {
        return array[randomIntBelow(array.length)];
    }


    //
    // "Import" the Action implementation code.
    //
        // Note: this code assumes that the common code from above has been included before.

    //
    // List of all supported operations. Must be kept in sync with the ActionOperation enum.
    //
    const OP_CALL_FUNCTION = 'CALL_FUNCTION';
    const OP_CONSTRUCT = 'CONSTRUCT';
    const OP_CALL_METHOD = 'CALL_METHOD';
    const OP_CONSTRUCT_METHOD = 'CONSTRUCT_METHOD';
    const OP_GET_PROPERTY = 'GET_PROPERTY';
    const OP_SET_PROPERTY = 'SET_PROPERTY';
    const OP_DELETE_PROPERTY = 'DELETE_PROPERTY';

    const OP_ADD = 'ADD';
    const OP_SUB = 'SUB';
    const OP_MUL = 'MUL';
    const OP_DIV = 'DIV';
    const OP_MOD = 'MOD';
    const OP_INC = 'INC';
    const OP_DEC = 'DEC';
    const OP_NEG = 'NEG';

    const OP_LOGICAL_AND = 'LOGICAL_AND';
    const OP_LOGICAL_OR = 'LOGICAL_OR';
    const OP_LOGICAL_NOT = 'LOGICAL_NOT';
    const OP_NULL_COALESCE = 'NULL_COALESCE';

    const OP_BITWISE_AND = 'BITWISE_AND';
    const OP_BITWISE_OR = 'BITWISE_OR';
    const OP_BITWISE_XOR = 'BITWISE_XOR';
    const OP_LEFT_SHIFT = 'LEFT_SHIFT';
    const OP_SIGNED_RIGHT_SHIFT = 'SIGNED_RIGHT_SHIFT';
    const OP_UNSIGNED_RIGHT_SHIFT = 'UNSIGNED_RIGHT_SHIFT';
    const OP_BITWISE_NOT = 'BITWISE_NOT';

    const OP_COMPARE_EQUAL = 'COMPARE_EQUAL';
    const OP_COMPARE_STRICT_EQUAL = 'COMPARE_STRICT_EQUAL';
    const OP_COMPARE_NOT_EQUAL = 'COMPARE_NOT_EQUAL';
    const OP_COMPARE_STRICT_NOT_EQUAL = 'COMPARE_STRICT_NOT_EQUAL';
    const OP_COMPARE_GREATER_THAN = 'COMPARE_GREATER_THAN';
    const OP_COMPARE_LESS_THAN = 'COMPARE_LESS_THAN';
    const OP_COMPARE_GREATER_THAN_OR_EQUAL = 'COMPARE_GREATER_THAN_OR_EQUAL';
    const OP_COMPARE_LESS_THAN_OR_EQUAL = 'COMPARE_LESS_THAN_OR_EQUAL';
    const OP_TEST_IS_NAN = 'TEST_IS_NAN';
    const OP_TEST_IS_FINITE = 'TEST_IS_FINITE';

    const OP_SYMBOL_REGISTRATION = 'SYMBOL_REGISTRATION';

    //
    // Action constructors.
    //
    function Action(operation, inputs = EmptyArray()) {
        this.operation = operation;
        this.inputs = inputs;
        this.isGuarded = false;
    }

    // A guarded action is an action that is allowed to raise an exception.
    //
    // These are for example used for by the ExplorationMutator for function/method call
    // which may throw an exception if they aren't given the right arguments. In that case,
    // we may still want to keep the function call so that it can be mutated further to
    // hopefully eventually find the correct arguments. This is especially true if finding
    // the right arguments reqires the ProbingMutator to install the right properties on an
    // argument object, in which case the ExplorationMutator on its own would (likely) never
    // be able to generate a valid call, and so the function/method may be missed entirely.
    //
    // If a guarded action succeeds (doesn't raise an exception), it will be converted to
    // a regular action to limit the number of generated try-catch blocks.
    function GuardedAction(operation, inputs = EmptyArray()) {
        this.operation = operation;
        this.inputs = inputs;
        this.isGuarded = true;
    }

    // Special value to indicate that no action should be performed.
    const NO_ACTION = null;

    //
    // Action Input constructors.
    //
    // The inputs for actions are encoded as objects that specify both the type and the value of the input. They are basically enum values with associated values.
    // These must be kept compatible with the Action.Input enum in RuntimeAssistedMutator.swift as they have to be encodable to/decodable from that enum.
    //
    function ArgumentInput(index) {
        if (!isInteger(index)) throw "ArgumentInput index is not an integer: " + index;
        return { argument: { index } };
    }
    function SpecialInput(name) {
        if (!isString(name) || !isSimpleString(name)) throw "SpecialInput name is not a (simple) string: " + name;
        return { special: { name } };
    }
    function IntInput(value) {
        if (!isInteger(value)) throw "IntInput value is not an integer: " + value;
        return { int: { value } };
    }
    function FloatInput(value) {
        if (!isNumber(value) || !isFinite(value)) throw "FloatInput value is not a (finite) number: " + value;
        return { float: { value } };
    }
    function BigintInput(value) {
        if (!isBigint(value)) throw "BigintInput value is not a bigint: " + value;
        // Bigints can't be serialized by JSON.stringify, so store them as strings instead.
        return { bigint: { value: bigintToString(value) } };
    }
    function StringInput(value) {
        if (!isString(value) || !isSimpleString(value)) throw "StringInput value is not a (simple) string: " + value;
        return { string: { value } };
    }

    // Type checkers for Input objects. We use these instead of for example 'instanceof' since we allow Input
    // objects to be decoded from JSON, in which case they will not have the right .constructor property.
    function isArgumentInput(input) { return hasOwnProperty(input, 'argument'); }
    function isSpecialInput(input) { return hasOwnProperty(input, 'special'); }
    function isIntInput(input) { return hasOwnProperty(input, 'int'); }
    function isFloatInput(input) { return hasOwnProperty(input, 'float'); }
    function isBigintInput(input) { return hasOwnProperty(input, 'bigint'); }
    function isStringInput(input) { return hasOwnProperty(input, 'string'); }

    // Helper routines to extract the associated values from Input objects.
    function getArgumentInputIndex(input) { return input.argument.index; }
    function getSpecialInputName(input) { return input.special.name; }
    function getIntInputValue(input) { return input.int.value; }
    function getFloatInputValue(input) { return input.float.value; }
    function getBigintInputValue(input) { return BigIntConstructor(input.bigint.value); }
    function getStringInputValue(input) { return input.string.value; }

    // Handlers for executing actions.
    // These will receive the array of concrete inputs (i.e. JavaScript values) as first parameter and the current value of |this| as second parameter (which can be ignored if not needed).
    const ACTION_HANDLERS = {
      [OP_CALL_FUNCTION]: (inputs, currentThis) => { let f = shift(inputs); return apply(f, currentThis, inputs); },
      [OP_CONSTRUCT]: (inputs) => { let c = shift(inputs); return construct(c, inputs); },
      [OP_CALL_METHOD]: (inputs) => { let o = shift(inputs); let m = shift(inputs); return apply(o[m], o, inputs); },
      [OP_CONSTRUCT_METHOD]: (v, inputs) => { let o = shift(inputs); let m = shift(inputs); return construct(o[m], inputs); },
      [OP_GET_PROPERTY]: (inputs) => { let o = inputs[0]; let p = inputs[1]; return o[p]; },
      [OP_SET_PROPERTY]: (inputs) => { let o = inputs[0]; let p = inputs[1]; let v = inputs[2]; o[p] = v; },
      [OP_DELETE_PROPERTY]: (inputs) => { let o = inputs[0]; let p = inputs[1]; return delete o[p]; },
      [OP_ADD]: (inputs) => inputs[0] + inputs[1],
      [OP_SUB]: (inputs) => inputs[0] - inputs[1],
      [OP_MUL]: (inputs) => inputs[0] * inputs[1],
      [OP_DIV]: (inputs) => inputs[0] / inputs[1],
      [OP_MOD]: (inputs) => inputs[0] % inputs[1],
      [OP_INC]: (inputs) => inputs[0]++,
      [OP_DEC]: (inputs) => inputs[0]--,
      [OP_NEG]: (inputs) => -inputs[0],
      [OP_LOGICAL_AND]: (inputs) => inputs[0] && inputs[1],
      [OP_LOGICAL_OR]: (inputs) => inputs[0] || inputs[1],
      [OP_LOGICAL_NOT]: (inputs) => !inputs[0],
      [OP_NULL_COALESCE]: (inputs) => inputs[0] ?? inputs[1],
      [OP_BITWISE_AND]: (inputs) => inputs[0] & inputs[1],
      [OP_BITWISE_OR]: (inputs) => inputs[0] | inputs[1],
      [OP_BITWISE_XOR]: (inputs) => inputs[0] ^ inputs[1],
      [OP_LEFT_SHIFT]: (inputs) => inputs[0] << inputs[1],
      [OP_SIGNED_RIGHT_SHIFT]: (inputs) => inputs[0] >> inputs[1],
      [OP_UNSIGNED_RIGHT_SHIFT]: (inputs) => inputs[0] >>> inputs[1],
      [OP_BITWISE_NOT]: (inputs) => ~inputs[0],
      [OP_COMPARE_EQUAL]: (inputs) => inputs[0] == inputs[1],
      [OP_COMPARE_STRICT_EQUAL]: (inputs) => inputs[0] === inputs[1],
      [OP_COMPARE_NOT_EQUAL]: (inputs) => inputs[0] != inputs[1],
      [OP_COMPARE_STRICT_NOT_EQUAL]: (inputs) => inputs[0] !== inputs[1],
      [OP_COMPARE_GREATER_THAN]: (inputs) => inputs[0] > inputs[1],
      [OP_COMPARE_LESS_THAN]: (inputs) => inputs[0] < inputs[1],
      [OP_COMPARE_GREATER_THAN_OR_EQUAL]: (inputs) => inputs[0] >= inputs[1],
      [OP_COMPARE_LESS_THAN_OR_EQUAL]: (inputs) => inputs[0] <= inputs[1],
      [OP_TEST_IS_NAN]: (inputs) => Number.isNaN(inputs[0]),
      [OP_TEST_IS_FINITE]: (inputs) => Number.isFinite(inputs[0]),
      [OP_SYMBOL_REGISTRATION]: (inputs) => Symbol.for(inputs[0].description),
    };

    // Executes the given action.
    //
    // This will convert the inputs to concrete JavaScript values, then execute the operation with these inputs.
    // Executing an action may change its guarding state: if a guarded action executes without raising an exception,
    // it will be converted to an unguarded operation (as the guarding apears to not be needed). This way, we will
    // ultimately end up emitting fewer try-catch (or equivalent) constructs in the final JavaScript code generated
    // from these actions.
    //
    // Returns true if either the action succeeded without raising an exception or if the action is guarded, false otherwise.
    // The output of the action is stored in |context.output| upon successful execution.
    function execute(action, context) {
        if (action === NO_ACTION) {
            return true;
        }

        // Convert the action's inputs to the concrete JS values to use for executing the action.
        let concreteInputs = EmptyArray();
        for (let i = 0; i < action.inputs.length; i++) {
            let input = action.inputs[i];
            if (isArgumentInput(input)) {
                let index = getArgumentInputIndex(input);
                if (index >= context.arguments.length) throw "Invalid argument index: " + index;
                push(concreteInputs, context.arguments[index]);
            } else if (isSpecialInput(input)) {
                let name = getSpecialInputName(input);
                if (!hasOwnProperty(context.specialValues, name)) throw "Unknown special value: " + name;
                push(concreteInputs, context.specialValues[name]);
            } else if (isIntInput(input)) {
                push(concreteInputs, getIntInputValue(input));
            } else if (isFloatInput(input)) {
                push(concreteInputs, getFloatInputValue(input));
            } else if (isBigintInput(input)) {
                // These need special handling because BigInts cannot be serialized into JSON, so are stored as strings.
                push(concreteInputs, getBigintInputValue(input));
            } else if (isStringInput(input)) {
                push(concreteInputs, getStringInputValue(input));
            } else {
                throw "Unknown action input: " + stringify(input);
            }
        }

        let handler = ACTION_HANDLERS[action.operation];
        if (isUndefined(handler)) throw "Unhandled operation " + action.operation;

        try {
            context.output = handler(concreteInputs, context.currentThis);
            // If the action succeeded, mark it as non-guarded so that we don't emit try-catch blocks for it later on.
            // We could alternatively only do that if all executions succeeded, but it's probably fine to do it if at least one execution succeeded.
            if (action.isGuarded) action.isGuarded = false;
        } catch (e) {
            return action.isGuarded;
        }

        return true;
    }


    //
    // Error and result reporting.
    //
    // The actions to perform (indexed by their ID) will be stored in here.
    // TODO: here and in ExploreLifting, should this be a Map instead?
    const actions = { __proto__: null };
    // We remember which actions have failed in the past, so we only report failures once.
    const failures = new SetConstructor();

    function reportError(msg) {
        fuzzilli('FUZZILLI_PRINT', 'FIXUP_ERROR: ' + msg);
    }

    function recordFailure(id) {
        setAdd(failures, id);
        fuzzilli('FUZZILLI_PRINT', 'FIXUP_FAILURE: ' + id);
    }

    function recordAction(id, action) {
        if (action.id !== id) throw "Inconsistent action for id " + id;
        if (hasOwnProperty(actions, id)) throw "Duplicate action for " + id;

        // These are configurable as they may need to be overwritten (by recordFailure) in the future.
        defineProperty(actions, id, {__proto__: null, value: action, configurable: true});

        fuzzilli('FUZZILLI_PRINT', 'FIXUP_ACTION: ' + stringify(action));
    }

    function hasActionFor(id) {
        return hasOwnProperty(actions, id);
    }

    function getActionFor(id) {
        return actions[id];
    }

    function hasPreviouslyFailed(id) {
        return setHas(failures, id);
    }

    //
    // Fixup function.
    //
    function fixup(id, originalAction, args, currentThis) {
        // See if this is the first time that we're executing this action. If it is, then now is the (only) timewhen  we can modify the action.
        let action;
        if (hasActionFor(id)) {
            action = getActionFor(id);
        } else {
            // TODO: this is where we could change the action.
            // If changing actions, we should try to not change the type of inputs though. For example, we probably should not
            // turn a computed property load (where the property name is an argument input) into a "regular" property load
            // (where the property name is a string input).
            action = originalAction;
        }

        // Now perform the selected action.
        let context = { arguments: args, specialValues: {}, currentThis: currentThis, output: undefined };
        let success = execute(action, context);

        // If the action failed and isn't guarded (either because it wasn't in the first place or because we've previously removed the guard), then record a failure.
        // This will signal to Fuzzilli that the action either needs a guard or should be removed.
        // As we may execute this action again, we remember which actions have failed in the past and only report the first failure.
        if (!success && !hasPreviouslyFailed(id)) {
            recordFailure(id);
        }

        // If this was the first time the action was executed, report the (possibly modified) action.
        // This has to happen after executing the action as that may remove unecessary guards.
        if (!hasActionFor(id)) {
            recordAction(id, action);
        }

        // Return the action's output value as it may be used by subsequent code.
        return context.output;
    }

    function fixupWithErrorHandling(id, originalAction, args, currentThis) {
        try {
            return fixup(id, originalAction, args, currentThis);
        } catch (e) {
            let line = tryHasProperty('line', e) ? tryGetProperty('line', e) : tryGetProperty('lineNumber', e);
            if (isNumber(line)) {
                reportError("In line " + line + ": " + e);
            } else {
                reportError(e);
            }
        }
    }

    return fixupWithErrorHandling;
})();
function TestWithProxies(a1, a2, a3, a4) {
    function f5(a6) {
        const v9 = fixup("instr5", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr5","operation":"CONSTRUCT"}, [Proxy, {}, a6], this);
        return v9;
    }
    const v10 = fixup("instr8", {"id":"instr8","operation":"CALL_FUNCTION","isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}},{"argument":{"index":4}}]}, [a1, f5, a2, a3, a4], this);
}
function TestForIn(a12, a13) {
    const v15 = fixup("instr12", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}}],"id":"instr12","operation":"CALL_FUNCTION","isGuarded":true}, [TestWithProxies, TestForIn2, a12, a13], this);
}
function TestForIn2(a17, a18, a19) {
    const v20 = fixup("instr15", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"operation":"CALL_FUNCTION","id":"instr15","isGuarded":true}, [a17, a19], this);
    var p = v20;
    var found = [];
    for (const v24 in p) {
        const v25 = fixup("instr20", {"id":"instr20","operation":"CALL_METHOD","isGuarded":true,"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}]}, [found, v24], this);
    }
}
const v28 = ["0","a"];
const v41 = {
    ownKeys() {
        return ["0","a"];
    },
    has(a34, a35) {
        return true;
    },
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
const v42 = fixup("instr47", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr47","operation":"CALL_FUNCTION"}, [TestForIn, v28, v41], this);
const v45 = ["null","a"];
const v60 = {
    ownKeys() {
        const v47 = fixup("instr53", {"inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"id":"instr53","operation":"CALL_METHOD","isGuarded":true}, [this], this);
        return v47;
    },
    enumerate() {
        return ["null","a"];
    },
    has(a53, a54) {
        return true;
    },
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
const v61 = fixup("instr76", {"id":"instr76","operation":"CALL_FUNCTION","isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}]}, [TestForIn, v45, v60], this);
function TestForInDerived(a63, a64) {
    const v66 = fixup("instr79", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}}],"operation":"CALL_FUNCTION","id":"instr79","isGuarded":true}, [TestWithProxies, TestForInDerived2, a63, a64], this);
}
function TestForInDerived2(a68, a69, a70) {
    const v71 = fixup("instr82", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr82","operation":"CALL_FUNCTION"}, [a68, a70], this);
    var p = v71;
    const v74 = fixup("instr85", {"id":"instr85","operation":"CALL_METHOD","isGuarded":true,"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}]}, [Object, p], this);
    var o = v74;
    o.z = 0;
    var found = [];
    for (const v79 in o) {
        const v80 = fixup("instr92", {"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}],"id":"instr92","operation":"CALL_METHOD","isGuarded":true}, [found, v79], this);
    }
    const v83 = fixup("instr96", {"inputs":[{"argument":{"index":0}},{"string":{"value":"concat"}},{"argument":{"index":1}}],"operation":"CALL_METHOD","id":"instr96","isGuarded":true}, [["z"], a69], this);
    const v84 = fixup("instr97", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}],"id":"instr97","operation":"CALL_METHOD"}, [Object, o], this);
    var oo = v84;
    oo.y = 0;
    var found = [];
    for (const v89 in oo) {
        const v90 = fixup("instr104", {"id":"instr104","operation":"CALL_METHOD","isGuarded":true,"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}]}, [found, v89], this);
    }
    const v94 = fixup("instr109", {"inputs":[{"argument":{"index":0}},{"string":{"value":"concat"}},{"argument":{"index":1}}],"id":"instr109","operation":"CALL_METHOD","isGuarded":true}, [["y","z"], a69], this);
}
const v97 = ["0","a"];
function f98() {
    return ["0","a"];
}
function f102(a103, a104) {
    return (a104 == "0") || (a104 == "a");
}
const v114 = {
    ownKeys: f98,
    has: f102,
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
const v115 = fixup("instr141", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"operation":"CALL_FUNCTION","id":"instr141","isGuarded":true}, [TestForInDerived, v97, v114], this);
const v118 = ["null","a"];
function f119() {
    const v121 = fixup("instr147", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"id":"instr147","operation":"CALL_METHOD"}, [this], this);
    return v121;
}
function f122() {
    return ["null","a"];
}
function f126(a127, a128) {
    return (a128 == "null") || (a128 == "a");
}
const v138 = {
    ownKeys: f119,
    enumerate: f122,
    has: f126,
    getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
    },
};
const v139 = fixup("instr178", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr178","operation":"CALL_FUNCTION","isGuarded":true}, [TestForInDerived, v118, v138], this);
function TestForInThrow(a141) {
    const v143 = fixup("instr181", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr181","isGuarded":true}, [TestWithProxies, TestForInThrow2, a141], this);
}
function TestForInThrow2(a145, a146) {
    const v147 = fixup("instr184", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr184","isGuarded":true}, [a145, a146], this);
    var p = v147;
    const v150 = fixup("instr187", {"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}],"id":"instr187","operation":"CALL_METHOD","isGuarded":true}, [Object, p], this);
    var o = v150;
    function f152() {
        for (const v153 in p) {
        }
    }
    const v154 = fixup("instr193", {"id":"instr193","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}, [f152], this);
    function f156() {
        for (const v157 in o) {
        }
    }
    const v158 = fixup("instr199", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr199","isGuarded":true}, [f156], this);
}
function f160() {
    throw "myexn";
}
const v163 = fixup("instr209", {"isGuarded":true,"id":"instr209","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}]}, [TestForInThrow, { ownKeys: f160 }], this);
function f164() {
    const v166 = fixup("instr212", {"id":"instr212","operation":"CALL_METHOD","inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"isGuarded":true}, [this], this);
    return v166;
}
function f167() {
    throw "myexn";
}
const v170 = fixup("instr223", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr223","operation":"CALL_FUNCTION","isGuarded":true}, [TestForInThrow, { ownKeys: f164, enumerate: f167 }], this);
const v172 = {};
function f173(a174, a175) {
    function f176() {
        throw "myexn";
    }
    return f176;
}
const v179 = fixup("instr237", {"isGuarded":true,"id":"instr237","operation":"CONSTRUCT","inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}]}, [Proxy, v172, { get: f173 }], this);
const v180 = fixup("instr238", {"isGuarded":true,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr238","operation":"CALL_FUNCTION"}, [TestForInThrow, v179], this);
function keys(a182) {
    var keys = [];
    for (const v185 in a182) {
        const v186 = fixup("instr243", {"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}],"id":"instr243","operation":"CALL_METHOD","isGuarded":true}, [keys, v185], this);
    }
    return keys;
}
function testKeysProxyOnProtoEmpty() {
    const v188 = {};
    const v191 = {
        ownKeys() {
            return [];
        },
    };
    const v192 = fixup("instr256", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"isGuarded":true,"id":"instr256","operation":"CONSTRUCT"}, [Proxy, v188, v191], this);
    var p = v192;
    var o = [0];
    o.__proto__ = p;
    ["0"];
    const v199 = fixup("instr264", {"operation":"CALL_FUNCTION","id":"instr264","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":true}, [keys, o], this);
    const v200 = fixup("instr265", {"inputs":[{"argument":{"index":0}}],"id":"instr265","operation":"CALL_FUNCTION","isGuarded":true}, [v199], this);
    const v202 = fixup("instr267", {"inputs":[{"argument":{"index":0}},{"int":{"value":0}}],"isGuarded":true,"id":"instr267","operation":"DELETE_PROPERTY"}, [o], this);
    [];
    const v204 = fixup("instr269", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr269","isGuarded":true}, [keys, o], this);
    const v205 = fixup("instr270", {"operation":"CALL_FUNCTION","id":"instr270","inputs":[{"argument":{"index":0}}],"isGuarded":true}, [v204], this);
}
const v206 = fixup("instr272", {"inputs":[{"argument":{"index":0}}],"isGuarded":true,"id":"instr272","operation":"CALL_FUNCTION"}, [testKeysProxyOnProtoEmpty], this);
function testKeysProxyOnProto() {
    const v211 = {
        ownKeys() {
            return ["0"];
        },
    };
    var handler = v211;
    const v214 = fixup("instr284", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr284","operation":"CONSTRUCT","isGuarded":true}, [Proxy, {}, handler], this);
    var proxy = v214;
    var object = [0];
    object.__proto__ = proxy;
    ["0"];
    const v221 = fixup("instr292", {"id":"instr292","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":true}, [keys, object], this);
    const v222 = fixup("instr293", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr293","isGuarded":true}, [v221], this);
    const v224 = fixup("instr295", {"inputs":[{"argument":{"index":0}},{"int":{"value":0}}],"id":"instr295","operation":"DELETE_PROPERTY","isGuarded":true}, [object], this);
    [];
    const v226 = fixup("instr297", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":true,"id":"instr297","operation":"CALL_FUNCTION"}, [keys, object], this);
    const v227 = fixup("instr298", {"id":"instr298","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}, [v226], this);
    function f228() {
        return true;
    }
    handler.has = f228;
    [];
    const v231 = fixup("instr305", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr305","operation":"CALL_FUNCTION","isGuarded":true}, [keys, object], this);
    const v232 = fixup("instr306", {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr306","isGuarded":true}, [v231], this);
    function f233() {
        return { enumerable: true, configurable: true };
    }
    handler.getOwnPropertyDescriptor = f233;
    ["0"];
    const v239 = fixup("instr319", {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":true,"id":"instr319","operation":"CALL_FUNCTION"}, [keys, object], this);
    const v240 = fixup("instr320", {"id":"instr320","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}, [v239], this);
}
const v241 = fixup("instr322", {"inputs":[{"argument":{"index":0}}],"id":"instr322","operation":"CALL_FUNCTION","isGuarded":true}, [testKeysProxyOnProto], this);
function testNestedProxy() {
    const v248 = {
        ownKeys() {
            return ["c"];
        },
        getOwnPropertyDescriptor() {
            const v247 = {};
        },
    };
    var handler = v248;
    const v250 = {};
    const v251 = {};
    ["c"];
}
const v254 = fixup("instr476", {"id":"instr476","inputs":[{"argument":{"index":0}}],"operation":"CALL_FUNCTION","isGuarded":true}, [testNestedProxy], this);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7fc1335c5700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x55ce01c92a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x55ce01c912a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x55ce01c85546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x55ce01c84d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x55ce0379e13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x55ce03b697a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x55ce036fb3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x55ce036a9150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x55ce036a5fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x55ce033fc5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x55ce033f37e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x55ce01e71cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x55ce033f6588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x55ce01c9614f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x55ce01ca1925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x55ce01c8e650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc140984ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc140a16850]
// Received signal 6
// STDOUT:
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr5","operation":"CONSTRUCT"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"operation":"CALL_FUNCTION","id":"instr15","isGuarded":false}
// FIXUP_ACTION: {"id":"instr20","operation":"CALL_METHOD","isGuarded":false,"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}]}
// FIXUP_ACTION: {"id":"instr8","operation":"CALL_FUNCTION","isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}},{"argument":{"index":4}}]}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}}],"id":"instr12","operation":"CALL_FUNCTION","isGuarded":false}
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr47","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"id":"instr53","operation":"CALL_METHOD","isGuarded":false}
// FIXUP_ACTION: {"id":"instr76","operation":"CALL_FUNCTION","isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}]}
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr82","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"id":"instr85","operation":"CALL_METHOD","isGuarded":false,"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}]}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}],"id":"instr92","operation":"CALL_METHOD","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"concat"}},{"argument":{"index":1}}],"operation":"CALL_METHOD","id":"instr96","isGuarded":false}
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}],"id":"instr97","operation":"CALL_METHOD"}
// FIXUP_ACTION: {"id":"instr104","operation":"CALL_METHOD","isGuarded":false,"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}]}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"concat"}},{"argument":{"index":1}}],"id":"instr109","operation":"CALL_METHOD","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}},{"argument":{"index":3}}],"operation":"CALL_FUNCTION","id":"instr79","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"operation":"CALL_FUNCTION","id":"instr141","isGuarded":false}
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"id":"instr147","operation":"CALL_METHOD"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr178","operation":"CALL_FUNCTION","isGuarded":false}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr184","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"create"}},{"argument":{"index":1}}],"id":"instr187","operation":"CALL_METHOD","isGuarded":false}
// FIXUP_ACTION: {"id":"instr193","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr199","isGuarded":true}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr181","isGuarded":false}
// FIXUP_ACTION: {"isGuarded":false,"id":"instr209","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}]}
// FIXUP_ACTION: {"id":"instr212","operation":"CALL_METHOD","inputs":[{"argument":{"index":0}},{"string":{"value":"enumerate"}}],"isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr223","operation":"CALL_FUNCTION","isGuarded":false}
// FIXUP_ACTION: {"isGuarded":false,"id":"instr237","operation":"CONSTRUCT","inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}]}
// FIXUP_ACTION: {"isGuarded":false,"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr238","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"isGuarded":false,"id":"instr256","operation":"CONSTRUCT"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"string":{"value":"push"}},{"argument":{"index":1}}],"id":"instr243","operation":"CALL_METHOD","isGuarded":false}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","id":"instr264","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"id":"instr265","operation":"CALL_FUNCTION","isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"int":{"value":0}}],"isGuarded":false,"id":"instr267","operation":"DELETE_PROPERTY"}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr269","isGuarded":false}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","id":"instr270","inputs":[{"argument":{"index":0}}],"isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"isGuarded":false,"id":"instr272","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr284","operation":"CONSTRUCT","isGuarded":false}
// FIXUP_ACTION: {"id":"instr292","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":false}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr293","isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"int":{"value":0}}],"id":"instr295","operation":"DELETE_PROPERTY","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":false,"id":"instr297","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"id":"instr298","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr305","operation":"CALL_FUNCTION","isGuarded":false}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"id":"instr306","isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"isGuarded":false,"id":"instr319","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"id":"instr320","operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}}],"isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"id":"instr322","operation":"CALL_FUNCTION","isGuarded":false}
// FIXUP_ACTION: {"operation":"CONSTRUCT","inputs":[{"argument":{"index":0}},{"argument":{"index":1}},{"argument":{"index":2}}],"id":"instr334","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"operation":"CALL_FUNCTION","isGuarded":false,"id":"instr339"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"isGuarded":true,"id":"instr340","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr353","isGuarded":false}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"id":"instr354","operation":"CALL_FUNCTION","isGuarded":true}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"operation":"CALL_FUNCTION","isGuarded":false,"id":"instr370"}
// FIXUP_ACTION: {"inputs":[{"argument":{"index":0}}],"isGuarded":true,"id":"instr371","operation":"CALL_FUNCTION"}
// FIXUP_ACTION: {"operation":"CALL_FUNCTION","inputs":[{"argument":{"index":0}},{"argument":{"index":1}}],"id":"instr382","isGuarded":false}
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 361ms
