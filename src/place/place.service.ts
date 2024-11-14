import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './entities/place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private placeRepository: Repository<Place>,
  ) {}

  create(createPlaceDto: CreatePlaceDto) {
    const place = this.placeRepository.create(createPlaceDto);
    return this.placeRepository.save(place);
  }

  findAll() {
    return this.placeRepository.find();
  }
}