import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizService } from './modules/quiz/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';
import { quiz, quizSchema } from './schema/quiz.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL, { dbName: 'quizData' }),
    MongooseModule.forFeature([{ name: quiz.name, schema: quizSchema }]),
    QuizModule,
  ],
  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
