import { Document } from 'mongoose';
export interface IQuiz extends Document {
    readonly Quizname: string;
    readonly Details: string;
    readonly Answer: string;
}
