
// // ------------------------------
// // Mobile-Friendly Visitor Tracking (GET request)
// // ------------------------------
// (async function trackVisit() {
//   try {
//     // Fetch visitor IP and location from ipwhois.app
//     let ipData = {};
//     try {
//       const res = await fetch("https://ipwhois.app/json/");
//       if (res.ok) {
//         ipData = await res.json();
//       }
//     } catch (err) {
//       console.warn("IP/Location fetch failed:", err);
//     }

//     // Prepare payload
//     const payload = {
//       page_url: window.location.href,
//       user_agent: navigator.userAgent,
//       referrer: document.referrer || "direct",
//       ip: ipData.ip || "unknown",
//       city: ipData.city || "unknown",
//       region: ipData.region || "unknown",
//       country: ipData.country || "unknown",
//       latitude: ipData.latitude || "unknown",
//       longitude: ipData.longitude || "unknown",
//     };

//     //  Convert payload to query parameters (GET request)
//     const params = new URLSearchParams(payload).toString();

//     //  Send data to Webhook.site via GET
//     const webhookURL = "https://webhook.site/c7dd0ce8-ecc8-4eae-b9e7-24a0326b781f"; // Replace with your URL
//     await fetch(`${webhookURL}?${params}`)
//       .then(() => console.log("Visitor tracked successfully"))
//       .catch(err => console.error("Webhook send error:", err));

//   } catch (err) {
//     console.error("Tracking error:", err);
//   }
// })();

let menu = document.querySelector('.menu');
let ul = document.querySelector('ul');

// let body = document.getElementById('body');

document.oncontextmenu = () => {
    alert("Don't try to hack us from right click. 😍🤪");
    return false;
}


document.onkeydown = e => {

    if (e.key == "F12") {
        alert("Don't try to inspect element. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "u") {
        alert("Don't try to view Page Source. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "U") {
        alert("Don't try to view Page Source. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "c") {
        alert("Don't try to copy page element. 😍");
        return false;
    }

    if (e.ctrlKey && e.key == "v") {
        alert("Don't try to paste anything to page. 😍");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key == "I") {
        alert("Naa munna naa , Tumse na ho payega. 😍");
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key == "i") {
        alert("Naa munna naa , Tumse na ho payega. 😍");
        return false;
    }
}


menu.addEventListener('click', () => {
    ul.classList.toggle('menu_active');

    let menu_child = menu.firstElementChild;
    if (ul.classList.contains('menu_active')) {
        menu_child.classList.replace('fa-bars', 'fa-xmark');
    }

    else {
        menu_child.classList.replace('fa-xmark', 'fa-bars');
    }
});

// function submitForm() {
//     document.contact-form.submit();
//     document.contact-form.reset();
// }

// function submitForm() {
//     validateForm();
//     let frm = document.getElementsByName('contact-form')[0];
//     frm.submit();
//     frm.reset();
//     return false;
// }

function submitForm() {
    var gmail = document.forms["contact-form"]["email"].value;
    var msg = document.forms["contact-form"]["message"].value;
    if (gmail == "" || msg == "") {
        alert("Email and Message must be filled out");
        return false;
    }

    let frm = document.getElementsByName('contact-form')[0];
    frm.submit();
    frm.reset();
    return false;
}


// let menuBtn = document.querySelector('.sideMenu');
// let sidebar = document.querySelector('.sidebar');

// menuBtn.addEventListener('click' ,() =>{
//     sidebar.classList.add('showSidebar');
// });

// document.addEventListener('mouseup', (e) =>{
//     if(!sidebar.contains(e.target)){
//         sidebar.classList.remove('showSidebar');
//     }
// });

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() => {
    document.getElementById("siteName").style.color = getRandomColor();
}, 500);