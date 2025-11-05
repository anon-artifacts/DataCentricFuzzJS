function main() {
    'use strict';
    class LeakyPromise extends Promise {
        constructor() {
            super(
                () => { }
            );
        }
    }
    let p1 = new LeakyPromise(class extends LeakyPromise { });
}
main();