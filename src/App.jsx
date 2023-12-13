import UserConPro from './cont/UserContPro'
import './App.css'
import Login from './compo/Login'
import Profile from './compo/Profile'

function App() {
 
  return (
    <UserConPro>
    <h1>Chai Or React</h1>
    <Login/>
    <Profile/>
    </UserConPro>
  )
}
export default App
