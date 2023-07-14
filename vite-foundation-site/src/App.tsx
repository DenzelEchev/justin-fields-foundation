import Header from './components/Header'
import Main from './components/Main'
import Story from './components/Story'
import Footer from './components/Footer'
import Donations from './components/Donations'
import Button from './components/Button'

const App = () => {
  return(
    <>
      <header className="sticky top-0 flex justify-center p-2 bg-white">
        <Header />
      </header>

      <main className="flex flex-col h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <Main />
        <Button bName={ "About Us" }/>
      </main>

      <section className='flex flex-col p-8 lg:flex-row'>
        <Story />
      </section>

      <section className="flex flex-col content-center px-8 py-24 bg-gradient-to-r from-indigo-500 to-sky-500">
        <Donations />
        <Button bName={ "Donate" }/>
      </section>
      
      <footer className="flex justify-center p-2 py-2">
        <Footer />
      </footer>
    </>
  )  
}

export default App
