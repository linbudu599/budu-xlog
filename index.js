#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var main_1 = __importDefault(require("./core/main"));
commander_1.default.version("0.1.2");
commander_1.default
    // 内容 必填
    .option("-n, --new <content>", "new log")
    // 作者 默认为linbudu
    .option("-a, --author <author>", "author")
    .option("-l, --list", "show all list")
    // 类型： idea/common/bug
    .option("-t, --type <type>", "log type")
    // 记录模式
    // .option("-m, --mode [mode]", "log mode")
    // 是否打印本次结果 默认是
    .option("--no-print", "print result")
    // 是否跳过询问直接写入
    .option("-y,--yes", "skip confirming save")
    // .option("-c, --clear", "clear all records")
    .parse(process.argv);
console.log(JSON.stringify(commander_1.default.opts()));
new main_1.default(commander_1.default.opts());
