import { OnModuleInit } from "@nestjs/common/interfaces/hooks";
import { WebSocketGateway } from "@nestjs/websockets";
import { MessageBody, SubscribeMessage, WebSocketServer } from "@nestjs/websockets/decorators";
import { Server } from "socket.io";

@WebSocketGateway({})
export class MyGateway implements OnModuleInit{
    @WebSocketServer()
    server: Server;

    onModuleInit(){
        this.server.on('connection', (socket) => {
            console.log(socket.id);
            console.log('connected')
        })
    }

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body: any) {
        console.log(body);
        this.server.emit('onMessage', {
            message: 'new content',
            content: body,
        })
    }

}