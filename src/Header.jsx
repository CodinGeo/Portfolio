import MenuHeader from './MenuHeader.jsx'
import pages from './pages'
import './Header.css'

import logo from '/assets/logo.png'

function Header(props){
    return(
        <div className='header'>
            <div className='headerSegment headerSegment1'>
                <a className='headerLogoLink' onClick={()=>{props.handlePageChange(pages.home)}}><img className='headerLogo' src={logo}></img></a>
            </div>
            <div className='headerSegment headerSegment2'>
                {props.page!==pages.home && (
                    <MenuHeader handlePageChange={props.handlePageChange} page={props.page}/>
                )}
            </div>
            <div className='headerSegment headerSegment1'>
            </div>
        </div>
    )
}
export default Header;