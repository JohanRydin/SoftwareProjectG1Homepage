import './App.css';
import johanImage from './pictures/johan.JPG';
import FilipImage from './pictures/Filip.JPG';
import LawendImage from './pictures/Lawend.JPG';
import ErdenImage from './pictures/Erden.jpg';
import IsacImage from './pictures/Isac.JPG';

function Profile({ name, email, leader, image }) {
  return (
    <div className='profile'>
      <img src={image} alt={name}></img>
      <p className='profile-name'>{name}</p>
      <p className='profile-email'>{email}</p>
      {leader && <p className='leader'>Project Manager</p>}
    </div>
  )
}

const members = [
  {
    name: "Filip Eriksson",
    email: "filip.eriksson4@outlook.com",
    image: FilipImage,
    isLeader: true,


  },
  {
    name: "Johan Rydin",
    email: "johanrydin00@gmail.com",
    image: johanImage,
    isLeader: false

  },
  {
    name: "Lawend Mardini",
    email: "mardini.lawend@gmail.com",
    image: LawendImage,
    isLeader: false,

  },
  {
    name: "Erdem Garip",
    email: "erdemg0919@gmail.com",
    image: ErdenImage,
    isLeader: false,

  },
  {
    name: "Isac Arrhenius",
    email: "isac.arrhenius@gmail.com",
    image: IsacImage,
    isLeader: false,

  },
]

const profile_members = members.map(({ name, email, isLeader, image }) => (<Profile name={name} email={email} leader={isLeader} image={image} />));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Group 1</h1>
        <br></br>
        <br></br>
        <br></br>

        <div className='flexgrid'>
          {profile_members}
        </div>
        <a href="https://github.com/JohanRydin/SoftwareProject-Group-1" target="_blank" rel="noopener noreferrer" className="github-link">
          GitHub
        </a>
      </header>
    </div >
  );
}

export default App;
