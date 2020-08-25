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

export const actions = {

    /**
     * Remove client by index
     * @param index Integer
     * 
     */
    setClientOffline({commit,state}, socket) {

        let clientIndex = state.clients.findIndex(client => client.socket === socket)

        if(clientIndex != -1) {

            commit('REMOVE_CLIENT', clientIndex)

        }

    }

}


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

    },

    /**
     * Remove client by index
     * @param index Integer
     * 
     */
    REMOVE_CLIENT( state, index) {

        state.clients.splice(index, 1);

    }

}