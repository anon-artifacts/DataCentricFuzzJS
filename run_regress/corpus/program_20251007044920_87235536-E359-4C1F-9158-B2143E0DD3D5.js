{
    var str = "x";
    str.a = 12;
    print(undefined, str.a);
}
{
    var str = "x";
    str.a = 1;
}
{
    var str = "x";
    str["a"] = 12;
    print(undefined, str.a);
}
{
    var str = "x";
    str["a"] = 1;
}
{
    var str = "x";
    str[66] = 12;
    print(undefined, str.a);
}
{
    var str = "x";
    str[66] = 1;
}
