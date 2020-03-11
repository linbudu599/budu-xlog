# @budu/xlog

A Simple Command Line Logger.

## TODO

- [ ] Make It More Interative.
- [ ] Make It More Powerful.
- [ ] User-Defined Log File Path/Format/Layout.
- [ ] More User-Defined Props(Not Exact Like Above).
- [ ] ...

## Usage

### Install

```bash
npm install @penumbra/xlog -g
```

### Options

### Create A New Record

- `-n --new`, the following text will be the content of a new record.
- `-a --author`, add the author of a new record.
- `-t --type`, the type of record, should be one of `idea`/`common`/`bug`, will be set to `common` by default.
- `--no-print`, choose weather to print this record in the terminal.
- `-y --yes`, skip confirming save.
- `-m --mode`(not available), set the record mode.

### Other

- `-l --list`, show all records in the log file.

## Example

```bash
xlog -n "Penumbra?" -a Harold -t idea
```

```bash
Successfully Saved
key      value
-------  -----------------
author   Harold
type     idea
hash     3s6wc9gd
date     2020-2-6 12:08:15
content  Penumbra?
```

```bash
xlog -l
```

(The Line Deviation Won't Happen When At Command Line)

```bash
┌────────────────────────────────────────────────────────────────────────────────┐
│    ____    ____    _   _   ____    _   _      __ __  __  _        ___     ____ │
│   / __ \  | __ )  | | | | |  _ \  | | | |    / / \ \/ / | |      / _ \   / ___|│
│  / / _` | |  _ \  | | | | | | | | | | | |   / /   \  /  | |     | | | | | |  _ │
│ | | (_| | | |_) | | |_| | | |_| | | |_| |  / /    /  \  | |___  | |_| | | |_| |│
│  \ \__,_| |____/   \___/  |____/   \___/  /_/    /_/\_\ |_____|  \___/   \____|│
│   \____/                                                                       │
└────────────────────────────────────────────────────────────────────────────────┘
┌─────────┬────────────┬──────────┬────────────┬─────────────────────────┬─────────────────────┐
│ (index) │   author   │   type   │    hash    │          date           │       content       │
├─────────┼────────────┼──────────┼────────────┼─────────────────────────┼─────────────────────┤
│    0    │  'Harold'  │ 'common' │ 'qncfmp0d' │ '2020/3/11 下午3:45:38' │ 'Penumbra Means...' │
│    1    │ 'Linbudu'  │ 'common' │ 'eflqad15' │ '2020/3/11 下午3:45:57' │   'Half Shadow!'    │
│    2    │ 'xiaolin'  │  'idea'  │ 'yaa0c1nr' │ '2020/3/11 下午3:46:20' │    'Half Light!'    │
└─────────┴────────────┴──────────┴────────────┴─────────────────────────┴─────────────────────┘
```
