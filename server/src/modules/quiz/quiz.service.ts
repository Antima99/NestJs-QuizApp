import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz() {
    return [1, 1, 2, 3, 'hello from the quiz service'];
  }
}
