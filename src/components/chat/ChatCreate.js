import React, {Component} from 'react'
import { connect } from 'react-redux'
import { createChat } from '../../store/actions/chatActions'

class CreateChat extends Component {
    state = {
        nama: '',
        pesan: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createChat(this.state)
    }
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Chat on RABOO</h5>
                    <div className="input-field">
                        <label htmlFor="nama">Masukkan Nama</label>
                        <input type="text" id="nama" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="pesan">Masukkan Isi Pesan</label>
                        <textarea id="pesan" className="materialize-textarea"  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Submit Pesan</button>
                    </div>
                </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createChat: (chat) => dispatch(createChat(chat))
    }
}

export default connect(null, mapDispatchToProps)(CreateChat)