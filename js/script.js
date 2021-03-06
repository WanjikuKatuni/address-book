//contactconstructor-backend
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// add full names
Contact.prototype.fullName = function () {
  return this.firstName + "" + this.lastName;
};

// user inerface logic/front end -jquery
$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.fullName() + "</span></li>"
    );

    $("input#new-first-name").val();
    $("input#new-last-name").val();

    $(".contact")
      .last()
      .click(function () {
        $("#show-contact").show();
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });
  });
});
