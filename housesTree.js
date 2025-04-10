// fill table header with original houses in order
let unorderedOriginalHouses = houses.filter(house => {return house.original;});
let originalHouses = unorderedOriginalHouses.map(house => {return null;});
originalHouses[0] = unorderedOriginalHouses[0];
for (let i = 1; i < originalHouses.length; i++) {
    originalHouses[i] = originalHouses[i - 1].foundedBy;
}
originalHouses.forEach(house => {
    document.getElementsByTagName("THEAD")[0].getElementsByTagName("TR")[0].innerHTML += `<td id="${house.name}">${house.name}<br>&#129120;founded</td>`;
});
