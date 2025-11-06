try {
    function TestFunctionNames(a1, a2) {
        for (let i4 = 0; i4 < a2.length; i4++) {
            a2[a2];
            a2[a2];
            a1[a1].name;
        }
    }
    var arrayPrototypeFunctions = ["toString","toLocaleString","join","pop","push","concat","reverse","shift","unshift","slice","splice","sort","filter","forEach","some","every","map","indexOf","lastIndexOf"];
    TestFunctionNames(Array.prototype, arrayPrototypeFunctions);
    var booleanPrototypeFunctions = ["toString","valueOf"];
    TestFunctionNames(Boolean.prototype, booleanPrototypeFunctions);
    var dateFunctions = ["UTC","parse","now"];
    TestFunctionNames(Date, dateFunctions);
    var datePrototypeFunctions = ["toString","toDateString","toTimeString","toLocaleString","toLocaleDateString","toLocaleTimeString","valueOf","getTime","getFullYear","getUTCFullYear","getMonth","getUTCMonth","getDate","getUTCDate","getDay","getUTCDay","getHours","getUTCHours","getMinutes","getUTCMinutes","getSeconds","getUTCSeconds","getMilliseconds","getUTCMilliseconds","getTimezoneOffset","setTime","setMilliseconds","setUTCMilliseconds","setSeconds","setUTCSeconds","setMinutes","setUTCMinutes","setHours","setUTCHours","setDate","setUTCDate","setMonth","setUTCMonth","setFullYear","setUTCFullYear","toUTCString","getYear","setYear"];
    TestFunctionNames(Date.prototype, datePrototypeFunctions);
    const v99 = Date.prototype;
    try { v99.toGMTString(); } catch (e) {}
    Date.prototype.toUTCString;
    var functionPrototypeFunctions = ["toString","apply","call"];
    TestFunctionNames(Function.prototype, functionPrototypeFunctions);
    var mathFunctions = ["random","abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","atan2","pow","max","min"];
    TestFunctionNames(Math, mathFunctions);
    var numberPrototypeFunctions = ["toString","toLocaleString","valueOf","toFixed","toExponential","toPrecision"];
    TestFunctionNames(Number.prototype, numberPrototypeFunctions);
    var objectPrototypeFunctions = ["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","__defineGetter__","__lookupGetter__","__defineSetter__","__lookupSetter__"];
    TestFunctionNames(Object.prototype, objectPrototypeFunctions);
    var regExpPrototypeFunctions = ["exec","test","toString","compile"];
    TestFunctionNames(RegExp.prototype, regExpPrototypeFunctions);
    var stringFunctions = ["fromCharCode"];
    TestFunctionNames(String, stringFunctions);
    var stringPrototypeFunctions = ["toString","valueOf","charAt","charCodeAt","concat","indexOf","lastIndexOf","localeCompare","match","replace","search","slice","split","substring","substr","toLowerCase","toLocaleLowerCase","toUpperCase","toLocaleUpperCase","link","anchor","fontcolor","fontsize","big","blink","bold","fixed","italics","small","strike","sub","sup"];
    TestFunctionNames(String.prototype, stringPrototypeFunctions);
    var globalFunctions = ["escape","unescape","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","Error","TypeError","RangeError","SyntaxError","ReferenceError","EvalError","URIError","isNaN","isFinite","parseInt","parseFloat","eval"];
    TestFunctionNames(this, globalFunctions);
} catch(e231) {
}
