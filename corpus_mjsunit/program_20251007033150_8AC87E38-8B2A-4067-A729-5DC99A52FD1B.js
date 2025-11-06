var expectedError = "Error: aİc\n	at aTurkish (bug_258259.js:12:5)\n	at Global code (bug_258259.js:34:9)";
function aTurkish() {
    throw Error("aİc");
}
function filterFullFilePathFromCallstack(a7) {
    var filteredStack = a7;
    var fileName = "bug_258259.js:";
    var startDelim = " (";
    var lastInd = filteredStack.lastIndexOf(fileName);
    var firstInd = filteredStack.lastIndexOf(startDelim, lastInd);
    filteredStack = filteredStack.substring(0, firstInd + startDelim.length) + filteredStack.substring(lastInd);
    lastInd = filteredStack.lastIndexOf(fileName);
    lastInd = filteredStack.lastIndexOf(fileName, lastInd - 1);
    filteredStack = filteredStack.substring(0, (firstInd = filteredStack.lastIndexOf(startDelim, lastInd)) + startDelim.length) + filteredStack.substring(lastInd);
    return filteredStack;
}
try {
    aTurkish();
} catch(e35) {
    var filteredStack = filterFullFilePathFromCallstack(([e35.stack]).toString());
    if (filteredStack == expectedError) {
        print("PASSED");
    } else {
        print("FAILED");
        print("\nActual (raw):\n" + [e35.stack]);
        print("\nActual (filtered):\n" + filteredStack);
        print("\n\nExpected:\n" + expectedError);
    }
}
