import React from 'react'
import './services.css'
import { MdDesignServices } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'
import { FaCode } from 'react-icons/fa'
function Services() {
    return (
        <section id='services'>
            <div className="top_section">
                <h5>What I Offer</h5>
                <h2>Services</h2>
            </div>
            <div className="container container_services">
                <article className='card'>
                    <MdDesignServices className='icon' />
                    <h3>Web Design</h3>
                    <p className='text-light'>
                        I create modern, responsive, and user-friendly website designs that match your brand and deliver a smooth user experience.
                    </p>
                </article>
                 <article className='card'>
                    <IoIosRocket className='icon' />
                    <h3>Fast Performance</h3>
                    <p className='text-light'>
                        I help improve website speed and optimize performance to ensure quick loading, smoother navigation, and a better user experience.
                    </p>
                </article>
                 <article className='card'>
                    <FaCode className='icon' />
                    <h3>Clean Code</h3>
                    <p className='text-light'>
                        I deliver clean, well-structured, and maintainable code that improves project quality, performance, and long-term scalability.
                    </p>
                </article>
            </div>
        </section>

    )
}

export default Services