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
    get plane() {
        return this._planes;
    }
    get basis() {
        return this._bases;
    }
    get source() {
        return this._sources;
    }
    get element() {
        return this._elements;
    }
    get subCategory() {
        return this._subCategories;
    }
}
const abacomancy = new Proclivity("ABACOMANCY", "USING SAND TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", true, false, false, ["ASTRAL", "PHYSICAL"], [], ["ELEMENTAL"], ["EARTH"], []);
const adaptation = new Proclivity("ADAPTATION", "CHANGE ONE'S SELF TO SURVIVE IN ANY ENVIRONMENT", "TRANSMUTATION", "ENHANCEMENT", false, true, false, ["PHYSICAL"], [], ["PERSON"], [], []);
const ancestralCommunication = new Proclivity("ANCESTRAL COMMUNICATION", "COMMUNICATE WITH ONE'S ANCESTORS", "TRANSMUTATION", "COMMUNICATION", false, false, true, ["ASTRAL", "SOCIAL"], [], ["MAGIC"], [], []);
const ancestralKnowledge = new Proclivity("ANCESTRAL KNOWLEDGE", "KNOWLEDGE OF ONE'S LINEAGE", "DIVINATION", "DETECTION", false, false, true, ["ASTRAL"], [], ["MAGIC"], [], []);
const angerInducement = new Proclivity("ANGER INDUCEMENT", "CAUSE ANOTHER TO FEEL ANGER", "ENCHANTMENT", "CREATION", false, false, true, ["MENTAL"], [], ["PERSON"], [], []);
const animalCommunication = new Proclivity("ANIMAL COMMUNICATION", "COMMUNICATE WITH ANIMALS", "TRANSMUTATION", "COMMUNICATION", false, true, false, ["PHYSICAL", "SOCIAL"], [], ["ANIMAL"], [], ["WILD", "DOMESTIC"]);
const animalMastery = new Proclivity("ANIMAL MASTERY", "KNOWLEDGE OF ANIMALS AND HOW TO CARE FOR THEM", "DIVINATION", "MASTERY", false, false, false, ["PHYSICAL"], [], ["ANIMAL"], [], ["WILD", "DOMESTIC"]);
const animancy = new Proclivity("ANIMANCY", "USING TECHNOLOGY TO MANIUPLATE THE SOUL OR LIFE FORCE", "NECROMANCY", "MANIPULATION", false, true, true, ["ASTRAL", "TECHNOLOGICAL"], [], ["MAN-MADE", "PERSON"], [], []);
const anthropomancy = new Proclivity("ANTHROPOMANCY", "USING THE ENTRAILS OF A DECEASED OR DYING INDIVIDUAL TO LEARN OF THE FUTURE", "DIVINATION", "CLAIRVOYANCE", false, true, true, ["PHYSICAL"], ["DEATH"], ["PERSON"], [], []);
const anxietyInducement = new Proclivity("ANXIETY INDUCEMENT", "CAUSE ANOTHER TO FEEL ANXIETY", "ENCHANTMENT", "CREATION", false, true, true, ["MENTAL"], ["EMOTION"], ["PERSON"], [], []);
const proclivities = [abacomancy, adaptation, ancestralCommunication, ancestralKnowledge, angerInducement, animalCommunication, animalMastery, animancy, anthropomancy, anxietyInducement];

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
        <td>${proclivity.plane}</td>
        <td>${proclivity.basis}</td>
        <td>${proclivity.source}</td>
        <td>${proclivity.element}</td>
        <td>${proclivity.subCategory}</td>
    </tr>`;
});

// fill filter selects
const fillSelect = filter => {
    let options = [];
    proclivities.forEach(proclivity => {
        proclivity[filter].forEach(option => {
            if (!options.includes(option)) options.push(option);
        });
    });
    options.forEach(option => {
        document.getElementById(`${filter}FilterSelect`).innerHTML += `<option value="${option}">${option}</option>`;
    });
};
fillSelect("plane");
fillSelect("basis");

const selectFilter = filter => {
    document.getElementById(`${filter}FilterSelect`).onchange = () => {
        for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
            if (true/* TO-DO: account for other filters */) document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
            if (document.getElementsByClassName("proclivityRow")[i].style.display !== "none" && document.getElementById(`${filter}FilterSelect`).value && ( // select input not empty
                (!proclivities[i][filter.toLowerCase()].includes(document.getElementById(`${filter}FilterSelect`).value)) || 
                // just checkbox
                (document.getElementById(`${filter}Just`).checked && (
                    proclivities[i][filter].length !== 1 || 
                    proclivities[i][filter][0] !== document.getElementById(`${filter}FilterSelect`).value
                ))
            )) document.getElementsByClassName("proclivityRow")[i].style.display = "none";
        }
    };
};
selectFilter("plane");
selectFilter("basis");

// click planeJust
document.getElementById("planeJust").onclick = () => {
    if (document.getElementById("planeFilterSelect").value) {
        if (document.getElementById("planeJust").checked) {
            for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
                if (document.getElementsByClassName("proclivityRow")[i].style.display !== "none" && (proclivities[i].plane.length !== 1 || proclivities[i].plane[0] !== document.getElementById("planeFilterSelect").value)) document.getElementsByClassName("proclivityRow")[i].style.display = "none";
            }
        }
        else {
            for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
                if (document.getElementsByClassName("proclivityRow")[i].style.display === "none" && proclivities[i].plane.includes(document.getElementById("planeFilterSelect").value)) document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
            }
        }
    }
};

// filter expand buttons
const expandButton = filter => {
    let filterExpanded = false;
    document.getElementById(`${filter}FilterButton`).onclick = () => {
        if ((filterExpanded)) {
            document.getElementById(`${filter}FilterDiv`).style.display = "none";
            document.getElementById(`${filter}FilterButton`).innerHTML = "&#9660;";
            filterExpanded = false;
        }
        else {
            document.getElementById(`${filter}FilterDiv`).style.display = "block";
            document.getElementById(`${filter}FilterButton`).innerHTML = "&#9650;";
            filterExpanded = true;
        }
    };
};
expandButton("plane");
expandButton("basis");