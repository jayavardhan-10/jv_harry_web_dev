// 12. The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.


function setAuthToken(token, expiration) {

    //lets get todays date
    const now = new Date();

    //now you need to calculate the expiration ip into milli seconds to track
    const exptime = now.getTime() + (expiration * 60 * 1000) //conversion into milli seconds

    localStorage.setItem("token", token);
    localStorage.setItem("expiration", exptime);
}

function getAuthToken() {
    const token = localStorage.getItem("token");
    const exptime = localStorage.getItem("expiration");

    //checking if token is valid
    //first token && exptime shall be there
    if (token && exptime) {
        const now = new Date().getTime();

        //if time is not yet over
        if (now < exptime) {
            return token;
        }
        else {
            //token is expired you shall remove it
            localStorage.removeItem("token");
            localStorage.removeItem("expiration");
            return null;
            //token expired
        }
    }
    else {
        return null;
        //no token found
    }
}

function main() {
    const tokenpresent = getAuthToken();
    if (tokenpresent) {
        console.log(`"existing token ${tokenpresent}`);
    }
    else
    {

        document.getElementById("myForm").addEventListener("submit", (event) => {

            //you must prevent defualt event
            event.preventDefault();

            const name = document.querySelector(".token-name").value
            const expiration = document.querySelector(".expiration").value
            setAuthToken(name, expiration);

            console.log(`your token ${name} of ${expiration} has been registered`);
        })
    }
}

main()