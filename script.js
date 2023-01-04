$(document).ready(function () {
    $("#submit").click(function () {
        var pass = $("#pass").val();
        var validation = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$")
      
        if (!validation.test(pass)) {
            alert("worked")
            swal("Password dosen't matched", "You clicked the button!", "error");
            
        }
        else {
            alert("not worked")
            swal("Validation Successful", "You clicked the button!", "success");
        }

    });

    let images = ['front1.jpg', 'front2.jpg', 'front3.jpg', 'front4.jpg', 'front5.jpg']
    setInterval(function () {
        let random = Math.floor(Math.random() * 5);
        $(".front-img").attr("src", `Products/${images[random]}`)
    }, 2200);
});