import React, { useState } from 'react'

function Contact() {

    const [uName, setUName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');

  
    const handleInputChange = (event) => {
        setUName(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
  
    const sendMessage = () => {
      const formattedMessage = `Ismi: ${uName}\nEmail: ${email}\nIzoh: ${message}\nTelefon: ${phone}`;
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify({
          chat_id: 5663095517,
          text: formattedMessage,
        }),
      };
  
      fetch(`https://api.telegram.org/bot6831211251:AAG-_4uh5YtDMbW9_fwFN2J6UajXs5o7bAA/sendMessage`, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
  
      // Reset input fields
      setUName('');
      setMessage('');
      setEmail('')
      setPhone('')
    };

  return (
    <section className="contact">
        <div className="container">
            <div className="contact-content">
                <h1 className='contact-title'>CONTACT US</h1>
                <form className='contact-form'>
                    <div className="contact-items">
                        <label className="contact-name">Name *</label>
                        <input value={uName} required onChange={handleInputChange} type="text" className='contact-input'  />
                    </div>
                    
                    <div className="contact-items">
                        <label className='contact-name'>Phone *</label>
                        <input type="number" required value={phone} onChange={handlePhoneChange} className='contact-input' />
                    </div>

                    <div className="contact-items">
                        <label className='contact-name'>Email *</label>
                        <input type="text" value={email} onChange={handleEmailChange} className='contact-input' />
                    </div>

                    <div className="contact-items">
                        <label className='contact-name'>Message *</label>
                        <input type="text" value={message} onChange={handleMessageChange} className='contact-input' />
                    </div>
                </form>
                <button onClick={sendMessage} className='contact-submit'>Submit message</button>
            </div>
        </div>
    </section>
  )
}

export default Contact