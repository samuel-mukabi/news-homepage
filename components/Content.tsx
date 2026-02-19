import React from 'react'

const Content = () => {
    return (
        <div className='py-10 flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-x-8 gap-y-10 md:gap-5 md:h-180'>
            <div className='md:col-span-2'>
                <picture>
                    <source media="(min-width: 768px)" srcSet="/images/image-web-3-desktop.jpg" />
                    <img src="/images/image-web-3-mobile.jpg" alt="The Bright Future of Web 3.0?" className="w-full h-full object-cover" />
                </picture>
            </div>
            <div className="flex flex-col p-6 md:p-7 md:row-span-2 justify-between very-dark-blue mt-8 md:mt-0">
                <div>
                    <h1 className="soft-orange text-4xl font-extrabold pb-4 md:pb-0">New</h1>
                    <h3 className='off-white text-xl py-5 md:py-7 font-bold hover:text-soft-orange cursor-pointer transition-colors'>Hydrogen VS Electric Cars</h3>
                    <p className='grayish-blue font-light pb-8 md:pb-10'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className='border-dark-grayish-blue/50 md:border-off-white' />
                </div>
                <div>
                    <h3 className='off-white text-xl py-5 md:py-7 font-bold hover:text-soft-orange cursor-pointer transition-colors'>The Downsides of Al Artistry</h3>
                    <p className='grayish-blue font-light pb-8 md:pb-10'>What are the possible adverse effects of on-demand Al
                        image generation?</p>
                    <hr className='border-dark-grayish-blue/50 md:border-off-white' />
                </div>
                <div>
                    <h3 className='off-white text-xl py-5 md:py-7 font-bold hover:text-soft-orange cursor-pointer transition-colors'>Is VC Funding Drying Up?</h3>
                    <p className='grayish-blue font-light pt-2'>Private funding by VC firms is down 50% YOY. We take a
                        look at what that means.</p>
                </div>
            </div>
            <div className="pt-6 md:py-10 font-extrabold text-5xl md:text-6xl text-very-dark-blue">The Bright Future of Web 3.0?</div>
            <div className="flex flex-col gap-5 md:py-10">
                <div>
                    <p className='pb-6 md:pb-5 md:pr-10 dark-grayish-blue leading-7'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="soft-red-btn hover:bg-very-dark-blue text-off-white py-3 px-8 font-bold tracking-widest transition-colors duration-300">READ MORE</button>
                </div>
            </div>
        </div>
    )
}
export default Content
