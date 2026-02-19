import React from 'react'
import NavBar from "@/components/NavBar";
import Content from "@/components/Content";
import Article from "@/components/Article";

const Page = () => {
    return (
        <div className='min-h-screen md:h-dvh w-screen bg-off-white py-5 px-4 md:px-50'>
            <NavBar />
            <Content />
            <Article />
        </div>
    )
}
export default Page
