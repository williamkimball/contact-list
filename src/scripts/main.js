const contactForm = require("./ContactForm")
const contactList = require("./ContactList")
// console.log("contact form module", contactForm);


contactForm.buildContactForm() //on page load, fire the build contact form function.
contactList.buildContactList() //on page load, load the current contact list and print them to the DOM.
