// fill table header with original houses in order
let unorderedOriginalHouses = houses.filter(house => {return house.original && house !== eabhacdon;});
let originalHouses = unorderedOriginalHouses.map(house => {return null;});
originalHouses[0] = unorderedOriginalHouses[0];
for (let i = 1; i < originalHouses.length; i++) {
    originalHouses[i] = originalHouses[i - 1].founded[0];
}
originalHouses.forEach(house => {
    document.getElementsByTagName("THEAD")[0].getElementsByTagName("TR")[0].innerHTML += `<td colspan="${house.colSpan}" id="${house.name.replaceAll(".", "")}">${house.name}</td>`;
});

// add the next row to the table
const addRowAfter = parentRow => {
    document.getElementsByTagName("TBODY")[0].innerHTML += "<tr></tr>";
    let childRow = [];
    parentRow.forEach(parentHouse => {
        let childHouses = parentHouse ? parentHouse.founded.filter(house => {return !house.original;}) : [];
        if (childHouses.length) {
            childHouses.forEach(childHouse => {
                childRow.push(childHouse);
            });
        }
        else childRow.push(null);
    });
    childRow.forEach(house => {
        document.getElementsByTagName("TR")[document.getElementsByTagName("TR").length - 1].innerHTML += (house ? `<td colspan="${house.colSpan}" id="${house.name}">${house.name}</td>` : "<td></td>");
    });
    if (childRow.filter(child => {if (child) return child;}).length) return addRowAfter(childRow);
}
addRowAfter(originalHouses);
document.getElementsByTagName("TR")[document.getElementsByTagName("TR").length - 1].remove();