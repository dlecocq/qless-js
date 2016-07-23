'use strict';

const client = new (require('./client').Client)();
const worker = new (require('./workers/serial').SerialWorker)('myqueue', client);
worker.run(err => {
  console.log("ERROR IN WORKER: ", err);
});

