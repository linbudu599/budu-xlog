#!/usr/bin/env node
const clear = require("clear");
const random = require("random-id");
const program = require("commander");

require("console.table");

const Util = require("./util/util");

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

class Xlog extends Util {
  constructor(opts) {
    super();
    let result = {};
    const { new: content, author, type, list, print, yes } = opts;

    if (!content && !list) {
      this.consoler(
        "You Should Specify At Least One Options Like '-l'(show all records) Or/And '-n'(create a new record).",
        "red"
      );
      process.exit(1);
    }

    this.setDefaultProps(result);
    this.setCustomProps(result, "author", author);
    this.setCustomProps(result, "content", content);
    this.setTypes(result, type);

    if (!yes) {
      (async () => {
        const save = await this.confirmSave(result);
        console.log(save);
        if (save === "y") {
          this.readOrCreateFile(result, this.writeToFile);
          if (print) {
            this.printResult(result);
          }
        } else {
          this.consoler(`Canceled By ${result.author}`);
        }
      })();
    } else {
      this.readOrCreateFile(result, this.writeToFile);
    }

    if (list) {
      this.printAll();
    }
  }

  printResult(result) {
    console.table(result);
  }

  setDefaultProps(result) {
    result.author = "linbudu";
    result.type = "common";
    result.hash = random(8, "a0");
    result.date = new Date().toLocaleString();
  }

  setCustomProps(result, key, value) {
    if (value) {
      return (result[key] = value);
    }
  }

  setTypes(result, val) {
    if (!val) {
      this.consoler("type will be set to 'common' by default", "yellow");
    } else if (val !== "common" && val !== "idea" && val !== "bug") {
      this.consoler(
        "type can only be one of ['common','idea','bug'], this log will be set to 'common'",
        "yellow"
      );
      return (result["type"] = "common");
    } else {
      return (result["type"] = val);
    }
  }
}

new Xlog(program.opts());
