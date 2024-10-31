import './App.css'
import userData from './userData'
import friends from './friends'
import Profile from './components/Profile'
import FriendList from './components/FriendList'
import transactions from './transactions'
import TransactionHistory from './components/TransactionHistory'
function App() {

  const { username, tag, location, avatar, stats } = userData
  return (
    <>
     <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats}/>
     <FriendList friends= {friends}/>
     <TransactionHistory items= {transactions} />
    </>
  )
}

export default App
