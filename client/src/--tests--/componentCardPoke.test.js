import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import CardPoke from "../components/CardPoke";

test('renders component', () =>{
    const name= 'tomas'
    const image="pikachu"
    const types= "fire"
    const component= render(<CardPoke name={name} image={image} types={types}/>) 
    component.getByText('tomas')
    component.getByAltText('imagen no encontrada')
    component.getByText('fire')
})
test('renders component example 2', () =>{
    const name= 'messi'
    const image="bulbasaur"
    const types= "normal"
    const component= render(<CardPoke name={name} image={image} types={types}/>) 
    component.getByText('messi')
    component.getByAltText('imagen no encontrada')
    component.getByText('normal')
})