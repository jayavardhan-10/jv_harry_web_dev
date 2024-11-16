
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  

  return (
    <>
      <Navbar/>
      
      <div className="cards">
        <Card title="card 1" />
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </>
  )
}

export default App
