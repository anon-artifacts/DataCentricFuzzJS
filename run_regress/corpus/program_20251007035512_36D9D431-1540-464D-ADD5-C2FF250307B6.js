var test;
{
    with ({ a: 2 }) {
        function f4() {
            return a;
        }
        test = f4();
    }
    let a = 5;
}
