let v0 = [];
let v1 = 1;

let v2 = async_hooks.createHook({
  after: () => {
    async_hooks.createHook(v1);
    gc();
  }
});

v2.enable();

new Promise(v3 => v3(42)).then(() => { }).catch(() => { });
v1 = v0;