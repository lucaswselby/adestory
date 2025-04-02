class House {
    constructor(name, original, active, people) {
        this._name = name;
        this._original = original;
        this._active = active;
        this._people = people;
    }
    get name() {
        return this._name;
    }
    get original() {
        return this._original;
    }
    get active() {
        return this._active;
    }
    get people() {
        return this._people;
    }
}
const adakai = new House("ADAKAI", true, false, ["", "", "", "", "", "", ""]);
const ahmedhan = new House("AHMEDHAN", false, true, ["", "", "", "", "", ""]);
const alavonzaro = new House("ALAVONZARO", false, true, ["", "", "", "", "", "", ""]);
const almufti = new House("AL-MUFTI", true, false, ["", "", "", "", "", "", "", ""]);
const arkwright = new House("ARKWRIGHT", true, false, ["", "", "", "", "", "", "", ""]);
const bennett = new House("BENNETT", false, true, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const beraszafer = new House("BERASZAFER", true, false, ["", "", "", "", "", "", ""]);
const blythe = new House("BLYTHE", true, true, ["", "", "", "", "", "", "", ""]);
const botzami = new House("BOTZAMI", true, false, ["", "", "", "", "", "", ""]);
const cappallo = new House("CAPPALLO", false, false, ["", "", "", "", "", "", "", ""]);
const carvalho = new House("CARVALHO", false, true, ["", "", "", "", "", ""]);
const castillo = new House("CASTILLO", true, true, ["", "", "", "", "", ""]);
const crassus = new House("CRASSUS", false, true, ["", "", "", "", "", ""]);
const cromwell = new House("CROMWELL", false, true, ["", "", "", "", "", "", ""]);
const cronje = new House("CRONJE", false, false, ["", "", "", "", "", "", ""]);
const delaurante = new House("DeLAURANTE", true, true, ["", "", "", "", "", "", "", "", ""]);
const dovorak = new House("DOVORAK", true, true, ["", "", "", "", "", "", "", "", "", "", ""]);
const eabhacdon = new House("EABHACDON", true, false, ["", "", "", "", "", "", ""]);
const espinosa = new House("ESPINOSA", false, false, ["", "", "", "", "", "", "", ""]);
const etienne = new House("ETIENNE", false, true, ["", "", "", "", "", "", ""]);
const faragulski = new House("FARAGULSKI", true, false, ["", "", "", "", "", ""]);
const figueroa = new House("FIGUEROA", false, true, ["", "", "", "", "", ""]);
const gallig = new House("GALLIG", false, true, ["", "", "", "", "", "", ""]);
const godfrey = new House("GODFREY", false, false, ["", "", "", "", "", "", "", ""]);
const haryanka = new House("HARYANKA", false, true, ["", "", "", "", "", "", "", ""]);
const havili = new House("HAVILI", true, false, ["", "", "", "", "", "", "", ""]);
const haylock = new House("HAYLOCK", false, true, ["", "", "", "", "", "", ""]);
const huang = new House("HUANG", false, true, ["", "", "", "", "", "", ""]);
const idirissi = new House("IDIRISSI", false, true, ["", "", "", "", "", "", ""]);
const issako = new House("ISSAKO", false, false, ["", "", "", "", "", "", "", "", ""]);
const jolicoeur = new House("JOLICOEUR", false, false, ["", "", "", "", "", ""]);
const kasabian = new House("KASABIAN", true, false, ["", "", "", "", "", "", "", ""]);
const krowe = new House("KROWE", false, true, ["", "", "", "", "", "", "", "", "", ""]);
const leskai = new House("LESKAI", false, true, ["", "", "", "", "", "", ""]);
const li = new House("LI", true, true, ["", "", "", "", "", ""]);
const liavaa = new House("LIAVA'A", false, false, ["", "", "", "", "", "", ""]);
const maldonado = new House("MALDONADO", false, false, ["", "", "", "", "", "", ""]);
const mavoungou = new House("MAVOUNGOU", false, true, ["", "", "", "", "", ""]);
const mavros = new House("MAVROS", false, true, ["", "", "", "", "", "", ""]);
const merovingian = new House("MEROVINGIAN", true, false, ["", "", "", "", "", "", ""]);
const nagata = new House("NAGATA", false, false, ["", "", "", "", "", "", ""]);
const nakatsuomi = new House("NAKA-TSU-OMI", false, true, ["", "", "", "", "", ""]);
const ohara = new House("O'HARA", false, true, ["", "", "", "", "", "", ""]);
const ong = new House("ONG", false, true, ["", "", "", "", "", "", ""]);
const orlov = new House("ORLOV", true, true, ["", "", "", "", "", ""]);
const otieno = new House("OTIENO", false, true, ["", "", "", "", "", "", "", ""]);
const palladino = new House("PALLADINO", true, false, ["", "", "", "", ""]);
const paora = new House("PAORA", false, false, ["", "", "", "", "", ""]);
const patenaude = new House("PATENAUDE", false, false, ["", "", "", "", "", "", "", ""]);
const pendergast = new House("PENDERGAST", true, true, ["", "", "", "", "", ""]);
const phiri = new House("PHIRI", false, true, ["", "", "", "", "", ""]);
const quijada = new House("QUIJADA", false, false, ["", "", "", "", "", "", "", ""]);
const ragensterne = new House("RAGENSTERNE", false, true, ["", "", "", "", "", "", ""]);
const rashtrakurtha = new House("RASHTRAKURTHA", false, true, ["", "", "", "", "", ""]);
const rybamerc = new House("RYBAMERC", true, false, ["", "", "", "", "", "", ""]);
const salazar = new House("SALAZAR", false, true, ["", "", "", "", "", "", ""]);
const salucnar = new House("SALUCNAR", true, false, ["", "", "", "", ""]);
const sharrow = new House("SHARROW", false, false, ["", "", "", "", "", "", ""]);
const stJoseph = new House("ST. JOSEPH", true, true, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const tatlonghari = new House("TATLONGHARI", false, true, ["", "", "", "", "", ""]);
const taylor = new House("TAYLOR", false, true, ["", "", "", "", "", ""]);
const tran = new House("TRAN", false, true, ["", "", "", "", "", ""]);
const tshireletso = new House("TSHIRELETSO", false, false, ["", "", "", "", "", "", ""]);
const vanDerReede = new House("VAN DER REEDE", false, false, ["", "", "", "", "", "", ""]);
const vang = new House("VANG", true, true, ["", "", "", "", "", ""]);
const vidrogotchen = new House("VIDROGOTCHEN", true, false, ["", "", "", "", "", "", ""]);
const waldington = new House("WALDINGTON", false, false, ["", "", "", "", "", "", ""]);
const weirski = new House("WEIRSKI", false, true, ["", "", "", "", "", "", ""]);
const xydias = new House("XYDIAS", false, true, ["", "", "", "", "", "", ""]);
const zaitsev = new House("ZAITSEV", false, true, ["", "", "", "", "", "", ""]);
const zyma = new House("ZYMA", false, false, ["", "", "", "", ""]);
const houses = [adakai, ahmedhan, alavonzaro, almufti, arkwright, bennett, beraszafer, blythe, botzami, cappallo, carvalho, castillo, crassus, cromwell, cronje, delaurante, dovorak, eabhacdon, espinosa, etienne, faragulski, figueroa, gallig, godfrey, haryanka, havili, haylock, huang, idirissi, issako, jolicoeur, kasabian, krowe, leskai, li, liavaa, maldonado, mavoungou, mavros, merovingian, nagata, nakatsuomi, ohara, ong, orlov, otieno, palladino, paora, patenaude, pendergast, phiri, quijada, ragensterne, rashtrakurtha, rybamerc, salazar, salucnar, sharrow, stJoseph, tatlonghari, taylor, tran, tshireletso, vanDerReede, vang, vidrogotchen, waldington, weirski, xydias, zaitsev, zyma];

// fill houses table
houses.forEach(house => {
    document.getElementById("housesTable").getElementsByTagName("TBODY")[0].innerHTML += `<tr class="houseRow">
        <td>
            <details>
                <summary>${house.name}</summary>
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