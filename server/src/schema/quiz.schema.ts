import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type QuizDocument = quiz & Document;

@Schema()
export class quiz {
  @Prop()
  QuizName: string;
  @Prop()
  Details: string;
  @Prop()
  Answer: string;
}

export const quizSchema = SchemaFactory.createForClass(quiz);
