import pages from '/src/consts/pages.js'
import '/src/components/Header/MenuHeader.css'

function MenuHeader(props){
    return(
        <nav className='menuHeader'>
            <ul className='menuHeader'>
                <ol className='menuHeaderEl'><a onClick={()=>props.handlePageChange(pages.about)}>About me</a></ol>
                <span className='menuHeaderSlash'>/</span>
                <ol className='menuHeaderEl'><a onClick={()=>props.handlePageChange(pages.projects)}>My projects</a></ol>
                <span className='menuHeaderSlash'>/</span>
                <ol className='menuHeaderEl'><a onClick={()=>props.handlePageChange(pages.contact)}>Contact</a></ol>
            </ul>
        </nav> 
    )
}
export default MenuHeader