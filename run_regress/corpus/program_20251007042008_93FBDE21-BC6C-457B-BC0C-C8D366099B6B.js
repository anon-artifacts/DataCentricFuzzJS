function veryLongString() {
    return ((((((("Lorem ipsum dolor sit amet, consectetur adipiscing elit." + "Nam vulputate metus est. Maecenas quis pellentesque eros,") + "ac mattis augue. Nam porta purus vitae tincidunt blandit.") + "Aliquam lacus dui, blandit id consectetur id, hendrerit ut") + "felis. Class aptent taciti sociosqu ad litora torquent per") + "conubia nostra, per inceptos himenaeos. Ut posuere eros et") + "tempus luctus. Nullam condimentum aliquam odio, at dignissim") + "augue tincidunt in. Nam mattis vitae mauris eget dictum.") + "Nam accumsan dignissim turpis a turpis duis.";
}
veryLongString().length > 256;
var re = /...<omitted>.../;
try {
    Date.prototype.setDate.call(veryLongString);
} catch(e28) {
    e28.message.length < 256;
    re.test(e28.message);
}
try {
    throw Error(veryLongString());
} catch(e38) {
    veryLongString();
    e38.message;
}
