// --allow-natives-syntax --maglev
    function foo(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29, arg30) {
        for (let i = 0; i < 100; i++) {
        }
        try {
            JSON.parse();
        } catch(e) {
            var a = 1.1;
        }
    }
    foo(1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30,);
    foo(1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30,);

    %OptimizeMaglevOnNextCall(foo);

    foo(1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 547397793, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.30,);


// ==10408==ERROR: AddressSanitizer: access-violation on unknown address 0x000041414141 (pc 0x7ff7700b56ca bp 0x008fbdbfe940 sp 0x008fbdbfe8c0 T0)
// ==10408==The signal is caused by a READ memory access.
// ==10408==*** WARNING: Failed to initialize DbgHelp!              ***
// ==10408==*** Most likely this means that the app is already      ***
// ==10408==*** using DbgHelp, possibly with incompatible flags.    ***
// ==10408==*** Due to technical reasons, symbolization might crash ***
// ==10408==*** or produce wrong results.                           ***
// ==10408==WARNING: Failed to use and restart external symbolizer!
//     #0 0x7ff7700b56c9 in v8::internal::Factory::NewCatchContext C:\b\s\w\ir\cache\builder\v8\src\heap\factory.cc:1371
//     #1 0x7ff77110a074 in v8::internal::Runtime_PushCatchContext C:\b\s\w\ir\cache\builder\v8\src\runtime\runtime-scopes.cc:600
//     #2 0x7ff6ffed18bb  (<unknown module>)
//     #3 0x8fbdbfeabf  (<unknown module>)
//     #4 0x121d49c14a7f  (<unknown module>)
//     #5 0x11fd492203ff  (<unknown module>)
//     #6 0x8fbdbfea5f  (<unknown module>)
//     #7 0x31  (<unknown module>)
//     #8 0x8fbdbfec37  (<unknown module>)
//     #9 0x8fbdbfea7f  (<unknown module>)
//     #10 0x5  (<unknown module>)
//     #11 0x8fbdbfec37  (<unknown module>)
//     #12 0x7ff6e000441a  (<unknown module>)
//     #13 0x1226001d3f10  (<unknown module>)
//     #14 0x12260004ab08  (<unknown module>)

// AddressSanitizer can not provide additional info.
// SUMMARY: AddressSanitizer: access-violation C:\b\s\w\ir\cache\builder\v8\src\heap\factory.cc:1371 in v8::internal::Factory::NewCatchContext
// ==10408==ABORTING