window.onload = function() {
    startProgress();
    showMessages();
}

// Milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function startProgress() {
    var progress = document.getElementById("progress");

    for (var i = 0; i <= 100; i++) {
        progress.innerText = i + "%";
        await sleep(100);
    }
}

function showMessages() {
    alert("HEY YOU");
    alert("YOUR'E GETTING A VIRUS");
    alert("ALSO YOUR HARD DRIVE WILL BE DELETED WHEN THAT GETS DONE");
    alert("OH YA");
    alert("THIS PROGRAM WILL CLOSE YOUR BROWSER WHEN IT GETS DONE TO KEEP THE VIRUS FROM WORKING SO DON'T MESS WITH ANYTHING JUST PRESS OK AT THE END");
    alert("IF YOU TOUCH ANYTHING YOU WILL GET THE VIRUS");
    alert("ALSO THE FORMAT THING ISN'T VERY REAL.");
    alert("IT ONLY GETS RID OF A FEW SYSTEM FILES");
    alert("SO NO BIGGIE");
    alert("STARTING UPLOAD...");
}