import cluster from "cluster";
import { createServer } from "http";
import os from "os";
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });

    // Listen for messages from child processes
    cluster.on("message", (worker, message, handle) => {
        console.log(`Message from worker ${worker.process.pid}: ${message}`);
    });
} else {
    // Worker processes have a http server.
    createServer((req, res) => {
        res.writeHead(200);
        res.end("Hello World\n");

        // Send message to the master process
        process.send("Hello Master!");
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
