import { RequestHandler } from 'express';

import romanizer from '~/helpers/romanizer';
import { clients, setClients } from '~/clients/clients';

const sendEvents = (content: any) => {
  clients.forEach(client => client.res.write(`data: ${content}\n\n`));
}

export const stream: RequestHandler = async (req, res, next) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
  };
  res.writeHead(200, headers);

  const clientId = Date.now();
  const newClient = { id: clientId, res };
  setClients([ ...clients, newClient ]);
  
  req.on('close', () => {
    console.log('Connection closed');
    setClients(clients.filter(client => client.id !== clientId));
  });
}

export const romanize: RequestHandler = async (req, res) => {
  const number = parseInt(req.query?.number as string ?? '0');
  const roman = romanizer(number);
  res.send(roman);
  return sendEvents(roman);
}








