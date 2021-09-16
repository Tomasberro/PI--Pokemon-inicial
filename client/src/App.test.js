import { render, screen } from '@testing-library/react';
import App from './App';
// import  store  from 'redux';
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Home from "../src/components/Home"
import PokemonsCreated from "../src/components/PokemonsCreated";


// configure({ adapter: new Adapter() });
//     describe("Form", () => {
//       let store;
//       const middlewares = {};
//       const mockStore = configureStore(middlewares);
    
//       beforeEach(() => {
//         store = mockStore({});
//       });

// describe("App", () => {
//   let store;
//   const middlewares = [];
//   const mockStore = configureStore(middlewares);

//   beforeEach(() => {
//     store = mockStore([]);
//   });
//   describe("El componente Home debe renderizar en todas las rutas.", () => {
//     it('Debería renderizarse en la ruta "/home"', () => {
//       const wrapper = mount(
//         <Provider store={store}>
//           <MemoryRouter initialEntries={["/home"]}>
//             <App />
//           </MemoryRouter>
//         </Provider>
//       );
//       expect(wrapper.find(Home)).toHaveLength(1);
//     });

//     it("El componente PokemonCreated debe renderizar en la ruta /pokemoncreated - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.", () => {
//       const container = mount(
//         <Provider store={store}>
//           <MemoryRouter initialEntries={["/pokemonscreated"]}>
//             <App />
//           </MemoryRouter>
//         </Provider>
//       );
//       expect(container.find(PokemonsCreated)).toHaveLength(1);
//     });
//   });
//     })
xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// import { Provider } from 'react-redux'
//  const ReduxProvider = ({ App, store }) => (
//   <Provider store={}>{children}</Provider>
// )
// test("...", () => {
//   const store = configureStore();
//   const wrapper = ({ children }) => (
//     <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
//   );
//   const { result } = renderHook(() => {
//     useSaveAuthenticationDataToStorages(useDispatch());
//   }, { wrapper });
//   // ... Rest of the logic
// });