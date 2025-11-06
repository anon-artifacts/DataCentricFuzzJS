var x = 6;
var giraffe = 8;
var zebra = x + giraffe;
function f(a7) {
    return a7 + a7;
}
var cat = f(zebra);
rat = cat * 2;
while (rat > 4) {
    rat = rat - 3;
    cat = cat + 4;
}
for (let i23 = 4; i23 < zebra; ++i23) {
    cat = cat - 1;
}
var dragon = rat / 2;
dragon += 8;
print(x);
print(giraffe);
print(zebra);
print(cat);
print(rat);
print(dragon);
function MatchCollectionLocalCollection(a43, a44) {
    for (let i46 = 0; i46 < a43.length; i46++) {
        if (a43[i46] == a44) {
            return true;
        }
    }
    return false;
}
print(MatchCollectionLocalCollection(["car","truck"], "car"));
print(MatchCollectionLocalCollection(["car","truck"], "foo"));
var gCollection = ["car","truck"];
function MatchCollectionGlobalCollection(a73) {
    for (let i75 = 0; i75 < gCollection.length; i75++) {
        if (gCollection[i75] == a73) {
            return true;
        }
    }
    return false;
}
print(MatchCollectionGlobalCollection("car"));
print(MatchCollectionGlobalCollection("foo"));
function MatchCollectionGlobalCollectionandValue() {
    for (let i93 = 0; i93 < gCollection.length; i93++) {
        if (gCollection[i93] == gValue) {
            return true;
        }
    }
    return false;
}
var gValue = "car";
print(MatchCollectionGlobalCollectionandValue());
gValue = "foo";
print(MatchCollectionGlobalCollectionandValue());
