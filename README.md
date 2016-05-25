
# worder

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/worder.svg)](https://www.npmjs.com/package/worder) [![Downloads](https://img.shields.io/npm/dt/worder.svg)](https://www.npmjs.com/package/worder) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Get the words from the input text.

## :cloud: Installation

```sh
$ npm i --save worder
```


## :clipboard: Example



```js
const worder = require("worder");

console.log(worder("Hello World and Mars!"));
// => [ 'Hello', 'World', 'and', 'Mars' ]
```

## :memo: Documentation


### `worder(s)`
Get the words from the input text.

#### Params
- **String** `s`: The input string.

#### Return
- **Array** An array of strings representing the text words.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`count-words`](https://github.com/IonicaBizau/count-words#readme)—Count how many times words appear in the input string.
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
