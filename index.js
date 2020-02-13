#!/usr/bin/env node
const program = require("commander");

const Xlog = require("./core/main");

program.version("0.1.3");

program
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
  .parse(process.argv);

// console.log(JSON.stringify(program.opts()));

new Xlog(program.opts());
