import React from 'react'
import Chat from './Chat'

const ChatList = ({chats}) => {
    return (
        <div className="chat-list section">
            { chats && chats.map(chat => {
                return(
                    <Chat chat={chat} key={chat.id} />
                )
            })}
            
        </div>
    )
}


export default ChatList