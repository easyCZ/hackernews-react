import {TestUtils} from 'react/addons';
import Component from '../component.js';

// let TestUtils = React.addons.TestUtils;

jest.dontMock('../component.js');

describe('component', () => {

    let component;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(
            <Component />
        );
    });

    it('should render itself', () => {
        let title = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');

        expect(title.getDOMNode().textContent)
            .toEqual('Hello React and Babel');
    });

});