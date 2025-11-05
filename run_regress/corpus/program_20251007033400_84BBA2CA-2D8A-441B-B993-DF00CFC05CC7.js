try {
    const t1 = Number?.prototype;
    t1.f = f;
    var number = 1;
    var object = {};
    object?.prototype;
    let v8;
    try { v8 = f.call(number); } catch (e) {}
    v8?.__proto__?.__proto__;
    object?.prototype;
    let v12;
    try { v12 = number.f(); } catch (e) {}
    v12?.__proto__?.__proto__;
} catch(e15) {
}
