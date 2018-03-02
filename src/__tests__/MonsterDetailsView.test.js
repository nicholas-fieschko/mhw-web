import React from 'react';
import MonsterDetailsView from 'components/Views/MonsterDetailsView';
import Monster from 'components/shared/Monster';
import { shallow } from 'enzyme';

let component;
const props = { match: { params: { name: 'Pukei-Pukei' } } };
beforeEach(() => {
    component = shallow(<MonsterDetailsView {...props} />);
});

describe(`<MonsterDetailsView ${JSON.stringify(props)}/>`, () => {
    it('renders 1 monsterdetailview component', () => expect(component).toHaveLength(1));
    it('renders 1 monster component', () => expect(component.find(Monster)).toHaveLength(1));
    it('renders a page containing the monster name passed in as a prop', () => expect(component.contains("Pukei-Pukei")).toEqual(true));
});