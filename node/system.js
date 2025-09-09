import os from "os";

export function getSystemInfo() {
  return {
    platform: os.platform(),
    architecture: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    homeDir: os.homedir(),
    uptime: os.uptime(),
    cpuCores: os.cpus().length,
    networkInterfaces: os.networkInterfaces(),
    tempDir: os.tmpdir(),
  };
}
