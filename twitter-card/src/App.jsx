import './App.css'
import CreateCountry from './components/CreateCountry'
import GetCountry from './components/GetCountry'
import UpdateCountry from './components/UpdateCountry'
import DeleteCountry from './components/DeleteCountry'

function App() {
  return (
    <section className='App'>
      <CreateCountry />
      <GetCountry />
      <UpdateCountry />
      <DeleteCountry />
    </section>
  )
}

export default App
