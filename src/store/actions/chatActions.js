export const createChat = (chat) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('chats').add({
            ...chat,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CHAT', chat });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CHAT_ERROR', err })
        })   
    }
};