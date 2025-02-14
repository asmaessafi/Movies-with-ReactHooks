import { Link } from "react-router-dom"
import Moviecard from "./Moviecard"
import React from 'react'

const Movielist = ({filtred}) => {
  
  return(
    <div className="movie-grid">
    {filtred.map((movie ) => {
      return(
      
      <Link to={{ pathname: `/trailer/${movie.id}`}} key={movie.id}>
        <Moviecard {...movie}/>
      </Link>
      
      )
    })}
    </div>
  )
}

export default Movielist
