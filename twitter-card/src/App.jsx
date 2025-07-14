import './App.css'
import CreateCountry from './components/CreateCountry'
import TwitterFollowCard from './components/TwitterFollowCard'

const users = [{
  namee: 'Desarrollador 1',
  userName: 'dev1',
  isFollowing: false,
},
{
  namee: 'Desarrollador 2',
  userName: 'MPaulinaG',
  isFollowing: true,
},
{
  namee: 'Desarrollador 3',
  userName: 'dev3',
  isFollowing: false,
}
]

function App() {
  return (
    <section className='App'>
      {/*{users.map(item => {
        return <TwitterFollowCard item={item} />
      })}*/}

      <CreateCountry />
    </section>
  )
}



export default App;

