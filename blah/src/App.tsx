import React from 'react';
import logo from './logo.svg';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  {
    name: 'The Beastie Boys',
    members: 'Ad Rock, MCA, Mike D',
    formed: 1979,
  },
  {
    name: 'Wolfmother',
    members: 'Andrew Stockdale, Hamish Rosser, Bobby Poulton',
    formed: 2004,
  },
  {
    name: 'Cream',
    members: 'Eric Clapton, Jack Bruce, Ginger Baker',
    formed: 1966,
  },
  {
    name: 'Nirvana',
    members: 'Kurt Cobain, Dave Grohl, Krist Noveselic',
    formed: 1987,
  },
];

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

class Band extends React.Component<BandProps> {
  render() {
    const oneBand = this.props;

    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h3>Members: {oneBand.members}</h3>
        <h3>Formed: {oneBand.formed}</h3>
      </div>
    );
  }
}

function BandList() {
  return (
    <div>
      {bandNames.map((oneBand) => (
        <Band {...oneBand} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <BandList />
    </div>
  );
}

export default App;
