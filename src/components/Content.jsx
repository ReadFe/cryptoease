"use-client";
import React from 'react'
import Image from "next/image";
import Banner from "../../public/assets/banner.jpeg"
import Demo from "../../public/assets/demo.png"
import Demo2 from "../../public/assets/demo2.png"
import Link from 'next/link';

const Content = () => {

  return (
    <>
      <div className="header">
        <div className="relative h-[80vh] flex justify-center items-center flex-col">
          <Image className="absolute opacity-30" src={Banner} fill alt="Banner"/>
          <h1 className="relative text-7xl font-bold z-1">CryptoEase</h1>
          <h1 className="relative text-3xl opacity-70 z-1 mt-3 mb-7">Simplify Your Analysist</h1>
          <div className="auth">
              <div className="relative flex gap-3">
                  <Link href={'/demo'} className='main-button w-max bg-buttonGray'>Get Started</Link>
                  <Link href={'/learn'} className='main-button bg-buttonBlack text-gray-300'>Learn More</Link>
              </div>
          </div>
        </div>
      </div>
      <section className='relative' id='about'>
            <h1 className="relative text-xl font-bold z-1 mb-20">What it can do?</h1>
            <div className='card-section-rev mt-5 grid grid-cols-2'>
                <div className="about-card align-left">
                    <h1 className="text-3xl font-bold">Access the platform more easily</h1>
                    <p>focuses on enhancing user experience by making navigation intuitive and straightforward. This involves creating a user-friendly interface with a clean design, ensuring responsive functionality across devices, and streamlining the onboarding process for new users. Enhanced search capabilities allow for quick content discovery, while accessibility features support users with disabilities. Providing clear instructions, tutorials, and easily accessible help resources further aids navigation. Lastly, incorporating feedback mechanisms enables continuous improvement, ensuring that the platform remains user-centric and accessible to all.</p>
                </div>
                <div className='ml-auto'>
                    <Image src={Demo} width={500} height={500} alt='Demo 1'/>
                </div>
            </div>
            <div className='card-section mt-5 grid grid-cols-2'>
                <div>
                    <Image src={Demo2} width={500} height={500} alt='Demo 2'/>
                </div>
                <div className="about-card align-right">
                    <h1 className="text-3xl font-bold">Learn Strategy of Investing</h1>
                    <p>involves understanding key principles to effectively manage and grow your finances. Start by defining clear financial goals and assessing your risk tolerance, as these will guide your investment choices. Diversification is essential; spreading investments across various asset classNamees helps reduce risk. Stay informed through research and analysis of market trends and specific sectors, while considering your investment horizon to align your strategy with your time frame. Regularly review and adjust your portfolio based on performance and changing goals, maintaining discipline to avoid emotional decision-making during market fluctuations. Finally, commit to continuous learning to adapt to the evolving investment landscape, ensuring a robust and informed investment plan.</p>
                </div>
            </div>
      </section>
      <section id='sources'>
        <h1 className="relative text-xl font-bold z-1 mb-20">Sourced from:</h1>
      </section>
        <div className="logos">
          <div className="logo-slides">
            <img src="https://searchvectorlogo.com/wp-content/uploads/2021/07/tradingview-logo-vector.png" alt="Tradingview" />
            <img src="https://www.pngkey.com/png/detail/331-3316616_download-png-cryptoslate-logo.png" alt="CryptoSlate" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTUTuOR3ZCCIm76u2MJ64uqWbB_x9To4TZw&s" alt="Token Terminal" />
            <img src="https://repository-images.githubusercontent.com/237392204/49f2c487-eadb-48d2-8529-dc24004499ed" alt="Dune" />
            <img src="https://cdn.coinglasscdn.com/static/icon_600_315.png" alt="Coin Glass" />
          </div>
          {/* <div className="logo-slides">
            <img src="https://searchvectorlogo.com/wp-content/uploads/2021/07/tradingview-logo-vector.png" alt="Tradingview" />
            <img src="https://www.pngkey.com/png/detail/331-3316616_download-png-cryptoslate-logo.png" alt="CryptoSlate" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTUTuOR3ZCCIm76u2MJ64uqWbB_x9To4TZw&s" alt="Token Terminal" />
            <img src="https://repository-images.githubusercontent.com/237392204/49f2c487-eadb-48d2-8529-dc24004499ed" alt="Dune" />
            <img src="https://cdn.coinglasscdn.com/static/icon_600_315.png" alt="Coin Glass" />
          </div> */}
        </div>
    </>
  )
}

export default Content
