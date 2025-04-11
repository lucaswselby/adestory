// fill table header with original houses in order
let unorderedOriginalHouses = houses.filter(house => {return house.original && house !== eabhacdon;});
let originalHouses = unorderedOriginalHouses.map(house => {return null;});
originalHouses[0] = unorderedOriginalHouses[0];
for (let i = 1; i < originalHouses.length; i++) {
    originalHouses[i] = originalHouses[i - 1].founded[0];
}
originalHouses.forEach(house => {
    document.getElementsByTagName("THEAD")[0].getElementsByTagName("TR")[0].innerHTML += `<td id="${house.name.replaceAll(".", "")}">${house.name}</td>`;
});

// fill table body with descendants of original houses
let parentHouses = [...originalHouses];
document.getElementsByTagName("TBODY")[0].innerHTML += "<tr></tr>";
parentHouses.forEach(parentHouse => {
    let childHouses = parentHouse.founded.filter(house => {return !parentHouses.includes(house)});
    if (childHouses.length) {
        document.getElementById(parentHouse.name.replaceAll(".", "")).colSpan = parseInt(document.getElementById(parentHouse.name.replaceAll(".", "")).colSpan) + childHouses.length - 1; // updates colspan of parent house
        childHouses.forEach(childHouse => {
            document.getElementsByTagName("TR")[document.getElementsByTagName("TR").length - 1].innerHTML += `<td id="${childHouse.name}">${childHouse.name}</td>`;
        });
    }
    else {
        document.getElementsByTagName("TR")[document.getElementsByTagName("TR").length - 1].innerHTML += "<td></td>"
    }
});