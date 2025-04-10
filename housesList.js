class House {
    constructor(name, original, active, foundedBy, people) {
        this._name = name;
        this._original = original;
        this._active = active;
        this._foundedBy = foundedBy;
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
    get foundedBy() {
        return this._foundedBy;
    }
    get people() {
        return this._people;
    }
}
const adakai = new House("ADAKAI", true, false, vanDerReede, ["", "", "", "", "", "", ""]);
const ahmedhan = new House("AHMEDHAN", false, true, delaurante, ["", "", "", "", "", ""]);
const alavonzaro = new House("ALAVONZARO", false, true, pendergast, ["", "", "", "", "", "", ""]);
const almufti = new House("AL-MUFTI", true, false, pendergast, ["", "", "", "", "", "", "", ""]);
const arkwright = new House("ARKWRIGHT", true, false, blythe, ["", "", "", "", "", "", "", ""]);
const bennett = new House("BENNETT", false, true, merovingian, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const beraszafer = new House("BERASZAFER", true, false, godfrey, ["", "", "", "", "", "", ""]);
const blythe = new House("BLYTHE", true, true, patenaude, ["", "", "", "", "", "", "", ""]);
const botzami = new House("BOTZAMI", true, false, arkwright, ["", "", "", "", "", "", ""]);
const cappallo = new House("CAPPALLO", false, false, adakai, ["", "", "", "", "", "", "", ""]);
const carvalho = new House("CARVALHO", false, true, tran, ["", "", "", "", "", ""]);
const castillo = new House("CASTILLO", true, true, cronje, ["", "", "", "", "", ""]);
const crassus = new House("CRASSUS", false, true, castillo, ["", "", "", "", "", ""]);
const cromwell = new House("CROMWELL", false, true, botzami, ["", "", "", "", "", "", ""]);
const cronje = new House("CRONJE", false, false, quijada, ["", "", "", "", "", "", ""]);
const delaurante = new House("DeLAURANTE", true, true, merovingian, ["", "", "", "", "", "", "", "", ""]);
const dovorak = new House("DOVORAK", true, true, espinosa, ["", "", "", "", "", "", "", "", "", "", ""]);
const eabhacdon = new House("EABHACDON", true, false, null, ["", "", "", "", "", "", ""]);
const espinosa = new House("ESPINOSA", false, false, mavoungou, ["", "", "", "", "", "", "", ""]);
const etienne = new House("ETIENNE", false, true, almufti, ["", "", "", "", "", "", ""]);
const faragulski = new House("FARAGULSKI", true, false, palladino, ["", "", "", "", "", ""]);
const figueroa = new House("FIGUEROA", false, true, carvalho, ["", "", "", "", "", ""]);
const gallig = new House("GALLIG", false, true, almufti, ["", "", "", "", "", "", ""]);
const godfrey = new House("GODFREY", false, false, paora, ["", "", "", "", "", "", "", ""]);
const haryanka = new House("HARYANKA", false, true, gallig, ["", "", "", "", "", "", "", ""]);
const havili = new House("HAVILI", true, false, ohara, ["", "", "", "", "", "", "", ""]);
const haylock = new House("HAYLOCK", false, true, jolicoeur, ["", "", "", "", "", "", ""]);
const huang = new House("HUANG", false, true, vanDerReede, ["", "", "", "", "", "", ""]);
const idirissi = new House("IDIRISSI", false, true, ahmedhan, ["", "", "", "", "", "", ""]);
const issako = new House("ISSAKO", false, false, palladino, ["", "", "", "", "", "", "", "", ""]);
const jolicoeur = new House("JOLICOEUR", false, false, delaurante, ["", "", "", "", "", ""]);
const kasabian = new House("KASABIAN", true, false, quijada, ["", "", "", "", "", "", "", ""]);
const krowe = new House("KROWE", false, true, godfrey, ["", "", "", "", "", "", "", "", "", ""]);
const leskai = new House("LESKAI", false, true, jolicoeur, ["", "", "", "", "", "", ""]);
const li = new House("LI", true, true, huang, ["", "", "", "", "", ""]);
const liavaa = new House("LIAVA'A", false, false, vang, ["", "", "", "", "", "", ""]);
const maldonado = new House("MALDONADO", false, false, cronje, ["", "", "", "", "", "", ""]);
const mavoungou = new House("MAVOUNGOU", false, true, faragulski, ["", "", "", "", "", ""]);
const mavros = new House("MAVROS", false, true, cronje, ["", "", "", "", "", "", ""]);
const merovingian = new House("MEROVINGIAN", true, false, liavaa, ["", "", "", "", "", "", ""]);
const nagata = new House("NAGATA", false, false, krowe, ["", "", "", "", "", "", ""]);
const nakatsuomi = new House("NAKA-TSU-OMI", false, true, stJoseph, ["", "", "", "", "", ""]);
const ohara = new House("O'HARA", false, true, salucnar, ["", "", "", "", "", "", ""]);
const ong = new House("ONG", false, true, ragensterne, ["", "", "", "", "", "", ""]);
const orlov = new House("ORLOV", true, true, rybamerc, ["", "", "", "", "", ""]);
const otieno = new House("OTIENO", false, true, etienne, ["", "", "", "", "", "", "", ""]);
const palladino = new House("PALLADINO", true, false, tshireletso, ["", "", "", "", ""]);
const paora = new House("PAORA", false, false, pendergast, ["", "", "", "", "", ""]);
const patenaude = new House("PATENAUDE", false, false, stJoseph, ["", "", "", "", "", "", "", ""]);
const pendergast = new House("PENDERGAST", true, true, palladino, ["", "", "", "", "", ""]);
const phiri = new House("PHIRI", false, true, vidrogotchen, ["", "", "", "", "", ""]);
const quijada = new House("QUIJADA", false, false, figueroa, ["", "", "", "", "", "", "", ""]);
const ragensterne = new House("RAGENSTERNE", false, true, tshireletso, ["", "", "", "", "", "", ""]);
const rashtrakurtha = new House("RASHTRAKURTHA", false, true, havili, ["", "", "", "", "", ""]);
const rybamerc = new House("RYBAMERC", true, false, crassus, ["", "", "", "", "", "", ""]);
const salazar = new House("SALAZAR", false, true, phiri, ["", "", "", "", "", "", ""]);
const salucnar = new House("SALUCNAR", true, false, mavoungou, ["", "", "", "", ""]);
const sharrow = new House("SHARROW", false, false, cappallo, ["", "", "", "", "", "", ""]);
const stJoseph = new House("ST. JOSEPH", true, true, otieno, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const tatlonghari = new House("TATLONGHARI", false, true, cromwell, ["", "", "", "", "", ""]);
const taylor = new House("TAYLOR", false, true, gallig, ["", "", "", "", "", ""]);
const tran = new House("TRAN", false, true, zyma, ["", "", "", "", "", ""]);
const tshireletso = new House("TSHIRELETSO", false, false, idirissi, ["", "", "", "", "", "", ""]);
const vanDerReede = new House("VAN DER REEDE", false, false, arkwright, ["", "", "", "", "", "", ""]);
const vang = new House("VANG", true, true, figueroa, ["", "", "", "", "", ""]);
const vidrogotchen = new House("VIDROGOTCHEN", true, false, merovingian, ["", "", "", "", "", "", ""]);
const waldington = new House("WALDINGTON", false, false, zaitsev, ["", "", "", "", "", "", ""]);
const weirski = new House("WEIRSKI", false, true, rybamerc, ["", "", "", "", "", "", ""]);
const xydias = new House("XYDIAS", false, true, godfrey, ["", "", "", "", "", "", ""]);
const zaitsev = new House("ZAITSEV", false, true, orlov, ["", "", "", "", "", "", ""]);
const zyma = new House("ZYMA", false, false, cromwell, ["", "", "", "", ""]);
const houses = [adakai, ahmedhan, alavonzaro, almufti, arkwright, bennett, beraszafer, blythe, botzami, cappallo, carvalho, castillo, crassus, cromwell, cronje, delaurante, dovorak, eabhacdon, espinosa, etienne, faragulski, figueroa, gallig, godfrey, haryanka, havili, haylock, huang, idirissi, issako, jolicoeur, kasabian, krowe, leskai, li, liavaa, maldonado, mavoungou, mavros, merovingian, nagata, nakatsuomi, ohara, ong, orlov, otieno, palladino, paora, patenaude, pendergast, phiri, quijada, ragensterne, rashtrakurtha, rybamerc, salazar, salucnar, sharrow, stJoseph, tatlonghari, taylor, tran, tshireletso, vanDerReede, vang, vidrogotchen, waldington, weirski, xydias, zaitsev, zyma];