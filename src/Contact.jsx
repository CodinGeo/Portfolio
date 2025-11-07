import {useRef, useState} from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha'

import './Contact.css'

function Contact(){
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [verdict, setVerdict] = useState({success: false, message: ''})
  const captchaRef = useRef()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
      const response = await fetch('https://us-central1-portfolio-49596.cloudfunctions.net/processContactForm', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({token: captchaToken, email: email, message: message})
      })
      const data = await response.json();
      console.log(data);
      if(data.success){
        setLoading(false);
        setVerdict({success: true, message: ''});
        setEmail('');
        setMessage('');
      }
      else{
        setLoading(false);
        setVerdict({success: false, message: data.message});
      }
      captchaRef.current.resetCaptcha();
    }
    catch(error){
      setLoading(false)
      setVerdict({success: false, message: 'Network error. Try again.'})
      captchaRef.current.resetCaptcha()
      alert(error)
    }
  }
  return(
    <div className='contact subpage'>
      <div className='contactTitleContainer'>
        <h1 className='contactTitle'>Message me</h1>
      </div>
      <form className='contactForm' onSubmit={handleSubmit}>
        <div className='contactFormMailRow'>
          <p className='contactFormMailLabel contactFormLabel'>E-Mail: </p>
          <input className='contactFormMail contactFormInput' type='email' name="email" required onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
        </div>
        <div className='contactFormMessageRow'>
          <p className='contactFormMessageLabel contactFormLabel'>Message: </p>
          <textarea className='contactFormMessage contactFormInput' type='text' name="message" required onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
        </div>
        <div className='contactFormButtonRow'>
          <input className='contactFormButton' type='submit' value='Send'></input>
          <HCaptcha data-size="compact" className='contactFormCaptcha' sitekey="a53cee2e-cf68-4ece-9d78-91befc3c2472" onVerify={(token)=>{setCaptchaToken(token)}} ref={captchaRef}/>
        </div>
      </form>
    </div>
  )
}
export default Contact