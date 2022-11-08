const initState = {
    chats: [
        {id: '1', nama: 'Ucok Tumbuan', pesan: 'Aku Tresno Karo kamu mbakyuu'},
        {id: '2', nama: 'Bernad Pasaribu', pesan: 'Asl pls'},
        {id: '3', nama: 'Doni Nugroho', pesan: 'Kenalan Dong...'},
        {id: '4', nama: 'Tengku Zainudin', pesan: 'Kopdar di Senen yukkk..~'}
    ]
}

const chatReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CHAT':
            console.log('created chat', action.chat)
            return state;
        case 'CREATE_CHAT_ERROR':
            console.log('create chat error', action.err)
            return state;
        default:
            return state;
    }
}

export default chatReducer