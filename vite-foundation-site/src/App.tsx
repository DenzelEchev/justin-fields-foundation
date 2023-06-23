import Header from './components/Header'
import Main from './components/Main'

const App = () => {
  return(
    <>
      <main className="flex flex-col bg-emerald-600">
        <header className="flex justify-center self-center sticky top-0 w-2/3 bg-white rounded-lg p-2">
          <Header />
        </header>
        <Main />
      </main>
      
    </>
  )  
}

export default App
