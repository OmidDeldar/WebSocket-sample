import { Module } from '@nestjs/common';

import { GateWayModule } from './gateway/gateway.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    GateWayModule,
    SocketModule,
  ],
})
export class AppModule {}
