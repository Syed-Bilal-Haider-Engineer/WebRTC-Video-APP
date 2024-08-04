import {useCallback, useState} from 'react'
import './Lobby.css'
function Lobby() {
  const [email,setEmail] = useState('')
  const [room, setRoom] = useState('')
  const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, [email, room]);
  return (
    <div className="login">
        <h4>Login</h4>
        <form onSubmit={handleFormSubmit}>
          <div className="text_area">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="text_input email"
              onChange={(e)=> setEmail(e.target.value)}
              placeholder='Enter your email'
            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="room"
              name="room"
              value={room}
              className="text_input room"
              onChange={(e)=> setRoom(e.target.value)}
              placeholder='Enter room id'
            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"
          />
        </form>
      </div>
  )
}

export default Lobby