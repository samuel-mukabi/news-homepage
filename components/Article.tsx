import React from 'react'
import Image from "next/image";

const Article = () => {
    return (
        <div className='flex flex-col md:flex-row md:flex-center gap-12 md:gap-4 py-16 md:py-5'>
            <div className="flex flex-row gap-7 group cursor-pointer">
                <div className="relative shrink-0 w-25 h-31.75">
                    <Image src="/images/image-retro-pcs.jpg" alt="retro-pc" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between py-1">
                    <h3 className="soft-red text-3xl font-extrabold">01</h3>
                    <h2 className="font-bold text-very-dark-blue hover:text-soft-orange transition-colors">Reviving Retro PCs</h2>
                    <p className="dark-grayish-blue text-[15px]">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="flex flex-row gap-7 group cursor-pointer">
                <div className="relative shrink-0 w-25 h-31.75">
                    <Image src="/images/image-top-laptops.jpg" alt="top-laptops" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between py-1">
                    <h3 className="soft-red text-3xl font-extrabold">02</h3>
                    <h2 className="font-bold text-very-dark-blue hover:text-soft-orange transition-colors">Top 10 Laptops of 2022</h2>
                    <p className="dark-grayish-blue text-[15px]">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="flex flex-row gap-7 group cursor-pointer">
                <div className="relative shrink-0 w-25 h-31.75">
                    <Image src="/images/image-gaming-growth.jpg" alt="gaming-growth" fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-between py-1">
                    <h3 className="soft-red text-3xl font-extrabold">03</h3>
                    <h2 className="font-bold text-very-dark-blue hover:text-soft-orange transition-colors">The Growth of Gaming</h2>
                    <p className="dark-grayish-blue text-[15px]">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}
export default Article
