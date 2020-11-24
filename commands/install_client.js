const { spawn } = require("child_process");

// Install function
const install = async () => {
  // Check if Docker is installed, if not, install it
  const output = spawn("docker", ["-v"]);

  // Stream CL output
  output.stderr.on("data", (data) => {
    console.log(`Error: ${data}`);
  });

  // On Close (Docker is installed)
  output.on("close", () => {
    get_docker_image();
  });

  // Docker not installed, installing
  output.on("error", (err) => {
    throw new Error(
      "Docker installation was not found, please install docker: https://docs.docker.com/get-docker/"
    );
  });
};

const get_docker_image = async () => {
  console.log("Downloading Plasm Standalone Docker Image...");

  // Pull Moonbeam Container
  const output = spawn("docker", ["pull", "staketechnologies/plasm-node"]);

  // Stream CL output
  output.stdout.on("data", (data) => {
    console.log(`${data}`);
  });
  output.stderr.on("data", (data) => {
    e;
    if (data.includes("permission denied")) {
      console.log(
        `Connect: permission denied. Permission issues, try again with sudo`
      );
    } else {
      console.log(`Error: ${data}`);
    }
  });
};

module.exports = install;
