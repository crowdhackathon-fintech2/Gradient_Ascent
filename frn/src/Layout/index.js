import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Components/Home';

class MainLayout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main key={1}>
            <Route path="()" render={s => <Home />} />
            <Route exact path="/" render={s => <Home />} />
            <Route exact path="/Profile" render={s => <Home />} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainLayout;
