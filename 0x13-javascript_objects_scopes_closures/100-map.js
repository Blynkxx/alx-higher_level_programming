#!/usr/bin/node

const list = require('./100-data').list;

const newList = list.map((cur, index) => cur * index);
console.log(list);
console.log(newList);
