import React from 'react'
import { Link , useParams} from 'react-router-dom'

const Trailer = ({filtred}) => {
    const{id}=useParams()
    const displayed=filtred.find(movie => movie.id.toString() === id)
    if(displayed){
        return (
        <div>
            <button className='button-trailer'><Link to="/"> Back to Home</Link></button>
            <div className='trailer'>
                <h1 className='trailer-title'>{displayed.title}</h1>
                <iframe className='iframe-trailer' width="696" height="392" src={displayed.trailer} title={displayed.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>

                <div className='span-trailer'>{displayed.description}
                </div>
            </div>
        </div>
    )}
}
    

export default Trailer
