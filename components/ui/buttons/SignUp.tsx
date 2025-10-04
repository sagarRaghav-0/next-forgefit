import React from 'react'
import { SignUpButton } from "@clerk/nextjs";

const SignUp = () => {
    return (
        <SignUpButton mode="modal" forceRedirectUrl='/userdetail'>
            <button className="relative px-6 py-2 rounded-2xl font-semibold overflow-hidden group cursor-pointer border-none outline-none">
                <span className="relative z-10 text-[#F5F5F5] group-hover:text-[#333333] transition-colors duration-500">
                    Sign Up
                </span>
                <span className="absolute inset-0 bg-[#F5F5F5] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            </button>
        </SignUpButton>
    )
}

export default SignUp
