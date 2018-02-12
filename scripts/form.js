//Class change in tab buttons - color change + enabling & disabling the button
$(document).ready(function(){
  $(".next").click(function(){
    $("#schritt1").removeClass("btn-primary");
    $("#schritt1").addClass("btn-default");
    $("#schritt1").addClass("disabled");
    $("#schritt2").removeClass("btn-default");
    $("#schritt2").removeClass("disabled");
    $("#schritt2").addClass("btn-primary");
  });

  $(".prev").click(function(){
    $("#schritt1").removeClass("disabled");
    $("#schritt1").removeClass("btn-default");
    $("#schritt1").addClass("btn-primary");
    $("#schritt2").addClass("btn-default");
    $("#schritt2").addClass("disabled");
    $("#schritt2").removeClass("btn-primary");
  });

});

//Form validation options
$(function(){
  $("#form").validate({
    debug: true,
    rules: {
      vorname: {
        required: true,
        minlength: 2
      },
      nachname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      telefon: {
        required: true,
        digits: true
      },
      passwort: {
        required: true,
        minlength: 5
      },
      passwortwdhln: {
        required: true,
        minlength: 5,
        equalTo: "#passwort"
      },
      kennzeichen: {
        required: true,
        minlength: 4,
      }
    },
    messages: {
      vorname: {
        required: "Geben Sie bitte Ihren Vornamen ein.",
        minlength: "Mindestens zwei Buchstaben!"
      },
      nachname: {
        required: "Geben Sie bitte Ihren Nachnamen ein.",
        minlength: "Mindestens zwei Buchstaben!"
      },
      email: {
        required: "Geben Sie bitte Ihre Email-Adresse ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse ein!"
      },
      telefon: {
        required: "Geben Sie bitte Ihre Handynummer ein",
      },
      passwort: {
        required: "Geben Sie bitte Ihr Passwort ein.",
        minlength: "Mindestens fünf Zeichen."
      },
      passwortwdhln: {
        equalTo: "Es muss mit Ihrem Passwort übereinstimmen."
      },
      kennzeichen: {
        required: "Geben Sie bitte Ihre Kennzeichen ein.",
      }
    },
    submitHandler: function(form) {
    form.submit();
    }
  });
});
