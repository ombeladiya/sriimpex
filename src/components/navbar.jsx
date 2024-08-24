import Link from 'next/link'
import React from 'react'

function navbar() {
    return (
        <nav className="fixed top-0 w-full bg-[#244F36] z-50 py-1">
            <div className="container mx-auto">
                <div className="w-full flex flex-col lg:flex-row">
                    <div className="flex justify-center lg:flex-row">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.jpg" alt="brand image" className="w-32 h-14" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default navbar
