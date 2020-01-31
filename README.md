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
- `-np --no-print`, choose weather to print this record in the terminal.
- `-e --expire`(not available for now), set time for record to be saved.
- `-m --mode`(not available), set the record mode.

### Other

- `-l --list`, show all records in the log file.

## Example

```bash
xlog -n "To Be Better Me"  -a Linbudu -t idea
```

```bash
key      value
-------  ------------------
print    true
date     2020-1-31 21:10:40
hash     1wj55huy
content  To Be Better Me
author   Linbudu
type     idea
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
print  date                hash      content          author   type
-----  ------------------  --------  ---------------  -------  ----
true   2020-1-31 21:11:21  i1lh29vz  To Be Better Me  Linbudu  idea
true   2020-1-31 21:11:23  j62zxdf0  To Be Better Me  Linbudu  idea
true   2020-1-31 21:11:23  jkwfldq9  To Be Better Me  Linbudu  idea
```
