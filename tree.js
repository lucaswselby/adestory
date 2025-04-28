// populate family tree options
houses.forEach(house => {
    document.getElementById("family").innerHTML += `<option value="${house.name}">${house.name}</option>`;
});

// pre-fill family from url
// https://stackoverflow.com/questions/5422265/how-can-i-pre-populate-html-form-input-fields-from-url-parameters
function querySt(ji) {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i=0;i<gy.length;i++) {
        ft = gy[i].split("=");
        if (ft[0] == ji) {
            return ft[1];
        }
    }
}
if (querySt("family")) document.getElementById('family').value = querySt("family").replaceAll("%27", "'").replaceAll("%20", " ");

// display family tree
const displayFamilyTree = () => {
    while (document.getElementById("tree").getElementsByTagName("TR")[0]) document.getElementById("tree").getElementsByTagName("TR")[0].remove();

    // prep familyMembers for display
    const family = document.getElementById("family").value;
    let familyMembers = characters.filter(character => {return character.house.name === family;}).sort((a, b) => { // sort familyMembers so "Notable" is at the end
        if (a.role < b.role) return -1;
        if (a.role > b.role) return 1;
        return 0;
    }).sort((a, b) => {return a.familyGen - b.familyGen;}); // sort familyMembers by familyGen

    // remove Notables who share a familyGen with others
    for (let i = 1; i < familyMembers.length; i++) {
        if (familyMembers[i].familyGen === familyMembers[i - 1].familyGen) {
            familyMembers.splice(i, 1); // removes the second family member since it's a Notable
            i--;
        }
    }

    // format familyMembers into a family tree
    const rows = [];
    for (let i = 0; i < familyMembers.length; i++) {
        const row = document.createElement("TR");
        row.innerHTML = `<td ${i < familyMembers.length - 1 ? `class="leftCell" ` : ""}colspan="${Math.pow(2, i)}"><span>${familyMembers[i].name}</span></td>`; // all span elements help with styling

        // add secondaryHouses to the family tree
        if (i > 0) {
            rows[rows.length - 1].innerHTML += `<td class="rightCell" colspan="${Math.pow(2, i - 1)}"><span>${familyMembers[i].secondaryHouse.name}</span></td>`;
        }

        rows.push(row);
    }

    // add more houses
    for (let i = 0; i < rows.length - 2; i++) { // i is the last row being added to
        for (let j = i; j >= 0; j--) { // j is the current row being added to
            const firstRow = rows[j];
            const secondRowElems = rows[j + 1].getElementsByTagName("TD");
            const secondRowLast = secondRowElems[secondRowElems.length - 1].getElementsByTagName("SPAN")[0];
            const houseNames = houses.map(house => {return house.name;});
            const secondRowLastHouse = houses[houseNames.indexOf(secondRowLast.innerHTML)];
            const secondRowLastHouseParent = houses.filter(house => {return house.founded.includes(secondRowLastHouse);})[0];
            if (j < i) {
                firstRow.innerHTML += `<td colspan="${Math.pow(2, i + 1) - Math.pow(2, j + 1)}"></td>`;
            }
            firstRow.innerHTML += `<td class="leftCell" colspan="${Math.pow(2, j)}"><span>${secondRowLast.innerHTML}</span></td><td class="rightCell" colspan="${Math.pow(2, j)}"><span>${secondRowLastHouseParent.name}</span></td>`;
        }
    }

    // display family tree
    rows.forEach(row => {document.getElementById("tree").appendChild(row);});
};
displayFamilyTree();
document.getElementById("family").onchange = displayFamilyTree;