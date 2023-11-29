const buffer = Buffer.alloc(6);
buffer.fill('hi', 0, 2);
buffer.fill(0x3a, 2, 3); // hexadecimal char code for :
buffer.fill(0x29, 4,5) // hex char code for )
buffer.fill(0x29, 5,6)

// error when it reaches max values, it should be moved to another buffer

const anotherBuffer = Buffer.alloc(6);
anotherBuffer.set(buffer, buffer.byteOffset);
anotherBuffer.fill('four', 5, 6);
console.log(buffer.toString(), buffer.byteLength);


const msg = 'Hey there!';
const preAllocated = Buffer.alloc(msg.length, msg)

const withBufferFrom = Buffer.from(msg);

console.log(preAllocated.toString(), preAllocated, preAllocated.byteLength)
console.log(preAllocated.toString(), preAllocated, preAllocated.byteLength)
console.log(withBufferFrom.toString(), withBufferFrom, withBufferFrom.byteLength)

----------------

const str = 'hello world'

const charCodes = [];
const bytes = [];

for(const index in str) {
    const code = str.charCodeAt(index);
    const byteCode = '0x' + Math.abs(code).toString(16);
    charCodes.push(code)
    bytes.push(byteCode)

}
