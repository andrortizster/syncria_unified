import { Injectable } from '@nestjs/common';
import { CreateEventArtistDto } from './dto/create-event_artist.dto';
import { UpdateEventArtistDto } from './dto/update-event_artist.dto';

@Injectable()
export class EventArtistsService {
  create(createEventArtistDto: CreateEventArtistDto) {
    return 'This action adds a new eventArtist';
  }

  findAll() {
    return `This action returns all eventArtists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventArtist`;
  }

  update(id: number, updateEventArtistDto: UpdateEventArtistDto) {
    return `This action updates a #${id} eventArtist`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventArtist`;
  }
}
