import net from 'node:net';
import { Writable } from 'node:stream';

const output = Writable({
  write(chunk, enc, callback) {
    const {
        id,
        message
    } = JSON.parse(chunk)

    if(message)
    else
    callback
  }
})

process.stdin
  .pipe(net.connect(3000))
  .pipe(process.stdout)