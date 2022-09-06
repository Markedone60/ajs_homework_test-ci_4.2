import sortHeroes from '../sortfunction';

test('test 1 if sorting function is working', () => {
  const result = sortHeroes([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expected);
});

test('test 2 if sorting function is working', () => {
  const result = sortHeroes([
    { name: 'мечник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 10 },
  ]);

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 80 },
    { name: 'лучник', health: 10 },
  ];

  expect(result).toEqual(expected);
});