class Proclivity {
    constructor(name, definition, school, type, env, self, others, planes, bases, sources, elements, subCategories) {
        this._name = name;
        this._definition = definition;
        this._school = school;
        this._type = type;
        this._env = env;
        this._self = self;
        this._others = others;
        this._planes = planes;
        this._bases = bases;
        this._sources = sources;
        this._elements = elements;
        this._subCategories = subCategories;
    }
    get name() {
        return this._name;
    }
    get definition() {
        return this._definition;
    }
    get school() {
        return this._school;
    }
    get type() {
        return this._type;
    }
    get env() {
        return this._env;
    }
    get self() {
        return this._self;
    }
    get others() {
        return this._others;
    }
    get planes() {
        return this._planes;
    }
    get bases() {
        return this._bases;
    }
    get sources() {
        return this._sources;
    }
    get elements() {
        return this._elements;
    }
    get subCategories() {
        return this._subCategories;
    }
}
const abacomancy = new Proclivity("ABACOMANCY", "USING SAND TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const adaptation = new Proclivity("ADAPTATION", "CHANGE ONE'S SELF TO SURVIVE IN ANY ENVIRONMENT", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const ancestralCommunication = new Proclivity("ANCESTRAL COMMUNICATION", "COMMUNICATE WITH ONE'S ANCESTORS", "TRANSMUTATION", "COMMUNICATION", false, false, true, ["ASTRAL", "SOCIAL"], [], ["MAGIC"], [], []);
const ancestralKnowledge = new Proclivity("ANCESTRAL KNOWLEDGE", "KNOWLEDGE OF ONE'S LINEAGE", "DIVINATION", "DETECTION", false, false, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const angerInducement = new Proclivity("ANGER INDUCEMENT", "CAUSE ANOTHER TO FEEL ANGER", "ENCHANTMENT", "CREATION", false, false, true, ["MENTAL"], [], ["PERSON"], [], []);
const proclivities = [abacomancy, adaptation, ancestralCommunication, ancestralKnowledge, angerInducement];

// fill proclivities tables
proclivities.forEach(proclivity => {
    document.getElementById("proclivitiesTable").getElementsByTagName("TBODY")[0].innerHTML += `<tr class="proclivityRow">
        <td>${proclivity.name}</td>
        <td>${proclivity.definition}</td>
        <td>${proclivity.school}</td>
        <td>${proclivity.type}</td>
        <td>${proclivity.env ? "&#10004;" : ""}</td>
        <td>${proclivity.self ? "&#10004;" : ""}</td>
        <td>${proclivity.others ? "&#10004;" : ""}</td>
        <td>${proclivity.planes}</td>
        <td>${proclivity.bases}</td>
        <td>${proclivity.sources}</td>
        <td>${proclivity.elements}</td>
        <td>${proclivity.subCategories}</td>
    </tr>`;
});

// fill planeFilterSelect
let planes = [];
proclivities.forEach(proclivity => {
    proclivity.planes.forEach(plane => {
        if (!planes.includes(plane)) planes.push(plane);
    });
});
planes.forEach(plane => {
    document.getElementById("planeFilterSelect").innerHTML += `<option value="${plane}">${plane}</option>`;
});

// select plane
document.getElementById("planeFilterSelect").onchange = () => {
    for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
        document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
        if (document.getElementById("planeFilterSelect").value && ( // planeFilterSelect not empty
            (!proclivities[i].planes.includes(document.getElementById("planeFilterSelect").value)) || 
            // just checkbox
            (document.getElementById("planeJust").checked && (
                proclivities[i].planes.length !== 1 || 
                proclivities[i].planes[0] !== document.getElementById("planeFilterSelect").value
            ))
        )) document.getElementsByClassName("proclivityRow")[i].style.display = "none";
    }
};

// click planeJust
document.getElementById("planeJust").onclick = () => {
    if (document.getElementById("planeFilterSelect").value) {
        if (document.getElementById("planeJust").checked) {
            for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
                if (document.getElementsByClassName("proclivityRow")[i].style.display !== "none" && (proclivities[i].planes.length !== 1 || proclivities[i].planes[0] !== document.getElementById("planeFilterSelect").value)) document.getElementsByClassName("proclivityRow")[i].style.display = "none";
            }
        }
        else {
            for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
                if (document.getElementsByClassName("proclivityRow")[i].style.display === "none" && proclivities[i].planes.includes(document.getElementById("planeFilterSelect").value)) document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
            }
        }
    }
};

// plane filter button
let planeFilterButtonExpanded = false;
document.getElementById("planeFilterButton").onclick = () => {
    if ((planeFilterButtonExpanded)) {
        document.getElementById("planeFilterDiv").style.display = "none";
        document.getElementById("planeFilterButton").innerHTML = "&#9660;";
        planeFilterButtonExpanded = false;
    }
    else {
        document.getElementById("planeFilterDiv").style.display = "block";
        document.getElementById("planeFilterButton").innerHTML = "&#9650;";
        planeFilterButtonExpanded = true;
    }
};