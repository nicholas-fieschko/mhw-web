import { GetMonsterByName } from 'repos/monsters';

describe(`Monsters data repo`, () => {
    // it('renders 1 monsterdetailview component', () => expect().toHaveLength(1));
    describe(`GetMonsterByName`, () => {
        describe(`a successful match`, () => {
            let foundMonster;
            beforeEach(() => {
                foundMonster = GetMonsterByName('Pukei-Pukei');
            });

            it('returns the correct monster for a name search (Pukei-Pukei)', () => {
                expect(foundMonster).toBeTruthy();
                expect(foundMonster.name).toEqual('Pukei-Pukei');
            });

            it('returns all correct weakness data for the monster (Pukei-Pukei)', () => {
                const weaknesses = { Fire: 2, Water: 0, Thunder: 3, Ice: 2, Dragon: 1, Poison: 1, Sleep: 3, Paralysis: 3, Blast: 2, Stun: 2 };
                Object.keys(weaknesses).forEach(elementName => {
                    expect(foundMonster[elementName]).toEqual(weaknesses[elementName]);
                });
            });
        });

        it('returns null when no match is found', () => expect(GetMonsterByName('I DONT EXIST!')).toBeNull());
    });
});
