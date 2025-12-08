import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistsTrackDto } from './create-artists_track.dto';

export class UpdateArtistsTrackDto extends PartialType(CreateArtistsTrackDto) {}
