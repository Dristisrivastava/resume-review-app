import { Routes, Route } from 'react-router-dom'
import AnalyseScreen from './Screen/AnalyseScreen.jsx'
import { HomeScreen } from './Screen/HomeScreen.jsx'
import PrepareScreen from './Screen/PrepareScreen.jsx'
import { ResumeScreen } from './Screen/ResumeScreen.jsx'
import ScrollToTop from "./components/ScrollToTop.jsx";
import { Interviewscreen } from './Screen/Interviewscreen.jsx'

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/analyse' element={<AnalyseScreen />} />
      <Route path='/prepare' element={<PrepareScreen />} />
      <Route path='/resume' element={ <ResumeScreen /> } />
      <Route path='/interview' element={ <Interviewscreen /> } />

    </Routes>
    </>
  )
}

export default App
