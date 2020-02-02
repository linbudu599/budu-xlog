#!/usr/bin/env node
const clear = require("clear");
const figlet = require("figlet");
const random = require("random-id");
const program = require("commander");
const inquirer = require("inquirer");

require("console.table");

const {
  consoler,
  readOrCreateFile,
  writeToFile,
  readAll
} = require("./util/util");

program.version("0.0.2");

program
  // 内容 必填
  .option("-n, --new <content>", "new log")
  // 作者 默认为linbudu
  .option("-a, --author <author>", "author")
  .option("-l, --list", "show all list")
  // 过期时间 默认为不过期
  // .option("-e, --expire <time>", "expire time")
  // 类型： idea/common/bug
  .option("-t, --type <type>", "log type")
  // 记录模式
  // .option("-m, --mode [mode]", "log mode")
  // 是否打印本次结果 默认是
  .option("-np,--no-print", "print result")
  // 是否跳过询问直接写入
  .option("-y,--yes", "skip confirming save")
  .parse(process.argv);

// console.log(JSON.stringify(program.opts()));

if (program.new) {
  let logInfo = {};

  logInfo.hash = random(8, "a0");
  logInfo.author = program.author ? program.author : "linbudu";
  logInfo.content = program.new;
  logInfo.date = new Date().toLocaleString();

  if (!program.type) {
    consoler("type will be set to 'common' by default", "yellow");
    logInfo.type = "common";
  } else if (
    program.type !== "common" &&
    program.type !== "idea" &&
    program.type !== "bug"
  ) {
    consoler(
      "type can only be one of ['common','idea','bug'], this log will be set to 'common'",
      "yellow"
    );
    logInfo.type = "common";
  } else {
    logInfo.type = program.type;
    console.log(logInfo);
  }

  if (!program.yes) {
    (async ({ content, type, author }) => {
      const { save } = await inquirer.prompt({
        message: `
        确认保存？
        content: ${content}
        author: ${author}
        type: ${type}
        `,
        type: "list",
        name: "save",
        choices: ["y", "n"]
      });

      if (save === "y") {
        clear();
        readOrCreateFile(logInfo, writeToFile);
        if (program.print) console.table(logInfo);
      } else {
        consoler(`Canceled By ${author}`);
      }
    })(logInfo);
  } else  {
    readOrCreateFile(logInfo, writeToFile);
    if (program.print) console.table(logInfo);
  }

  // console.log(logInfo);
} else if (!program.new && !program.list) {
  consoler("content must be specified by use opts '-n'", "red");
}

if (program.list) {
  consoler(
    figlet.textSync("@BUDU/XLOG", { horizontalLayout: "full" }),
    "green"
  );
  console.table(readAll());
}
