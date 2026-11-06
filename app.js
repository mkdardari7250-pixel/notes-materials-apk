import { app, auth, db, storage } from "./firebase.js";

const status = document.getElementById("connectionStatus");
document.getElementById("year").textContent = new Date().getFullYear();

try {
  // Reaching this point means the Firebase SDK initialized in this browser.
  // Database, login and file operations will be enabled after their Firebase
  // products and security rules are configured in the console.
  status.textContent = "Firebase SDK सफलतापूर्वक initialize हुआ। अगला चरण: सेवाएँ सेटअप करना।";
  status.dataset.state = "ready";
  console.log("Firebase initialized", { app, auth, db, storage });
} catch (error) {
  console.error(error);
  status.textContent = "Firebase initialization में समस्या आई। firebase.js की जाँच करें।";
  status.dataset.state = "error";
}

document.getElementById("accountBtn").addEventListener("click", () => {
  alert("Login/Register सुविधा अगले चरण में जोड़ी जाएगी।");
});
