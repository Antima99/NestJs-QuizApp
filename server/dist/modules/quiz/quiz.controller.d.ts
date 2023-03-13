import { quiz } from 'src/schema/quiz.schema';
import { QuizService } from './quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): Promise<quiz[]>;
    createQuiz(response: any, quiz: quiz): Promise<any>;
    readbyId(response: any, id: any): Promise<any>;
}
