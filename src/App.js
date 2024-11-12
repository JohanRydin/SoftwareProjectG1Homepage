import './App.css';
import johanImage from './pictures/johan.JPG';
import FilipImage from './pictures/Filip.JPG';
import LawendImage from './pictures/Lawend.JPG';
import ErdenImage from './pictures/Erden.jpg';
import IsacImage from './pictures/Isac.JPG';

function Profile({ name, email, image }) {
  return (
    <div className='profile'>
      <img src={image} alt={name}></img>
      <p className='profile-name'>{name}</p>
      <p className='profile-email'>{email}</p>
    </div>
  )
}

const members = [
  {
    name: "Johan Rydin",
    email: "johanrydin00@gmail.com",
    image: johanImage,
  },
  {
    name: "Filip Eriksson",
    email: "filip.eriksson4@outlook.com",
    image: FilipImage
  },
  {
    name: "Lawend Mardini",
    email: "mardini.lawend@gmail.com",
    image: LawendImage,
  },
  {
    name: "Erdem Garip",
    email: "erdemg0919@gmail.com",
    image: ErdenImage,
  },
  {
    name: "Isac Arrhenius",
    email: "isac.arrhenius@gmail.com",
    image: IsacImage,
  },
]

const profile_members = members.map(({ name, email, image }) => (<Profile name={name} email={email} image={image} />));

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
