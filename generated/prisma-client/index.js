"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Video",
    embedded: false
  },
  {
    name: "ExternalResource",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/tim-dommett/demo/dev`
});
exports.prisma = new exports.Prisma();
