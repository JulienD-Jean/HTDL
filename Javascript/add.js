
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

let btn = document.getElementById("btn");
btn.onclick = function() { addEntry(document.getElementById('textInput').value) };

const entriesIds = [];

onValue(ref(getDatabase(), 'entries'), (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        entriesIds.push(childSnapshot.key);
    });
})

function addEntry(text) {
    let highestId = 0;

    if (entriesIds.length > 0) {
        entriesIds.forEach(id => {
            if (parseInt(id) > highestId) {
                highestId = id;
            }
        });
    }

    const newId = parseInt(highestId) + 1;

    set(ref(getDatabase(), 'entries/' + newId), {
        id: newId,
        text: sanitizeText(text),
        upVotes: 0
    });

    location.href = 'index.html';
}

function sanitizeText(text) {
    const tmp = document.createElement("div");
    tmp.innerText = text;
    return tmp.innerHTML;
}
