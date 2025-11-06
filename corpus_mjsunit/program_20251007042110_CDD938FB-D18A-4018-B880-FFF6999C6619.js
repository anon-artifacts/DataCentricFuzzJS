if (typeof ReadableStream == "function") {
    const v4 = () => {
        return ReadableStream.prototype.tee();
    };
    v4();
}
