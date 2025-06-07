import './App.css'
import FriendListWindow from './component/FriendList/FriendListWindow'
import ChatBoxWindow from './component/ChatBox/ChatBoxWindow'
import Header from './component/Header/Header'

function App() {

  return (
    <div className='container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-content'>
      <div className='friend-list-container'>
        <FriendListWindow />
      </div>
      <div className='chat-box-container'>
        <ChatBoxWindow />
      </div>
      </div>

    </div>
  )
}

export default App
