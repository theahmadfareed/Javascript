console.log("Modules");
/*
What is Module?


=> Global Scope
=> Module Scope (Module Pattern)
=> Function Scope (IIFE)
=> Block Scope(let, const)

*/


// IIFE & Module Pattern
var a = (function (){
    var ali = 'ali';
    var moosa = 'mooosa';

    function fight(c1, c2){
        var attack1 = Math.floor(Math.random()*c1.length);
        var attack2 = Math.floor(Math.random()*c2.length);
        return attack1 > attack2 ? `${c1} wins` : `${c2} wins`
    }
    return {
        fight: fight
    }
})()


// CommonJS (require, exports)
// Browserify, WebPack (module bundller)
// AMD (helps to load module async)
/*
define([m1, m2],
    function(m1Import, m2Import){
        var a = m1Import.fight
        var b = m2Import.love

        function dance(){}

        return {
            dance: dance,
        };
    });
*/
// UMD


// ES6 Modules (import, export)
// Named and Default Export (type = "module")








