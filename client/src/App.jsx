import { useState } from 'react'
import AnalyseScreen from './Screen/AnalyseScreen.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import { HomeScreen } from './Screen/HomeScreen.jsx'
import PrepareScreen from './Screen/PrepareScreen.jsx'
function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/analyse' element={<AnalyseScreen/>}/>
      <Route path='/prepare' element={<> <PrepareScreen/> </> }/>
      </Routes>
    </>
  )
}

export default App
