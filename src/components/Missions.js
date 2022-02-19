import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

const missionsList = missions
  .map((mission) => (<MissionCard key={ mission.name } { ...mission } />));

class Missions extends Component {
  render() {
    return (
      <section className="missions">
        <div className="title" data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="cards">
          { missionsList }
        </div>
      </section>
    );
  }
}

export default Missions;
