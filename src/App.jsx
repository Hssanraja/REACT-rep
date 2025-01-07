import Footer from './Components/Footer'
import Navbar from './Components/navbar'
import Card from './Components/Card'
function App() {
  
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Card 1" description="card 1 desc"/>
        <Card title="Card 2" description="card 2 desc"/>
        <Card title="Card 3" description="card 3 desc"/>
        <Card title="Card 4" description="card 4 desc"/>
      </div>
      <Footer/>
    </>
  ) 
}

export default App
