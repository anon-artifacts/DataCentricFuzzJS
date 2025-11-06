function write(a1) {
    print(a1);
}
var a = "#$%&";
a += "0123456789";
a += "<=>?@";
a += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
a += "[]^_`";
a += "abcdefghijklmnopqrstuvwXYZ";
a += "{|}~";
var regexNoCase = [/[K-Z]+/gi,/[C-\{]+/gi,/[L-e]+/gi,/[F-e]+/gi,/[K-_]+/gi,/[e-p]+/gi,/[r-\~]+/gi,/[9-Z]+/gi,/[9-k]+/gi,/[\]-k]+/gi,/[\{-\}]+/gi,/[0-z]+/gi,/[0-K]+/gi,/[5-\}]+/gi,/[a-zA-Z]+/gi,/[afkl]+/gi,/[a-z0-9_]+/gi,/[abc]+/gi,/[E-f]+/gi,/[abc]+/gi,/[E-fk-o]+/gi,/[a-dk-lx-z]+/gi,/[\[\]]+/gi,/[\[\}]+/gi,/[0-\}]+/gi,/[A-z]+/gi,/[@-k]+/gi,/[0-_]+/gi,/[Z-z]+/gi,/[A-a]+/gi,/[X-kK-b]+/gi];
var regexCase = [/[K-Z]+/g,/[C-\{]+/g,/[L-e]+/g,/[F-e]+/g,/[K-_]+/g,/[e-p]+/g,/[r-\~]+/g,/[9-Z]+/g,/[9-k]+/g,/[\]-k]+/g,/[\{-\}]+/g,/[0-z]+/g,/[0-K]+/g,/[5-\}]+/g,/[a-zA-Z]+/g,/[afkl]+/g,/[a-z0-9_]+/g,/[abc]+/g,/[E-f]+/g,/[abc]+/g,/[E-fk-o]+/g,/[a-dk-lx-z]+/g,/[\[\]]+/g,/[\[\}]+/g,/[0-\}]+/g,/[A-z]+/g,/[@-k]+/g,/[0-_]+/g,/[Z-z]+/g,/[A-a]+/g,/[X-kK-b]+/g];
write("Scenario RegEx case insensitive...");
var count = 1;
for (const v82 in regexNoCase) {
    write((((("Test case " + count) + " ") + regexNoCase[v82]) + " - exec :") + regexNoCase[v82].exec(a));
    count++;
    write((((("Test case " + count) + " ") + regexNoCase[v82]) + " - match:") + a.match(regexNoCase[v82]));
    count++;
}
write("Scenario RegEx case sensitive...");
for (const v111 in regexCase) {
    write((((("Test case " + count) + " ") + regexCase[v111]) + " - exec :") + regexCase[v111].exec(a));
    count++;
    write((((("Test case " + count) + " ") + regexCase[v111]) + " - match:") + a.match(regexCase[v111]));
    count++;
}
