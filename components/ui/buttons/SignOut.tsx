import React from 'react'
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

const SignOut = () => {
    return (
        <div className='flex items-center justify-center gap-4'>
            <SignedIn>
                <UserButton />
                <SignOutButton redirectUrl="/">

                    <button className="relative px-6 py-2 rounded-2xl bg-[#f5f5f5] font-semibold overflow-hidden group cursor-pointer border-none outline-none">
                        <span className="relative z-10 text-[#333333] group-hover:text-[#f5f5f5]   transition-colors duration-500">
                            Sign Out
                        </span>
                        <span className="absolute inset-0 bg-[#333333] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    </button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
}

export default SignOut
