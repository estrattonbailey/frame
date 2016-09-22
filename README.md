# @estrattonbailey/frame
A no-boilerplate sandbox running SASS and ES6 via Browserify + Babel. Inspired by [outset](https://github.com/callmecavs/outset).

## Install
```
npm i @estrattonbailey/frame -g
```

## Usage
```
frame path/to/sandbox

cd path/to/sandbox

npm i

npm start
```

## Tasks

#### start
Run watch tasks on both javascript and CSS. 

#### js:build
Compile javascript using Browserify + Babel.

#### js:watch
Watch for edits to javascript source with watchify and compile on change.

#### css:build
Compile and autoprefix CSS with LibSASS.

#### css:watch
Watch for edits to CSS and compile on change.

## Dependencies
- Node
- NPM
- Babel
- LibSASS

## Related Projects
- [live-server](https://github.com/tapio/live-server) A simple development http server with live reload capability. by [@tapio](https://github.com/tapio)

MIT License
