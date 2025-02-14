import { useState } from 'react';
import './App.css';
import Addmovie from './components/Addmovie';
import Filter from './components/Filter';
import Movielist from './components/Movielist';
import { MovieArray } from "./tabMovies";
import { Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';


function App() {

  const [newMovie, setnewMovie] = useState({
    title: '',
    description: '',
    posterurl: '',
    rating: '',
    trailer: ''

  })

  const onChangeForm = (e) => {
    setnewMovie(prevstate => ({
      ...prevstate,
      [e.target.name]: e.target.value

    }))

  }

  const [newMovieArray, setnewMovieArray] = useState(MovieArray)
  const [filters, setfilters] = useState({ title: '', rating: '' })

  const addFilm = (newMovie) => {
    setnewMovieArray(prevlist =>
      [...prevlist,
        newMovie
      ]
    )
  }

  const handlefilterChange = (name, value) => {
    setfilters(prevstate => ({
      ...prevstate,
      [name]: value
    }))
  }
  console.log(filters);

  const filtred = newMovieArray.filter(movie =>
    movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    movie.rating >= filters.rating
  )





  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <>
          <Filter handlefilterChange={handlefilterChange} />
          <Addmovie newMovieArray={newMovieArray} onChangeForm={onChangeForm} addFilm={addFilm} newMovie={newMovie} setnewMovie={setnewMovie} />
          <Movielist filtred={filtred} />
          </>
        } />
        <Route path="/trailer/:id" 
        element={<Trailer filtred={filtred} />} />
      </Routes>
    </div>
  );
}

export default App;
