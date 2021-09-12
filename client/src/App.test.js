import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Home from "../src/components/Home"
import PokemonsCreated from "../src/components/PokemonsCreated";


configure({ adapter: new Adapter() });

describe("App", () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });
  describe("El componente Home debe renderizar en todas las rutas.", () => {
    it('Debería renderizarse en la ruta "/home"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/home"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Home)).toHaveLength(1);
    });

    it("El componente PokemonCreated debe renderizar en la ruta /pokemoncreated - este test no pasará si Otro componente (que no sea Nav) se renderiza en esta ruta.", () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/pokemoncreated"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(container.find(PokemonsCreated)).toHaveLength(1);
    });
  });
})

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
