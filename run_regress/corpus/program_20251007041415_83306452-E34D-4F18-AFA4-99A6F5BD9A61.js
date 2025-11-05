const v1 = new Date();
v1.setTime(456789);
v1.toDateString();
v1.getUTCDay();
v1.setMilliseconds(10);
v1.setUTCMilliseconds(11);
v1.setSeconds(13, 14);
v1.setUTCSeconds(16, 17);
v1.setMinutes(21, 22, 23);
v1.setUTCMinutes(27, 28, 29);
v1.setHours(4, 2, 3);
v1.setHours(5, 6, 7, 8);
v1.setUTCHours(4, 2, 3);
v1.setUTCHours(5, 6, 7, 8);
v1.setDate(1000);
v1.setUTCDate(2000);
v1.getUTCDate();
v1.setMonth(8, 3000);
v1.getUTCMonth();
v1.setUTCMonth(8, 3000);
v1.setYear(2009);
v1.setFullYear(2011, 11, 1234);
v1.setUTCFullYear(2011, 11, 1234);
v1.getUTCFullYear();
v1.setDate(12345678);
const v67 = Date.prototype;
try { v67.setYear(8, 17, v67, 23, 11); } catch (e) {}
const v69 = Date.prototype;
try { v69.getFullYear(29, 14, 5); } catch (e) {}
const v71 = Date.prototype;
try { v71.setFullYear(); } catch (e) {}
