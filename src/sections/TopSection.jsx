import React from 'react'
import { Link } from 'react-router-dom'

export const TopSection = ({ title, breadcrumbs }) => {
    return (
        <section className='bg-[#F7F7F7] py-40 text-center'>
            <div className='container mx-auto px-4'>
                <h1 className='font-orbitron text-3xl md:text-4xl font-bold tracking-wider mb-6 text-[#1A1A1A] uppercase'>
                    {title}
                </h1>
                <nav className='flex justify-center items-center gap-2 text-xs text-[#555] font-medium uppercase tracking-widest'>
                    {breadcrumbs?.map((crumb, index) => (
                        <div key={index}>
                            {crumb.path ? (
                                <Link
                                    to={crumb.path}
                                    className='hover:text-black transition-colors duration-200'
                                >
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className='text-black font-semibold'>{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <span className='text-[#888] mx-1'>{'>'}</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </section>
    )
}