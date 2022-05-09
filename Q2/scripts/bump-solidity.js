const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/;

const verifierRegex = /contract Verifier/;

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", {
  encoding: "utf-8",
});
let bumped = content.replace(solidityRegex, "pragma solidity ^0.8.0");
bumped = bumped.replace(verifierRegex, "contract HelloWorldVerifier");

fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
// Multiplier3
let content2 = fs.readFileSync("./contracts/Multiplier3Verifier.sol", {
  encoding: "utf-8",
});
let bumped2 = content2.replace(solidityRegex, "pragma solidity ^0.8.0");
bumped2 = bumped2.replace(verifierRegex, "contract Multiplier3Verifier");

fs.writeFileSync("./contracts/Multiplier3Verifier.sol", bumped2);

// Multiplier3_plonk
let content3 = fs.readFileSync("./contracts/Multiplier3Verifier_plonk.sol", {
  encoding: "utf-8",
});
let bumped3 = content3.replace(solidityRegex, "pragma solidity ^0.8.0");
bumped3 = bumped3.replace(verifierRegex, "contract Multiplier3Verifier_plonk");

fs.writeFileSync("./contracts/Multiplier3Verifier_plonk.sol", bumped3);
