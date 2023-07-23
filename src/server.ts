import dotenv from 'dotenv';
import * as https from 'https';
import * as fs from 'fs';
import app from './app';

dotenv.config();

const httpsServer = https.createServer(
  {
    key: fs.readFileSync('/etc/letsencrypt/live/api.dietinha.co/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/api.dietinha.co/fullchain.pem')
  },
  app
);

httpsServer.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${process.env.PORT}`);
});
