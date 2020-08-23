/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Simple class to handle clients online
 *
 */

class Clients {

    constructor() {

        this.clients_online = []

    }

    /**
     * Check if the client is online
     * @param name String
     */

    checkClientOnline(name) {

        let client_object = this.clients_online.find(client => client.name === name)
        let client_index = this.clients_online.indexOf(client_object)

        if(typeof client_object !== 'undefined' && client_index != -1) {

            return true

        }

        return false

    }

    /**
     * Add client to the clients online
     * @param key String
     * @param socket String
     */

    setClientOnline(name,socket) {

        // Check if the client is already online
        let online = this.clients_online.find(client => client.socket === socket)
        let client_name = this.clients_online.find(client => client.name === name)

        if(typeof online === 'undefined' && typeof client_name === 'undefined') {

            let client_online = {}

            client_online.name = name
            client_online.socket = socket

            this.clients_online.push(client_online)

        }

    }

    /**
     * Get client online
     * @param socket String
     */
    
    getClientOnline(socket) {

        let client_object = this.clients_online.find(client => client.socket === socket)
        let client_index = this.clients_online.indexOf(client_object)

        if(typeof client_object !== 'undefined' && client_index != -1) {

            return client_object

        }

    }

    /**
     * Set client offline
     * @param socket String
     */
    
    setClientOffline(socket) {

        let client_object = this.clients_online.find(client => client.socket === socket)
        let client_index = this.clients_online.indexOf(client_object)

        if(typeof client_object !== 'undefined' && client_index != -1) {

            this.clients_online.splice(client_index, 1)

        }

        console.log('clients online')
        console.log(this.clients_online)

    }

    /**
     * Return the clients online
     */

    getClientsOnline() {

        return this.clients_online

    }

}

module.exports = Clients