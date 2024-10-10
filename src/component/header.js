import React from 'react'
// import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4 mb-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-white text-2xl font-bold">Home</a>
                        <div className="flex space-x-4">
                            <a href="/" className="text-white hover:text-gray-300">@oktadev</a>
                            <a href="/service" className="text-white hover:text-gray-300">Github</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header