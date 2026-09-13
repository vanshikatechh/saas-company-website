const loginForm = document.getElementById("loginForm");

const googleButton = document.getElementById("googleBtn");

const signupLink = document.getElementById("signupLink");



/*
    DEMO EMAIL LOGIN
*/

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("email").value.trim();


        const password =
            document.getElementById("password").value;


        if (!email || !password) {

            alert("Please enter your email and password.");

            return;

        }


        /*
            Save demo user locally.
            This is NOT real authentication.
        */

        localStorage.setItem(
            "nexaUser",
            email
        );


        /*
            Send user to dashboard.
        */

        window.location.href =
            "dashboard.html";

    });

}



/*
    GOOGLE LOGIN BUTTON
*/

if (googleButton) {

    googleButton.addEventListener(
        "click",
        function () {

            alert(
                "Google authentication needs to be connected through Firebase or Google Identity Services."
            );

        }
    );

}



/*
    SIGN UP BUTTON
*/

if (signupLink) {

    signupLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            alert(
                "Sign-up can be connected to your authentication backend here."
            );

        }
    );

}