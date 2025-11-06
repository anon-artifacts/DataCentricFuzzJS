try {
    const v1 = {};
    const v11 = {
        get(a3, a4) {
            const v10 = new Error(("angryHandler should not be queried (" + a4) + ")");
            throw v10;
        },
    };
    const v12 = new Proxy(v1, v11);
    var angryHandler = v12;
    const v15 = new Proxy({}, angryHandler);
    var angryProto = v15;
    const v18 = { value: 3 };
    const v19 = () => {
        return 4;
    };
    const v21 = { get: v19 };
    var obj = Object.create(angryProto, { x: v18, y: v21 });
    const v26 = () => {
        return obj?.z;
    };
    v26();
    obj.x;
    obj.y;
} catch(e34) {
}
