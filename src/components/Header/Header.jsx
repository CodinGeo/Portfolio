import MenuHeader from '/src/components/Header/MenuHeader.jsx'
import pages from '/src/consts/pages.js'
import '/src/components/Header/Header.css'

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
            <div className='headerSegment headerSegment1 headerSegmentLast'>
            </div>
        </div>
    )
}
export default Header;