import './App.css';
import { Component } from 'react';
import { DISHES } from './shared/dishes';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  

  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
