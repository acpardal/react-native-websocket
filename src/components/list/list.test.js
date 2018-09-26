import React from 'react';
import List from './list';

import renderer from 'react-test-renderer';

const feed = [
  {name: 'ETH', 'age': Math.floor(Math.random() * 100) },
  {name: 'BTC', 'age': Math.floor(Math.random() * 100) },
  {name: 'EOS', 'age': Math.floor(Math.random() * 100) },
  {name: 'XRP', 'age': Math.floor(Math.random() * 100) },
  {name: 'BCH', 'age': Math.floor(Math.random() * 100) }
]
test('renders correctly', () => {
  const tree = renderer.create(<List feed={feed}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
