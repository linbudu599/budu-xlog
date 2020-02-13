const fs = require("fs");
const path = require("path");
const touch = require("touch");
const chalk = require("chalk");
const inquirer = require("inquirer");
const boxen = require("boxen");
const figlet = require("figlet");

class Util {
  // TODO: more types to print
  consoler = (text, color = "green") => {
    const fn = chalk[color] || chalk.green;
    console.log(fn(text));
  };

  readOrCreateFile = (info, cb) => {
    let content = [];
    const filePath = path.join(__dirname, "../log.json");
    // if exist, append log text to the file
    if (fs.existsSync(filePath)) {
      try {
        const original = JSON.parse(fs.readFileSync(filePath, "utf8"));
        original.push(info);
        cb(original);
      } catch (err) {
        console.error(err);
      }
    } else {
      touch("log.json");
      content.push(info);
      cb(content);
    }
  };

  writeToFile = txt => {
    try {
      fs.writeFileSync("./log.json", JSON.stringify(txt), "utf-8");
      this.consoler("Successfully Saved");
    } catch (e) {
      consoler(e, "red");
    }
  };

  readAll = () => {
    return JSON.parse(fs.readFileSync("./log.json", "utf-8"));
  };

  confirmSave = async ({ content, type, author }) => {
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
    return save;
  };

  printAll = () => {
    this.consoler(
      boxen(figlet.textSync("@BUDU/XLOG", { horizontalLayout: "full" }), {
        padding: 1,
        margin: 1,
        borderStyle: "bold",
        borderColor: "green",
        float: "left",
        align: "left"
      }),
      "green"
    );
    console.table(this.readAll());
  };
}

module.exports = Util;
