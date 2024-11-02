import React from 'react'
import logo from './assets/logo.png'
export default function Header() {
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className="container">
                <a className='navbar-brand' href="http://localhost:3000/">
                    <div className="d-flex">
                        <img src={logo} alt="" className='mr-2' />
                        <div>Project Management</div>
                    </div>
                </a>
            </div>

        </nav>
    )
}
