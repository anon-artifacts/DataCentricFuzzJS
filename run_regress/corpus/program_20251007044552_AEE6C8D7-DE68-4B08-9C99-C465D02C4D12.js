var testAsync;
function f2() {
    class C3 {
        constructor(a5, a6) {
            this.expectedAsserts_ = -1;
            this.actualAsserts_ = 0;
            this.test_ = a5;
            this.name_ = a6 || "";
        }
        plan(a13) {
            this.expectedAsserts_ = a13;
        }
        fail(a15, a16) {
            let message = formatFailureText(a15, a16);
            message += "\nin test:" + this.name_;
            const v24 = this.test_;
            message += "\n" + Function.prototype.toString.apply(v24);
            print(message);
        }
        equals(a33, a34, a35) {
            let v36 = this.actualAsserts_;
            v36++;
            if (!deepEquals(a33, a34)) {
                this.fail(prettyPrinted(a33), a34, a35);
            }
        }
        unreachable() {
            let message = "Failure: unreachable in test: " + this.name_;
            const v50 = this.test_;
            print(message += "\n" + Function.prototype.toString.apply(v50));
        }
        unexpectedRejection(a59) {
            const v60 = (a61) => {
                let message = "Failure: unexpected Promise rejection in test: " + this.name_;
                if (a59) {
                    message += "\n    @" + a59;
                }
                if (a61 instanceof Error) {
                    message += "\n" + String(a61.stack);
                } else {
                    message += "\n" + String(a61);
                }
                const v80 = this.test_;
                message += "\n\n" + Function.prototype.toString.apply(v80);
                print(message);
            };
            return v60;
        }
        drainMicrotasks() {
        }
        done_() {
            if (this.expectedAsserts_ === -1) {
                let message = "Please call t.plan(count) to initialize test harness " + "with correct assert count (Note: count > 0)";
                print(message);
            }
            if (this.expectedAsserts_ !== this.actualAsserts_) {
                let message = "Expected asserts: " + this.expectedAsserts_;
                message += ", Actual asserts: " + this.actualAsserts_;
                message += "\nin test: " + this.name_;
                const v114 = this.test_;
                message += "\n" + Function.prototype.toString.apply(v114);
                print(message);
            }
        }
    }
    function f122(a123, a124) {
        const v125 = new C3(a123, a124);
        let assert = v125;
        a123(assert);
        assert.done_();
    }
    testAsync = f122;
}
f2();
