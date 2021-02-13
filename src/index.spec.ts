import { yeehaw } from './index';

describe('test matches', () => {
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
    'yet however this actually matches, maybe that is okay?',
    'yeeeeeeee hawwwwwwww',
    'heeeeaaaaaa yeeeeeeeeeow',
  ])('%s', (str) => {
    expect(yeehaw.test(str)).toBe(true);
  });
});

describe('test does not match', () => {
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
  ])('%s', (str) => {
    expect(yeehaw.test(str)).toBe(false);
  });
});

describe('exec matches', () => {
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
    'yee-haw',
    'yeeeeeeee hawwwwwwww',
    'heeeeaaaaaa yeeeeeeeeeow',
  ])('%s', (str) => {
    expect(yeehaw.exec(str)![0]).toBe(str);
  });

  it('can I get a YEEEEHAWWWW!?', () => {
    expect(yeehaw.exec('can I get a YEEEEHAWWWW!?')![0]).toBe('YEEEEHAWWWW');
  });

  it('yee haw hee haw yeeee hoi', () => {
    const str = 'yee haw hee haw yeeee hoi';
    expect(yeehaw.exec(str)).toHaveLength(1);
    expect(yeehaw.exec(str)![0]).toBe('yee haw');
  });

  it('yet however this actually matches, maybe that is okay?', () => {
    expect(
      yeehaw.exec('yet however this actually matches, maybe that is okay?')![0]
    ).toBe('yet however');
  });
});
