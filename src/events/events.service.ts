import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma/client';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EventsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEventDto: Prisma.eventsCreateInput) {
    return this.databaseService.events.create({
      data: createEventDto,
    });
  }

  async findAll() {
    return this.databaseService.events.findMany();
  }

  async findByNameAndVenue(name: string, venue_id: number) {
    return await this.databaseService.events.findFirst({
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
      where: {
        name,
        venue_id,
      },
    });
  }

  async findByNameAndVenueAndArea(
    title: string,
    venue_id: number,
    area_id: number,
  ) {
    return await this.databaseService.events.findFirst({
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
      where: {
        title,
        venue_id,
        area_id,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.events.findUnique({
      where: {
        id,
      },
      include: {
        venues: {
          include: {
            events: true,
          },
        },
      },
    });
  }

  async update(id: number, updateEventDto: Prisma.eventsUpdateInput) {
    return this.databaseService.events.update({
      data: updateEventDto,
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.events.delete({
      where: {
        id,
      },
    });
  }
}
