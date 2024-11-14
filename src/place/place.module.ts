import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceService } from './place.service';
import { PlaceController } from './place.controller';
import { Place } from './entities/place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceService],
  controllers: [PlaceController],
})
export class PlaceModule {}