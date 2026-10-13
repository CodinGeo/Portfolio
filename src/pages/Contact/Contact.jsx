import { useState, useRef } from 'react'
import '/src/pages/Contact/Contact.css'

function Contact(){
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    setIsSubmitting(true)

    const accessKey = import.meta.env.WEB3FORMS_PUBLIC_KEY
    if (!accessKey) {
      alert("Missing Web3Forms access key.")
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(form)
    formData.append("access_key", accessKey)

    try{
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      const data = await response.json()

      if (response.ok && data.success){
        alert("Success! Your message has been sent.")
        form.reset()
      } else{
        alert("Error: " + (data.message || "Failed to send message."))
      }
    } catch{
      alert("Something went wrong. Please try again.")
    } finally{
      setIsSubmitting(false)
    }
  }

  return(
    <div className='contact subpage'>
      <div className='contactTitleContainer'>
        <h1 className='contactTitle'>Message me</h1>
      </div>
      <form className='contactForm' ref={formRef} onSubmit={handleSubmit}>
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}></input>
        <div className='contactFormMailRow'>
          <p className='contactFormMailLabel contactFormLabel'>E-Mail: </p>
          <input className='contactFormMail contactFormInput' type='email' name="email" required></input>
        </div>
        <div className='contactFormMessageRow'>
          <p className='contactFormMessageLabel contactFormLabel'>Message: </p>
          <textarea className='contactFormMessage contactFormInput' type='text' name="message" required></textarea>
        </div>
        <div className='contactFormButtonRow'>
          <input 
            className='contactFormButton' 
            type='submit' 
            value={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
          ></input>
        </div>
      </form>
    </div>
  )
}
export default Contact