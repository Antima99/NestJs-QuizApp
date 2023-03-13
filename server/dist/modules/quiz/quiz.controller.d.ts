import { CreateQuizDto } from './dto/create.quiz.dto';
import { QuizService } from './quiz.service';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    getAllQuiz(): (string | number)[];
    createQuiz(quizdata: CreateQuizDto): {
        data: CreateQuizDto;
    };
}
