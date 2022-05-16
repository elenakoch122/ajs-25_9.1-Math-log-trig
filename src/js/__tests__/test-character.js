import Character from '../Character';

test('create an instance of Character', () => {
  expect(new Character()).toBeInstanceOf(Character);
});

test('get stoned', () => {
  const result = new Character();
  result.stoned = true;
  expect(result.isStoned).toBe(true);
});

test('get attack without stoned', () => {
  const result = new Character();
  result.attack = 100;
  expect(result.attack).toBe(90);
});

test('get attack with stoned', () => {
  const result = new Character();
  result.stoned = true;
  result.attack = 100;
  expect(result.attack).toBe(85);
});
