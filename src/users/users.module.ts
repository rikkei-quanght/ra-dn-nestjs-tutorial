import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './providers/users.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { UserPassword } from './entities/user-password.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UserProfile,
      UserPassword,
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
