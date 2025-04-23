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
    let familyMembers = characters.filter(character => {return character.house === family;}).sort((a, b) => { // sort familyMembers so "Notable" is at the end
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
    let rows = [];
    for (let i = 0; i < familyMembers.length; i++) {
        const row = document.createElement("TR");
        row.innerHTML = `<td colspan="${Math.pow(2, i)}">${familyMembers[i].name}</td>`;

        // add secondaryHouses to the family tree
        if (i > 0) {
            rows[rows.length - 1].innerHTML += `<td>${familyMembers[i].secondaryHouse}</td>`;
        }

        rows.push(row);
    }
    rows.forEach(row => {document.getElementById("tree").appendChild(row);});
};
displayFamilyTree();
document.getElementById("family").onchange = displayFamilyTree;