const v4 = new Date(1955, 0, 1);
let date = v4;
date.getTime() < 0;
date.getHours();
+0;
date.getMinutes();
+0;
date.getSeconds();
+0;
date.getMilliseconds();
+0;
const v26 = new Date(Date.UTC(1955, 0, 1));
let utc = v26;
utc.getTime() < 0;
utc.getUTCHours();
+0;
utc.getUTCMinutes();
+0;
utc.getUTCSeconds();
+0;
utc.getUTCMilliseconds();
+0;
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
