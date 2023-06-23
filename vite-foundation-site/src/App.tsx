import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return(
    <>
      <main className="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 h-full">
        <header className="flex justify-center self-center sticky top-0 w-2/3 bg-white rounded-lg p-2">
          <Header />
        </header>
        <Main />
      </main>
      <section>
        
      </section>
    </>
  )  
}

export default App
