import './App.css';
import johanImage from './pictures/johan.JPG';


function Profile({ name, email, image }) {
  return (
    <div className='profile'>
      <img src={image} alt={name}></img>
      <p className='profile-name'>{name}</p>
      <p className='profile-name'>{email}</p>
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
    name: "NAME",
    email: "charliewhite@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Charlie White",
    email: "charliewhite@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Charlie White",
    email: "charliewhite@gmail.com",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Charlie White",
    email: "charliewhite@gmail.com",
    image: "https://picsum.photos/200/300",
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
        <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer" className="github-link">
          View GitHub
        </a>
      </header>
    </div >
  );
}

export default App;
