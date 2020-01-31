const fs = require("fs");
const path = require("path");
const touch = require("touch");

const chalk = require("chalk");

const consoler = (text, color = "green") => {
  const fn = chalk[color] || chalk.green;
  console.log(fn(text));
};

const readOrCreateFile = (info, cb) => {
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

const writeToFile = txt => {
  try {
    fs.writeFileSync("./log.json", JSON.stringify(txt), "utf-8");
  } catch (e) {
    consoler(e, "red");
  }
};

const readAll = () => {
  return JSON.parse(fs.readFileSync("./log.json", "utf-8"));
};

module.exports = {
  consoler,
  readOrCreateFile,
  writeToFile,
  readAll
};
