import React, { Component } from 'react'

import Notifications from './Notifications'
import ChatList from '../chat/ChatList' 
import CreateChat from '../chat/ChatCreate'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { askForPermission } from '../../push-notifications';


class Dashboard extends Component {
    render(){

        const { chats, notifications } = this.props;

        return ( 
            <div className="dashboard container">
                <div className ="row">
                    <div className="col m12">
                        <h1>RABOO</h1>
                        <p><b>R</b>ANDOM CH<b>A</b>T <b>B</b>UAT J<b>O</b>MBL<b>O</b></p>
                        <button onClick={askForPermission}>Click Here To Receive Notification</button>
                    </div>
                    <div className="col s12 m6">
                        <CreateChat />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications} />
                    </div>
                    <div className="col m12">
                        <ChatList chats={chats} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.firestore.ordered.chats,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'chats', orderBy: ['createdAt', 'desc'] },
      { collection: 'notifications', limit: 2, orderBy: ['time', 'desc'] }
    ])
  )(Dashboard)