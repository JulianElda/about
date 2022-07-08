"use strict";

import { marked } from "marked";
import fs from "fs";

let contentPath = "./";

let args = process.argv.slice(2);

function getFileName(name) {
  let tmp = name.split(".");
  tmp.pop();
  return tmp[0];
}

function getFileExtension(name) {
  return name.split(".").pop();
}

if (args.length >= 1) {
  contentPath += args[0];
}

fs.readdir(contentPath, function (err, files) {
  if (err) {
    console.error("Cant read directory:", err);
    process.exit(1);
  }

  // only process markdown files
  let mds = files.filter(function (file) {
    return getFileExtension(file) === "md";
  });

  // read the markdown files
  mds.forEach(function (file) {
    fs.readFile(contentPath + "/" + file, "utf8", function (err, contents) {
      let name = getFileName(file);
      let md = marked(contents);
      let htmlfile = contentPath + "/" + name + ".html";

      // write to html file
      fs.writeFile(htmlfile, md, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log(htmlfile);
      });
    });
  });
});
