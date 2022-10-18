import React, { useState } from 'react'

export default function FeatureSection() {
    const [selected, setSelected] = useState(1)
    return (
        <div id='features' className='relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32'>
            <img className='absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]' src="/background-features.jpg" alt="" />
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative'>
                <div className='max-w-2xl md:mx-auto md:text-center xl:max-w-none'>
                    <h2 className='font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl'>Everything you need to run your books.</h2>
                    <p className='mt-6 text-lg tracking-tight text-blue-100'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
                </div>
                <div className='mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0'>

                    <div className='-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5'>
                        <div className='relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal'>
                            {new Array(4).fill(0).map((ele, i) => {
                                return <div className={i === selected ? 'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10' : "group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 hover:bg-white/10 lg:hover:bg-white/5"}>
                                    <h3><button onClick={() => setSelected(i)} className={i === selected ? '  font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-600 lg:text-white font-medium' : "font-medium  font-display text-lg [&:not(:focus-visible)]:focus:outline-none text-blue-100 hover:text-white lg:text-white"}>
                                        <span className=' absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl'>
                                        </span>
                                        {i === 0 ? "Payroll" : i === 1 ? "Claim expenses" : i === 2 ? "VAT handling" : i === 3 ? "Reporting" : null}
                                    </button></h3>
                                    <p className={i === selected ? "mt-2 hidden text-sm lg:block text-blue-100 group-hover:text-white" : 'mt-2 hidden text-sm lg:block text-white'}>
                                        {i === 0 ? "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported." : i === 1 ? "All of your receipts organized into one place, as long as you don't mind typing in the data by hand." : i === 2 ? " We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need." : i === 3 ? " Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it." : null}
                                    </p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='lg:col-span-7'>
                        <div>
                            <div className='relative sm:px-6 lg:hidden'>
                                <div className='absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl'>
                                </div>
                                <p className='relative mx-auto max-w-2xl text-base text-white sm:text-center'>
                                    {selected === 0 ? "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported." : selected === 1 ? "All of your receipts organized into one place, as long as you don't mind typing in the data by hand" : selected === 2 ? "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need" : selected === 3 ? "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it." : null}
                                </p>
                            </div>
                            <div className='mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]'>
                                <img className='w-full' src={selected === 0 ? "/payroll.jpeg" : selected === 1 ? "/expenses.jpeg" : selected === 2 ? "/vat-returns.jpeg" : selected === 3 ? "/reporting.jpeg" : null} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
