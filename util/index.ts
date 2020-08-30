import fs from "fs";
import path from "path";
import touch from "touch";
import chalk from "chalk";
import inquirer from "inquirer";
import boxen from "boxen";
import figlet from "figlet";

class Util implements IUtil {
  consoler = (text: string, color: string = "green"): void => {
    // @ts-ignore
    const fn = chalk[color] || chalk.green;
    console.log(fn(`[X-LOG] ${text}`));
  };

  readOrCreateFile = (info: IOpts, recorder: (txt: IOpts) => void): void => {
    let content = [];
    const filePath = path.join(__dirname, "../log.json");
    // if exist, append log text to the file
    if (fs.existsSync(filePath)) {
      try {
        const original = JSON.parse(fs.readFileSync(filePath, "utf8"));
        original.push(info);
        recorder(original);
      } catch (err) {
        console.error(err);
      }
    } else {
      touch("log.json");
      content.push(info);
      recorder(content);
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

  confirmSave = async ({
    content,
    type,
    author,
  }: IOpts): Promise<"y" | "n"> => {
    const { save } = await inquirer.prompt({
      message: `
      确认保存？
      content: ${content}
      author: ${author}
      type: ${type}
      `,
      type: "list",
      name: "save",
      choices: ["y", "n"],
    });
    return save;
  };

  printResult(result: IOpts) {
    console.table(result);
  }

  printAll = (): void => {
    this.consoler(
      boxen(figlet.textSync("X-LOG", { horizontalLayout: "full" }), {
        borderColor: "green",
        float: "left",
        align: "left",
      }),
      "green"
    );
    console.table(JSON.parse(fs.readFileSync("./log.json", "utf-8")));
  };

  checkLogExistence = (): boolean => {
    return fs.existsSync("./log.json");
  };
}

export default Util;
