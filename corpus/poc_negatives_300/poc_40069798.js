const v0 = new Set();
const v1 = new Set();
Object.defineProperty(v1, "size", {
  get: function () {
    v0.clear();
    return 1;
  },

});
v0.isDisjointFrom(v1);