import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Home from "../components/Home";
import SearchBar from "../components/SearchBar";
import Paginado from  "../components/Paginado";
import CardPoke from "../components/CardPoke";

// configure({ adapter: new Adapter() });

describe('With React Testing Library', () => {
    const initialState = {}
    const mockStore = configureStore()
    let store,wrapper
  
    it('Shows "Hello world!"', () => {
      store = mockStore(initialState)
      const { getByText } = render(<Provider store={store}><Home /></Provider>)
  
// describe("<Home />", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Home />);
//   });

  it("deberia renderizar 3 componentes <SearchBar />, <Paginado />, <CardPoke/>", () => {
    expect(getByText.find(SearchBar, Paginado, CardPoke)).toHaveLength(3);
  });
});
})