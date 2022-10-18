import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
    let goTo = useNavigate()
    return (
        <div className='py-10'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <nav className='relative z-50 flex justify-between'>
                    <div className='flex items-center md:gap-x-12' >
                        <a href="/#">
                            <Logo />
                        </a>
                        <div className='hidden md:flex md:gap-x-6'>
                            <a className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href="#features">
                                Features
                            </a>
                            <a className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href="#features">
                                Testimonials
                            </a>
                            <a className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href="#features">
                                Pricing
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-5 md:gap-x-8'>
                        <div>
                            <button onClick={()=>goTo("/login")} className='inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900' href="">Sign in</button>
                        
                        </div>
                        <button onClick={()=>goTo("/register")} className='group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600'>Get Started</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
