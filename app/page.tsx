'use client'
import React from "react"
import { ParallaxProvider } from "react-scroll-parallax";
import  TitleBanner from './components/banner'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className='bg-dark text-sand'>
      <ParallaxProvider>
        <TitleBanner />
        <div className="h-screen">CICCIO</div>
      </ParallaxProvider>
      <Footer />
    </main>
  )
}
