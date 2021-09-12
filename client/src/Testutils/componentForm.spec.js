import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render } from '@testing-library/react';

import { PokemonsCreated } from "../components/PokemonsCreated";
import configureStore from "redux-mock-store";


configure({ adapter: new Adapter() });

describe("<PokemonsCreated />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PokemonsCreated />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Image: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Image: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "image"', () => {
      expect(wrapper.find('input[name="image"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Nombre: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Nombre: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('textarea[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Vida: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Vida: ");
    });

   it('Renderiza un input con la propiedad "name" igual a "hp"', () => {
      expect(wrapper.find('input[name="hp"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Fuerza: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Fuerza: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "attack"', () => {
      expect(wrapper.find('input[name="attack"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Defensa: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Defensa: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "defense"', () => {
      expect(wrapper.find('input[name="defense"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Velocidad: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Velocidad: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "speed"', () => {
      expect(wrapper.find('input[name="speed"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Altura: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Altura: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "height"', () => {
      expect(wrapper.find('input[name="height"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Peso: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Peso: ");
    });

    it('Renderiza un input con la propiedad "name" igual a "weight"', () => {
      expect(wrapper.find('input[name="weight"]')).toHaveLength(1);
    });
    it('Renderiza un label con el texto igual a "Tipos: "', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Tipos: ");
    });

    it('Renderiza un boton con el "type" "submit"', () => {
      expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
    });
  })
})