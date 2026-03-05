import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
      </div>

      <div className='p-5 space-y-5'>
        <img src="/images/JimenezEM.jpg" alt="adrian" className='w-20 rounded-full'/>

        <h3>Let's connect</h3>
        <p>I'm a computer science engineer based in the US/CR. <br /> I enjoy building clean and real-world web applications. I usually work on front-end projects using React and Vite, creatig portfolio websites and freelance projects.</p>
        <p>emily.jimguz@gmail.com</p>

        <ul>
            {socials.map(({ id, bg, link, icon, text }) => (
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target='_blank' rel='noopener noreferrer' title={text}>
                        <img src={icon} alt={text} className='size-5' />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
