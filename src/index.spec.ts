import { yeehaw, yeehawAll } from './index';

describe('valid strings', () => {
  it.each([
    'yeehaw',
    'heeyaw',
    'yeeyaw',
    'yeeyee',
    'hawhaw',
    'yahyah',
    'hawyee',
    'yawhee',
    'heehaw',
    'yee haw',
    'hee yaw',
    'yee yaw',
    'yee yee',
    'haw haw',
    'yah yah',
    'haw yee',
    'yaw hee',
    'hee haw',
    'yee.haw',
    'hee.yaw',
    'yee.yaw',
    'yee.yee',
    'haw.haw',
    'yah.yah',
    'haw.yee',
    'yaw.hee',
    'hee.haw',
    'YEEHAW',
    'YEE HAW',
    'can I get a YEEEEHAWWWW!?',
    'yee-haw',
    'yeeeeeeee hawwwwwwww',
    'haw hee',
    'haaaaaaaaaw yee',
    'hah hah',
    'hee hee',
  ])('"%s" matches', (str) => {
    expect(yeehaw.test(str)).toBe(true);
  });
});

describe('invalid strings', () => {
  it.each([
    'yee',
    'haw',
    'yyy hhh',
    'yh',
    'y h',
    'ygh hgh',
    'yeha',
    'ye ha',
    'yeeha',
    'yee ha',
    'yehaw',
    'ye haw',
    'yee flippin haw',
    'lots of yee words and haws mixed throughout yeeeee but never enough haws',
    'have heard',
    'yet however',
    'you hooligan',
    'yesterday hotdish',
    'hahahaha',
    'hahahah',
    'hahaha',
    'hahah',
    'haha',
    'yon hurl',
    'yall hollow',
    'you hisadone',
    'yoway hinger',
    'yedhed',
    'heeeeaaaaaa yeeeeeeeeeow',
    'yee hawh',
    'yee hahw',
  ])('"%s" does not match', (str) => {
    expect(yeehaw.test(str)).toBe(false);
  });
});

describe('exec matches', () => {
  it('only matches once per string', () => {
    expect(yeehaw.exec('yee haw yee haw yee haw yee haw')).toHaveLength(1);
  });

  it("in the middle of a sentence it's time for some yee haw hee haw yeeee hoi", () => {
    const str =
      "in the middle of a sentence it's time for some yee haw hee haw yeeee hoi";
    expect(yeehaw.exec(str)![0]).toBe('yee haw');
  });
});

it('matches all occurrences using yeehawAll', () => {
  expect(
    'some text yee haw more text. hEe haW, oh look at that, hee yah!'.match(
      yeehawAll
    )
  ).toEqual(['yee haw', 'hEe haW', 'hee yah']);
});
