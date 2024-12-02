# @cookshack/codemirror-lang-nasl

[NASL](https://github.com/greenbone/openvas-scanner/tree/main/doc/manual/nasl) language support for CodeMirror 6.

## Build from source

```sh
npm i # only needed first time
npm run prepare && npm test
```

## Check dir

Test the parser against all files in a dir

```sh
./bin/chk -r --ext nasl ~/src/openvas-scanner/rust/examples/
```
