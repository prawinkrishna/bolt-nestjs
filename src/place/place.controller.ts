import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PlaceService } from './place.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('places')
@UseGuards(JwtAuthGuard)
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placeService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placeService.findAll();
  }
}