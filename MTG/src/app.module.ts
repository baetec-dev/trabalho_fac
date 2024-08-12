import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ComandanteController } from './comandante/comandante.controller';
import { ComandanteService } from './comandante/comandante.service';

@Module({
  imports: [HttpModule],
  controllers: [ComandanteController],
  providers: [ComandanteService],
})
export class AppModule {}
