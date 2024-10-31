import './App.css'
import userData from './userData'
import Profile from './components/Profile'
function App() {

  const { username, tag, location, avatar, stats } = userData

  return (
    <>
     <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats}/>
    </>
  )
}

export default App
