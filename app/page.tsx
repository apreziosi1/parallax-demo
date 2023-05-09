'use client'
import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import  TitleBanner from './components/banner'
import  Space from './components/space'
import  Desert from './components/desert'
import  Cave from './components/cave'
import  Civ from './components/civ'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className='bg-black'>
      <ParallaxProvider>
        <TitleBanner />
        <div className='h-[1500px] lg:h-[3000px]'>
          <div className='sticky top-0 w-full'>
            <Space /> 
          </div>
        </div>
        <div className='h-[1500px] lg:h-[3000px]'>
          <div className='sticky top-0 w-full'>
            <Desert /> 
          </div>
        </div>
        <div className='h-[1500px] lg:h-[3000px]'>
          <div className='sticky top-0 w-full'>
            <Cave /> 
          </div>
        </div>
        <div className='h-[1500px] lg:h-[3000px] bg-[#C0C3CE]'>
          <div className='sticky top-0 w-full'>
            <Civ /> 
          </div>
        </div>
      </ParallaxProvider>
      <Footer />
    </main>
  )
}
