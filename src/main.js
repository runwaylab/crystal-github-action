const childProcess = require("child_process");
const os = require("os");
const process = require("process");

// the prefix of the binary (aka the name of the project)
const binaryPrefix = "github-action"

function chooseBinary() {
  const platform = os.platform();
  const arch = os.arch();

  if (platform === "linux" && arch === "x64") {
    return `linux-amd64`;
  }
  if (platform === "linux" && arch === "arm64") {
    return `linux-arm64`;
  }
  if (platform === "windows" && arch === "x64") {
    return `windows-amd64`;
  }
  if (platform === "windows" && arch === "arm64") {
    return `windows-arm64`;
  }
  if (platform === "darwin" && arch === "x64") {
    return `darwin-amd64`;
  }
  if (platform === "darwin" && arch === "arm64") {
    return `darwin-arm64`;
  }

  console.error(
    `Unsupported platform (${platform}) and architecture (${arch})`
  );
  process.exit(1);
}

function main() {
  const binary = chooseBinary();
  const mainScript = `./bin/${binaryPrefix}-${binary}`;
  const spawnSyncReturns = childProcess.spawnSync(mainScript, {
    stdio: "inherit",
  });
  const status = spawnSyncReturns.status;
  if (typeof status === "number") {
    process.exit(status);
  }
  process.exit(1);
}

if (require.main === module) {
  main();
}
