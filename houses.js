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
const adakai = new House("ADAKAI", true, false, 7);
const ahmedhan = new House("AHMEDHAN", false, true, 6);
const alavonzaro = new House("ALAVONZARO", false, true, 7);
const almufti = new House("AL-MUFTI", true, false, 8);
const arkwright = new House("ARKWRIGHT", true, false, 8);
const bennett = new House("BENNETT", false, true, 12);
const beraszafer = new House("BERASZAFER", true, false, 7);
const blythe = new House("BLYTHE", true, true, 8);
const botzami = new House("BOTZAMI", true, false, 7);
const cappallo = new House("CAPPALLO", false, false, 8);
const carvalho = new House("CARVALHO", false, true, 6);
const castillo = new House("CASTILLO", true, true, 6);
const crassus = new House("CRASSUS", false, true, 6);
const cromwell = new House("CROMWELL", false, true, 7);
const cronje = new House("CRONJE", false, false, 7);
const delaurante = new House("DeLAURANTE", true, true, 9);
const dovorak = new House("DOVORAK", true, true, 11);
const eabhacdon = new House("EABHACDON", true, false, 7);
const espinosa = new House("ESPINOSA", false, false, 8);
const etienne = new House("ETIENNE", false, true, 7);
const faragulski = new House("FARAGULSKI", true, false, 6);
const figueroa = new House("FIGUEROA", false, true, 6);
const gallig = new House("GALLIG", false, true, 7);
const godfrey = new House("GODFREY", false, false, 8);
const haryanka = new House("HARYANKA", false, true, 8);
const havili = new House("HAVILI", true, false, 8);
const haylock = new House("HAYLOCK", false, true, 7);
const huang = new House("HUANG", false, true, 7);
const idirissi = new House("IDIRISSI", false, true, 7);
const issako = new House("ISSAKO", false, false, 9);
const jolicoeur = new House("JOLICOEUR", false, false, 6);
const kasabian = new House("KASABIAN", true, false, 8);
const krowe = new House("KROWE", false, true, 10);
const leskai = new House("LESKAI", false, true, 7);
const li = new House("LI", true, true, 6);
const liavaa = new House("LIAVA'A", false, false, 7);
const maldonado = new House("MALDONADO", false, false, 7);
const mavoungou = new House("MAVOUNGOU", false, true, 6);
const mavros = new House("MAVROS", false, true, 7);
const merovingian = new House("MEROVINGIAN", true, false, 7);
const nagata = new House("NAGATA", false, false, 7);
const nakatsuomi = new House("NAKA-TSU-OMI", false, true, 6);
const ohara = new House("O'HARA", false, true, 7);
const ong = new House("ONG", false, true, 7);
const orlov = new House("ORLOV", true, true, 6);
const otieno = new House("OTIENO", false, true, 8);
const palladino = new House("PALLADINO", true, false, 5);
const paora = new House("PAORA", false, false, 6);
const patenaude = new House("PATENAUDE", false, false, 8);
const pendergast = new House("PENDERGAST", true, true, 6);
const phiri = new House("PHIRI", false, true, 6);
const quijada = new House("QUIJADA", false, false, 8);
const ragensterne = new House("RAGENSTERNE", false, true, 7);
const rashtrakurtha = new House("RASHTRAKURTHA", false, true, 6);
const rybamerc = new House("RYBAMERC", true, false, 7);
const salazar = new House("SALAZAR", false, true, 7);
const salucnar = new House("SALUCNAR", true, false, 5);
const sharrow = new House("SHARROW", false, false, 7);
const stJoseph = new House("ST. JOSEPH", true, true, 12);
const tatlonghari = new House("TATLONGHARI", false, true, 6);
const taylor = new House("TAYLOR", false, true, 6);
const tran = new House("TRAN", false, true, 6);
const tshireletso = new House("TSHIRELETSO", false, false, 7);
const vanDerReede = new House("VAN DER REEDE", false, false, 7);
const vang = new House("VANG", true, true, 6);
const vidrogotchen = new House("VIDROGOTCHEN", true, false, 7);
const waldington = new House("WALDINGTON", false, false, 7);
const weirski = new House("WEIRSKI", false, true, 7);
const xydias = new House("XYDIAS", false, true, 7);
const zaitsev = new House("ZAITSEV", false, true, 7);
const zyma = new House("ZYMA", false, false, 5);
const houses = [adakai, ahmedhan, alavonzaro, almufti, arkwright, bennett, beraszafer, blythe, botzami, cappallo, carvalho, castillo, crassus, cromwell, cronje, delaurante, dovorak, eabhacdon, espinosa, etienne, faragulski, figueroa, gallig, godfrey, haryanka, havili, haylock, huang, idirissi, issako, jolicoeur, kasabian, krowe, leskai, li, liavaa, maldonado, mavoungou, mavros, merovingian, nagata, nakatsuomi, ohara, ong, orlov, otieno, palladino, paora, patenaude, pendergast, phiri, quijada, ragensterne, rashtrakurtha, rybamerc, salazar, salucnar, sharrow, stJoseph, tatlonghari, taylor, tran, tshireletso, vanDerReede, vang, vidrogotchen, waldington, weirski, xydias, zaitsev, zyma];

// fill houses table
houses.forEach(house => {
    document.getElementById("housesTable").getElementsByTagName("TBODY")[0].innerHTML += `<tr class="houseRow">
        <td>${house.name}</td>
        <td>${house.original ? "&#10004;" : ""}</td>
        <td>${house.active ? "&#10004;" : ""}</td>
        <td>${house.people}</td>
    </tr>`;
});