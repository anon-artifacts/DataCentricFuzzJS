function f0() {
    for (let i18 = (() => {
            var global = this;
            function f3() {
                const v7 = [1,2,3];
                let v8;
                try { v8 = global.__createIterableObject(v7); } catch (e) {}
                var iterable = v8;
                let v11;
                try { v11 = Object.create(iterable); } catch (e) {}
                let v13;
                try { v13 = Array.from(v11); } catch (e) {}
                v13 + "";
                return f3;
            }
            f3();
            return 0;
        })();
        i18;
        ) {
    }
    return f0;
}
f0();
