import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { quiz } from 'src/schema/quiz.schema';
import { CreateQuizDto } from './dto/create.quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(200)
  async createQuiz(@Res() response, @Body() quiz: quiz) {
    const newquiz = await this.quizService.create(quiz);
    return response.status(HttpStatus.CREATED).json({
      newquiz,
    });
  }

  @Get('/:id')
  async readbyId(@Res() response, @Param('id') id) {
    const quiz = await this.quizService.readbyId(id);
    return response.status(HttpStatus.OK).json({
      quiz,
    });
  }
  @Put('/:id')
  async updatebyId(@Res() response, @Param('id') id) {
    const updatedquiz = await this.quizService.updatebyId(id);
    return response.status(HttpStatus.OK).json({
      updatedquiz,
    });
  }

  @Delete('/:id')
  async delete(@Res() respnse, @Param('id') id) {
    const deletedQuiz = await this.quizService.delete(id);
    return respnse.status(HttpStatus.OK).json({
      deletedQuiz,
    });
  }

  // @UsePipes(ValidationPipe)
  // createQuiz(@Body() quizdata: CreateQuizDto) {
  //   return { data: quizdata };
  // }
}
