import './FooterIcon.css'

function IconInside(props){
    if(props.path){
        return(
            <img className='footerInsideIcon' src={props.path}/>
        )
    }
    else{
        return(
            <span className='footerInsideIconTxt'>{props.txt}</span>
        )
    }
}
function FooterIcon(props) {
    const iconStyle = {
        border: `0.15rem solid ${props.color}`
    }
    return(
        <a href={props.link} target='_blank'>
            <div className='footerIcon' style={iconStyle}>
                <IconInside txt={props.txt} src={props.src} path={props.path} />
            </div>
        </a>
    )
}
export default FooterIcon