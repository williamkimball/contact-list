const $ = require("jquery")

const contactCollection = Object.create({}, {
  "postContact": { //function for adding a completely new contact to the database.
    value: function(name, phone, address) {
      return $.ajax({
        url: "http://localhost:3000/contacts",
        method: "POST",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  },
  "getContacts": {
    value: function() {
      return $.ajax("http://localhost:3000/contacts")
    }
  },
  "deleteContact": {
    value: function(id){ //takes the id of a contact, executes an ajax call on it and removes it fron the database.
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`, //uses id passed in to select the specific contact to delete.
        method: "DELETE"
      })
    }
  },
  "getContact": {
    value: function(id) {
      return $.ajax(`http://localhost:3000/contacts/${id}`) //uses an ajax call to find and return the specific contact
    }
  },
  "putContact": { //function to edit contact and update the database
    value: function(id, name, phone, address){
      return $.ajax({
        url: `http://localhost:3000/contacts/${id}`,
        method: "PUT",
        data: {
          name: name,
          phone: phone,
          address: address
        }
      })
    }
  }
})

module.exports = contactCollection
