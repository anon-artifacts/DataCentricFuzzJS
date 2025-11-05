var re = /.+/g;
re.exec("");
re.exec("anystring");
(re = /.+/g).exec("");
re.lastIndex;
