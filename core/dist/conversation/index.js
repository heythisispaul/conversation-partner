"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAnalysis = exports.analyzeResponse = exports.updateUserResponse = exports.updateQuestion = exports.conversation = exports.respondToUser = exports.generateConversation = void 0;
const generateConversation_1 = require("./generateConversation");
Object.defineProperty(exports, "generateConversation", { enumerable: true, get: function () { return generateConversation_1.generateConversation; } });
const respondToUser_1 = require("./respondToUser");
Object.defineProperty(exports, "respondToUser", { enumerable: true, get: function () { return respondToUser_1.respondToUser; } });
Object.defineProperty(exports, "updateQuestion", { enumerable: true, get: function () { return respondToUser_1.updateQuestion; } });
Object.defineProperty(exports, "updateUserResponse", { enumerable: true, get: function () { return respondToUser_1.updateUserResponse; } });
const analyzeResponse_1 = require("./analyzeResponse");
Object.defineProperty(exports, "analyzeResponse", { enumerable: true, get: function () { return analyzeResponse_1.analyzeResponse; } });
Object.defineProperty(exports, "updateAnalysis", { enumerable: true, get: function () { return analyzeResponse_1.updateAnalysis; } });
const spanishIntermediate_1 = require("./samples/spanishIntermediate");
Object.defineProperty(exports, "conversation", { enumerable: true, get: function () { return spanishIntermediate_1.conversation; } });
