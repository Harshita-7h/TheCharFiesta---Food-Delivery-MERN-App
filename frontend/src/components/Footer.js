import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                <div className="d-flex align-items-center">
                    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    </Link>
                    <div className="align-items-center">
                        <span className="text-muted">&emsp;&emsp;© 2023 The Char Fiesta, Inc</span><br />
                        <span className="text-muted">A personal project by P V S Sri Harshita</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer