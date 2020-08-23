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

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);
const ss = require('socket.io-stream');
const fs = require('fs');
const cors = require('cors')
const port = process.env.PORT || 3333;
const stream = ss.createStream();

app.use(cors())

// --------------------------------------------------------
// Send to the control all GET the requests
// --------------------------------------------------------
app.use( express.static( path.join(__dirname, '../control/dist/') ) );

app.get('*', (req, res) => {

    res.sendFile( path.resolve(__dirname, '../control/dist/', './index.html') )

});

io.on('connection', (socket) => {

    /*
    ss(socket).emit('audio', stream, {name: 'thegrey'});
    fs.createReadStream( __dirname + '/music/whitenoise.mp3').pipe(stream);
    */

    console.log( 'connect' )

    socket.on('bumbum', (message) => {

        // To all users except sender
        console.log( message )

    })

});

// --------------------------------------------------------
// Server Up & Running
// --------------------------------------------------------
server.listen(port, () => {

    console.log('Server listening at port %d', port);

});
