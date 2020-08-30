import random from "random-id";
import Util from "../util";

class Xlog extends Util implements IMain {
  public constructor(opts: IOpts) {
    super();
    let result: IOpts = {};
    const { new: content, author, type, list, print, yes } = opts;

    if (!content && !list) {
      this.consoler(
        "You Should Specify At Least One Option Like '-l'(show all records) Or/And '-n'(create a new record).",
        "red"
      );
      process.exit(1);
    }

    if (list) {
      this.checkLogExistence()
        ? this.printAll()
        : this.consoler("Log File Did Not Exist!", "red");
      return;
    }

    this.setDefaultProps(result);
    this.setCustomProps(result, "author", author);
    this.setCustomProps(result, "content", content);
    this.setTypes(result, type);

    if (!yes && !list) {
      (async () => {
        const save = await this.confirmSave(result);
        if (save === "y") {
          this.readOrCreateFile(result, this.writeToFile);
          print ? this.printResult(result) : void 0;
        } else {
          this.consoler(`Canceled By ${result.author}`);
        }
      })();
    } else {
      this.readOrCreateFile(result, this.writeToFile);
    }
  }

  setDefaultProps(result: IOpts) {
    result.author = "linbudu";
    result.type = "common";
    result.hash = random(8, "a0");
    result.date = new Date().toLocaleString();
  }

  setCustomProps(result: IOpts, key: string, value?: string) {
    if (value) {
      return (result[key] = value);
    }
  }

  setTypes(result: IOpts, val?: string) {
    if (!val) {
      this.consoler("Type will be set to 'common' by default", "yellow");
    } else if (val !== "common" && val !== "idea" && val !== "bug") {
      this.consoler(
        "Type can only be one of ['common','idea','bug'], this log will be set to 'common'",
        "yellow"
      );
      return (result["type"] = "common");
    } else {
      return (result["type"] = val);
    }
  }
}
export default Xlog;
