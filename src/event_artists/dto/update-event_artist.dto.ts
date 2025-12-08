import { PartialType } from '@nestjs/mapped-types';
import { CreateEventArtistDto } from './create-event_artist.dto';

export class UpdateEventArtistDto extends PartialType(CreateEventArtistDto) {}
