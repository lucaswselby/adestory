class House {
    constructor(name, original, active, founded, people) {
        this._name = name;
        this._original = original;
        this._active = active;
        this._founded = founded;
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
    get founded() {
        return this._founded;
    }
    set founded(founded) {
        this._founded = founded;
    }
    get people() {
        return this._people;
    }
    get colSpan() { // determined by the combined colspan of its children, which are determined by the combined colspan of their children, and so on
        let children = this.founded.filter(house => {return !house.original;});
        if (children.length) {
            return children.reduce((prev, next) => {return prev + next.colSpan;}, 0);
        }
        return 1; // min colspan
    }
}
const eabhacdon = new House("EABHACDON", true, false, [], ["", "", "", "", "", "", ""]);
const tatlonghari = new House("TATLONGHARI", false, true, [], ["", "", "", "", "", ""]);
const zyma = new House("ZYMA", true, false, null, ["", "", "", "", ""]);
const cromwell = new House("CROMWELL", true, true, [zyma, tatlonghari], ["", "", "", "", "", "", ""]);
const botzami = new House("BOTZAMI", true, false, [cromwell], ["", "", "", "", "", "", ""]);
const sharrow = new House("SHARROW", false, false, [], ["", "", "", "", "", "", ""]);
const cappallo = new House("CAPPALLO", false, false, [sharrow], ["", "", "", "", "", "", "", ""]);
const adakai = new House("ADAKAI", false, false, [cappallo], ["", "", "", "", "", "", ""]);
const li = new House("LI", false, true, [], ["", "", "", "", "", ""]);
const huang = new House("HUANG", false, true, [li], ["", "", "", "", "", "", ""]);
const vanDerReede = new House("VAN DER REEDE", false, false, [adakai, huang], ["", "", "", "", "", "", ""]);
const arkwright = new House("ARKWRIGHT", true, false, [botzami, vanDerReede], ["", "", "", "", "", "", "", ""]);
const blythe = new House("BLYTHE", true, true, [arkwright], ["", "", "", "", "", "", "", ""]);
const patenaude = new House("PATENAUDE", true, false, [blythe], ["", "", "", "", "", "", "", ""]);
const nakatsuomi = new House("NAKA-TSU-OMI", false, true, [], ["", "", "", "", "", ""]);
const stJoseph = new House("ST. JOSEPH", true, true, [patenaude, nakatsuomi], ["", "", "", "", "", "", "", "", "", "", "", ""]);
const otieno = new House("OTIENO", true, true, [stJoseph], ["", "", "", "", "", "", "", ""]);
const etienne = new House("ETIENNE", true, true, [otieno], ["", "", "", "", "", "", ""]);
const haryanka = new House("HARYANKA", false, true, [], ["", "", "", "", "", "", "", ""]);
const taylor = new House("TAYLOR", false, true, [], ["", "", "", "", "", ""]);
const gallig = new House("GALLIG", false, true, [haryanka, taylor], ["", "", "", "", "", "", ""]);
const almufti = new House("AL-MUFTI", true, false, [etienne, gallig], ["", "", "", "", "", "", "", ""]);
const alavonzaro = new House("ALAVONZARO", false, true, [], ["", "", "", "", "", "", ""]);
const beraszafer = new House("BERASZAFER", false, false, [], ["", "", "", "", "", "", ""]);
const nagata = new House("NAGATA", false, false, [], ["", "", "", "", "", "", ""]);
const krowe = new House("KROWE", false, true, [nagata], ["", "", "", "", "", "", "", "", "", ""]);
const xydias = new House("XYDIAS", false, true, [], ["", "", "", "", "", "", ""]);
const godfrey = new House("GODFREY", false, false, [beraszafer, krowe, xydias], ["", "", "", "", "", "", "", ""]);
const paora = new House("PAORA", false, false, [godfrey], ["", "", "", "", "", ""]);
const pendergast = new House("PENDERGAST", true, true, [almufti, alavonzaro, paora], ["", "", "", "", "", ""]);
const dovorak = new House("DOVORAK", false, true, [], ["", "", "", "", "", "", "", "", "", "", ""]);
const espinosa = new House("ESPINOSA", false, false, [dovorak], ["", "", "", "", "", "", "", ""]);
const rashtrakurtha = new House("RASHTRAKURTHA", false, true, [], ["", "", "", "", "", ""]);
const havili = new House("HAVILI", false, false, [rashtrakurtha], ["", "", "", "", "", "", "", ""]);
const ohara = new House("O'HARA", false, true, [havili], ["", "", "", "", "", "", ""]);
const salucnar = new House("SALUCNAR", false, false, [ohara], ["", "", "", "", ""]);
const mavoungou = new House("MAVOUNGOU", false, true, [espinosa, salucnar], ["", "", "", "", "", ""]);
const faragulski = new House("FARAGULSKI", false, false, [mavoungou], ["", "", "", "", "", ""]);
const issako = new House("ISSAKO", false, false, [], ["", "", "", "", "", "", "", "", ""]);
const palladino = new House("PALLADINO", true, false, [pendergast, faragulski], ["", "", "", "", ""]);
const ong = new House("ONG", false, true, [], ["", "", "", "", "", "", ""]);
const ragensterne = new House("RAGENSTERNE", false, true, [ong], ["", "", "", "", "", "", ""]);
const tshireletso = new House("TSHIRELETSO", true, false, [palladino, ragensterne], ["", "", "", "", "", "", ""]);
const idirissi = new House("IDIRISSI", true, true, [tshireletso], ["", "", "", "", "", "", ""]);
const ahmedhan = new House("AHMEDHAN", true, true, [idirissi], ["", "", "", "", "", ""]);
const haylock = new House("HAYLOCK", false, true, [], ["", "", "", "", "", "", ""]);
const leskai = new House("LESKAI", false, true, [], ["", "", "", "", "", "", ""]);
const jolicoeur = new House("JOLICOEUR", false, false, [haylock, leskai], ["", "", "", "", "", ""]);
const delaurante = new House("DeLAURANTE", true, true, [ahmedhan, jolicoeur], ["", "", "", "", "", "", "", "", ""]);
const bennett = new House("BENNETT", false, true, [], ["", "", "", "", "", "", "", "", "", "", "", ""]);
const salazar = new House("SALAZAR", false, true, [], ["", "", "", "", "", "", ""]);
const phiri = new House("PHIRI", false, true, [salazar], ["", "", "", "", "", ""]);
const vidrogotchen = new House("VIDROGOTCHEN", false, false, [phiri], ["", "", "", "", "", "", ""]);
const merovingian = new House("MEROVINGIAN", true, false, [delaurante, bennett, vidrogotchen], ["", "", "", "", "", "", ""]);
const liavaa = new House("LIAVA'A", true, false, [merovingian], ["", "", "", "", "", "", ""]);
const vang = new House("VANG", true, true, [liavaa, issako], ["", "", "", "", "", ""]);
const waldington = new House("WALDINGTON", false, false, [], ["", "", "", "", "", "", ""]);
const zaitsev = new House("ZAITSEV", false, true, [waldington], ["", "", "", "", "", "", ""]);
const orlov = new House("ORLOV", false, true, [zaitsev], ["", "", "", "", "", ""]);
const weirski = new House("WEIRSKI", false, true, [], ["", "", "", "", "", "", ""]);
const rybamerc = new House("RYBAMERC", false, false, [orlov, weirski], ["", "", "", "", "", "", ""]);
const crassus = new House("CRASSUS", false, true, [rybamerc], ["", "", "", "", "", ""]);
const castillo = new House("CASTILLO", false, true, [crassus], ["", "", "", "", "", ""]);
const maldonado = new House("MALDONADO", false, false, [], ["", "", "", "", "", "", ""]);
const mavros = new House("MAVROS", false, true, [], ["", "", "", "", "", "", ""]);
const cronje = new House("CRONJE", false, false, [castillo, maldonado, mavros], ["", "", "", "", "", "", ""]);
const kasabian = new House("KASABIAN", false, false, [], ["", "", "", "", "", "", "", ""]);
const quijada = new House("QUIJADA", false, false, [cronje, kasabian], ["", "", "", "", "", "", "", ""]);
const figueroa = new House("FIGUEROA", true, true, [vang, quijada], ["", "", "", "", "", ""]);
const carvalho = new House("CARVALHO", true, true, [figueroa], ["", "", "", "", "", ""]);
const tran = new House("TRAN", true, true, [carvalho], ["", "", "", "", "", ""]);
zyma.founded = [tran];
const houses = [adakai, ahmedhan, alavonzaro, almufti, arkwright, bennett, beraszafer, blythe, botzami, cappallo, carvalho, castillo, crassus, cromwell, cronje, delaurante, dovorak, eabhacdon, espinosa, etienne, faragulski, figueroa, gallig, godfrey, haryanka, havili, haylock, huang, idirissi, issako, jolicoeur, kasabian, krowe, leskai, li, liavaa, maldonado, mavoungou, mavros, merovingian, nagata, nakatsuomi, ohara, ong, orlov, otieno, palladino, paora, patenaude, pendergast, phiri, quijada, ragensterne, rashtrakurtha, rybamerc, salazar, salucnar, sharrow, stJoseph, tatlonghari, taylor, tran, tshireletso, vanDerReede, vang, vidrogotchen, waldington, weirski, xydias, zaitsev, zyma];
const other = new House("OTHER", false, true, [], []);

// check each house for multiple parents
let singleParentHouses = [];
houses.forEach(parentHouse => {
    parentHouse.founded.forEach(childHouse => {
        if (singleParentHouses.includes(childHouse)) alert(`${childHouse} has multiple parent houses.`);
        else singleParentHouses.push(childHouse);
    });
});