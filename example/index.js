const worder = require("../lib");

console.log(worder("Hello World and Mars!"));
// => [ 'Hello', 'World', 'and', 'Mars' ]

console.log(worder("X-Men", ["-"]));
// => [ 'X-Men' ]
