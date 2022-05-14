import Character from '../Character';

test('create an instance of Character', () => {
  expect(new Character()).toBeInstanceOf(Character);
});

test('get attack', () => {
  const result = new Character();
  result.attack = 2;
  expect(result.attackPower).toBe(90);
});

test('get stoned', () => {
  const result = new Character();
  result.stoned = 2;
  expect(result.attackPower).toBe(85);
});
