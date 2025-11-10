// 🧨 Unused variables
const unusedVar = 42;
let temp = "not used";
const config = { debug: true };

// 🐞 Logic bug: always true
function isAdmin(user) {
  if (user.role = "admin") { // assignment instead of comparison
    return true;
  }
  return false;
}

// 🔐 Vulnerability: unsafe eval
function runUserCode(code) {
  eval(code); // dangerous: allows arbitrary code execution
}

// 🔐 Vulnerability: unsanitized DOM injection
function renderMessage(message) {
  document.getElementById("output").innerHTML = message; // XSS risk
}

// 🐞 Bug: unreachable code
function greet(name) {
  return `Hello, ${name}`;
  console.log("This will never run");
}

// 🧨 Unused function
function legacyFunction() {
  console.log("Deprecated logic");
}

// 🐞 Bug: inconsistent return
function getUser(id) {
  if (!id) return;
  if (id === 1) return { name: "Badr" };
  // missing return for other cases
}
