"use client"
import { Dribbble, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react'

const Footer=()=>{
    return (
        <>
            <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
                <div className="flex flex-wrap items-start gap-10 md:gap-15 xl:gap-35">
                    <a href="/">
                        <img src="/ai.svg" alt="logo" className='size-14'/>
                    </a>
                    <div>
                        <p className="text-slate-100 font-semibold">Product</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Home</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Support</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Pricing</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Affiliate</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">Resources</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Company</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Blogs</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Community</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Careers<span className="text-xs text-white bg-indigo-600 rounded-md ml-2 px-2 py-1">We’re hiring!</span></a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">About</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-indigo-600 transition">Privacy</a></li>
                            <li><a href="/" className="hover:text-indigo-600 transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                    <div className="flex items-center gap-4 mt-3">
                        <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
                            <Dribbble/> 
                        </a>
                        <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
                            <Linkedin />
                        </a>
                        <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
                            <Twitter/>
                        </a>
                        <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
                            <Youtube/>
                        </a>
                    </div>
                    <p className="mt-3 text-center">© 2026 <a href="https://prebuiltui.com">AiTools</a></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;