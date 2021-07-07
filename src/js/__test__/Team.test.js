import Team from '../Team';
import Character from '../Character';

test('checking whether there is an addition to the set', () => {
  const hero = new Character('Ivan', 'Bowman');

  const team = new Team();
  team.add(hero);

  expect([...team.members][0]).toEqual(hero);
});

test('checking the error if there is a duplicate', () => {
  const hero = new Character('Ivan', 'Bowman');

  const team = new Team();
  team.add(hero);

  expect(() => team.add(hero)).toThrowError(new Error('Такой участник уже есть'));
});

test('checking whether multiple participants have been added to the set', () => {
  const heroBowman = new Character('Ivan', 'Bowman');
  const heroUndead = new Character('Vasya', 'Undead');
  const heroZombie = new Character('John', 'Zombie');
  const team = new Team();
  team.addAll(heroBowman, heroUndead, heroZombie);

  expect([...team.members]).toEqual([heroBowman, heroUndead, heroZombie]);
});

test('checking the conversion of Set to array', () => {
  const heroBowman = new Character('Ivan', 'Bowman');
  const heroUndead = new Character('Vasya', 'Undead');
  const heroZombie = new Character('John', 'Zombie');
  const team = new Team();
  team.addAll(heroBowman, heroUndead, heroZombie);

  expect(team.toArray()).toEqual([heroBowman, heroUndead, heroZombie]);
});
