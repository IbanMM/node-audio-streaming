/**                  
 *  _____    _____ ___________ _______  ____  
 *  \__  \  /     \\____ \__  \\_  __ \/  _ \ 
 *   / __ \|  Y Y  \  |_> > __ \|  | \(  <_> )
 *  (____  /__|_|  /   __(____  /__|   \____/ 
 *       \/      \/|__|       \/              
 * 
 * Nuxt Plugin for Socket.io
 * Uses https://socket.io/
 *
 */

import io from 'socket.io-client'

export default ( context, inject ) => {

    let url = 'http://127.0.0.1:3333'

    const socket = io.connect( url, { secure: true, query: `client=control` } )

    socket.on('getUsersOnline', (data) => {

        context.store.commit('clients/SET_SOCKET', socket.id)
        context.store.commit('clients/SET_CLIENTS', data.clients)
        
    })

    inject( 'socket', socket )

}