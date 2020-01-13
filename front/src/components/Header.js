import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            {/*Import de Logo ici*/}

            {/*navbar*/}

            <p>UniD</p>
            <Link className="Header-Link">
                Home
            </Link>

            <Link className="Header-Link">
                Librairy
            </Link>

            <Link className="Header-Link">
                Contact
            </Link>
        </div>
    )
}

export default Header
