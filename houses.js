// fill houses table
houses.forEach(house => {
    document.getElementById("housesTable").getElementsByTagName("TBODY")[0].innerHTML += `<tr class="houseRow">
        <td>
            <details>
                <summary><a href="./familyTree.html?family=${house.name}">${house.name}</a></summary>
                <ul class="people"></ul>
            </details>
        </td>
        <td>${house.original ? "&#10004;" : ""}</td>
        <td>${house.active ? "&#10004;" : ""}</td>
        <td>${house.people.length}</td>
    </tr>`;
});

// fill people in each house
for (let i = 0; i < document.getElementsByClassName("people").length; i++) {
    for (let j = 0; j < houses[i].people.length; j++) {
        document.getElementsByClassName("people")[i].innerHTML += `<li>${houses[i].people[j]}${j ? "" : " founder"}</li>`;
    }
}