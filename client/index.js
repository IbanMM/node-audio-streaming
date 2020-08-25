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

const io = require('socket.io-client');
const ss = require('socket.io-stream');

const lame = require("@suldashi/lame"); // Right now the original lame package is failing to install in Node 12 and above this is a workaround
const Speaker = require('speaker');

let url = 'http://127.0.0.1:3333'
// const socket = io.connect('http://192.168.1.41:3333');
const socket = io.connect( url, { secure: true, query: `client=client` } )

socket.on('connect', function () {
    // socket connected
    console.log('client connect');
});

ss(socket).on('audio', function(stream, data) {

    stream.pipe( new lame.Decoder() )
    .on('format', function (format) {
        this.pipe(new Speaker(format));
    });
    
});