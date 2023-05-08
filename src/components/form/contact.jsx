import { useState } from 'react';
import './contact.css';
  
const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

return (
<section id="contact" className='contact'>
         <div className='about-section'>
         <div className='project-header'>
                <hr />
                <h2>Contact</h2><hr /></div>
  <div>
  <form class="form-style-9" action="https://formspree.io/f/xeqdogov"  onSubmit={handleSubmit}>
<ul>
<li>
    <input  value={name}
          onChange={(event) => setName(event.target.value)}
          required type="text" name="field1" className="field-style field-full" placeholder="Name" />
    </li>
    <li>
    <input value={email}
          onChange={(event) => setEmail(event.target.value)}
           type="email" name="field2" className="field-style field-full" placeholder="Email"  required />

</li>
<li>
<textarea value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="field5" class="field-style" placeholder="Message" required></textarea>
</li>
<li>
<input type="submit" />
</li>
</ul>
</form>
  </div>
  </div>
</section>

)
}

export default Contact