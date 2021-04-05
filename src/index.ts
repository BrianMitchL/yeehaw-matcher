const word = new RegExp(/[yh](?:(?:e{2,})|(?:a+(?:w+|h+)))/i);

/**
 * A valid word starts with 'y' or 'h' and is followed by
 * some variation of 'ee', 'aw', or 'ah'
 *
 * This RegExp matches a string that contains a word match, optionally
 * followed by a whitespace, and a second word match
 *
 * @example yeehaw.test('yee haw');
 *
 **/
export const yeehaw = new RegExp(
  `\\b${word.source}(?:\\b\\W\\b)?${word.source}\\b`,
  'i'
);

/**
 * This RegExp works in the same way as `yeehaw`, but it captures a "yee haw"
 * match, and has a global flag.
 *
 * @example 'yee haw hee haw hee yah'.match(yeehawAll);
 *
 **/
export const yeehawAll = new RegExp(
  `\\b(${word.source}(?:\\b\\W\\b)?${word.source})\\b`,
  'ig'
);
