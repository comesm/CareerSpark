import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div>
            <h1 id="header">CareerSpark</h1>
          </div>
          <div>
            <h2 id="sub-header">
              <span id="Supercharge">Supercharge </span>
              Your Professional Network 
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Harry_Potter_Lightning.svg/1000px-Harry_Potter_Lightning.svg.png"
                   alt="lightning bolt"
                   id="lightningBolt">
              </img>
            </h2>
          </div>
        </header>
      </div>
    )
  }
}