///////////////////////////////////////////////////////////////////////////////////////
//              _____    __    __    __ __     _____    __ __     _____              //
//             /\___/\  /_/\  /\_\  /_/\__/\  /\___/\  /_/\__/\  ) ___ (             //
//            / / _ \ \ ) ) \/ ( (  ) ) ) ) )/ / _ \ \ ) ) ) ) )/ /\_/\ \            //
//            \ \(_)/ //_/ \  / \_\/_/ /_/ / \ \(_)/ //_/ /_/_// /_/ (_\ \           //
//            / / _ \ \\ \ \\// / /\ \ \_\/  / / _ \ \\ \ \ \ \\ \ )_/ / /           //
//           ( (_( )_) ))_) )( (_(  )_) )   ( (_( )_) ))_) ) \ \\ \/_\/ /            //
//            \/_/ \_\/ \_\/  \/_/  \_\/     \/_/ \_\/ \_\/ \_\/ )_____(             //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(server)
const ss = require('socket.io-stream')
const fs = require('fs')
const cors = require('cors')
const port = process.env.PORT || 3333
const stream = ss.createStream()

const Clients = require('./controllers/clients.controller.js')
const cl = new Clients()

app.use(cors())

// --------------------------------------------------------
// Send to the control frontend all GET the requests
// --------------------------------------------------------
app.use( express.static( path.join(__dirname, '../control/dist/') ) );

app.get('*', (req, res) => {

    res.sendFile( path.resolve(__dirname, '../control/dist/', './index.html') )

});

io.on('connection', (socket) => {

    // --------------------------------------------------------
    // On a new connection set the client to the online list
    // --------------------------------------------------------
    let handshakeData = socket.request;
    let client_name = handshakeData._query['client']
    let socket_id = socket.id

    cl.setClientOnline(client_name, socket_id)

    // --------------------------------------------------------
    // Emit the client list to the new connected client
    // --------------------------------------------------------
    socket.emit('getUsersOnline', {

        clients: cl.getClientsOnline()

    })

    /*
    ss(socket).emit('audio', stream, {name: 'thegrey'});
    fs.createReadStream( __dirname + '/music/whitenoise.mp3').pipe(stream);
    */

    socket.on('bumbum', (message) => {

        // To all users except sender
        console.log( io.sockets.clients() )

    })

    // --------------------------------------------------------
    // Emit the client list to the new connected client
    // --------------------------------------------------------
    socket.on('disconnect', () => {

        cl.setClientOffline(socket_id)

        io.emit('getUserOffline', {
            socket: socket_id
        })

    })

});

// --------------------------------------------------------
// Server Up & Running
// --------------------------------------------------------
server.listen(port, () => {

    console.log('Server listening at port %d', port);

});
