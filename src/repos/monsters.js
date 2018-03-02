import MonsterWeaknesses from 'data/monster-weaknesses';
import MonsterIcons from 'data/monster-icons';
import anyUndefinedOrNull from 'junk-drawer/anyUndefinedOrNull';

// array of monster objects with all known data {name, key, image: imagePath, Fire: 3, Water: 0, Thunder: 2, ... }
export const MonsterData = MonsterIcons.map(({ name, image, ...rest }) => ({
    name,
    image,
    key: name.split(' ').join('-'),
    ...MonsterWeaknesses[name],
    ...rest,
}));

export const MonsterNameDictionary = MonsterData.reduce(
    (monsterDict, monster) => ({
        ...monsterDict,
        [monster.name]: monster,
    }),
    {}
);

export const GetMonsterByName = name => {
    return name in MonsterNameDictionary ? MonsterNameDictionary[name] : null;
};

export const sortByField = field => (monsterA, monsterB) => {
    if (!field) field = 'name';
    const [ A_COMES_FIRST, ARE_EQUAL, B_COMES_FIRST ] = [ -1, 0, 1 ];
    const [ monsterAProperty, monsterBProperty ] = [ monsterB[field], monsterA[field] ];
    if (anyUndefinedOrNull(monsterA, monsterB) || monsterA[field] === monsterB[field]) return ARE_EQUAL;
    if (monsterA[field] > monsterB[field]) return A_COMES_FIRST;
    if (monsterA[field] < monsterB[field]) return 1;
};

export const getAllSortedMonsterData = (sortField = 'name') => {
    const sortByFunc = sortByField(sortField);
    return MonsterData.sort(sortByFunc);
};
