import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, Socket } from "socket.io-client";

@Injectable()
export class SocketClientService implements OnModuleInit{
    public socketClient: Socket;

    constructor(){
        this.socketClient = io('http://localhost:3000');
    }

    onModuleInit() {
        this.registerConsumerEvent();
    }


    private registerConsumerEvent() {
        this.socketClient.emit('newMessage', {
            message: 'hello there'
        })
        this.socketClient.on('connect', () => {
            console.log('connected to gateway');
        });
        this.socketClient.on('onMessage', (payload: any) => {
            console.log(payload);
            
        })
    }


}