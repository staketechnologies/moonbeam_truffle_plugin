const { exec } = require("child_process");

const stop = async () => {
  // Stop node
  exec(
    'docker stop $(docker ps -q --filter ancestor="staketechnologies/plasm-node")',
    (error, stdout, stderr) => {
      if (error) {
        if (error.message.includes("permission denied")) {
          console.log(
            `Connect: permission denied. Permission issues, try again with sudo`
          );
        } else {
          console.log(`Error: ${error.message}`);
          return;
        }
      }
      if (stderr) {
        console.log(`Error: ${stderr}`);
        return;
      }
      console.log(`Node has stopped - Container ID ${stdout}`);
    }
  );
};

module.exports = stop;
