import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'hey write something there' })
  @Length(3, 255)
  QuizName: string;
  @IsNotEmpty({ message: 'hey write something there' })
  @Length(3, 255)
  Details: string;
  @IsNotEmpty({ message: 'hey write something there' })
  @Length(3, 255)
  Answer: string;
}
