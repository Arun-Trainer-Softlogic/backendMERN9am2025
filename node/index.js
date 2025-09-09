import { getSystemInfo } from "./system.js";


const systemInfo = getSystemInfo();

console.log("Operating System Info:", systemInfo.platform);
console.log("CPU Architecture:", systemInfo.architecture);
console.log("Total Memory (bytes):", systemInfo.totalMemory);
console.log("Free Memory (bytes):", systemInfo.freeMemory);
console.log("Home Directory:", systemInfo.homeDir);
console.log("Uptime (seconds):", systemInfo.uptime);
console.log("Number of CPU Cores:", systemInfo.cpuCores);
console.log("Network Interfaces:", systemInfo.networkInterfaces);
console.log("Temporary Directory:", systemInfo.tempDir);
