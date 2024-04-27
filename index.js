#!/usr/bin/env node

const axios = require('axios');
const fs = require('fs');
const path = require('path');

const [,, ...args] = process.argv;

if (args[0] === 'add' && args[1]) {
  const url = `https://raw.githubusercontent.com/flexbox/expo-router-on-rails/main/${args[1]}.md`;

  axios.get(url)
    .then(response => {
      fs.writeFileSync(path.join(process.cwd(), `${args[1]}.md`), response.data);
      console.log(`File ${args[1]}.md has been downloaded.`);
    })
    .catch(error => {
      console.error(`Failed to download the file: ${error.message}`);
    });
} else {
  console.log('Invalid command. Use "add <filename>" to download a file.');
}