import Header from './components/Header'
import Main from './components/Main'
import Story from './components/Story'
import Footer from './components/Footer'
import Donations from './components/Donations'

const App = () => {
  return(
    <>
        <header className="sticky top-0 flex justify-center p-2 bg-white ">
          <Header />
        </header>
      <main className="flex flex-col h-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <Main />
      </main>
      <section className='flex xs:flex-col xs:p-8'>
        <Story />
      </section>
      <section>
        <Donations />
      </section>
      <footer className="flex justify-center p-2 py-2">
        <Footer />
      </footer>
    </>
  )  
}

export default App
