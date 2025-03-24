import './App.css'
import Casestudies from './sections/casestudies'
import Feedback from './sections/feedback'
import Footer from './sections/footer'
import Header from './sections/header'
import Leading from './sections/Leading'
import { Offer } from './sections/Offer'
import Project from './sections/projects'

import Searchengine from './sections/Searchengine'
import Works from './sections/works'
function App() {


  return (
    <>
      <Header />
      <Searchengine/>
      <Works/>
      <Offer/>
      <Leading/>
      <Casestudies/>
      <Feedback/>
      <Project/>
      <Footer/>
    </>
  )
}

export default App
