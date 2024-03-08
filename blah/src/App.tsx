import './App.css';
import * as React from 'react';
import teamsData from './CollegeBasketballTeams.json'; // Import the JSON data

interface TeamData {
  //interface for when I pull data from the json file
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

//TeamCard so I can dynamically input each team into the web page.
class TeamCard extends React.Component<TeamData> {
  render() {
    const { school, name, city, state } = this.props;
    return (
      <div className="team-card">
        <h3>{school}</h3>
        <p>
          <strong>Mascot Name:</strong> {name}
        </p>
        <p>
          <strong>Location:</strong> {city}, {state}
        </p>
      </div>
    );
  }
}

//Heading section to welcome people to the website.
class HeadingSection extends React.Component {
  render() {
    return (
      <div className="heading-section">
        <h1>Welcome to College Basketball Teams</h1>
        <p>Explore various college basketball teams and their information.</p>
      </div>
    );
  }
}

//function that will list out each team
function TeamList() {
  return (
    <div className="team-list">
      {teamsData.teams.map((team) => (
        <TeamCard key={team.tid} {...team} />
      ))}
    </div>
  );
}

//App functional component
const App = () => {
  return (
    <div className="app">
      <HeadingSection />
      <TeamList />
    </div>
  );
};

export default App;
