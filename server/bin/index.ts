import createApp from '../src/app'
import Config from '../src/config'
import cluster from 'cluster'
import os from 'os'


const app = createApp()

const numCPUs = os.cpus().length;
const PORT = Config.PORT

if (cluster.isPrimary) {
  console.log(`primary process ${process.pid} is running`);

  for (let i = 1; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} stoped`);
    // redemarage automatique
    cluster.fork();
  });
} else {
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} started and listening on port ${PORT}`);
  });
}

// En cas d'erreur non gérée, déconnectez le worker pour permettre à un nouveau worker de le remplacer
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  cluster?.worker?.disconnect();
});