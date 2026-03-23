"use client";

import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div className="h-screen flex items-center justify-center bg-black text-amber-50">Loading...</div>;
  }
  return (
    <div className="relative h-screen w-screen bg-[url('/images/first.webp')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-[2] pr-[6vw] flex flex-col items-end justify-center h-full text-white px-6">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-7xl font-anton mb-4 tracking-wide">
            FORGE<span className="text-[#888888]">FIT</span>
          </h1>
          <p className="text-sm tracking-widest font-anton italic mb-2">
            &quot;Forge Your Strength. Define Your Future.&quot;
          </p>
          <p className="text-xl font-nunito italic max-w-xl mt-6">
            Track workouts, fuel nutrition, and crush goals with ForgeFit.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/userdetail">
                <button
                  className="relative overflow-hidden rounded-full cursor-pointer px-6 py-2 font-bold text-white group"
                >
                  {/* Text */}
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
                    Sign In
                  </span>

                  {/* Sliding background */}
                  <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                </button>

              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
