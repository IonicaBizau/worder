# worder [![Support this project][donate-now]][paypal-donations]

Get the words from a sentence.

## Installation

```sh
$ npm i --save worder
```

## Example

```js
const worder = require("worder");

console.log(worder("Hello World and Mars!"));
// => [ 'Hello', 'World', 'and', 'Mars' ]
```

## Documentation

### `worder(s)`
Get the words from the input text.

#### Params
- **String** `s`: The input string.

#### Return
- **Array** An array of strings representing the text words.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md