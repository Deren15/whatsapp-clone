import React, { useState, useEffect } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import db from './firebase'

import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import { useStateValue } from './StateProvider'

function Chat() {

    const [{ user }, dispatch] = useStateValue()

    const [seed, setSeed] = useState("")

    const [input, setInput] = useState("")

    const [roomName, setRoomName] = useState("")

    const { roomId } = useParams()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();

        setInput("")

        console.log("You typed ", input)
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

                <p className="chat__message">
                    <span className="chat__name">Annya</span>
                    Hey Guys!
                    <span className="chat__timestamp">3:30pm</span>
                </p>
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Devesh</span>
                    Hello!
                    <span className="chat__timestamp">3:30pm</span>
                </p>
 
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Type a message" />
                        <button
                            onClick={sendMessage}
                            type="submit">
                                Send a message
                        </button>
                    </form>
                    <MicIcon />
            </div>

        </div>
    )
}

export default Chat
