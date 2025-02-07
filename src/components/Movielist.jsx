import Moviecard from "./Moviecard"

const Movielist = ({filtred}) => {
  return(
    <div className="movie-grid">
    {filtred.map((movie ) => {
      return(
      
      <Moviecard {...movie} key={movie.id}/>
      
      )
    })}
    </div>
  )
  
}

export default Movielist
