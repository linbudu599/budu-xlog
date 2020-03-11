import fs from "fs";
import path from "path";
import touch from "touch";
import chalk from "chalk";
import inquirer from "inquirer";
import boxen from "boxen";
import figlet from "figlet";

class Util {
  // TODO: more types to print
  consoler = (text: string, color: string = "green"): void => {
    // @ts-ignore
    const fn = chalk[color] || chalk.green;
    console.log(fn(text));
  };

  readOrCreateFile = (info: IOpts, cb: (txt: IOpts) => void): void => {
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

  writeToFile = (txt: IOpts): void => {
    try {
      fs.writeFileSync("./log.json", JSON.stringify(txt), "utf-8");
      this.consoler("Successfully Saved");
    } catch (e) {
      this.consoler(e, "red");
    }
  };

  clearAll = (): void => {
    try {
      fs.writeFileSync("./log.json", "", "utf-8");
      this.consoler("Clear Successfully");
    } catch (e) {
      this.consoler(e, "red");
    }
  };

  readAll = (): IOpts => {
    return JSON.parse(fs.readFileSync("./log.json", "utf-8"));
  };

  confirmSave = async ({ content, type, author }: IOpts): Promise<string> => {
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

  printAll = (): void => {
    this.consoler(
      boxen(figlet.textSync("@BUDU/XLOG", { horizontalLayout: "full" }), {
        borderColor: "green",
        float: "left",
        align: "left"
      }),
      "green"
    );
    console.table(this.readAll());
  };
}

export default Util;
