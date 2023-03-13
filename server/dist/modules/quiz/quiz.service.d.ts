import { Model } from 'mongoose';
import { quiz, QuizDocument } from '../../schema/quiz.schema';
export declare class QuizService {
    private QuizModel;
    constructor(QuizModel: Model<QuizDocument>);
    create(quiz: quiz): Promise<quiz>;
    getAllQuiz(): Promise<quiz[]>;
    readbyId(id: any): Promise<quiz>;
    updatebyId(id: any): Promise<quiz>;
    delete(id: any): Promise<quiz>;
}
