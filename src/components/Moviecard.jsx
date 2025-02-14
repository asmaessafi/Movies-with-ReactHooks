

const Moviecard = ({title ,description, posterURL ,rating }) => {
  return (
    
    <div className="film-card">
      <img src={posterURL} alt={title} className="film-poster" />
        <div className="film-details">
        <h2 className="film-title">{title}</h2>
          {/* <p className="film-description">{description}  </p> */}
          <div className="film-rating">
            <span className="rating-label">Rating:</span>
            <span className="rating-value">{rating}</span>
          </div>
        </div>
    </div>
    
  )
}

export default Moviecard
