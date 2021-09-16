import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from '../components/LandingPage';
import {Link, BrowserRouter} from 'react-router-dom'
test('renders component', () =>{

    const image="logo"
    const component= render(<BrowserRouter><Link><LandingPage image={image}/></Link></BrowserRouter>) 
 
    component.getByAltText('Loading...')
})