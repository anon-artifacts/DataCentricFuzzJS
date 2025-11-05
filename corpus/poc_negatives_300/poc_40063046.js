// Flags: --always-turbofan
const realm = Realm.createAllowCrossRealmAccess();
const global = Realm.global(realm);
function Base() { return global; }
let i = 0;
class Klass extends Base {
  field = i++;
}
let a = new Klass();
a = new Klass();