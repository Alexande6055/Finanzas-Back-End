import { PartialType } from '@nestjs/mapped-types';
import { CreateSavingsGoalDto } from './create-savings_goal.dto';

export class UpdateSavingsGoalDto extends PartialType(CreateSavingsGoalDto) {}
