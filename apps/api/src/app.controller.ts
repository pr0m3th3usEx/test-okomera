import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetOrganoidRequestParamsDto, GetOrganoidsRequestQueryDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('organoids')
  async getOrganoids(@Query() { dataset: _ }: GetOrganoidsRequestQueryDto): Promise<string> {
    return this.appService.getHello();
  }

  @Get('organoids/:id')
  async getOrganoid(@Param() { id: _ }: GetOrganoidRequestParamsDto): Promise<string> {
    return this.appService.getHello();
  }
}
