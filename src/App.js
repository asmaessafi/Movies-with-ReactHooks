import { useState } from 'react';
import './App.css';
import Addmovie from './components/Addmovie';
import Filter from './components/Filter';
import Movielist from './components/Movielist';
import { MovieArray } from "./tabMovies";

function App() {

const[newMovie,setnewMovie]=useState({
  title:'',
  description:'',
  posterurl:'',
  rating:''
})

const onChangeForm = (e) => {
  setnewMovie(prevstate=>({
    ...prevstate,
    [e.target.name]:e.target.value
    
  }))

}

const[newMovieArray,setnewMovieArray]=useState(MovieArray)
const[filters,setfilters]=useState({title:'' ,rating:''})

const addFilm=(newMovie)=>{
  setnewMovieArray(prevlist=>
    [...prevlist,
      newMovie
    ]
  )     
}

const handlefilterChange=(name, value)=>{
  setfilters(prevstate=>({
    ...prevstate,
    [name]: value
  }))
}
console.log(filters);

const filtred=newMovieArray.filter(movie=>
  movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
  movie.rating>= filters.rating
)

console.log(filtred);


  return (
    <div className="app">
      <Filter handlefilterChange={handlefilterChange}/>
      <Addmovie  newMovieArray={newMovieArray} onChangeForm={onChangeForm} addFilm={addFilm} newMovie={newMovie} setnewMovie={setnewMovie} />
      <Movielist filtred={filtred} />
    </div>
  );
}

export default App;
