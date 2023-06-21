import logo from './logo.svg';
import './App.css';
import Hello from './component/HelloComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './component/MenuComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
