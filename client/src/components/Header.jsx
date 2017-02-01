import React from 'react'
import App from './App.jsx';
import { RouteHandler } from './Router.jsx';

const Header = () => (
  <div>
    <header>
      <div id="header">CareerSpark</div>
      <div id="sub-header">Supercharge Your Professional Network</div>
    </header>

    <RouteHandler />
  </div>
)

export { Header }