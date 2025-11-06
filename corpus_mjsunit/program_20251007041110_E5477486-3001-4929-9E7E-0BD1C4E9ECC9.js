Date.parse("July 15, 2006 11:00 AM");
const v3 = Date.UTC("July 15, 2006 11:00 AM");
new Date(v3, v3);
const v7 = new Date(Date.UTC(-9223372036854775807));
v7.toLocaleString();
const v10 = new Date("November 4, 2007 12:30 AM");
v10.toLocaleString();
