import { spawn } from 'child_process';

// Fix environment path if cmd.exe is missing
if (!process.env.ComSpec) {
    process.env.ComSpec = 'C:\\Windows\\System32\\cmd.exe';
}
if (process.env.PATH && !process.env.PATH.toLowerCase().includes('c:\\windows\\system32')) {
    process.env.PATH = process.env.PATH + ';C:\\Windows\\System32';
}

console.log('Starting dev server and frontend...');

const run = (cmd, args) => {
    const proc = spawn(cmd, args, { stdio: 'inherit', shell: true });
    proc.on('error', (err) => console.error(`Error starting ${cmd}:`, err));
    return proc;
};

run('npx', ['vite']);
run('node', ['server/index.js']);
