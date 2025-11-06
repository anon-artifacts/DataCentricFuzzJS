function outer() {
    function* generator() {
        const v2 = () => {
            arguments[0];
        };
        let arrow = v2;
        arrow();
    }
    generator.call(this, 42).next();
}
let expectedReceiver = {};
outer.call(expectedReceiver);
