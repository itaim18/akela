import { IsNotEmpty, IsEnum, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(['ready', 'active', 'done'])
  state: string;
}
