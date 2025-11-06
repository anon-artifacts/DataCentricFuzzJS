function* g() {
}
o = g();
o.next();
result = o.next();
result.done;
o.value;
