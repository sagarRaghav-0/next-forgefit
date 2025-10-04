import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-[#222222] text-white shadow-md">
            {/* Logo / Brand */}
            <h1 className="text-2xl font-extrabold tracking-wide">
                FORGE<span className="text-[#888888]">FIT</span>
            </h1>

            <div className="flex items-center gap-4">
                {/* Sign Out Button */}
                <SignedIn>
                    <UserButton />
                    <SignOutButton redirectUrl="/">
                        {/* 👇 Only ONE child element */}
                        <button
                            className="relative overflow-hidden rounded-full cursor-pointer px-6 py-2 font-bold text-white group"
                        >
                            {/* Text */}
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                                Sign Out
                            </span>

                            {/* Sliding background */}
                            <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                        </button>

                    </SignOutButton>

                </SignedIn>
            </div>

        </header>
    );
};

export default Header;
