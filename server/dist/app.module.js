"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const app_service_1 = require("./app.service");
const quiz_module_1 = require("./modules/quiz/quiz.module");
const quiz_controller_1 = require("./modules/quiz/quiz.controller");
const quiz_service_1 = require("./modules/quiz/quiz.service");
const mongoose_1 = require("@nestjs/mongoose");
const quiz_schema_1 = require("./schema/quiz.schema");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL, { dbName: 'quizData' }),
            mongoose_1.MongooseModule.forFeature([{ name: quiz_schema_1.quiz.name, schema: quiz_schema_1.quizSchema }]),
            quiz_module_1.QuizModule,
        ],
        controllers: [app_controller_1.AppController, quiz_controller_1.QuizController],
        providers: [app_service_1.AppService, quiz_service_1.QuizService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map