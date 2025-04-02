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
    const family = document.getElementById("family").value;
    // TO-DO: display family tree in id tree
    document.getElementById("tree").innerHTML = `[Insert ${family} family tree here]`;
};
displayFamilyTree();
document.getElementById("family").onchange = displayFamilyTree;