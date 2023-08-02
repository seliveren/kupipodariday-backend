import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import { OffersModule } from './offers/offers.module';
import { UsersController } from './users/users.controller';
import { WishesController } from './wishes/wishes.controller';
import { WishlistsController } from './wishlists/wishlists.controller';
import { OffersController } from './offers/offers.controller';
import { UsersService } from './users/users.service';
import { WishesService } from './wishes/wishes.service';
import { WishlistsService } from './wishlists/wishlists.service';
import { OffersService } from './offers/offers.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'nest_project',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    WishesModule,
    WishlistsModule,
    OffersModule,
  ],
  controllers: [
    AppController,
    UsersController,
    WishesController,
    WishlistsController,
    OffersController,
  ],
  providers: [
    AppService,
    UsersService,
    WishesService,
    WishlistsService,
    OffersService,
  ],
})
export class AppModule {}
