# @budu/xlog

A Simple Command Line Logger.

## TODO

- [ ] Make It More Interative.
- [ ] Make It More Powerful.
- [ ] User-Defined Log File Path/Format/Layout.
- [ ] More User-Defined Props(Not Exact Like Above).
- [ ] ...

## Usage

### Options

### Create A New Record

- `-n --new`, the following text will be the content of a new record.
- `-a --author`, add the author of a new record.
- `-t --type`, the type of record, should be one of `idea`/`common`/`bug`, will be set to `common` by default.
- `--no-print`, choose weather to print this record in the terminal.
- `-y --yes`, skip confirming save.
- `-m --mode`(not available), set the record mode.
- `-c --clear`, clear all records.

### Other

- `-l --list`, show all records in the log file.

## Example

```bash
xlog -n "@budu/xlog?" -a Harold -t idea
```

```bash
Successfully Saved
key      value
-------  -----------------
author   Harold
type     idea
hash     3s6wc9gd
date     2020-2-6 12:08:15
content  @budu/xlog?
```

```bash
xlog -l
```

```bash
   ____    ____    _   _   ____    _   _      __ __  __  _        ___     ____
   / __ \  | __ )  | | | | |  _ \  | | | |    / / \ \/ / | |      / _ \   / ___|
  / / _` | |  _ \  | | | | | | | | | | | |   / /   \  /  | |     | | | | | |  _
 | | (_| | | |_) | | |_| | | |_| | | |_| |  / /    /  \  | |___  | |_| | | |_| |
  \ \__,_| |____/   \___/  |____/   \___/  /_/    /_/\_\ |_____|  \___/   \____|
   \____/
date                hash      content          author   type
------------------  --------  ---------------  -------  ----
2020-1-31 21:11:21  i1lh29vz  To Be Better Me  Linbudu  idea
2020-1-31 21:11:23  j62zxdf0  To Be Better Me  Linbudu  idea
2020-1-31 21:11:23  jkwfldq9  To Be Better Me  Linbudu  idea
```
