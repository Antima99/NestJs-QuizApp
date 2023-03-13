"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const quiz_schema_1 = require("../../schema/quiz.schema");
const quiz_service_1 = require("./quiz.service");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }
    async createQuiz(response, quiz) {
        const newquiz = await this.quizService.create(quiz);
        return response.status(common_1.HttpStatus.CREATED).json({
            newquiz,
        });
    }
    async readbyId(response, id) {
        const quiz = await this.quizService.readbyId(id);
        return response.status(common_1.HttpStatus.OK).json({
            quiz,
        });
    }
    async updatebyId(response, id) {
        const updatedquiz = await this.quizService.updatebyId(id);
        return response.status(common_1.HttpStatus.OK).json({
            updatedquiz,
        });
    }
    async delete(respnse, id) {
        const deletedQuiz = await this.quizService.delete(id);
        return respnse.status(common_1.HttpStatus.OK).json({
            deletedQuiz,
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "getAllQuiz", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, quiz_schema_1.quiz]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "createQuiz", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "readbyId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "updatebyId", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], QuizController.prototype, "delete", null);
QuizController = __decorate([
    (0, common_1.Controller)('quiz'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
exports.QuizController = QuizController;
//# sourceMappingURL=quiz.controller.js.map