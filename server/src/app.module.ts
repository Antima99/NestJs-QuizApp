import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizService } from './modules/quiz/quiz.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    QuizModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
