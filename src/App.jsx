import {useState, useEffect} from 'react'

import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import pages from './pages.jsx'
import './App.css'

function App(){
  const[page, setPage] = useState(history.state?.page ? history.state.page : pages.home)

  useEffect(()=>{
    if(!history.state?.page){
      window.history.pushState({page: pages.home}, '')
    }

    const handlePopState = (event)=>{
      if(event.state?.page){
        setPage(event.state.page)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return ()=>{window.removeEventListener('popstate', handlePopState)}
  })

  const handlePageChange = (nextPage)=>{
    window.history.pushState({page: nextPage}, '')
    setPage(nextPage)
  }

  const pageShow = (page)=>{
    switch (page){ 
      case 'home':
        return <Home handlePageChange={handlePageChange}/>
      case 'about':
        return <About/>
      case 'projects':
        return <Projects/>
      case 'contact':
        return <Contact/>
      default:
        <></>
      break
    }
  }
  return(
    <div className='app'>
      <Header handlePageChange={handlePageChange} page={page}/>
      {pageShow(page)}
      <Footer/>
    </div>
  )
}
export default App