import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';
import PokemonsCreated  from "../components/PokemonsCreated";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
configure({ adapter: new Adapter() });
// const mockStore= configureStore();
// describe("<PokemonsCreated />", () => {
//   describe("Estructura", () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(<PokemonsCreated />);
//     });
    describe("Form", () => {
      let store;
      const middlewares = [thunk];
      const mockStore = configureStore();
    
      beforeEach(() => {
        store = mockStore([]);
      });
//       describe("Estructura", () => { 
    it("Renderiza un <form>", () => {
     const store = mockStore(middlewares);
//     //  let wrapper = shallow(<PokemonsCreated />);
const { getByText } = render(<Provider store={store}><BrowserRouter><PokemonsCreated /> </BrowserRouter></Provider>)
      expect(getByText.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Image: "', () => {
      const store = mockStore(middlewares);
      const { getByText } = render(<Provider store={store}><PokemonsCreated /></Provider>)
      expect(getByText.find("label").at(0).text()).toEqual("Image: ");
    });

  //   it('Renderiza un input con la propiedad "name" igual a "image"', () => {
  //     expect(wrapper.find('input[name="image"]')).toHaveLength(1);
  //   });

  //   it('Renderiza un label con el texto igual a "Nombre: "', () => {
  //     expect(wrapper.find("label").at(1).text()).toEqual("Nombre: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "name"', () => {
  //     expect(wrapper.find('input[name="name"]')).toHaveLength(1);
  //   });

  //   it('Renderiza un label con el texto igual a "Vida: "', () => {
  //     expect(wrapper.find("label").at(2).text()).toEqual("Vida: ");
  //   });

  //  it('Renderiza un input con la propiedad "name" igual a "hp"', () => {
  //     expect(wrapper.find('input[name="hp"]')).toHaveLength(1);
  //   });

  //   it('Renderiza un label con el texto igual a "Fuerza: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Fuerza: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
  //     expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
  //   });
  //   it('Renderiza un label con el texto igual a "Defensa: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Defensa: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
  //     expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
  //   });
  //   it('Renderiza un label con el texto igual a "Velocidad: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Velocidad: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
  //     expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
  //   });
  //   it('Renderiza un label con el texto igual a "Altura: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Altura: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "height"', () => {
  //     expect(wrapper.find('input[name="height"]')).toHaveLength(1);
  //   });
  //   it('Renderiza un label con el texto igual a "Peso: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Peso: ");
  //   });

  //   it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
  //     expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
  //   });
  //   it('Renderiza un label con el texto igual a "Tipos: "', () => {
  //     expect(wrapper.find("label").at(3).text()).toEqual("Tipos: ");
  //   });

  //   it('Renderiza un boton con el "type" "submit"', () => {
  //     expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
  //   });
  })
// })
//   })
// })