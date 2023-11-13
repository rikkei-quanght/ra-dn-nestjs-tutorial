import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './providers/users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserProfile
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
