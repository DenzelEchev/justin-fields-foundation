import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import logo from "./assets/logo.jpeg"

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main className="flex flex-col items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="mt-64 text-4xl text-center text-white lg:text-7xl">Here for our Community</h1>
        <p className="self-center w-3/4 text-center text-white text-md lg:text-2xl lg:mt-8 pb-44">The Justin Fields Foundation is dedicated to strengthening communities through focused grantmaking and strategic partnerships in the areas of youth empowerment, scholastic achievement, health, wellness and leadership development.</p>
        <Button bName={"About Us"} bLink={"#"} bUrl={" "} />
      </main>

      <section className='flex flex-col p-8 lg:flex-row'>
        <div className="flex flex-col items center">
          <h1 className="py-4 text-4xl text-center">What we stand for</h1>
          <img src={logo} alt="" />
        </div>
        <div className="py-10 text-center text-l lg:text-2xl lg:w-2/3 lg:mt-12">
          <p>The Justin Fields Foundation, established with a profound commitment to making a positive impact, is a beacon of hope and progress for communities in need. With a clear vision for transformation, the foundation channels its efforts towards fostering a brighter future through a combination of strategic grantmaking and impactful partnerships.</p>
        </div>
      </section>

      <section className="flex flex-col items-center content-center px-8 py-24 bg-gradient-to-r from-indigo-500 to-sky-500">
        <h2 className="text-2xl font-bold text-center text-white py-4a lg:text-2xl">Contributing towards our Future</h2>
        <p className="px-4 py-4 text-center text-white lg:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium libero tempora dolore, sit ad fugit corporis distinctio voluptas eveniet.</p>
        <Button bName={"Donate"} bLink={" "} bUrl={"https://give.cornerstone.cc/justinfieldsfoundation"} />
      </section>

      <footer className="flex-col items-center p-2 py-2 lg:flex-row lg:justify-center">
        <Footer />
      </footer>
    </>
  )
}

export default App
