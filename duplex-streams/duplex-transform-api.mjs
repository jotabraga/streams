import { Duplex, Transform } from 'node:stream';

const server = Duplex({
    objectMode: true,
    write(chunk, enc, callback) {
        console.log(`[writable] saving`, chunk)
        callback()
    },
    read(){
        

    }
})
// to prove that they're different communication channels
// write triggers the writable streams from our duplex
// server.write('[duplex] key this is a writable\n');
// on data -> our server.on(data) will be trigger everytime
// we call the push function!
server.push(`[duplex] hey this is also a readable`);

const transformToUpperCase = Transform({
    objectMode: true,
    transform(chunk, enc, callback) {
        callback(null, chunk.toUpperCase())
    }
})

server
.pipe(transformToUpperCase)
.pipe(server)
.pipe(server)
