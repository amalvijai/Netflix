
import './App.css';
import Banner from './componemts/Banner';
import Nav from './componemts/Nav';
import Row from './componemts/Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row isPoster={true} title="Netflix Orignals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchurl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />
      

      
      
    </div>
  );
}
export default App;
