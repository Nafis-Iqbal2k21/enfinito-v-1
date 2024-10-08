import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <Image className='img-fluid' src='/assets/images/enfinito.png' alt='enfinito_logo' width={140} height={40} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bold">
                        <li className="nav-item nav-btn text-center">
                            <Link className="nav-link text-white" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item nav-btn text-center">
                            <Link className="nav-link text-white" aria-current="page" href="/about">About us</Link>
                        </li>
                        <li className="nav-item nav-btn text-center">
                            <Link className="nav-link text-white" aria-current="page" href="/services">Services</Link>
                        </li>
                        <li className="nav-item nav-btn text-center">
                            <Link className="nav-link text-white" aria-current="page" href="/careers">Careers</Link>
                        </li>
                        <li className="nav-item nav-btn text-center">
                            {/* <Link className="nav-link text-white" aria-current="page" href="#">Portfolio</Link> */}
                        </li>
                        <li className="nav-item nav-btn text-center">
                            <Link className="nav-link text-white" aria-current="page" href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light fw-bold border-2 px-3 text-center">Let's Talk</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;