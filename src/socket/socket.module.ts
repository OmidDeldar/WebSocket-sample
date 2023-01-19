import { Module } from "@nestjs/common"
import { SocketClientService } from "./socket-client";
@Module({
    providers:[SocketClientService]
})

export class SocketModule{}