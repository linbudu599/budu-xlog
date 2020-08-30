declare interface IOpts {
  new?: string;
  author?: string;
  list?: boolean;
  type?: string;
  yes?: boolean;
  print?: boolean;
  hash?: string;
  date?: string;
  [x: string]: any;
}

declare module "random-id";

declare module "console.table";

declare interface IUtil {
  consoler(text: string, color?: string): void;
  readOrCreateFile(info: IOpts, recorder: (txt: IOpts) => void): void;
  writeToFile(txt: IOpts): void;
  clearAll(): void;
  confirmSave({ content, type, author }: IOpts): Promise<"y" | "n">;
  printResult(result: IOpts): void;
  printAll(): void;
  checkLogExistence(): boolean;
}

declare interface IMain {
  setDefaultProps(result: IOpts): void;
  setCustomProps(result: IOpts, key: string, value: string): void;
  setTypes(result: IOpts, val?: string): void;
}
