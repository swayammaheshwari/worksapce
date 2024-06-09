import { isWorker } from "cluster";

if (isWorker) {
  // Listen for messages from master process
  process.on("message", (message) => {
    console.log(`Message from master: ${message}`);
  });

  // Send message to master process
  process.send("Hello Master!");
}
