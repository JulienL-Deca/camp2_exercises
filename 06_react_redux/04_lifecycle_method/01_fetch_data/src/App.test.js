import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer';

beforeEach(function() {
  fetch = jest.fn().mockImplementation(() => {
    const p = new Promise((reponse, reject) => {
      reponse({
        url: "https://random.dog/6a205164-9440-4805-bd1d-63c08444dd50.jpg",
        json: function() {
          return {url: "https://random.dog/6a205164-9440-4805-bd1d-63c08444dd50.jpg"}
        }
      });
    });
    return p;
  });
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("first test", () => {
  const component = TestRenderer.create(<App />);
  const testInstance = component.root;
  let tree = component.toJSON();
  console.log(tree);
  // expect(testInstance.findByType(RefreshButton).props.foo).tobe('bar');
  expect(tree.children[0].type).toBe("img");
});
