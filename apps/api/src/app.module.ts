import { Module } from '@nestjs/common';
import { OrganoidModule } from './organoid/organoid.module';

@Module({
  imports: [OrganoidModule],
})
export class AppModule {}
