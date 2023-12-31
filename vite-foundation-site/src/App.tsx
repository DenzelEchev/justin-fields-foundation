import { Carousel } from 'flowbite-react'
import { useIsVisible } from './components/IsVisible'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import logo from "./assets/logo.jpeg"
import caroImg1 from "./assets/caroImg1.jpeg"
import caroImg2 from "./assets/caroImg2.jpeg"
import caroImg3 from "./assets/caroImg3.jpeg"
import caroImg4 from "./assets/caroImg4.jpeg"
import qbPic from "./assets/qbpic.png"
import checkImg from "./assets/checkImg.png"
import grpCheck from "./assets/grpcheck.png"
import drills from "./assets/drills.jpg"
import smile from "./assets/smile.jpg"
import bball from "./assets/bball.jpg"
import grpImg from "./assets/grpImg.jpg"
import huddle from "./assets/huddle.jpg"
import vidConf from "./assets/vidconf.jpg"
import JFF from "./assets/JFF.mp4"
import { FaSquareThreads, FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6"
import { useRef } from 'react'

const App = () => {

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-10'>
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center h-screen bg-center bg-cover bg-black/50 bg-blend-darken" style={{ backgroundImage: `url(${JFF})` }}>
        <h1 className="pb-4 text-4xl font-bold text-center text-white lg:text-7xl">The Justin Fields Foundation</h1>
        <p className="self-center w-5/6 text-xl font-bold text-center text-white lg:text-2xl lg:mt-8 pb-44"></p>
        <video autoPlay loop muted className="absolute bottom-0 right-0 object-cover w-full h-full -z-10">
          <source src={JFF} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>

      <section id="mission" ref={ref1} className={`flex flex-wrap p-8 lg:flex-row transition-opacity ease-in duration-1000 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="w-full py-4 text-4xl font-bold text-center">About Us</h2>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img src={logo} alt="" />
        </div>

        <div className="flex items-center justify-center w-full pb-4 lg:w-1/2">
          <p className="text-xl font-bold text-center lg:text-2xl ">The Justin Fields Foundation is dedicated to strengthening communities through focused grantmaking and strategic partnerships in the areas of youth empowerment, scholastic achievement, health, wellness and leadership development.
          </p>
        </div>

      </section>

      <section id="legacy" ref={ref2} className={`flex flex-col items-center h-screen bg-gradient-to-r from-indigo-500 to-sky-500 transition-opacity ease-in duration-1000 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="pt-4 text-3xl font-bold text-center text-white lg:pb-20">Community Impact</h2>

        {/* Adding another image is very simple as it is just a matter of importing it in from the assets folder. After that just put it in the same format that the other images below are in easy peasy */}

        <Carousel className='w-11/12 h-5/6'>
          <img alt="..." src={caroImg1} />

          <img alt="..." src={caroImg2} />

          <img alt="..." src={drills} />

          <img alt="..." src={caroImg4} />

          <img alt="..." src={grpCheck} />

          <img alt="..." src={qbPic} />

          <img alt="..." src={smile} />

          <img alt="..." src={bball} />

          <img alt="..." src={grpImg} />

          <img alt="..." src={huddle} />

          <img alt="..." src={vidConf} />
        </Carousel>

      </section>

      <section id="press" ref={ref3} className={`flex flex-wrap justify-center pb-20 text-white bg-gradient-to-r from-indigo-500 to-sky-500 transition-opacity ease-in duration-1000 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <h2 className="w-full mb-8 text-4xl font-bold text-center lg:pt-8">Press</h2>

        <div className="flex flex-wrap items-center justify-center w-full lg:justify-around">

          {/* To add another article you can fill in the green text below and uncomment it out so it shows */}

          {/* <div className="flex flex-col w-4/5 p-4 mb-12 text-black bg-white rounded-md shadow-2xl lg:w-1/3 lg:mb-0">
            <img src={img goes here} alt="" className="self-center w-3/4 pb-4 h-5/6" />
            <h3 className="pb-4">Article Heading goes here</h3>
            <span>Written By Arthur's Name</span>
            <a href="Link to article goes here" target='_blank' className="mb-2 text-indigo-600 underline">Read More</a>
            <span>Jul 19, 2023</span>
          </div> */}

          <div className="flex flex-col w-4/5 p-4 mb-12 text-black bg-white rounded-md shadow-2xl lg:w-1/3 lg:mb-0">
            <img src={caroImg3} alt="" className="self-center w-3/4 pb-4 h-5/6" />
            <h3 className="pb-4">Justin Fields welcomes hundreds of kids to second annual youth football camp</h3>
            <span>Written By Gabby Hajduk</span>
            <a href="https://www.chicagobears.com/news/justin-fields-welcomes-hundreds-of-kids-to-second-annual-youth-football-camp" target='_blank' className="mb-2 text-indigo-600 underline">Read More</a>
            <span>Jul 19, 2023</span>
          </div>

          <div className="flex flex-col w-4/5 p-4 text-black bg-white rounded-md shadow-2xl lg:w-1/3">
            <img src={checkImg} alt="" className="self-center w-3/4 pb-4 h-5/6" />
            <h3 className="pb-4">Justin Fields donates $10k to Special Olympics</h3>
            <span>Written By Larry Mayer</span>
            <a href="https://www.chicagobears.com/news/justin-fields-donates-10k-to-special-olympics" target='_blank' className="mb-2 text-indigo-600 underline">Read More</a>
            <span>May 22, 2023 </span>
          </div>

        </div>
      </section>

      <section id='donation' ref={ref4} className={`flex flex-wrap items-center justify-center px-8 py-24 transition-opacity ease-in duration-1000 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>

        <h2 className="w-full text-4xl font-bold text-center py-4a lg:text-2xl">Two ways to Donate</h2>

        <p className="w-full p-4 mb-4 font-bold text-center lg:text-xl"> The Justin Fields Foundation is dedicated to creating a brighter future for youth in underserved and under-resourced communities. Thank you for supporting the JFF and its initiatives as we join together to accomplish our common goal of youth empowerment, opportunity and achievement. </p>

        <div className='flex flex-col items-center justify-center w-full lg:w-2/5'>
          <Button bName={"Donate"} bLink={" "} bUrl={"https://give.cornerstone.cc/justinfieldsfoundation"} />
          <p className='py-2'>Click here to donate online</p>
        </div>

        <p className='w-full my-4 text-center lg:w-1/5'> OR </p>

        <div className="w-full text-center lg:w-2/5">
          <p className='pb-4'>By Mail:</p>
          <p className='underline '>1720 Mars Hill Road, Suite 124-206, Acworth, Georgia 30101.</p>
        </div>


      </section>

      <section id="contactUs" ref={ref5} className={`flex flex-col items-center justify-around py-12 text-white bg-gradient-to-r from-indigo-500 to-sky-500 transition-opacity ease-in duration-1000 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
        <h3 className="py-4 pb-2 text-4xl font-bold text-center">Contact Us</h3>

        <p className="w-3/4 text-xl text-center lg:text-2xl">The Justin Fields Foundation is dedicated to carrying out its mission to positively impact youth and the underserved community. While we are grateful for all of Justin's amazing fans and those who support the JFF, we are unable to accept requests for autographs, interviews, personal appearances, auction items or game tickets.  Please refrain from personal solicitations. Thank you for your understanding and continued support as we strive to create a brighter future for our youth.</p>

        <div className="flex flex-wrap w-full px-2">
          <div className="w-full py-8 text-center">
            <p className="text-xl lg:text-3xl">The Justin Fields Foundation</p>
            <p className="text-xl lg:text-3xl">1720 Mars Hills Road</p>
            <p className="text-xl lg:text-3xl">Suite 124-206</p>
            <p className="pb-4 text-xl lg:text-3xl">Acworth, GA 30101</p>
            <a href="mailto:info@thejff.org" target="_blank" className="pt-2 text-2xl font-bold">info@thejff.org</a>
          </div>

          <div className="flex flex-wrap justify-center w-full py-8">
            <h3 className="w-full pb-2 font-bold text-center">Follow Us</h3>
            <a target="_blank" href="https://www.instagram.com/justinfieldsfoundation/"><FaSquareInstagram size="3rem" className="pr-1 " /></a>
            <a target="_blank" href="https://www.threads.net/@justinfieldsfoundation"><FaSquareThreads size="3rem" className="" /></a>
            <a target="_blank" href="https://twitter.com/The_JFF1"><FaSquareXTwitter size="3rem" className="" /></a>
          </div>

        </div>
      </section>

      <Footer />

    </>
  )
}

export default App
