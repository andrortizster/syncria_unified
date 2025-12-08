import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { AreasModule } from './areas/areas.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { VenuesModule } from './venues/venues.module';
import { BiograpkyModule } from './biograpky/biograpky.module';
import { ArtistModule } from './artist/artist.module';
import { EventsModule } from './events/events.module';
import { EventArtistsModule } from './event_artists/event_artists.module';
import { TracksModule } from './tracks/tracks.module';
import { ArtistsTracksModule } from './artists_tracks/artists_tracks.module';
import { PromotersModule } from './promoters/promoters.module';

@Module({
  imports: [CountriesModule, CitiesModule, AreasModule, CurrenciesModule, VenuesModule, BiograpkyModule, ArtistModule, EventsModule, EventArtistsModule, TracksModule, ArtistsTracksModule, PromotersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
