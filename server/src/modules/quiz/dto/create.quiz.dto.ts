import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'hey write something there' })
  @Length(3, 255)
  title: string;
  @IsNotEmpty({ message: 'hey write something there' })
  @Length(3, 255)
  description: string;
}
