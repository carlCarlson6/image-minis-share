import dotenv from 'dotenv';
import { Server } from './shared/common/infrastructure/api/Server';
import { registerDependencies } from './shared/common/infrastructure/dependencyInjection/RegisterDependencies';

const bootstrap = async () => {
    dotenv.config({path:'dev.env'});

    registerDependencies();

    const server: Server = new Server();
    server.Start(); 
}

console.log('stating the server');
bootstrap();
