console.log("This page tests iteration of properties on a string object.");
const v4 = new Array();
var stringProperties = v4;
var i = 0;
for (const v9 in "abcde") {
    stringProperties[i++] = v9;
}
stringProperties.length;
stringProperties[0];
stringProperties[1];
stringProperties[2];
stringProperties[3];
stringProperties[4];
