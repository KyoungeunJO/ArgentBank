import './App.css'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import useProfile from './services/useProfile'


function App() {

  useProfile()

  return (
    <main className="App">
      <Hero/>
      <Features/>
    </main>
  )
}

export default App
