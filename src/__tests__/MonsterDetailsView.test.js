import React from 'react';
import MonsterDetailsView from 'components\\Views\\MonsterDetailsView.js';
import { shallow } from 'enzyme';

describe("<MonsterDetailsView />", () => {
    it('renders 1 monsterdetailview component)', () => {
        const component = shallow(<MonsterDetailsView />);
        expect(component).toHaveLength(1);
    });
});