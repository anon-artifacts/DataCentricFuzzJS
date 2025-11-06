var caught = false;
try {
    const v4 = cacheEntry("");
    const v6 = { value: true };
    evaluate(v4, { saveBytecode: v6, global: this });
    [[0]];
} catch(e14) {
    caught = true;
    e14.message;
}
