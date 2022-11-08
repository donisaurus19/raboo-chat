import React from 'react'
import moment from 'moment'

const Chat = ({chat}) => {
    return (
        <div className="card z-depth-0 chat-summary">
            <div className="card-content grey-text text-darken-3">
                <p className="grey-text">{chat.nama}</p>
                <p className="grey-text">{moment(chat.createdAt.toDate()).calendar()}</p>
                <p>{chat.pesan}</p>
            </div>
        </div>
    )
}

export default Chat