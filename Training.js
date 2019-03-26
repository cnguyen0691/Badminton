var script_url = "https://script.google.com/macros/s/AKfycbw6SRtZKTq43E3ki2oHpzLXbMWJH1pkrhzOJRFdg6yhih-X02bg/exec";
function insert_value() {
    var name = $("#name").val();
    var email = $("#email").val();
    var description = $("#description").val();
    var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&description=" + description + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $("#resetForm").reset();
}
function ctrlq(e) {
    alert('Congrats! Registered Successfully')
}

(jQuery,document,window);


