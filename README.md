# yield-test

A small testing station for learning about Generators.

## Getting Started

```bash
npm install
grunt
```

## What does it do?

This little thing explains how `yield` works.

Below, `async` should be outputted before `end` if `yield` is working. If it's not working, `async` will be outputted *after* `end`.

`async` is blocking the thread so `end` can't run *until it yields*. No matter what delay you give to `async` it will always block the thread if `yield` is working correctly.

```bash
$: grunt
Running "shell:main" (shell) task
start
async
end
sync
```
