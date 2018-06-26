const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")

      for(key in contact){
        const paraElement = document.createElement("p")
        paraElement.textContent = `${key}: ${contact[key]}`
        contactSection.appendChild(paraElement)
      }

      return contactSection
    }
  }
})

module.exports = contact
