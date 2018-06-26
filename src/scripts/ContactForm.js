const $ = require("jquery")

const contactCollectionModule = require("./ContactCollection")
const contactListModule = require("./ContactList")

const addNewContact = () => {
  const newContactName = $(".name-form-field").val()
  const newContactPhone = $(".phone-form-field").val()
  const newContactAddr = $(".addr-form-field").val()
  console.log("add button clicked", newContactName, newContactPhone, newContactAddr);
  contactCollectionModule.postContact(newContactName, newContactPhone, newContactAddr)
  .then((response) => {
    console.log("response", response)
    contactListModule.buildContactList()
  })
}

const contactForm = Object.create({}, {
  buildContactForm: {
    value: function() {
      const formArticle = document.createElement("article")

      const nameSection = document.createElement("section")

      const nameLabel = document.createElement("label")
      nameLabel.textContent = "Name: "
      nameSection.appendChild(nameLabel)

      const nameField = document.createElement("input")
      nameField.setAttribute("type", "text")
      nameField.className = "name-form-field"
      nameSection.appendChild(nameField)

      formArticle.appendChild(nameSection)

      const phoneSection = document.createElement("section")

      const phoneLabel = document.createElement("label")
      phoneLabel.textContent = "Phone: "
      phoneSection.appendChild(phoneLabel)

      const phoneField = document.createElement("input")
      phoneField.setAttribute("type", "tel")
      phoneField.className = "phone-form-field"
      phoneSection.appendChild(phoneField)

      formArticle.appendChild(phoneSection)

      const addrSection = document.createElement("section")

      const addrLabel = document.createElement("label")
      addrLabel.textContent = "Address: "
      addrSection.appendChild(addrLabel)

      const addrFieldOne = document.createElement("input")
      addrFieldOne.setAttribute("type", "text")
      addrFieldOne.className = "addr-form-field"
      addrSection.appendChild(addrFieldOne)
      formArticle.appendChild(addrSection)

      const addButton = document.createElement("button")
      addButton.textContent = "Add"
      addButton.addEventListener("click", addNewContact)
      formArticle.appendChild(addButton)

      document.querySelector("#display-container").appendChild(formArticle)
    }
  }
})

module.exports = contactForm
