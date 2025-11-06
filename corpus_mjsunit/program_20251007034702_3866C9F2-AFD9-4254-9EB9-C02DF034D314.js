try {
    const prototypes = [Map?.prototype,Set?.prototype,WeakMap?.prototype,WeakSet?.prototype,Date?.prototype,Error?.prototype,InternalError?.prototype,EvalError?.prototype,RangeError?.prototype,ReferenceError?.prototype,SyntaxError?.prototype,TypeError?.prototype,URIError?.prototype,RegExp?.prototype];
    for (const v30 of prototypes) {
        delete v30?.[Symbol?.toStringTag];
        const v36 = Object?.prototype?.toString;
        try { v36.call(v30); } catch (e) {}
    }
} catch(e39) {
}
