function target() {
}
for (const v4 of Object.getOwnPropertyNames(this)) {
    try {
        let newTarget = this[v4];
        let arg = target;
        Reflect.construct(target, arg, newTarget);
    } catch(e11) {
    }
}
