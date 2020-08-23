export const state = () => ({

    clients: [],
    socket: null

})

export const getters = {


    /**
     * Return the clients
     * 
     */

    getClients( state ) {

        return state.clients

    }

}

/*
export const actions = {



}
*/

export const mutations = {

    /**
     * Commit the client list to the stage
     * @param clients Array
     * 
     */
    
    SET_CLIENTS( state, clients ) {

        state.clients = clients

    },

    /**
     * Commit the socket id
     * @param id String
     * 
     */

    SET_SOCKET( state, id ) {

        state.socket = id

    }

}