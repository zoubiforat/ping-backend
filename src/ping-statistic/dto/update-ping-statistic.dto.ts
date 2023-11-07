import { PartialType } from '@nestjs/mapped-types';
import { CreatePingStatisticDto } from './create-ping-statistic.dto';

export class UpdatePingStatisticDto extends PartialType(CreatePingStatisticDto) {}
