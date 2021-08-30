"use strict";
{
    var age_1 = { value: 5 };
    var pawel_1 = { value: "pawel" };
    function wrap(x) {
        return {
            value: x
        };
    }
    var x = wrap(5);
    wrap("pawel");
    var p = wrap({ name: "pawel", age: 32 });
}
