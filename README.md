# Boostnote auto committer
This script commits (and push) automatically.

## Launching
I recommend you to use [forever](https://github.com/foreverjs/forever).

```
$ yarn global add forever
$ export PATH="$PATH:${yarn global bin}"
$ cd ~/Boostnote
$ forever start ~/src/boostnote-auto-comitter/watcher.js
```
