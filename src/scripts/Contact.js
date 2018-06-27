const $ = require("jquery")
const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")

const deleteContact = () => {
  console.log("delete button clicked", event.currentTarget.parentNode.id)
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.deleteContact(contactId)
  .then(() => {
    ContactListModule.buildContactList()
  })
}

const editContact = () => {
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.getContact(contactId)
  .then((response) => {
    console.log("contact to be edited", response.id);
    buildEditContactForm(response)
  })
}

const buildEditContactForm = (contact) => {

$("#addBtn").hide();
  $(".name-form-field").val(contact.name)

  $(".phone-form-field").val(contact.phone)

  $(".addr-form-field").val(contact.address)

  const editButton = document.createElement("button")
  editButton.textContent = "Update";
  editButton.id = `${contact.id}`
  editButton.className = "editBtn"
  editButton.addEventListener("click", function() {
    editExistingContact(contact);
    $("#addBtn").show();
    $(editButton).remove();
  })
  $("#formArticle").append(editButton)


}

const editExistingContact = (contact) => {
  const contactId = contact.id
  console.log(contactId);
  const contactName = $(".name-form-field").val()
  const contactPhone = $(".phone-form-field").val()
  const contactAddress = $(".addr-form-field").val()
  ContactCollectionModule.putContact(contactId, contactName, contactPhone, contactAddress)
  .then(() => {
    ContactListModule.buildContactList()
    $("input").val("")
  })
}

const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")
      contactSection.id = `${contact.id}`

      for(key in contact){
        if(key === "id") {
          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete"
          deleteButton.addEventListener("click", deleteContact)
          contactSection.appendChild(deleteButton)

          const editButton = document.createElement("button")
          editButton.textContent = "Edit"
          editButton.addEventListener("click", editContact)
          contactSection.appendChild(editButton)
        } else {
          const paraElement = document.createElement("p")
          paraElement.textContent = `${key}: ${contact[key]}`
          contactSection.appendChild(paraElement)
        }
      }

      return contactSection
    }
  }
})

module.exports = contact
