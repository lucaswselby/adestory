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
    set foundedBy(foundedBy) {
        this._foundedBy = foundedBy;
    }
    get people() {
        return this._people;
    }
}
const ahmedhan = new House("AHMEDHAN", true, true, null, ["", "", "", "", "", ""]);
const idirissi = new House("IDIRISSI", true, true, ahmedhan, ["", "", "", "", "", "", ""]);
const tshireletso = new House("TSHIRELETSO", true, false, idirissi, ["", "", "", "", "", "", ""]);
const palladino = new House("PALLADINO", true, false, tshireletso, ["", "", "", "", ""]);
const pendergast = new House("PENDERGAST", true, true, palladino, ["", "", "", "", "", ""]);
const almufti = new House("AL-MUFTI", true, false, pendergast, ["", "", "", "", "", "", "", ""]);
const etienne = new House("ETIENNE", true, true, almufti, ["", "", "", "", "", "", ""]);
const otieno = new House("OTIENO", true, true, etienne, ["", "", "", "", "", "", "", ""]);
const stJoseph = new House("ST. JOSEPH", true, true, otieno, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const patenaude = new House("PATENAUDE", true, false, stJoseph, ["", "", "", "", "", "", "", ""]);
const blythe = new House("BLYTHE", true, true, patenaude, ["", "", "", "", "", "", "", ""]);
const arkwright = new House("ARKWRIGHT", true, false, blythe, ["", "", "", "", "", "", "", ""]);
const botzami = new House("BOTZAMI", true, false, arkwright, ["", "", "", "", "", "", ""]);
const cromwell = new House("CROMWELL", true, true, botzami, ["", "", "", "", "", "", ""]);
const zyma = new House("ZYMA", true, false, cromwell, ["", "", "", "", ""]);
const tran = new House("TRAN", true, true, zyma, ["", "", "", "", "", ""]);
const carvalho = new House("CARVALHO", true, true, tran, ["", "", "", "", "", ""]);
const figueroa = new House("FIGUEROA", true, true, carvalho, ["", "", "", "", "", ""]);
const vang = new House("VANG", true, true, figueroa, ["", "", "", "", "", ""]);
const liavaa = new House("LIAVA'A", true, false, vang, ["", "", "", "", "", "", ""]);
const merovingian = new House("MEROVINGIAN", true, false, liavaa, ["", "", "", "", "", "", ""]);
const delaurante = new House("DeLAURANTE", true, true, merovingian, ["", "", "", "", "", "", "", "", ""]);
ahmedhan.foundedBy = delaurante;
const vanDerReede = new House("VAN DER REEDE", false, false, arkwright, ["", "", "", "", "", "", ""]);
const adakai = new House("ADAKAI", false, false, vanDerReede, ["", "", "", "", "", "", ""]);
const alavonzaro = new House("ALAVONZARO", false, true, pendergast, ["", "", "", "", "", "", ""]);
const bennett = new House("BENNETT", false, true, merovingian, ["", "", "", "", "", "", "", "", "", "", "", ""]);
const paora = new House("PAORA", false, false, pendergast, ["", "", "", "", "", ""]);
const godfrey = new House("GODFREY", false, false, paora, ["", "", "", "", "", "", "", ""]);
const beraszafer = new House("BERASZAFER", false, false, godfrey, ["", "", "", "", "", "", ""]);
const cappallo = new House("CAPPALLO", false, false, adakai, ["", "", "", "", "", "", "", ""]);
const quijada = new House("QUIJADA", false, false, figueroa, ["", "", "", "", "", "", "", ""]);
const cronje = new House("CRONJE", false, false, quijada, ["", "", "", "", "", "", ""]);
const castillo = new House("CASTILLO", false, true, cronje, ["", "", "", "", "", ""]);
const crassus = new House("CRASSUS", false, true, castillo, ["", "", "", "", "", ""]);
const faragulski = new House("FARAGULSKI", false, false, palladino, ["", "", "", "", "", ""]);
const mavoungou = new House("MAVOUNGOU", false, true, faragulski, ["", "", "", "", "", ""]);
const espinosa = new House("ESPINOSA", false, false, mavoungou, ["", "", "", "", "", "", "", ""]);
const dovorak = new House("DOVORAK", false, true, espinosa, ["", "", "", "", "", "", "", "", "", "", ""]);
const eabhacdon = new House("EABHACDON", false, false, null, ["", "", "", "", "", "", ""]);
const gallig = new House("GALLIG", false, true, almufti, ["", "", "", "", "", "", ""]);
const haryanka = new House("HARYANKA", false, true, gallig, ["", "", "", "", "", "", "", ""]);
const salucnar = new House("SALUCNAR", false, false, mavoungou, ["", "", "", "", ""]);
const ohara = new House("O'HARA", false, true, salucnar, ["", "", "", "", "", "", ""]);
const havili = new House("HAVILI", false, false, ohara, ["", "", "", "", "", "", "", ""]);
const jolicoeur = new House("JOLICOEUR", false, false, delaurante, ["", "", "", "", "", ""]);
const haylock = new House("HAYLOCK", false, true, jolicoeur, ["", "", "", "", "", "", ""]);
const huang = new House("HUANG", false, true, vanDerReede, ["", "", "", "", "", "", ""]);
const issako = new House("ISSAKO", false, false, palladino, ["", "", "", "", "", "", "", "", ""]);
const kasabian = new House("KASABIAN", false, false, quijada, ["", "", "", "", "", "", "", ""]);
const krowe = new House("KROWE", false, true, godfrey, ["", "", "", "", "", "", "", "", "", ""]);
const leskai = new House("LESKAI", false, true, jolicoeur, ["", "", "", "", "", "", ""]);
const li = new House("LI", false, true, huang, ["", "", "", "", "", ""]);
const maldonado = new House("MALDONADO", false, false, cronje, ["", "", "", "", "", "", ""]);
const mavros = new House("MAVROS", false, true, cronje, ["", "", "", "", "", "", ""]);
const nagata = new House("NAGATA", false, false, krowe, ["", "", "", "", "", "", ""]);
const nakatsuomi = new House("NAKA-TSU-OMI", false, true, stJoseph, ["", "", "", "", "", ""]);
const ragensterne = new House("RAGENSTERNE", false, true, tshireletso, ["", "", "", "", "", "", ""]);
const ong = new House("ONG", false, true, ragensterne, ["", "", "", "", "", "", ""]);
const rybamerc = new House("RYBAMERC", false, false, crassus, ["", "", "", "", "", "", ""]);
const orlov = new House("ORLOV", false, true, rybamerc, ["", "", "", "", "", ""]);
const vidrogotchen = new House("VIDROGOTCHEN", false, false, merovingian, ["", "", "", "", "", "", ""]);
const phiri = new House("PHIRI", false, true, vidrogotchen, ["", "", "", "", "", ""]);
const rashtrakurtha = new House("RASHTRAKURTHA", false, true, havili, ["", "", "", "", "", ""]);
const salazar = new House("SALAZAR", false, true, phiri, ["", "", "", "", "", "", ""]);
const sharrow = new House("SHARROW", false, false, cappallo, ["", "", "", "", "", "", ""]);
const tatlonghari = new House("TATLONGHARI", false, true, cromwell, ["", "", "", "", "", ""]);
const taylor = new House("TAYLOR", false, true, gallig, ["", "", "", "", "", ""]);
const zaitsev = new House("ZAITSEV", false, true, orlov, ["", "", "", "", "", "", ""]);
const waldington = new House("WALDINGTON", false, false, zaitsev, ["", "", "", "", "", "", ""]);
const weirski = new House("WEIRSKI", false, true, rybamerc, ["", "", "", "", "", "", ""]);
const xydias = new House("XYDIAS", false, true, godfrey, ["", "", "", "", "", "", ""]);
const houses = [adakai, ahmedhan, alavonzaro, almufti, arkwright, bennett, beraszafer, blythe, botzami, cappallo, carvalho, castillo, crassus, cromwell, cronje, delaurante, dovorak, eabhacdon, espinosa, etienne, faragulski, figueroa, gallig, godfrey, haryanka, havili, haylock, huang, idirissi, issako, jolicoeur, kasabian, krowe, leskai, li, liavaa, maldonado, mavoungou, mavros, merovingian, nagata, nakatsuomi, ohara, ong, orlov, otieno, palladino, paora, patenaude, pendergast, phiri, quijada, ragensterne, rashtrakurtha, rybamerc, salazar, salucnar, sharrow, stJoseph, tatlonghari, taylor, tran, tshireletso, vanDerReede, vang, vidrogotchen, waldington, weirski, xydias, zaitsev, zyma];