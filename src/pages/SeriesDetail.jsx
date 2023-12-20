import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const SeriesDetail = () => {
    const [serie, setSerie]= useState(null)
 const { id } = useParams()

    useEffect(()=>{
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response=> response.json())
        .then(data => setSerie(data))
      },[id])
      console.log(serie)
  return (
    <>
    <nav className='navbar navbar-expand-lg bg-primary'>
    <form className=' container-fluid justify-content-center '>
    <NavLink className='navbar-brand ' to='#'>
        <h1>MAZES</h1>
        </NavLink>
        </form>
    </nav>

    <div className='container-fluid text-center mt-3'>
    <div className='mb-5 mt-5'>
        <h4>
          •	{serie?.genres[0]} &nbsp;| •	{serie?.genres[1]} &nbsp;| •	{serie?.genres[2]} &nbsp;
        </h4>
          
        </div>
      <div className='row '>
    
        <div className='col col-sm-4  '>
          <img className='img-fluid w-75' src={`${serie?.image?.medium}`} /> 
        </div>
     <div className='col '>
           <h3>{serie?.name}</h3>
           <p>{serie?.summary}</p>
  </div>
     </div>
    
      </div>

      <div className='container mt-4 mb-4'>
<div className='row'>
  <div className='col-4'>
  <h3>Rainking {serie?.rating?.average}</h3>
  </div>
  <div className='col-5'>
  <h4>Estreno {serie?.premiered}</h4> 
  </div>
  <div className='col'>
  <NavLink to={`${serie?.officialSite}` }> <h4>Ver serie</h4> </NavLink>
  </div>
</div>

      
      
      </div>
  
    </>
    
  )
}

export default SeriesDetail