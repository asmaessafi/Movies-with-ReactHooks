
const Addmovie = ({ onChangeForm ,addFilm ,newMovie,newMovieArray ,setnewMovie}) => {

  const handleAdd=(e)=>{
  e.preventDefault()
  if(newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating && newMovie.trailer){
  addFilm(
    {...newMovie,
      id: newMovieArray.length + 1,
      rating: Number(newMovie.rating),
    })
    setnewMovie({
      title:'',
      description:'',
      posterURL:'',
      rating:'',
      trailer: ''
    })}
  }

  console.log(newMovieArray);
  
  return (
    <div>
      <form className="form" onSubmit={handleAdd} >
        <input
          type="text"
          className="form-input"
          name="title"
          placeholder="Enter Movie Name"
          onChange={onChangeForm}
          value={newMovie.title}
        />

        <input
          type="text"
          className="form-input"
          name="description"
          placeholder="Enter Movie description"
          onChange={onChangeForm}
          value={newMovie.description}
        />

        <input
          type="text"
          className="form-input"
          name="posterURL"
          placeholder="Enter Poster URL"
          onChange={onChangeForm}
          value={newMovie.posterURL}
        />

        <input
          type="number"
          className="form-input"
          name="rating"
          placeholder="Enter Movie Rating"
          step="0.1"
          onChange={onChangeForm}
          value={newMovie.rating}
        />

        <input
          type="text"
          className="form-input"
          name="trailer"
          placeholder="Enter trailer link"
          onChange={onChangeForm}
          value={newMovie.trailer}
        />

        <button className="form-button" type="submit">Publish Movie</button>
      </form>
    </div>
  );
}
  


export default Addmovie
 