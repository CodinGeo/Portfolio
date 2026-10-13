import FooterIcon from '/src/components/Footer/FooterIcon.jsx'
import '/src/components/Footer/Footer.css'

import linkedInLogo from '/assets/linkedInLogo.svg'
import ghLogo from '/assets/ghLogo.svg'

function Footer(){
    return(
        <div className='footer'>
            <div className='footerIcons'>
                <FooterIcon path={linkedInLogo} txt='' color='#0a66c2' link='https://www.linkedin.com/in/marcin-bieli%C5%84ski-9078a92a1/'/>
                <FooterIcon path={ghLogo} txt='' color='#24292e' link='https://github.com/CodinGeo'/>
            </div>
        </div>
    )
}
export default Footer