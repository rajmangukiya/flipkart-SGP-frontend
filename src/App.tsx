import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes/Routes';
import store from"./redux/store"

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={false}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </React.Suspense>
    </div>
  );
}

export default App;
