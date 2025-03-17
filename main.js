class Proclivity {
    constructor(name, definition, school, type, env, self, others, plane, basis, source, element, subCategory) {
        this._name = name;
        this._definition = definition;
        this._school = school;
        this._type = type;
        this._env = env;
        this._self = self;
        this._others = others;
        this._plane = plane;
        this._basis = basis;
        this._source = source;
        this._element = element;
        this._subCategory = subCategory;
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
        return this._plane;
    }
    get basis() {
        return this._basis;
    }
    get source() {
        return this._source;
    }
    get element() {
        return this._element;
    }
    get subCategory() {
        return this._subCategory;
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
const apotropaic = new Proclivity("APOTROPAIC", "POWER TO AVERT EVIL INFLUENCES", "ABJURATION", "RESISTANCE", false, false, true, ["ASTRAL"], ["BLESSING"], ["MAGIC"], [], []);
const architecturalManipulation = new Proclivity("ARCHITECTURAL MANIPULATION", "CHANGE THE ARCHITECTURE OF MAN-MADE STRUCTURES", "TRANSMUTATION", "MANIPULATION", true, false, false, ["PHYSICAL"], [], ["MAN-MADE"], [], []);
const proclivities = [abacomancy, adaptation, ancestralCommunication, ancestralKnowledge, angerInducement, animalCommunication, animalMastery, animancy, anthropomancy, anxietyInducement, apotropaic, architecturalManipulation];

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
        <td>${proclivity.plane.join(", ")}</td>
        <td>${proclivity.basis.join(", ")}</td>
        <td>${proclivity.source.join(", ")}</td>
        <td>${proclivity.element.join(", ")}</td>
        <td>${proclivity.subCategory.join(", ")}</td>
    </tr>`;
});

const filterableColumns = ["plane", "basis"/*, "source", "element", "subCategory"*/];

// filter rows by selected attribute
const filterRows = () => {
    const filterTest = (filter, index) => {
        if (!document.getElementById(`${filter}FilterSelect`).value) return true;
        if (document.getElementById(`${filter}Just`).checked) {
            return proclivities[index][filter].length === 1 && proclivities[index][filter][0] === document.getElementById(`${filter}FilterSelect`).value;
        }
        else {
            return proclivities[index][filter.toLowerCase()].includes(document.getElementById(`${filter}FilterSelect`).value);
        }
    };
    for (let i = 0; i < document.getElementsByClassName("proclivityRow").length; i++) {
        document.getElementsByClassName("proclivityRow")[i].style.display = "none";
        if (filterTest("plane", i) && filterTest("basis", i)) document.getElementsByClassName("proclivityRow")[i].style.display = "table-row";
    }
};

filterableColumns.forEach(column => {
    // fill filter selects
    let options = [];
    proclivities.forEach(proclivity => {
        proclivity[column].forEach(option => {
            if (!options.includes(option)) options.push(option);
        });
    });
    options.forEach(option => {
        document.getElementById(`${column}FilterSelect`).innerHTML += `<option value="${option}">${option}</option>`;
    });

    // filter expand buttons
    let filterExpanded = false;
    document.getElementById(`${column}FilterButton`).onclick = () => {
        if ((filterExpanded)) {
            document.getElementById(`${column}FilterDiv`).style.display = "none";
            document.getElementById(`${column}FilterButton`).innerHTML = "&#9660;";
            filterExpanded = false;
        }
        else {
            document.getElementById(`${column}FilterDiv`).style.display = "block";
            document.getElementById(`${column}FilterButton`).innerHTML = "&#9650;";
            filterExpanded = true;
        }
    };

    document.getElementById(`${column}FilterSelect`).onchange = filterRows;
    document.getElementById(`${column}Just`).onchange = filterRows;
});