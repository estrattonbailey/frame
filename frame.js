#! /usr/bin/env node
'use strict'

const fs = require('fs-extra')

const command = process.argv[2] || null 

const path = process.argv[3] || 'frame' 
const FROM = `${ __dirname }/lib`
const TO   = `${ process.cwd() }/${ path }`

const msg = {
  help: `
    When installed globally, frame is available as an
    executable on the command line. E.g:

    frame help

    It exposes a 'init' helper, in addition 'help', that should be
    followed by a path to the location you'd like to install frame:

    frame init path/to/css

    If no path is supplied to 'init', frame will create a
    default directory 'frame', and install there.\n`,
  noargs: `
    Hey there! Looks like you want to use frame.\n`,
  err: `
    Looks like you've used an incorrect command. Try 'help' or 'init <path>\n`
}

/**
 * No command, return default
 */
if (!command){ 
  console.log(msg.noargs)
  console.log(msg.help) 
  return 
}

if (command.match(/help/)) return console.log(msg.help) 

if (!command.match(/init/)) return console.log(msg.err)

/**
 * If a user get's past this point, 
 * they've at least provided 'init', 
 * and an optional path
 */

/**
 * Copy main files
 */
fs.copy(FROM, TO, (error) => {
  if(error) return console.log('Main Error:',error)
  console.log(`   Copied files to ${TO}\n`)
})

