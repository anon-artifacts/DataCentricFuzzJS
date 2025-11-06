function test() {
    return ((((((((typeof Int8Array.of === "function") && (typeof Uint8Array.of === "function")) && (typeof Uint8ClampedArray.of === "function")) && (typeof Int16Array.of === "function")) && (typeof Uint16Array.of === "function")) && (typeof Int32Array.of === "function")) && (typeof Uint32Array.of === "function")) && (typeof Float32Array.of === "function")) && (typeof Float64Array.of === "function");
}
if (!test()) {
    const v58 = new Error("Test failed");
    throw v58;
}
