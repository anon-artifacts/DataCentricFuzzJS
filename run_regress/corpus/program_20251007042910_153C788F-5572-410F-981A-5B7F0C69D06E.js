function ispal(a1) {
    for (const v2 of a1) {
        if (v2 !== a1.pop()) {
            return false;
        }
    }
    return true;
}
ispal([1,2,3,4,3,2,1]);
ispal([1,2,3,3,2,1]);
ispal([1,2,3,4,2,1]);
