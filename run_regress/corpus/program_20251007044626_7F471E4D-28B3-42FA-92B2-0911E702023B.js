for (const v3 of ["tr","TR"]) {
    ("İ").toLocaleLowerCase(v3);
}
("İ").toLocaleLowerCase("trl");
for (const v14 of ["no_locale","tr-invalid_ext","no_locale",[]]) {
    try { ("").toLocaleLowerCase(v14); } catch (e) {}
    try { ("x").toLocaleLowerCase(v14); } catch (e) {}
}
("A").toLocaleLowerCase([]);
