import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <section className="solar-system">
        <div className="title" data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="cards">
          {
            planets.map(({ name, image }) => (
              <PlanetCard key={ name } planetName={ name } planetImage={ image } />
            ))
          }
        </div>
      </section>
    );
  }
}

export default SolarSystem;
