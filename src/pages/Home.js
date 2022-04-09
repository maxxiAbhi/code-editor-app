import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Home() {


  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('')
  const [userName, setUserName] = useState('')

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id)
    toast.success('Room Created')
  }
  const joinRoom = () => {
    if (!roomId || !userName) {
      return toast.error('Fill all Fild')
      
    }
    navigate(`/editor/${roomId}`, {
      state: {
        username:userName
      }
    })
  }

  const handleInputEnter=(e)=>{
    if(e.code === "Enter"){
      joinRoom();
    }
  }


  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-sync.png"
          alt="code-sync-logo"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
          onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn"
            onClick={joinRoom}
          >
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a
              onClick={createNewRoom}
              href=" "
              className="createNewBtn"
            >
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 &nbsp; by &nbsp;
          <a href="https://github.com/codersgyan">Coder's Gyan</a>
        </h4>
      </footer>
    </div>
  )
}

export default Home