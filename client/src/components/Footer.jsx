import React from 'react'
import { RiFacebookFill, RiKakaoTalkFill, RiLineFill, RiInstagramFill, RiTwitterFill, RiGithubFill, RiYoutubeFill } from 'react-icons/ri'

const Footer = () => {
    return (
        <>
            <footer className="max-w-[1540px] mx-auto my-12">
                <div className="w-full max-w-full mx-auto">
                    <hr className="my-6 border-gray-200 w-full dark:border-gray-700 " />
                    <span className="flex text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023.   <a href="https://github.com/ymkang85" className="hover:underline">  kangyoungmin™ </a>. All Rights Reserved.
                        <div className='inline-block'>
                            <RiFacebookFill className='inline' />
                            <RiKakaoTalkFill className='inline' />
                            <RiLineFill className='inline' />
                            <RiInstagramFill className='inline' />
                            <RiTwitterFill className='inline' />
                            <RiGithubFill className='inline' />
                            <RiYoutubeFill className='inline' />
                        </div>
                    </span>

                </div>
            </footer>
        </>
        // <footer className=''>
        //     <div className="max-w-[1540px]"></div>
        // </footer>
    )
}

export default Footer