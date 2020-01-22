/* eslint-disable no-undef */
import orderByProps from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const properties = ['name', 'level'];

test('should return object sorted by props', () => {
  const received = orderByProps(obj, properties);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expected);
});
