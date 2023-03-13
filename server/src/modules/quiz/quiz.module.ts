import { Module } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { quiz } from 'src/schema/quiz.schema';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizController],
  providers: [
    QuizService,
    {
      provide: getModelToken(quiz.name),
      useValue: quiz,
    },
  ],
})
export class QuizModule {}
