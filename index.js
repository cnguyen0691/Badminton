var script_url = "https://script.google.com/macros/s/AKfycbw6SRtZKTq43E3ki2oHpzLXbMWJH1pkrhzOJRFdg6yhih-X02bg/exec";
function insert_value() {
    var name = $("#name").val();
    var email = $("#email").val();
    var description = $("#description").val();
    var url = script_url + "?callback=contactAlert&name=" + name + "&email=" + email + "&description=" + description + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $("#resetForm").reset();
}
function contactAlert(e) {
    alert('We will get back to you soon')
}



//register form
var script_url1 = "https://script.google.com/macros/s/AKfycbypHcl7WNjaydV6NA55tRnHJwBTAuv4nJpsrTje6o1TkUeD3F4a/exec";
function insert_value2() {
    var firstname = $("#firstname").val();
    var lastname = $("#lastName").val();
    var email1 = $("#email1").val();
    var dob = $("#dob").val();
    var phoneNumber = $("#phoneNumber").val();
    var sessions = $("#sessions option:selected").val();
    var url1 = script_url1 + "?callback=registrationAlert&firstname=" + firstname + "&lastName=" + lastname + "&email1=" + email1 + "&dob=" + dob + "&phoneNumber=" + phoneNumber + "&sessions=" + sessions + "&action=insert";
    var request1 = jQuery.ajax({
        crossDomain: true,
        url: url1,
        method: "GET",
        dataType: "jsonp"
    });
    
   
}
function registrationAlert(e) {
    alert('Congrats! Registered Successfully')
    $("#registerform").reset();
}

(jQuery,document,window);