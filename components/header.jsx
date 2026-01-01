import Link from "next/link";
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
   <>
   <nav className="fixed top-0 right-0 left-0 bg-backgroud/80 backdrop-blur-xl z-20 border-b">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center">
         <Image src="/spott.png" 
         alt="Spott Logo" 
         width={500} 
         height={500} 
         className="w-full h-11" 
         priority />
        {/* Pro badge */}
        {hasPro && (
              <Badge className="bg-linear-to-r from-pink-500 to-orange-500 gap-1 text-white ml-3">
                <Crown className="w-3 h-3" />
                Pro
              </Badge>
            )}
        </Link>

        {/*Search & Location - Desktop Only */}
         <div className="hidden md:flex flex-1 justify-center">
            <SearchLocationBar />
          </div>
        {/* Right Side Actions */}
        <div className="flex items-center">
            {/* Show Pro badge or Upgrade button */}
            {!hasPro && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUpgradeModal(true)}
              >
                Pricing
              </Button>
            )}

            <Button variant="ghost" size="sm" asChild className={"mr-2"}>
              <Link href="/explore">Explore</Link>
            </Button>

            <Authenticated>
              {/* Create Event Button */}
              <Button size="sm" asChild className="flex gap-2 mr-4">
                <Link href="/create-event">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>
    

    {/* Mobile Search & Location - Below Header */}
   </nav>

   {/* Modals */}
  
  </>
  ) 
};
export default Header;