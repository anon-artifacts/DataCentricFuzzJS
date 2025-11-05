const v2 = Object.create({});
const v4 = new Boolean();
const v7 = Object.create(Promise.prototype);
const v10 = Function("");
const v12 = new Number();
const v14 = new String();
var objects = [v2,v4,v7,v10,v12,v14];
for (let i18 = 1; i18 < objects.length; ++i18) {
    var o = objects[i18];
    print(undefined, o[0], "NullTypeHandler object with no properties returns undefined");
    print(o.hasOwnProperty("0"));
    print(o.propertyIsEnumerable("0"));
    for (const v37 in o) {
        print("Enumerating an empty object");
    }
    o[0] = "str";
    print("str", o[0], "NullTypeHandler object with index property returns property correctly");
    print("str", o["0"], "NullTypeHandler object with index property returns property correctly");
    print(o.hasOwnProperty("0"));
    print(o.propertyIsEnumerable("0"));
    delete o[0];
    print(undefined, o[0], "NullTypeHandler objectwith deleted property returns undefined");
    print(undefined, o["0"], "NullTypeHandler objectwith deleted property returns undefined");
    print(o.hasOwnProperty("0"));
    print(o.propertyIsEnumerable("0"));
    for (const v73 in o) {
        print("Enumerating an empty object");
    }
    o[0] = "str2";
    print("str2", o[0], "NullTypeHandler object with readded index property returns property correctly");
    print("str2", o["0"], "NullTypeHandler object with readded index property returns property correctly");
    print(o.hasOwnProperty("0"), "NullTypeHandler object with readded index property returns true for hasOwnProperty");
    print(o.propertyIsEnumerable("0"), "NullTypeHandler object readded with index property returns true for propertyIsEnumerable");
}
var obj1 = Object.create({});
var obj2 = Object.create(null);
var numProperties = 3;
for (let i103 = 0; i103 < numProperties; ++i103) {
    obj1[i103] = i103;
    print(obj1[i103], i103, (("NullTypeHandler first enumeration object with index " + i103) + " equal to ") + i103);
    print(obj1.hasOwnProperty(i103), ("NullTypeHandler first enumeration object with index " + i103) + " returns true for hasOwnProperty");
    print(obj1.propertyIsEnumerable(i103), ("NullTypeHandler object first enumeration with index " + i103) + " returns true for propertyIsEnumerable");
    obj2[i103] = i103;
    print(obj2[i103], i103, (("NullTypeHandler second enumeration object with index " + i103) + " equal to ") + i103);
    print(Object.prototype.hasOwnProperty.call(obj2, i103), ("NullTypeHandler first enumeration object with index " + i103) + " returns true for hasOwnProperty");
    print(Object.prototype.propertyIsEnumerable.call(obj2, i103), ("NullTypeHandler object first enumeration with index " + i103) + " returns true for propertyIsEnumerable");
}
var j = 0;
for (const v153 in obj1) {
    ++j;
}
print(j, numProperties, "NullTypeHandler first enumeration object gives same number of properties");
j = 0;
for (const v159 in obj2) {
    ++j;
}
print(j, numProperties, "NullTypeHandler second enumeration object gives same number of properties");
