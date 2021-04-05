# yeehaw-matcher 🤠

Test that a string contains permutations of a yeehaw.

This module exports a named RegExp, `yeehaw`. A string will match a "yeehaw" if there are two words, optionally separated by non-word characters. A word is a string that starts with a 'y' or an 'h', followed by some variation of 'ee', 'aw', or 'ah' (at least one of each character is required).

There is a second RegExp, `yeehawAll` that can be used with `String.prototype.match` to find all "yee haws" in a string.

## Example

```javascript
const { yeehaw, yeehawAll } = require('yeehaw-matcher');

yeehaw.test('yeehaw'); // true
yeehaw.test('yee haw'); // true
yeehaw.test('hee haw'); // true
yeehaw.test('boo, no fun'); // false
yeehaw.test('yehaw'); // false
yeehaw.test('yeeha'); // false
yeehaw.test('yh'); // false

'yee haw hee haw hee yah'.match(yeehawAll); // ['yee haw', 'hee haw', 'hee yah']
```

See the [test file](src/index.spec.ts) for more examples of valid and invalid strings.

## Inspiration

[Brandon Johnson](https://twitter.com/brandon_mn)'s yeehaw table.

|             | **Lawful** | **Neutral** | **Chaotic** |
| ----------- | ---------- | ----------- | ----------- |
| **Good**    | yeehaw     | heeyaw      | yeeyaw      |
| **Neutral** | yeeyee     | hawhaw      | yahyah      |
| **Evil**    | hawyee     | yawhee      | heehaw      |
