import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import SeriesDetail from '../pages/SeriesDetail'
const RoutesIndex = () => {
  return (
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/shows/:id/crew' element={<SeriesDetail/>} />
   </Routes>
  )
}

export default RoutesIndex