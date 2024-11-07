
import { getDatabase, update, ref, onValue, increment } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

let entries = [];

onValue(ref(getDatabase(), 'entries'), (snapshot) => {
    entries = [];
    snapshot.forEach((childSnapshot) => {
        entries.push(childSnapshot.val());
    });
    entries.sort((a, b) => b.upVotes - a.upVotes);
    updateInterface();
})

function updateInterface() {
    const objectList = document.getElementById("entriesTableBody");
    objectList.innerHTML = "";

    let index = 1;
    entries.forEach(entry => {
        const listItem = document.createElement("tr");
        listItem.innerHTML = `
            <tr>
                <th style="width: 15%;">#${index}</th>
                <td>${entry.text}</td>
                <td style="width: 5%;">|</td>
                <td class="p-0 pb-1" style="width: 40px;">
                    <a id="upVoteBtn${entry.id}" type="button" class="d-inline upVoteBtn">
                        <img src="Images/arrow_upward.svg" alt="Up Vote" class="img-fluid" style="height: 70%; width: 70%;"/>
                    </a>
                </td>
                <td>${entry.upVotes}</td>
            </tr>
        `;

        objectList.appendChild(listItem);
        document.getElementById(`upVoteBtn${entry.id}`).onclick = function() { upVoteEntry(entry.id) };
        index++;
    });
}

function upVoteEntry(id) {

    const db = ref(getDatabase());
    const updates = {};
    updates[`entries/${id}/upVotes`] = increment(1);
    update(db, updates)

    let button = document.getElementById(`upVoteBtn${id}`);
    button.classList.add("active");

    setTimeout(() => {
        button.classList.remove("active");
    }, 200);
}
