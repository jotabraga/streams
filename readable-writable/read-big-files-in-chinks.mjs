//for i in `seq 1 10`; do node -e "process.stdout.write('hello world'.repeat(1e7))" >> 1gbbig.file; done

import { promises, createReadStream, statSync } from 'node:fs';
const filename = './1gbbig.file'

try {
    const file = await promises.readFile(filename);
    console.log('file size', file.byteLength / 1e9, "GB", "\n")
    console.log('fileBuffer', file);
} catch(error) {
    console.log('Error: max 2GB reached', error.message)
}

const { size } = statSync(filename);
console.log('file size', size / 1e9, "GB", "\n");