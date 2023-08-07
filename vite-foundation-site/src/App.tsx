import { Carousel } from 'flowbite-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import mainBg from "./assets/main-bg.jpeg"
import logo from "./assets/logo.jpeg"
import caroImg1 from "./assets/caroImg1.jpeg"
import caroImg2 from "./assets/caroImg2.jpeg"
import caroImg3 from "./assets/caroImg3.jpeg"
import caroImg4 from "./assets/caroImg4.jpeg"
import portrait from "./assets/portrait.jpg"


const App = () => {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-10'>
        <Header />
      </header>

      <main className="flex flex-col items-center h-screen bg-center bg-cover bg-black/50 bg-blend-darken" style={{ backgroundImage: `url(${mainBg})` }}>
        <h1 className="pb-4 mt-56 text-4xl text-center text-white lg:text-7xl">Here for our Community</h1>
        <p className="self-center w-3/4 text-center text-white text-md lg:text-2xl lg:mt-8 pb-44">The Justin Fields Foundation is dedicated to strengthening communities through focused grantmaking and strategic partnerships in the areas of youth empowerment, scholastic achievement, health, wellness and leadership development.</p>
      </main>

      <section id="mission" className="flex flex-col p-8 lg:flex-row">
        <div className="flex flex-col items center">
          <h1 className="py-4 text-4xl text-center">Our Mission</h1>
          <img src={logo} alt="" />
        </div>
        <div className="py-10 text-center text-l lg:text-2xl lg:w-2/3 lg:mt-12">
          <p>The Justin Fields Foundation, established with a profound commitment to making a positive impact, is a beacon of hope and progress for communities in need. With a clear vision for transformation, the foundation channels its efforts towards fostering a brighter future through a combination of strategic grantmaking and impactful partnerships.</p>
        </div>
      </section>

      <section id="events" className="flex flex-col items-center h-[32rem] lg:h-[48rem] bg-gradient-to-r from-indigo-500 to-sky-500">
        <h2 className='pt-4 text-3xl text-center text-white lg:pt-12'>A small part of our legacy</h2>

        <Carousel className='my-8 w-72 h-72 sm:w-2/3 sm:h-2/3'>
          <img alt="..." src={caroImg1} />

          <img alt="..." src={caroImg2} />

          <img alt="..." src={caroImg3} />

          <img alt="..." src={caroImg4} />
        </Carousel>

        <p className='text-2xl text-center text-white'>and we are just getting started</p>
      </section>

      <section id="about" className='flex flex-col items-center py-12' >
        <h2 className='text-3xl text-center lg:text-4xl'>Who is Justin Fields?</h2>
        <img src={portrait} alt="player-portrait" className='w-2/3 my-4 h-2/3 lg:w-1/2 lg:h-1/2' />
        <p className="w-2/3 text-center">A star quarterback for the Chicago Bears with an eye out for our future, and whose heart is close to the youth. </p>
      </section>

      <section id='donation' className="flex flex-col items-center content-center px-8 py-24 bg-gradient-to-r from-indigo-500 to-sky-500">
        <h2 className="text-4xl font-bold text-center text-white py-4a lg:text-2xl">Contributing towards the Future Generations</h2>
        <p className="px-4 py-4 text-center text-white lg:text-xl"> While we are making strides in our communities, we can't do it alone. We appreciate all the help we get and feel safe knowing that it is going towards a great cause, OUR future.</p>
        <Button bName={"Donate"} bLink={" "} bUrl={"https://give.cornerstone.cc/justinfieldsfoundation"} />
      </section>

      <footer className="flex-col items-center p-2 py-2 lg:flex-row lg:justify-center">
        <Footer />
      </footer>
    </>
  )
}

export default App
