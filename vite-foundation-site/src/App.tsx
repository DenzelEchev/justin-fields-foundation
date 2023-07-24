import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import logo from "./assets/logo.jpeg"

const App = () => {
  return(
    <>
      <header className="sticky top-0 flex justify-center p-2 bg-white">
        <Header />
      </header>

      <main className="flex flex-col h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
          <h1 className="mt-64 text-4xl text-center text-white lg:text-7xl">Here for our Youth</h1>
          <p className="self-center w-3/4 text-center text-white text-md lg:text-2xl lg:mt-8 pb-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et deserunt minima magni illum ex, omnis maxime aspernatur nulla exercitationem?</p>
          <Button bName={ "About Us" }/>
      </main>

      <section className='flex flex-col p-8 lg:flex-row'>
        <div className="flex flex-col items center">
            <h1 className="py-4 text-4xl text-center">What we stand for</h1>
            <img src={logo} alt="" />
        </div>
        <div className="py-10 text-center text-l lg:text-2xl lg:w-2/3 lg:mt-12">
            <p>The Justin Fields Foundation is dedicated to strengthening communities through focused grantmaking and strategic partnerships in the areas of youth empowerment, scholastic achievement, health, wellness and leadership development.</p>
        </div>
      </section>

      <section className="flex flex-col content-center px-8 py-24 bg-gradient-to-r from-indigo-500 to-sky-500">
          <h2 className="text-2xl font-bold text-center text-white py-4a lg:text-2xl">Contributing towards our Future</h2>
          <p className="px-4 py-4 text-center text-white lg:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium libero tempora dolore, sit ad fugit corporis distinctio voluptas eveniet.</p>
          <Button bName={ "Donate" }/>
      </section>
      
      <footer className="flex-col items-center p-2 py-2 lg:flex-row lg:justify-center">
        <Footer />
      </footer>
    </>
  )  
}

export default App
