import dotenv from 'dotenv';
import { Server } from './shared/common/infrastructure/api/Server';

const bootstrap = async () => {
    dotenv.config({path:'dev.env'});

    const server: Server = new Server();
    server.Start(); 
}

console.log('stating the server');
bootstrap();
