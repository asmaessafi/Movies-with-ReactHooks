import React from 'react'

const Filter = ({handlefilterChange}) => {
  return (
    <div className='filterform'>
      <h2 className='hfilter' style={{color:'beige'}}>Search for a film</h2>
      
      <div className='filter'>

      <input type="text" 
      placeholder='Search By Title'
      className='form-input searchBy' 
      onChange={(e)=>{handlefilterChange('title',e.target.value)}}/>

      <input type="number"
      placeholder='Search By Rating'
      className='form-input searchBy' 
      onChange={(e)=>handlefilterChange('rating',e.target.value)}/>
      </div>

    </div>
  )
}

export default Filter
