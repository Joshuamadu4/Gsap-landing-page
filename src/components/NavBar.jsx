import React from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src='/logo.svg' alt='Apple Logo' />
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.label}>{item.label}</a>
            </li>

          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src='/search.svg' alt='Search Icon' />

          </button>
          <button>
            <img src='/cart.svg' alt='cart Icon' />

          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar