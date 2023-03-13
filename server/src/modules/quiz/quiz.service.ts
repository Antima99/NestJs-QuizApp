import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { quiz, QuizDocument } from '../../schema/quiz.schema';

@Injectable()
export class QuizService {
  constructor(@InjectModel(quiz.name) private QuizModel: Model<QuizDocument>) {}

  async create(quiz: quiz): Promise<quiz> {
    const newBook = new this.QuizModel(quiz);
    return newBook.save();
  }

  async getAllQuiz(): Promise<quiz[]> {
    const quizData = await this.QuizModel.find();
    if (!quizData || quizData.length == 0) {
      throw new NotFoundException('quiz data not found!');
    }
    return quizData;
  }

  async readbyId(id: any): Promise<quiz> {
    return await this.QuizModel.findById(id);
  }

  // async createQuiz(): Promise<QuizDocument> {
  //   const quiz = new this.QuizModel();
  //   return quiz.save();
  // }

  // getAllQuiz() {
  //   return [1, 1, 2, 3, 'hello from the quiz service'];
  // }
}
