import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { AreasModule } from './areas/areas.module';
import { CurrenciesModule } from './currencies/currencies.module';
import { VenuesModule } from './venues/venues.module';
import { EventsModule } from './events/events.module';
import { EventArtistsModule } from './event_artists/event_artists.module';
import { TracksModule } from './tracks/tracks.module';
import { ArtistsTracksModule } from './artists_tracks/artists_tracks.module';
import { PromotersModule } from './promoters/promoters.module';
import { BiographyModule } from './biography/biography.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    CountriesModule,
    CitiesModule,
    AreasModule,
    CurrenciesModule,
    VenuesModule,
    EventsModule,
    EventArtistsModule,
    TracksModule,
    ArtistsTracksModule,
    PromotersModule,
    BiographyModule,
    ArtistsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
