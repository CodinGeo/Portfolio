import pages from './pages.jsx'
import './Home.css'

function Home(props){
 return(
    <div className='home subpage'>
        <div className='homeTitle'>
            <h1 className='homeTitle'>Marcin Bieliński</h1>
        </div>
        <div className='menuHome'>
            <ul className='menuHome'>
                <ol className='menuHomeEl'><a onClick={()=>props.handlePageChange(pages.about)}>About me</a></ol>
                <span className='menuHomeSlash'>/</span>
                <ol className='menuHomeEl'><a onClick={()=>props.handlePageChange(pages.projects)}>My projects</a></ol>
                <span className='menuHomeSlash'>/</span>
                <ol className='menuHomeEl'><a onClick={()=>props.handlePageChange(pages.contact)}>Contact</a></ol>
            </ul>
        </div>        
    </div>
  )
}
export default Home