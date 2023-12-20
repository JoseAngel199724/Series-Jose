import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Home = () => {
  const [series, setSeries]= useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [todo, setTodo]= useState('')
  useEffect(()=>{
    fetch('https://api.tvmaze.com/shows').then(response=> response.json())
    .then(data => setSeries(data))
  },[])
console.log(series)
  const handleAdd = e => {
    // console.log('Agregue', inputValue)
e.preventDefault()
    setTodo(...todo, searchTerm)
    setSearchTerm('') // vacio el input para volver a escribir

  }


  const filteredSeries= series.filter(serie =>{
    return serie.name.toLowerCase().includes(todo.toLowerCase())
   
  })
   
  return (
<>
<nav className='navbar navbar-expand-lg bg-primary'>
    <form className='d-flex w-100'>
    <NavLink className='navbar-brand' to='#'>
        MAZES
        </NavLink>
          <input 
            type='text'
            className='form-control me-2 '
            id='search'
            placeholder='Que serie quieres ver'
            onChange={(event)=>setSearchTerm(event.target.value)}
          />
          <button className='me-2 btn btn-success' onClick={handleAdd}>Buscar</button>
        </form>
  
    </nav>


      <div className='row'>
          {filteredSeries.map(serie => (
            <div className='col-sm-2 mb-4' key={serie.name}>
           <Link to={`/shows/${serie.id}/crew`}>
              <div className='card'>
              <img className='card-img-top' src={`${serie.image.medium}`} alt= {serie.name} />
                <div className='card-body'>
                  <h4 className='card-title'>{serie.name}</h4>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
</>
  )
}

export default Home