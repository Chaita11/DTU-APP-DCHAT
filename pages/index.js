import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<div className='landingContainer'>
  <div className='textContainer'>
  <h1 className='text-5xl textTitle'>Your <span className='text-green-col'>Data.</span> Your <span className='text-green-col'>Rules.</span></h1>
  <p className='paraTitle text-xm italic'>Privacy. Reimagined.</p>
  </div>
  <div className='containerButtons'>
    <div className='buttonLandingStroke'>Learn more.</div>
    <div className='buttonLandingFill'>Connect!</div>
  </div>
</div>
<div className='aboutContainer'>
  <div className='textAboutContainer'>
    <h1 className='textAbout'>About the <span className="text-green-col">Product</span></h1>
 <p className='paraAbout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
  <Image src="/landing.svg" width={350} height={150} />
</div>
</>
    )
}