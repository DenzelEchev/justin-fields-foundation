import { Carousel } from 'flowbite-react'
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
import JFF from "./assets/JFF.mp4"

const App = () => {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-10'>
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center h-screen bg-center bg-cover bg-black/50 bg-blend-darken" style={{ backgroundImage: `url(${JFF})` }}>
        <h1 className="pb-4 text-4xl text-center text-white lg:text-7xl">Here for our Community</h1>
        <p className="self-center w-3/4 text-center text-white text-md lg:text-2xl lg:mt-8 pb-44">The Justin Fields Foundation, established with a profound commitment to making a positive impact, is a beacon of hope and progress for communities in need. With a clear vision for transformation, the foundation channels its efforts towards fostering a brighter future through a combination of strategic grantmaking and impactful partnerships.</p>
        <video autoPlay loop muted className="absolute bottom-0 right-0 object-cover w-full h-full -z-10">
          <source src={JFF} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>

      <section id="mission" className="flex flex-col justify-around p-8 lg:flex-row">
        <div className="flex flex-col items center">
          <h2 className="py-4 text-4xl text-center">About Us</h2>
          <img src={logo} alt="" />
        </div>
        <div className="py-10 text-center text-l lg:text-2xl lg:w-1/2 lg:mt-12">
          <p>The Justin Fields Foundation is dedicated to strengthening communities through focused grantmaking and strategic partnerships in the areas of youth empowerment, scholastic achievement, health, wellness and leadership development.</p>
        </div>
      </section>

      <section id="legacy" className="flex flex-col items-center h-[32rem] lg:h-[48rem] bg-gradient-to-r from-indigo-500 to-sky-500">
        <h2 className='pt-4 text-3xl text-center text-white lg:pt-12'>Community Impact</h2>

        <Carousel className='w-2/3 my-8 h-2/3 sm:w-2/3 sm:h-2/3 lg:h-5/6 lg:w-5/6'>
          <img alt="..." src={caroImg1} />

          <img alt="..." src={caroImg2} />

          <img alt="..." src={caroImg3} />

          <img alt="..." src={caroImg4} />

          <img alt="..." src={grpCheck} />

          <img alt="..." src={qbPic} />

          <img alt="..." src={checkImg} />
        </Carousel>

      </section>

      <section id="press" className="flex flex-wrap justify-center pb-20 text-white bg-gradient-to-r from-indigo-500 to-sky-500">
        <h2 className="w-full mb-8 text-4xl text-center">Press</h2>

        <div className="flex flex-wrap items-center justify-center w-full lg:justify-around">

          <div className="flex flex-col w-4/5 h-48 p-4 mb-12 text-black bg-white rounded-md shadow-2xl lg:w-1/3 lg:mb-0">
            <h3 className="pb-4">Justin Fields welcomes hundreds of kids to second annual youth football camp</h3>
            <span>Written By Gabby Hajduk</span>
            <a href="https://www.chicagobears.com/news/justin-fields-welcomes-hundreds-of-kids-to-second-annual-youth-football-camp" target='_blank' className="mb-2 text-indigo-600 underline">Read More</a>
            <span>Jul 19, 2023</span>
          </div>

          <div className="flex flex-col w-4/5 h-48 p-4 text-black bg-white rounded-md shadow-2xl lg:w-1/3">
            <h3 className="pb-4">Justin Fields donates $10k to Special Olympics</h3>
            <span>Written By Larry Mayer</span>
            <a href="https://www.chicagobears.com/news/justin-fields-donates-10k-to-special-olympics" target='_blank' className="mb-2 text-indigo-600 underline">Read More</a>
            <span>May 22, 2023 </span>
          </div>

        </div>
      </section>

      <section id='donation' className="flex flex-wrap items-center justify-center px-8 py-24 ">

        <h2 className="w-full text-4xl font-bold text-center py-4a lg:text-2xl">Two ways to Donate</h2>

        <p className="w-full p-4 mb-4 text-center lg:text-xl"> The Justin Fields Foundation is dedicated to creating a brighter future for youth in underserved and under-resourced communities. Thank you for supporting the JFF and it's initiatives as we join together to accomplish our common goal of youth empowerment, opportunity and achievement. </p>

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

      <Footer />

    </>
  )
}

export default App
