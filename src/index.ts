import shell from 'shelljs';

import { telnets, pings } from './services/ip.json'

const tel = telnets;
const ping = pings;


tel.map(ip => {
  shell.exec(`telnet ${ip.ip} ${ip.port}`)
  if (shell.error()) {
    ip.status = "NOK"
  }

  if (!shell.error()) {
    ip.status = "OK"
  }
});
console.log(tel);


console.log("==============================================================");


