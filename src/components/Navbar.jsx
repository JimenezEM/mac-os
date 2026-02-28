import React from 'react'
import dayjs from 'dayjs';

import { navIcons, navLinks } from '#constants'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="/images/logo.svg"/> {/*in index.css adds the background to the nav and the logo at the right*/}
            <p className='font-bold'>Emily's Portfolio</p>

            <ul>
                {navLinks.map(({id, name}) => (
                    <li key={id}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>

        </div>

        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} 
                            className="icon-hover" 
                            alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            <time>{dayjs().format('ddd MMM D h:mm A')}</time>
        </div>
      
    </nav>
  )
}

export default Navbar
