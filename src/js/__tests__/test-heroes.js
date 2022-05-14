import Daemon from '../Daemon';
import Magician from '../Magician';

test('create an instance of Daemon', () => {
  expect(new Daemon('Iron')).toBeInstanceOf(Daemon);
});

test('create an instance of Magician', () => {
  expect(new Magician('Man')).toBeInstanceOf(Magician);
});
