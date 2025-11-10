// 🧨 Unused import
import fs from 'fs';

// 🧨 Unused variable
const debugMode = true;

// 🐞 Bug: wrong comparison operator
function isEven(num) {
  if (num % 2 = 0) { // assignment instead of comparison
    return true;
  }
  return false;
}

// 🔐 Vulnerability: insecure HTTP
function fetchUserData(userId) {
  fetch(`http://example.com/api/user/${userId}`) // should be HTTPS
    .then(res => res.json())
    .then(data => console.log(data));
}

// 🔐 Vulnerability: weak input validation
function login(username, password) {
  if (!username || !password) {
    console.log("Missing credentials");
    return;
  }
  // No sanitization, no hashing, no rate limiting
  console.log(`Logging in ${username} with password ${password}`);
}

// 🐞 Bug: shadowed variable
function processData(data) {
  let result = "initial";
  if (data) {
    let result = "processed"; // shadows outer variable
    console.log(result);
  }
  return result; // returns "initial" even if data exists
}

// 🧪 Poor testability: side effects in constructor
class User {
  constructor(name) {
    this.name = name;
    console.log(`User created: ${name}`); // side effect
  }
}
