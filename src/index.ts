const word = new RegExp(/[yh](?=[^\W\d_]*?[aeiou])[^\W\d_]{2,}/i);

/**
 * A valid word starts with 'y' or 'h' and is followed by at least 2 characters
 * with at least 1 that is a vowel [aeiou]
 *
 * This RegExp matches a string that contains a word match, optionally
 * followed by a whitespace, and a second word match
 *
 **/
export const yeehaw = new RegExp(
  `\\b${word.source}(?:\\b\\W\\b)?${word.source}\\b`,
  'i'
);
