const STAB = 1.25;

var pokeDropdown1 = document.getElementById("pokes1");
var pokeDropdown2 = document.getElementById("pokes2");

var primaryTypeDropdown1 = document.getElementById("primaryType1");
var secondaryTypeDropdown1 = document.getElementById("secondaryType1");

var primaryTypeDropdown2 = document.getElementById("primaryType2");
var secondaryTypeDropdown2 = document.getElementById("secondaryType2");

var abilityDropdown1 = document.getElementById("ability1");
var abilityDropdown2 = document.getElementById("ability2");

let repeating1 = document.getElementById("repeating1");
let repeating2 = document.getElementById("repeating2");

let owol1 = document.getElementById("owol1");
let owol2 = document.getElementById("owol2");

var moveOneDropdown1 = document.getElementById("moveOne1")
var moveOneDropdown2 = document.getElementById("moveOne2");
var moveTwoDropdown1 = document.getElementById("moveTwo1")
var moveTwoDropdown2 = document.getElementById("moveTwo2");
var moveThreeDropdown1 = document.getElementById("moveThree1")
var moveThreeDropdown2 = document.getElementById("moveThree2");
var moveFourDropdown1 = document.getElementById("moveFour1")
var moveFourDropdown2 = document.getElementById("moveFour2");

let moveOnePower1 = document.getElementById("moveOnePower1");
let moveTwoPower1 = document.getElementById("moveTwoPower1");
let moveThreePower1 = document.getElementById("moveThreePower1");
let moveFourPower1 = document.getElementById("moveFourPower1");
let moveOnePower2 = document.getElementById("moveOnePower2");
let moveTwoPower2 = document.getElementById("moveTwoPower2");
let moveThreePower2 = document.getElementById("moveThreePower2");
let moveFourPower2 = document.getElementById("moveFourPower2");

let moveOneType1 = document.getElementById("moveOneType1");
let moveTwoType1 = document.getElementById("moveTwoType1");
let moveThreeType1 = document.getElementById("moveThreeType1");
let moveFourType1 = document.getElementById("moveFourType1");
let moveOneType2 = document.getElementById("moveOneType2");
let moveTwoType2 = document.getElementById("moveTwoType2");
let moveThreeType2 = document.getElementById("moveThreeType2");
let moveFourType2 = document.getElementById("moveFourType2");

let moveOneMR1 = document.getElementById("moveOneMR1");
let moveTwoMR1 = document.getElementById("moveTwoMR1");
let moveThreeMR1 = document.getElementById("moveThreeMR1");
let moveFourMR1 = document.getElementById("moveFourMR1");
let moveOneMR2 = document.getElementById("moveOneMR2");
let moveTwoMR2 = document.getElementById("moveTwoMR2");
let moveThreeMR2 = document.getElementById("moveThreeMR2");
let moveFourMR2 = document.getElementById("moveFourMR2");

let moveOneLbl1 = document.getElementById("moveOneLbl1");
let moveTwoLbl1 = document.getElementById("moveTwoLbl1");
let moveThreeLbl1 = document.getElementById("moveThreeLbl1");
let moveFourLbl1 = document.getElementById("moveFourLbl1");
let moveOneDmg1 = document.getElementById("moveOneDmg1");
let moveTwoDmg1 = document.getElementById("moveTwoDmg1");
let moveThreeDmg1 = document.getElementById("moveThreeDmg1");
let moveFourDmg1 = document.getElementById("moveFourDmg1");

let moveOneLbl2 = document.getElementById("moveOneLbl2");
let moveTwoLbl2 = document.getElementById("moveTwoLbl2");
let moveThreeLbl2 = document.getElementById("moveThreeLbl2");
let moveFourLbl2 = document.getElementById("moveFourLbl2");
let moveOneDmg2 = document.getElementById("moveOneDmg2");
let moveTwoDmg2 = document.getElementById("moveTwoDmg2");
let moveThreeDmg2 = document.getElementById("moveThreeDmg2");
let moveFourDmg2 = document.getElementById("moveFourDmg2");

let moveOneCrit1 = document.getElementById("moveOneCrit1");
let moveTwoCrit1 = document.getElementById("moveTwoCrit1");
let moveThreeCrit1 = document.getElementById("moveThreeCrit1");
let moveFourCrit1 = document.getElementById("moveFourCrit1");
let moveOneCrit2 = document.getElementById("moveOneCrit2");
let moveTwoCrit2 = document.getElementById("moveTwoCrit2");
let moveThreeCrit2 = document.getElementById("moveThreeCrit2");
let moveFourCrit2 = document.getElementById("moveFourCrit2");

let moveOneHits1 = document.getElementById("moveOneHits1");
let moveTwoHits1 = document.getElementById("moveTwoHits1");
let moveThreeHits1 = document.getElementById("moveThreeHits1");
let moveFourHits1 = document.getElementById("moveFourHits1");
let moveOneHits2 = document.getElementById("moveOneHits2");
let moveTwoHits2 = document.getElementById("moveTwoHits2");
let moveThreeHits2 = document.getElementById("moveThreeHits2");
let moveFourHits2 = document.getElementById("moveFourHits2");

let moveOneElemental1 = document.getElementById("moveOneElemental1");
let moveTwoElemental1 = document.getElementById("moveTwoElemental1");
let moveThreeElemental1 = document.getElementById("moveThreeElemental1");
let moveFourElemental1 = document.getElementById("moveFourElemental1");
let moveOneElemental2 = document.getElementById("moveOneElemental2");
let moveTwoElemental2 = document.getElementById("moveTwoElemental2");
let moveThreeElemental2 = document.getElementById("moveThreeElemental2");
let moveFourElemental2 = document.getElementById("moveFourElemental2");

let moveOneSwarm1 = document.getElementById("moveOneSwarm1");
let moveTwoSwarm1 = document.getElementById("moveTwoSwarm1");
let moveThreeSwarm1 = document.getElementById("moveThreeSwarm1");
let moveFourSwarm1 = document.getElementById("moveFourSwarm1");
let moveOneSwarm2 = document.getElementById("moveOneSwarm2");
let moveTwoSwarm2 = document.getElementById("moveTwoSwarm2");
let moveThreeSwarm2 = document.getElementById("moveThreeSwarm2");
let moveFourSwarm2 = document.getElementById("moveFourSwarm2");

let moveOneSnowball1 = document.getElementById("moveOneSnowball1");
let moveTwoSnowball1 = document.getElementById("moveTwoSnowball1");
let moveThreeSnowball1 = document.getElementById("moveThreeSnowball1");
let moveFourSnowball1 = document.getElementById("moveFourSnowball1");
let moveOneSnowball2 = document.getElementById("moveOneSnowball2");
let moveTwoSnowball2 = document.getElementById("moveTwoSnowball2");
let moveThreeSnowball2 = document.getElementById("moveThreeSnowball2");
let moveFourSnowball2 = document.getElementById("moveFourSnowball2");

let baseHP1 = document.getElementById("baseHP1");
let baseHP2 = document.getElementById("baseHP2");
let baseAtk1 = document.getElementById("baseAtk1");
let baseAtk2 = document.getElementById("baseAtk2");
let baseDef1 = document.getElementById("baseDef1");
let baseDef2 = document.getElementById("baseDef2");
let baseAtkR1 = document.getElementById("baseAtkR1");
let baseAtkR2 = document.getElementById("baseAtkR2");
let baseDefR1 = document.getElementById("baseDefR1");
let baseDefR2 = document.getElementById("baseDefR2");
let baseSpd1 = document.getElementById("baseSpd1");
let baseSpd2 = document.getElementById("baseSpd2");

let hpEV1 = document.getElementById("HPEV1");
let atkEV1 = document.getElementById("atkEV1");
let defEV1 = document.getElementById("defEV1");
let atkREV1 = document.getElementById("atkREV1");
let defREV1 = document.getElementById("defREV1");
let spdEV1 = document.getElementById("spdEV1");

let hpEV2 = document.getElementById("HPEV2");
let atkEV2 = document.getElementById("atkEV2");
let defEV2 = document.getElementById("defEV2");
let atkREV2 = document.getElementById("atkREV2");
let defREV2 = document.getElementById("defREV2");
let spdEV2 = document.getElementById("spdEV2");

let statHP1 = document.getElementById("statHP1");
let statHP2 = document.getElementById("statHP2");
let statAtk1 = document.getElementById("statAtk1");
let statAtk2 = document.getElementById("statAtk2");
let statDef1 = document.getElementById("statDef1");
let statDef2 = document.getElementById("statDef2");
let statAtkR1 = document.getElementById("statAtkR1");
let statAtkR2 = document.getElementById("statAtkR2");
let statDefR1 = document.getElementById("statDefR1");
let statDefR2 = document.getElementById("statDefR2");
let statSpd1 = document.getElementById("statSpd1");
let statSpd2 = document.getElementById("statSpd2");

let atkStages1 = document.getElementById("atkStages1");
let defStages1 = document.getElementById("defStages1");
let atkRStages1 = document.getElementById("atkRStages1");
let defRStages1 = document.getElementById("defRStages1");
let spdStages1 = document.getElementById("spdStages1");

let atkStages2 = document.getElementById("atkStages2");
let defStages2 = document.getElementById("defStages2");
let atkRStages2 = document.getElementById("atkRStages2");
let defRStages2 = document.getElementById("defRStages2");
let spdStages2 = document.getElementById("spdStages2");

let spdStar1 = document.getElementById("spdStar1");
let spdStar2 = document.getElementById("spdStar2");

let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");

let stars1 = document.getElementById("stars1");
let stars2 = document.getElementById("stars2");

let nat1Mod1 = document.getElementById("nat1Mod1");
let nat1Mod2 = document.getElementById("nat1Mod2");
let nat2Mod1 = document.getElementById("nat2Mod1");
let nat2Mod2 = document.getElementById("nat2Mod2");

let immuneAbilityBoost1 = document.getElementById("immuneBoost1");
let immuneAbilityBoost2 = document.getElementById("immuneBoost2");

let rain = document.getElementById("rain");
let acidRain = document.getElementById("acidRain");
let chocolateRain = document.getElementById("chocolateRain");
let sandstorm = document.getElementById("sandstorm");

let darkExpansion = document.getElementById("darkExpansion");

let lightOrb = document.getElementById("lightOrb");

let iceTrap1 = document.getElementById("iceTrap1");
let iceTrap2 = document.getElementById("iceTrap2");

let pylon1 = document.getElementById("pylon1");
let pylon2 = document.getElementById("pylon2");
let pylonCalc1 = document.getElementById("pylonCalc1");
let pylonCalc2 = document.getElementById("pylonCalc2");

let halfIce1 = document.getElementById("halfIce1");
let halfStyle1 = document.getElementById("halfStyle1");
let halfIce2 = document.getElementById("halfIce2");
let halfStyle2 = document.getElementById("halfStyle2");

let leftBarb0 = document.getElementById("leftBarb0");
let leftBarb1 = document.getElementById("leftBarb1");
let leftBarb2 = document.getElementById("leftBarb2");
let leftBarb3 = document.getElementById("leftBarb3");
let rightBarb0 = document.getElementById("rightBarb0");
let rightBarb1 = document.getElementById("rightBarb1");
let rightBarb2 = document.getElementById("rightBarb2");
let rightBarb3 = document.getElementById("rightBarb3");

let barbs = [0,0];

let wall1 = document.getElementById("wall1");
let wall2 = document.getElementById("wall2");

let shield1 = document.getElementById("shield1");
let shield2 = document.getElementById("shield2");

let shale1 = document.getElementById("shale1");
let shale2 = document.getElementById("shale2");

let seasoned1 = document.getElementById("seasoned1");
let seasoned2 = document.getElementById("seasoned2");

let enteredBtl1 = document.getElementById("enteredBtl1");
let enteredBtl2 = document.getElementById("enteredBtl2");

let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let diseased1 = document.getElementById("diseased1");
let diseased2 = document.getElementById("diseased2");

let gender1 = document.getElementById("gender1");
let gender2 = document.getElementById("gender2");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");

let helmet1 = document.getElementById("helmet1");
let helmet2 = document.getElementById("helmet2");

let amulet1 = document.getElementById("amulet1");
let amulet2 = document.getElementById("amulet2");

let artifact1 = document.getElementById("artifact1");
let artifact2 = document.getElementById("artifact2");

let sapPlant1 = document.getElementById("sapPlant1");
let sapPlant2 = document.getElementById("sapPlant2");

let pestilence1 = document.getElementById("pestilence1");
let pestilence2 = document.getElementById("pestilence2");

let quicksand1 = document.getElementById("quicksand1");
let quicksand2 = document.getElementById("quicksand2");

let buzzolen1 = document.getElementById("buzzolen1");
let buzzolen2 = document.getElementById("buzzolen2");

let sorrow1 = document.getElementById("sorrow1");
let sorrow2 = document.getElementById("sorrow2");

let softWater1 = document.getElementById("softWater1");
let softWater2 = document.getElementById("softWater2");

let guardian1 = document.getElementById("guardian1");
let guardian2 = document.getElementById("guardian2");

let tagTeam1 = document.getElementById("tagTeam1");
let tagTeam2 = document.getElementById("tagTeam2");

let basicCare1 = document.getElementById("basicCare1");
let basicCare2 = document.getElementById("basicCare2");

let archmage1 = document.getElementById("archmage1");
let archmage2 = document.getElementById("archmage2");
let lipid1 = document.getElementById("lipid1");
let lipid2 = document.getElementById("lipid2");

let currentHP1 = document.getElementById("currentHP1");
let currentHP2 = document.getElementById("currentHP2");

let totalHP1 = document.getElementById("totalHP1");
let totalHP2 = document.getElementById("totalHP2");

let percentHP1 = document.getElementById("percentHP1");
let percentHP2 = document.getElementById("percentHP2");

let singleDouble = document.getElementById("singleDouble");
let levelCheck = document.getElementById("levelCheck");
levelCheck.value = "Level 50";

let firstLoomian;
let hp1;
let atk1;
let def1;
let atkR1;
let defR1;
let spd1;
let tempAbility1;
let tempGender1;
let equipment1;

let secondLoomian;
let hp2;
let atk2;
let def2;
let atkR2;
let defR2;
let spd2;
let tempAbility2;
let tempGender2;
let equipment2;

let adjustmentCount = 0;
let trueStats1;
let trueStats2;

let darkMode = document.getElementById("darkMode");
$(document).ready(load);

//WORK IN PROGRESS ----------------------------------------------
function toggleDarkMode() {
    if (darkMode.checked) {
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "white";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#424242";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "#757575";
            allInputs[j].style.color = "white";
            allInputs[j].style.border = "1px solid #AAAAAA";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "#545454";
            allSelects[k].style.color = "white";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#545454";
            radioLabels[p].style.color = "white";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#545454";
            resultLabels[q].style.color = "white";
            resultLabels[q].style.border = "1px solid #AAAAAA";
        }
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#f1f4f9";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "white";
            allInputs[j].style.color = "black";
            allInputs[j].style.borderStyle = "inset";
            allInputs[j].style.borderColor = "initial";
            allInputs[j].style.borderWidth = "2px";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "white";
            allSelects[k].style.color = "black";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#e9e9e9";
            radioLabels[p].style.color = "#555555";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#e9e9e9";
            resultLabels[q].style.color = "#555555";
            resultLabels[q].style.border = "1px solid aaa";
        }
    }
}

function load() {
    loadDropdowns();
    if (document.cookie != "") {
        let seenChangelongCookie = getCookie("changelog2").substring(11);
        let darkModeCookie = getCookie("darkMode").substring(9);
        if (seenChangelongCookie != "true") {
            alert(changelog);
            document.cookie = "changelog2=true";
        }
        if (darkModeCookie == "true") {
            darkMode.click();
        }

        try {
            let decoded = pako.inflate(atob(localStorage.getItem("setData")), { to: "string" });
            let data = JSON.parse(decoded);
            let newSets = [];

            for (let set in data) {
                newSets.push(data[set]);
                addSet(newSets[newSets.length - 1]);
            }
        } catch (err) {

        }
    }

    console.log(document.cookie);

    loadSets();
    update();


    for (let i = 0; i < builtInSets.length; i++) {
        //console.log(builtInSets[i]);
        addSet(builtInSets[i], true);
    }

    currentHP1.addEventListener("keyup", updatePercent);
    currentHP2.addEventListener("keyup", updatePercent);

    percentHP1.addEventListener("keyup", updateNumber);
    percentHP2.addEventListener("keyup", updateNumber);

    currentHP1.addEventListener("change", update);
    currentHP2.addEventListener("change", update);

    percentHP1.addEventListener("change", update);
    percentHP2.addEventListener("change", update);

    currentHP1.value = hp1;
    currentHP2.value = hp2;
    updatePercent();
    update();
}

function saveCookie() {
    let json = JSON.stringify(sets);
    let encoded = pako.deflate(json, { to: "string" });

    localStorage.setItem("setData", btoa(encoded));

    document.cookie = "changelog2=true; expires=Mon, 1 Jan 2025 12:00:00 UTC";
    document.cookie = "changelog1=true; expires=Mon, 1 Jan 2000 12:00:00 UTC";

    if (darkMode.checked) {
        document.cookie = "darkMode=true; expires=Mon, 1 Jan 2025 12:00:00 UTC"
    }
    else {
        document.cookie = "darkMode=false; expires=Mon, 1 Jan 2025 12:00:00 UTC";
    }
}

function getCookie(name) {
    let cook = document.cookie.split("; ");

    for (let i = 0; i < cook.length; i++) {
        let line = cook[i];
        if (line.indexOf(name + "=") != -1) {
            return line;
        }
    }
    return "";
}
function loadDropdowns() {
    let moveNames = [];
    let helmetNames = [];
    let amuletNames = [];
    let artifactNames = [];

    abilities.sort();
    items.sort();

    for (let loom in loomians) {
        let optG1 = document.createElement("optgroup");
        optG1.label = loomians[loom].name;
        pokeDropdown1.appendChild(optG1);
        optG1.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown1.options[pokeDropdown1.options.length - 1].set = makeBlankSet(loomians[loom].name);

        let optG2 = document.createElement("optgroup");
        optG2.label = loomians[loom].name;
        pokeDropdown2.appendChild(optG2);
        optG2.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown2.options[pokeDropdown2.options.length - 1].set = makeBlankSet(loomians[loom].name)
    }

    for (let type in types) {
        let capitalized = capitalizeFirstLetter(type);
        primaryTypeDropdown1.options[primaryTypeDropdown1.options.length] = new Option(capitalized);
        primaryTypeDropdown2.options[primaryTypeDropdown2.options.length] = new Option(capitalized);

        secondaryTypeDropdown1.options[secondaryTypeDropdown1.options.length] = new Option(capitalized);
        secondaryTypeDropdown2.options[secondaryTypeDropdown2.options.length] = new Option(capitalized);
    }

    for (let ability in abilities) {
        abilityDropdown1.options[abilityDropdown1.options.length] = new Option(abilities[ability]);
        abilityDropdown2.options[abilityDropdown2.options.length] = new Option(abilities[ability]);
    }

    for (let move in moves) {
        moveNames.push(moves[move].name);
    }

    for (let item in items) {
        item1.options[item1.options.length] = new Option(items[item]);
        item2.options[item2.options.length] = new Option(items[item]);
    }

    for (let helmet in helmets) {
        helmetNames.push(helmets[helmet].name);
    }

    for (let amulet in amulets) {
        amuletNames.push(amulets[amulet].name);
    }

    for (let artifact in artifacts) {
        artifactNames.push(artifacts[artifact].name);
    }

    moveNames.sort();
    helmetNames.sort();
    amuletNames.sort();
    artifactNames.sort();

    for (let move in moveNames) {
        moveOneDropdown1.options[moveOneDropdown1.options.length] = new Option(moveNames[move]);
        moveOneDropdown2.options[moveOneDropdown2.options.length] = new Option(moveNames[move]);
        moveTwoDropdown1.options[moveTwoDropdown1.options.length] = new Option(moveNames[move]);
        moveTwoDropdown2.options[moveTwoDropdown2.options.length] = new Option(moveNames[move]);
        moveThreeDropdown1.options[moveThreeDropdown1.options.length] = new Option(moveNames[move]);
        moveThreeDropdown2.options[moveThreeDropdown2.options.length] = new Option(moveNames[move]);
        moveFourDropdown1.options[moveFourDropdown1.options.length] = new Option(moveNames[move]);
        moveFourDropdown2.options[moveFourDropdown2.options.length] = new Option(moveNames[move]);
    }
    let newEquip;
    for (let helmet in helmetNames) {
        newEquip = helmet1.options[helmet1.options.length] = new Option(helmetNames[helmet]);
        for (const [key, value] of Object.entries(helmets[helmetNames[helmet].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);
        newEquip = helmet2.options[helmet2.options.length] = new Option(helmetNames[helmet]);
        for (const [key, value] of Object.entries(helmets[helmetNames[helmet].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);  
    }
    for (let amulet in amuletNames) {
        newEquip = amulet1.options[amulet1.options.length] = new Option(amuletNames[amulet]);
        for (const [key, value] of Object.entries(amulets[amuletNames[amulet].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);
        newEquip = amulet2.options[amulet2.options.length] = new Option(amuletNames[amulet]);
        for (const [key, value] of Object.entries(amulets[amuletNames[amulet].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);  
    }
    for (let artifact in artifactNames) {
        newEquip = artifact1.options[artifact1.options.length] = new Option(artifactNames[artifact]);
        for (const [key, value] of Object.entries(artifacts[artifactNames[artifact].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);
        newEquip = artifact2.options[artifact2.options.length] = new Option(artifactNames[artifact]);
        for (const [key, value] of Object.entries(artifacts[artifactNames[artifact].toLowerCase()])) {
            if (!(isNaN(value)) && value != 0) newEquip.title += " " + capitalizeFirstLetter(key) + ":" + " " + value + ",";
        }
        newEquip.title = newEquip.title.slice(0,-1);
    }
}

function findOptgroup(sel, key) {
    for (let child in sel.childNodes) {
        if (sel.childNodes[child].label == key) {
            return sel.childNodes[child];
        }
    }
}

function update(updatePower = false, updateBaseStats = false) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    document.getElementById("loom1Info").innerHTML = firstLoom.name + "'s moves (select one for more info)";
    document.getElementById("loom2Info").innerHTML = secondLoom.name + "'s moves (select one for more info)";

    if (updateBaseStats) loadBaseStats();
    loadStats();
    firstLoomian = firstLoom;
    secondLoomian = secondLoom;

    totalHP1.innerHTML = hp1;
    totalHP2.innerHTML = hp2;

    currentHP1.max = hp1;
    currentHP2.max = hp2;

    (currentHP1.value > hp1 ? currentHP1.value = hp1 : null);
    (currentHP2.value > hp2 ? currentHP2.value = hp2 : null);

    loadMoves(updatePower);
    detailedReport();

    updatePercent();

    /*if (iceTrap1.checked == true) {
        halfIce1.style.visibility = "visible";
        halfStyle1.style.visibility = "visible";
    } else {
        halfIce1.style.visibility = "hidden";
        halfStyle1.style.visibility = "hidden";
        halfIce1.checked = false;
    }

    if (iceTrap2.checked == true) {
        halfIce2.style.visibility = "visible";
        halfStyle2.style.visibility = "visible";
    } else {
        halfIce2.style.visibility = "hidden";
        halfStyle2.style.visibility = "hidden";
        halfIce2.checked = false;
    }*/

    if (abilityDropdown1.value == "Chlorokinesis" || abilityDropdown1.value == "Filament" || abilityDropdown1.value == "Fire Up" || abilityDropdown1.value == "Guardian" || abilityDropdown1.value == "Alacrity" || abilityDropdown1.value == "Vigor" ||
        abilityDropdown1.value == "Elegance" || abilityDropdown1.value == "Reformation" || abilityDropdown1.value == "Battery Charge" || abilityDropdown1.value == "High Value Target" || abilityDropdown1.value == "Eruption" || abilityDropdown1.value == "Grounded" ||
        abilityDropdown1.value == "Soul Link" || abilityDropdown1.value == "Amp It Up" || abilityDropdown1.value == "Thermal Energy" || abilityDropdown1.value == "Menacing Snarl" || abilityDropdown1.value == "Sickly Sweet" || abilityDropdown1.value == "Avenger" ||
        abilityDropdown1.value == "Resentment" || abilityDropdown1.value == "Crowd Support") {
        immuneAbilityBoost1.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost1.style.visibility = "hidden";
        immuneAbilityBoost1.checked = false;
    }

    if (abilityDropdown2.value == "Chlorokinesis" || abilityDropdown2.value == "Filament" || abilityDropdown2.value == "Fire Up" || abilityDropdown2.value == "Guardian" || abilityDropdown2.value == "Alacrity" || abilityDropdown2.value == "Vigor" ||
        abilityDropdown2.value == "Elegance" || abilityDropdown2.value == "Reformation" || abilityDropdown2.value == "Battery Charge" || abilityDropdown2.value == "High Value Target" || abilityDropdown2.value == "Eruption" || abilityDropdown2.value == "Grounded" ||
        abilityDropdown2.value == "Soul Link" || abilityDropdown2.value == "Amp It Up" || abilityDropdown2.value == "Thermal Energy" || abilityDropdown2.value == "Menacing Snarl" || abilityDropdown2.value == "Sickly Sweet" || abilityDropdown2.value == "Avenger" ||
        abilityDropdown2.value == "Resentment" || abilityDropdown2.value == "Crowd Support") {
        immuneAbilityBoost2.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost2.style.visibility = "hidden";
        immuneAbilityBoost2.checked = false;
    }

    if (abilityDropdown1.value == "Mental Momentum" || abilityDropdown1.value == "Chanting" || abilityDropdown1.value == "Confidence" || abilityDropdown1.value == "Split") repeating1.style.display = "inline";
    else {
        repeating1.style.display = "none";
        repeating1.value = 1;
    }

    if (abilityDropdown2.value == "Mental Momentum" || abilityDropdown2.value == "Chanting" || abilityDropdown2.value == "Confidence" || abilityDropdown2.value == "Split") repeating2.style.display = "inline";
    else {
        repeating2.style.display = "none";
        repeating2.value = 1;
    }

    if (status1.value == "diseased") {
        diseased1.style.visibility = "visible";
    } else {
        diseased1.style.visibility = "hidden";
        diseased1.value = "1/16";
    }
    if (status2.value == "diseased") {
        diseased2.style.visibility = "visible";
    } else {
        diseased2.style.visibility = "hidden";
        diseased2.value = "1/16";
    }
}

function updateGender(gender) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    if (gender == "gender1" && firstLoom.name == "Staligant-Awakened") {
        if (gender1.value == "Female") abilityDropdown1.value = "Mental Momentum"; 
        else abilityDropdown1.value = "Mental Depletion";
    
    } else if (gender == "gender2" && secondLoom.name == "Staligant-Awakened") {
        if (gender2.value == "Female") abilityDropdown2.value = "Mental Momentum";
        else abilityDropdown2.value = "Mental Depletion";
    }
    update();
}

function updateItem(item) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    if (item == "item1") {
        if (item1.value == "Edible Storm in a Bottle" ) chocolateRain.checked = true;
        else if (item1.value == "Sandstorm in a Bottle") sandstorm.checked = true;
        else if (item1.value == "Storm in a Bottle") rain.checked = true;
        else if (item1.value == "Acid Storm in a Bottle") acidRain.checked = true;
        if (item1.value == "Unwashed Plushie" && !firstLoom.types.includes("Poison") && !firstLoom.types.includes("Crystal") && !firstLoom.types.includes("Metal")) status1.value = "diseased";
        else if (item1.value == "Lighter" && !firstLoom.types.includes("Fire")) status1.value = "burned";
        else status1.value = "healthy";
    } else if (item == "item2") {
        if (item2.value == "Edible Storm in a Bottle" ) chocolateRain.checked = true;
        else if (item2.value == "Sandstorm in a Bottle") sandstorm.checked = true;
        else if (item2.value == "Storm in a Bottle") rain.checked = true;
        else if (item2.value == "Acid Storm in a Bottle") acidRain.checked = true;
        if (item2.value == "Unwashed Plushie" && !secondLoom.types.includes("Poison") && !secondLoom.types.includes("Crystal") && !secondLoom.types.includes("Metal")) status2.value = "diseased";
        else if (item2.value == "Lighter" && !secondLoom.types.includes("Fire")) status2.value = "burned";
        else status2.value = "healthy";
    }
    update();
}

function updateAbility(ability) {
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    if (ability1 == "Downpour" || ability2 == "Downpour") rain.checked = true;
    else rain.checked = false;
    if (ability1 == "Chocolate Drizzle" || ability2 == "Chocolate Drizzle") chocolateRain.checked = true;
    else chocolateRain.checked = false;
    if (ability1 == "Poison Precipitation" || ability2 == "Poison Precipitation") acidRain.checked = true;
    else acidRain.checked = false;
    if (ability1 == "Dust Storm" || ability2 == "Dust Storm") sandstorm.checked = true;
    else sandstorm.checked = false;
    if (ability1 == "Light Orb" || ability2 == "Light Orb") lightOrb.checked = true;
    else lightOrb.checked = false;
    if (ability1 == "Archmage") archmage1.checked = true;
    else archmage1.checked = false;
    if (ability2 == "Archmage") archmage2.checked = true;
    else archmage2.checked = false;
    if (ability1 == "Lipid Scale") lipid1.checked = true;
    else lipid1.checked = false;
    if (ability2 == "Lipid Scale") lipid2.checked = true;
    else lipid2.checked = false;
    if (ability1 == "Bon Appetit") seasoned2.checked = true;
    else seasoned2.checked = false;
    if (ability2 == "Bon Appetit") seasoned1.checked = true;
    else seasoned1.checked = false;
    if (ability1 == "Bee Arena" || ability2 == "Bee Arena") {
        iceTrap1.checked = true;
        iceTrap2.checked = true;
    } else {
        iceTrap1.checked = false;
        iceTrap2.checked = false;
    }

    update();
}

$(".moveSelect").change(function() {
    let moveName = $(this).val();
    let move = findMove(moveName);
    let moveGroupObj = $(this).parent();
    if (move.hits) {
        moveGroupObj.children(".move-hits").show();
        moveGroupObj.children(".elemental-slash").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
        let doodle = $(this).closest(".doodle-info");
        let moveHits = (doodle.find(".trait").val() == "Capoeira") ? 5 : 3;
        moveGroupObj.children(".move-hits").val(moveHits + " hits");
        if (move.name == "Double Bite" || move.name == "Quad Strike") moveGroupObj.children(".move-hits").hide();
    } else if (move.name == "Tri-Elemental Slash") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".elemental-slash").show();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
    } else if (move.name == "Swarm" || move.name == "Necromancy") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".elemental-slash").hide();
        moveGroupObj.children(".swarm").show();
        moveGroupObj.children(".snowball").hide();
        moveGroupObj.children(".swarm").val(1 + " doodle");
    } else if (move.name == "Snow Roller") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".elemental-slash").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").show();
        moveGroupObj.children(".snowball").val(1);
    } else {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".elemental-slash").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
    }
});

$(".trait").change(function() {
    let trait = $(this).val();
    let traitGroupObj = $(this).parent();    
    if (trait == "Owolspeed" || trait == "The Flock") {
        traitGroupObj.children(".owol").show();
    } else {
        traitGroupObj.children(".owol").hide();
        traitGroupObj.children(".owol").val(0);
    }    
});

/* Click-to-copy function */
$("#detailedResult").click(function () {
    navigator.clipboard.writeText($("#detailedResult").text()).then(function () {
        document.getElementById('tooltipText').style.visibility = 'visible';
        setTimeout(function () {
            document.getElementById('tooltipText').style.visibility = 'hidden';
        }, 1500);
    });
});

function updateLevel() {
    if (levelCheck.value == "Level 5") {
        level1.value = 5;
        level2.value = 5;
    } else if (levelCheck.value == "Level 50") {
        level1.value = 50;
        level2.value = 50;
    } else if (levelCheck.value == "Level 60") {
        level1.value = 60;
        level2.value = 60;
    } else {
        level1.value = 100;
        level2.value = 100;
    }
    update();
}

function updateFormat() {
    collection = document.getElementsByClassName("doubles");
    if (singleDouble.value == "singles") for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'none';
    }
    else for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'inline-block';
    }

    update();
}

function importSets() {
    let importedSets;
    let newSets = [];

    try {
        importedSets = decode(document.getElementById("import").value);
        document.getElementById("err").innerHTML = "";
    } catch (err) {
        document.getElementById("err").innerHTML = "Invalid Data";
        return;
    }

    for (let set in importedSets) {
        newSets.push(importedSets[set]);
        addSet(newSets[newSets.length - 1]);
    }

    document.getElementById("import").value = "";
    document.getElementById("err").innerHTML = "Sets Successfully Loaded!";
    update();

}

function loadSets(onlyFirst = false, onlySecond = false) {
    if (onlyFirst || (!onlyFirst && !onlySecond)) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
        let posNat1 = document.getElementById("posNat1");
        let negNat1 = document.getElementById("negNat1");

        level1.value = levelCheck.value.split(' ')[1];
        stars1.value = set1.stars;

        $("#moveOne1").val(set1.moves.move1);
        $("#moveOne1").select2().trigger('change');
        $("#moveTwo1").val(set1.moves.move2);
        $("#moveTwo1").select2().trigger('change');
        $("#moveThree1").val(set1.moves.move3);
        $("#moveThree1").select2().trigger('change');
        $("#moveFour1").val(set1.moves.move4);
        $("#moveFour1").select2().trigger('change');

        helmet1.value = set1.helmet;
        amulet1.value = set1.amulet;
        artifact1.value = set1.artifact;
        posNat1.value = (set1.posNature == undefined ? "none" : set1.posNature);
        negNat1.value = (set1.negNature == undefined ? "none" : set1.negNature);
        nat1Mod1.value = set1.mod1;
        nat2Mod1.value = set1.mod2;
        abilityDropdown1.value = (set1.ability == undefined ? "none" : set1.ability);
        if (firstLoom.ability) {
            abilityDropdown1.value = firstLoom.ability;
            updateAbility(firstLoom.ability);
        }    
        item1.value = (set1.item == undefined ? "none" : set1.item);
        if (firstLoom.item) item1.value = firstLoom.item;

        primaryTypeDropdown1.value = loomians[pokeDropdown1.value.toLowerCase()].types[0];
        secondaryTypeDropdown1.value = (loomians[pokeDropdown1.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown1.value.toLowerCase()].types[1] : "None");

        if (set1.setName != "Blank Set" && set1.builtIn == undefined) {
            document.getElementById("deleteSet1").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet1").style.visibility = "hidden";
        }

        baseHP1.value = firstLoom.baseStats.hp;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
    }

    if (onlySecond || (!onlyFirst && !onlySecond)) {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
        let posNat2 = document.getElementById("posNat2");
        let negNat2 = document.getElementById("negNat2");

        level2.value = levelCheck.value.split(' ')[1];
        stars2.value = set2.stars;

        $("#moveOne2").val(set2.moves.move1);
        $("#moveOne2").select2().trigger('change');
        $("#moveTwo2").val(set2.moves.move2);
        $("#moveTwo2").select2().trigger('change');
        $("#moveThree2").val(set2.moves.move3);
        $("#moveThree2").select2().trigger('change');
        $("#moveFour2").val(set2.moves.move4);
        $("#moveFour2").select2().trigger('change');

        helmet2.value = set2.helmet;
        amulet2.value = set2.amulet;
        artifact2.value = set2.artifact;
        posNat2.value = (set2.posNature == undefined ? "none" : set2.posNature);
        negNat2.value = (set2.negNature == undefined ? "none" : set2.negNature);
        nat1Mod2.value = set2.mod1;
        nat2Mod2.value = set2.mod2;
        abilityDropdown2.value = (set2.ability == undefined ? "none" : set2.ability);
        if (secondLoom.ability) {
            abilityDropdown2.value = secondLoom.ability;
            updateAbility(secondLoom.ability);
        }    
        item2.value = (set2.item == undefined ? "none" : set2.item);
        if (secondLoom.item) item2.value = secondLoom.item;

        primaryTypeDropdown2.value = loomians[pokeDropdown2.value.toLowerCase()].types[0];
        secondaryTypeDropdown2.value = (loomians[pokeDropdown2.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown2.value.toLowerCase()].types[1] : "None");

        if (set2.setName != "Blank Set" && set2.builtIn == undefined) {
            document.getElementById("deleteSet2").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet2").style.visibility = "hidden";
        }

        baseHP2.value = secondLoom.baseStats.hp;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
    }
    
    update(undefined, false);
}

function addSet(set, builtIn = false) {
    let optG1 = findOptgroup(pokeDropdown1, set.name);
    let optG2 = findOptgroup(pokeDropdown2, set.name);
    let opt1 = new Option(set.name + " (" + set.setName + ")", set.name);
    let opt2 = new Option(set.name + " (" + set.setName + ")", set.name);
    let tempSet = set;

    if (tempSet.level == undefined) {
        tempSet.level = 50;
    }
    if (!builtIn) sets.push(tempSet);
    opt1.set = tempSet;
    opt2.set = tempSet;
    optG1.appendChild(opt1);
    optG2.appendChild(opt2);
}

function deleteSet(second = false) {
    if (!second) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set1) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    else {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set2) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    window.location.reload()
}
function makeBlankSet(loomian) {
    let set = {
        name: loomian,
        setName: "Blank Set",
        stars: 6,
        moves: {
            move1: "(No Move)",
            move2: "(No Move)",
            move3: "(No Move)",
            move4: "(No Move)"
        },
        helmet: "(None)",
        amulet: "(None)",
        artifact: "(None)",
        posNature: "none",
        negNature: "none",
        mod1: 10,
        mod2: 10,
        ability: "None",
        item: "None",
        level: 50
    }
    return set;
}

function updateHealthBar() {
    let hpBar1 = document.getElementById("hpBar1");
    let hpBar2 = document.getElementById("hpBar2");

    let percent1 = parseInt(percentHP1.value);
    let percent2 = parseInt(percentHP2.value);

    if (percent1 > 50) {
        hpBar1.style = "background: linear-gradient(to right, green " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("greenHPBar");
    }
    else if (percent1 > 20) {
        hpBar1.style = "background: linear-gradient(to right, yellow " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("yellowHPBar");
    }
    else {
        hpBar1.style = "background: linear-gradient(to right, red " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("redHPBar");
    }

    if (percent2 > 50) {
        hpBar2.style = "background: linear-gradient(to right, green " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("greenHPBar");
    }
    else if (percent2 > 20) {
        hpBar2.style = "background: linear-gradient(to right, yellow " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("yellowHPBar");
    }
    else {
        hpBar2.style = "background: linear-gradient(to right, red " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("redHPBar");
    }
}

function updatePercent() {
    percentHP1.value = Math.floor(currentHP1.value / totalHP1.innerHTML * 100);
    percentHP2.value = Math.floor(currentHP2.value / totalHP2.innerHTML * 100);

    updateHealthBar();
}

function updateNumber() {
    currentHP1.value = Math.ceil(totalHP1.innerHTML * percentHP1.value / 100);
    currentHP2.value = Math.ceil(totalHP2.innerHTML * percentHP2.value / 100);

    updateHealthBar();
}

function loadBaseStats(side) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    tempAbility1 = abilities.find((x) => x == abilityDropdown1.value);
    tempAbility2 = abilities.find((x) => x == abilityDropdown2.value);
    tempGender1 = gender1.value;
    tempGender2 = gender2.value;
    let updateHP;
    
    if (side == 1 || side == undefined) {
        baseHP1.value = firstLoom.baseStats.hp;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
        if (firstLoom.name == "Staligant" && gender1.value == "Female") {
            baseAtk1.value = firstLoom.baseStats.attackR;
            baseDef1.value = firstLoom.baseStats.defenseR;
            baseAtkR1.value = firstLoom.baseStats.attack;
            baseDefR1.value = firstLoom.baseStats.defense;
        } else if ((firstLoom.name == "Reliconis" && ability1 == "Reformation" && immuneAbilityBoost1.checked) || (firstLoom.name == "Armaratus" && ability1 == "Soul Fortification" && percentHP1.value < 50)) {
            baseAtk1.value = firstLoom.formStats.attack;
            baseDef1.value = firstLoom.formStats.defense;
            baseAtkR1.value = firstLoom.formStats.attackR;
            baseDefR1.value = firstLoom.formStats.defenseR;
            baseSpd1.value = firstLoom.formStats.speed;
        } else if (firstLoom.name == "Bungo" && ability1 == "Split" && repeating1.value > 1) {
            if (repeating1.value == 2) {
                baseHP1.value = firstLoom.bitty.hp;
                baseAtk1.value = firstLoom.bitty.attack;
                baseDef1.value = firstLoom.bitty.defense;
                baseAtkR1.value = firstLoom.bitty.attackR;
                baseDefR1.value = firstLoom.bitty.defenseR;
                baseSpd1.value = firstLoom.bitty.speed;
            } else if (repeating1.value == 3) {
                baseHP1.value = firstLoom.itty.hp;
                baseAtk1.value = firstLoom.itty.attack;
                baseDef1.value = firstLoom.itty.defense;
                baseAtkR1.value = firstLoom.itty.attackR;
                baseDefR1.value = firstLoom.itty.defenseR;
                baseSpd1.value = firstLoom.itty.speed;
            }
        }
        if ((ability1 == "Vigor" || ability1 == "Elegance") && immuneAbilityBoost1.checked) {
            baseAtk1.value = firstLoom.baseStats.defense;
            baseDef1.value = firstLoom.baseStats.attack;
            baseAtkR1.value = firstLoom.baseStats.defenseR;
            baseDefR1.value = firstLoom.baseStats.attackR;
        }
        /*if (ability1 == "Sand Swap" && sandstorm.checked) {
            baseAtk1.value = firstLoom.baseStats.defense;
            baseDef1.value = firstLoom.baseStats.attack;
        }*/
    }
    if (side == 2 || side == undefined) {
        baseHP2.value = secondLoom.baseStats.hp;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
        if (secondLoom.name == "Staligant" && gender2.value == "Female") {
            baseAtk2.value = secondLoom.baseStats.attackR;
            baseDef2.value = secondLoom.baseStats.defenseR;
            baseAtkR2.value = secondLoom.baseStats.attack;
            baseDefR2.value = secondLoom.baseStats.defense;
        } else if ((secondLoom.name == "Reliconis" && ability2 == "Reformation" && immuneAbilityBoost2.checked) || (secondLoom.name == "Armaratus" && ability2 == "Soul Fortification" && percentHP2.value < 50)) {
            baseAtk2.value = secondLoom.formStats.attack;
            baseDef2.value = secondLoom.formStats.defense;
            baseAtkR2.value = secondLoom.formStats.attackR;
            baseDefR2.value = secondLoom.formStats.defenseR;
            baseSpd2.value = secondLoom.formStats.speed;
        } else if (secondLoom.name == "Bungo" && ability2 == "Split" && repeating2.value > 1) {
            if (repeating2.value == 2) {
                baseHP2.value = secondLoom.bitty.hp;
                baseAtk2.value = secondLoom.bitty.attack;
                baseDef2.value = secondLoom.bitty.defense;
                baseAtkR2.value = secondLoom.bitty.attackR;
                baseDefR2.value = secondLoom.bitty.defenseR;
                baseSpd2.value = secondLoom.bitty.speed;
            } else if (repeating2.value == 3) {
                baseHP2.value = secondLoom.itty.hp;
                baseAtk2.value = secondLoom.itty.attack;
                baseDef2.value = secondLoom.itty.defense;
                baseAtkR2.value = secondLoom.itty.attackR;
                baseDefR2.value = secondLoom.itty.defenseR;
                baseSpd2.value = secondLoom.itty.speed;
            }
        }
        if ((ability2 == "Vigor" || ability2 == "Elegance") && immuneAbilityBoost2.checked) {
            baseAtk2.value = secondLoom.baseStats.defense;
            baseDef2.value = secondLoom.baseStats.attack;
            baseAtkR2.value = secondLoom.baseStats.defenseR;
            baseDefR2.value = secondLoom.baseStats.attackR;
        }
        /*if (ability2 == "Sand Swap" && sandstorm.checked) {
            baseAtk2.value = secondLoom.baseStats.defense;
            baseDef2.value = secondLoom.baseStats.attack;
        }*/
    }
}

function loadMoves(updatePower = false) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);

    if (updatePower) {
        moveOnePower1.value = moveOne1.power;
        moveTwoPower1.value = moveTwo1.power;
        moveThreePower1.value = moveThree1.power;
        moveFourPower1.value = moveFour1.power;
        moveOnePower2.value = moveOne2.power;
        moveTwoPower2.value = moveTwo2.power;
        moveThreePower2.value = moveThree2.power;
        moveFourPower2.value = moveFour2.power;
    }

    moveOneType1.value = moveOne1.type;
    moveTwoType1.value = moveTwo1.type;
    moveThreeType1.value = moveThree1.type;
    moveFourType1.value = moveFour1.type;
    moveOneType2.value = moveOne2.type;
    moveTwoType2.value = moveTwo2.type;
    moveThreeType2.value = moveThree2.type;
    moveFourType2.value = moveFour2.type;

    moveOneMR1.value = moveOne1.mr;
    moveTwoMR1.value = moveTwo1.mr;
    moveThreeMR1.value = moveThree1.mr;
    moveFourMR1.value = moveFour1.mr;
    moveOneMR2.value = moveOne2.mr;
    moveTwoMR2.value = moveTwo2.mr;
    moveThreeMR2.value = moveThree2.mr;
    moveFourMR2.value = moveFour2.mr;

    moveOneLbl1.innerHTML = moveOne1.name;
    moveTwoLbl1.innerHTML = moveTwo1.name;
    moveThreeLbl1.innerHTML = moveThree1.name;
    moveFourLbl1.innerHTML = moveFour1.name;
    moveOneLbl2.innerHTML = moveOne2.name;
    moveTwoLbl2.innerHTML = moveTwo2.name;
    moveThreeLbl2.innerHTML = moveThree2.name;
    moveFourLbl2.innerHTML = moveFour2.name;

    calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2);
}

function loadStats() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let firstItem = item1.value;
    let secondItem = item2.value;
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    let firstAmulet = amulets[amulet1.value.toLowerCase()];
    let secondAmulet = amulets[amulet2.value.toLowerCase()];
    let firstHelmet = helmets[helmet1.value.toLowerCase()];
    let secondHelmet = helmets[helmet2.value.toLowerCase()];
    let firstArtifact = artifacts[artifact1.value.toLowerCase()];
    let secondArtifact = artifacts[artifact2.value.toLowerCase()];
    let posNat1 = document.getElementById("posNat1").value;
    let negNat1 = document.getElementById("negNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let negNat2 = document.getElementById("negNat2").value;
    let starSpd1 = (spdStar1.checked ? 6 : stars1.value);
    let starSpd2 = (spdStar2.checked ? 6 : stars2.value);
    trueStats1 = {atk: 0, def: 0, atkR: 0, defR: 0, spd: 0};
    trueStats2 = {atk: 0, def: 0, atkR: 0, defR: 0, spd: 0};

    let wasMaxHP1 = (currentHP1.value == hp1 ? true : false);
    let wasMaxHP2 = (currentHP2.value == hp2 ? true : false);

    equipment1 = calculateEquipment(firstHelmet, firstAmulet, firstArtifact, firstLoom);
    equipment2 = calculateEquipment(secondHelmet, secondAmulet, secondArtifact, secondLoom);

    hp1 = calculateStat(baseHP1.value, equipment1.health, level1.value, stars1.value, true, posNat1, negNat1, "Health", nat1Mod1.value, nat2Mod1.value);
    atk1 = calculateStat(baseAtk1.value, equipment1.attack, level1.value, stars1.value, undefined, posNat1, negNat1, "AttackM", nat1Mod1.value, nat2Mod1.value);
    def1 = calculateStat(baseDef1.value, equipment1.defense, level1.value, stars1.value, undefined, posNat1, negNat1, "DefenseM", nat1Mod1.value, nat2Mod1.value);
    atkR1 = calculateStat(baseAtkR1.value, equipment1.mAttack, level1.value, stars1.value, undefined, posNat1, negNat1, "AttackR", nat1Mod1.value, nat2Mod1.value);
    defR1 = calculateStat(baseDefR1.value, equipment1.mDefense, level1.value, stars1.value, undefined, posNat1, negNat1, "DefenseR", nat1Mod1.value, nat2Mod1.value);
    spd1 = calculateStat(baseSpd1.value, equipment1.speed, level1.value, starSpd1, undefined, posNat1, negNat1, "Speed", nat1Mod1.value, nat2Mod1.value);

    hp2 = calculateStat(baseHP2.value, equipment2.health, level2.value, stars2.value, true, posNat2, negNat2, "Health", nat1Mod2.value, nat2Mod2.value);
    atk2 = calculateStat(baseAtk2.value, equipment2.attack, level2.value, stars2.value, undefined, posNat2, negNat2, "AttackM", nat1Mod2.value, nat2Mod2.value);
    def2 = calculateStat(baseDef2.value, equipment2.defense, level2.value, stars2.value, undefined, posNat2, negNat2, "DefenseM", nat1Mod2.value, nat2Mod2.value);
    atkR2 = calculateStat(baseAtkR2.value, equipment2.mAttack, level2.value, stars2.value, undefined, posNat2, negNat2, "AttackR", nat1Mod2.value, nat2Mod2.value);
    defR2 = calculateStat(baseDefR2.value, equipment2.mDefense, level2.value, stars2.value, undefined, posNat2, negNat2, "DefenseR", nat1Mod2.value, nat2Mod2.value);
    spd2 = calculateStat(baseSpd2.value, equipment2.speed, level2.value, starSpd2, undefined, posNat2, negNat2, "Speed", nat1Mod2.value, nat2Mod2.value);

    if (firstLoomian && firstLoomian != firstLoom) {
        atkStages1.value = "--";
        defStages1.value = "--";
        atkRStages1.value = "--";
        defRStages1.value = "--";
        spdStages1.value = "--";
        status1.value = "healthy";
    } 
    if (secondLoomian && secondLoomian != secondLoom) {
        atkStages2.value = "--";
        defStages2.value = "--";
        atkRStages2.value = "--";
        defRStages2.value = "--";
        spdStages2.value = "--";
        status2.value = "healthy";
    }
    checkStages();
    if (ability1 == "Snailspeed") spd1 = 1;
    else if (ability1 == "Time Stop") spd1 = 999;
    if (ability2 == "Snailspeed") spd2 = 1;
    else if (ability2 == "Time Stop") spd2 = 999;

    if (wasMaxHP1) {
        currentHP1.value = hp1;
        totalHP1.innerHTML = hp1;
    }
    if (wasMaxHP2) {
        currentHP2.value = hp2;
        totalHP2.innerHTML = hp2;
    }

    let multi = 1;

    statHP1.innerHTML = hp1;
    trueStats1.hp = hp1;
    trueStats1.atk = atk1;
    if (archmage1.checked) multi *= 1.2;
    if (ability1 == "Hidden Strength") multi *= 2;
    if (firstItem == "Enchanted Ruby") multi *= 1.5;
    statAtk1.innerHTML = Math.floor(atk1 * multi);
    let swapAtk1 = Math.floor(atk1 * multi);
    multi = 1;
    trueStats1.def = def1;
    if (lipid1.checked) multi *= 1.1;
    if (firstItem == "Gold Laminate" && firstLoom.finalEvo == false) multi *= 1.5;
    if ((ability1 == "Misery Guard" && status1.value != "healthy") || (ability1 == "Bandit" && percentHP1.value < 50)) multi *= 1.5;
    statDef1.innerHTML = Math.floor(def1 * multi);
    let swapDef1 = Math.floor(def1 * multi);
    multi = 1;
    trueStats1.atkR = atkR1;
    if (archmage1.checked) multi *= 1.2;
    if (firstItem == "Enchanted Sapphire") multi *= 1.5;
    statAtkR1.innerHTML = Math.floor(atkR1 * multi);
    multi = 1;
    trueStats1.defR = defR1;
    if (lipid1.checked) multi *= 1.1;
    if (firstItem == "Cursed Cloak" || (firstItem == "Gold Laminate" && firstLoom.finalEvo == false)) multi *= 1.5;
    statDefR1.innerHTML = Math.floor(defR1 * multi);
    multi = 1;
    trueStats1.spd = spd1;
    if ((ability1 == "Vitality" && percentHP1.value > 50) || (ability1 == "Second Wind" && percentHP1.value < 25) || ability1 == "Rush") multi *= 1.5;
    else if ((ability1 == "Scarf Down" && chocolateRain.checked) || (ability1 == "Dust Dash" && sandstorm.checked) || (ability1 == "Lithe" && firstItem == "None") || (ability1 == "Storm Surge" && rain.checked) || (ability1 == "Acid Advance" && acidRain.checked)) multi *= 2;
    else if (ability1 == "Owolspeed") {
        let owolspeed = owol1.value;
        multi *= (1 + .25 * owolspeed);
    } else if (ability1 == "Goliath") multi *= 0.8;
    if (status1.value == "paralasis" && !firstLoom.types.includes("Spark")) multi *= 0.5;
    if (firstItem == "Enchanted Emerald") multi *= 1.5;
    else if (firstItem == "Heavy Blanket") multi *= 0.5;
    statSpd1.innerHTML = Math.floor(spd1 * multi);
    multi = 1;
    if (ability1 == "Sand Swap" && sandstorm.checked) {
        statAtk1.innerHTML = swapDef1;
        statDef1.innerHTML = swapAtk1;
    }

    statHP2.innerHTML = hp2;
    trueStats2.hp = hp2;
    trueStats2.atk = atk2;
    if (archmage2.checked) multi *= 1.2;
    if (ability2 == "Hidden Strength") multi *= 2;
    if (secondItem == "Enchanted Ruby") multi *= 1.5;
    statAtk2.innerHTML = Math.floor(atk2 * multi);
    let swapAtk2 = Math.floor(atk2 * multi);
    multi = 1;
    trueStats2.def = def2;
    if (lipid2.checked) multi *= 1.1;
    if (secondItem == "Gold Laminate" && secondLoom.finalEvo == false) multi *= 1.5;
    if ((ability2 == "Misery Guard" && status2.value != "healthy") || (ability2 == "Bandit" && percentHP2.value < 50)) multi *= 1.5;
    statDef2.innerHTML = Math.floor(def2 * multi);
    let swapDef2 = Math.floor(def2 * multi);
    multi = 1;
    trueStats2.atkR = atkR2;
    if (archmage2.checked) multi *= 1.2;
    if (secondItem == "Enchanted Sapphire") multi *= 1.5;
    statAtkR2.innerHTML = Math.floor(atkR2 * multi);
    multi = 1;
    trueStats2.defR = defR2;
    if (lipid2.checked) multi *= 1.1;
    if (secondItem == "Cursed Cloak" || (secondItem == "Gold Laminate" && secondLoom.finalEvo == false)) multi *= 1.5;
    statDefR2.innerHTML = Math.floor(defR2 * multi);
    multi = 1;
    trueStats2.spd = spd2;
    if ((ability2 == "Vitality" && percentHP2.value > 50) || (ability2 == "Second Wind" && percentHP2.value < 25) || ability2 == "Rush") multi *= 1.5;
    else if ((ability2 == "Scarf Down" && chocolateRain.checked) || (ability2 == "Dust Dash" && sandstorm.checked) || (ability2 == "Lithe" && secondItem == "None") || (ability2 == "Storm Surge" && rain.checked) || (ability2 == "Acid Advance" && acidRain.checked)) multi *= 2;
    else if (ability2 == "Owolspeed") {
        let owolspeed = owol2.value;
        multi *= (1 + .25 * owolspeed);
    } else if (ability2 == "Goliath") multi *= 0.8;
    if (status2.value == "paralasis" && !secondLoom.types.includes("Spark")) multi *= 0.5;
    if (secondItem == "Enchanted Emerald") multi *= 1.5;
    else if (secondItem == "Heavy Blanket") multi *= 0.5;
    statSpd2.innerHTML = Math.floor(spd2 * multi);
    multi = 1;
    if (ability2 == "Sand Swap" && sandstorm.checked) {
        statAtk2.innerHTML = swapDef2;
        statDef2.innerHTML = swapAtk2;
    }

    hpEV1.value = equipment1.health;
    atkEV1.value = equipment1.attack;
    defEV1.value = equipment1.defense;
    atkREV1.value = equipment1.mAttack;
    defREV1.value = equipment1.mDefense;
    spdEV1.value = equipment1.speed;

    hpEV2.value = equipment2.health;
    atkEV2.value = equipment2.attack;
    defEV2.value = equipment2.defense;
    atkREV2.value = equipment2.mAttack;
    defREV2.value = equipment2.mDefense;
    spdEV2.value = equipment2.speed;

    pylonButton(false, false, true);
    pylonButton(true, false, true)

}

function calculateEquipment(helmet, amulet, artifact, doodle) {
    let equipment = {health: 0, attack: 0, defense: 0, mAttack: 0, mDefense: 0, speed: 0};
    /*if (helmet.name == "Marshmellow Fedora") {
        if (doodle.name == "Partybug" || doodle.name == "Partybug-Awakened") {
            helmet.health = 0;
            helmet.attack = 20;
            helmet.defense = 0;
            helmet.mAttack = 20;
            helmet.mDefense = 0;
            helmet.speed = 10;
        } else {
            helmet.health = 0;
            helmet.attack = 0;
            helmet.defense = 0;
            helmet.mAttack = 10;
            helmet.mDefense = 5;
            helmet.speed = 0;
    }
    }*/

    equipment.health = equipment.health + parseInt(helmet.health) + parseInt(amulet.health) + parseInt(artifact.health);
    equipment.attack = equipment.attack + parseInt(helmet.attack) + parseInt(amulet.attack) + parseInt(artifact.attack);
    equipment.defense = equipment.defense + parseInt(helmet.defense) + parseInt(amulet.defense) + parseInt(artifact.defense);
    equipment.mAttack = equipment.mAttack + parseInt(helmet.mAttack) + parseInt(amulet.mAttack) + parseInt(artifact.mAttack);
    equipment.mDefense = equipment.mDefense + parseInt(helmet.mDefense) + parseInt(amulet.mDefense) + parseInt(artifact.mDefense);
    equipment.speed = equipment.speed + parseInt(helmet.speed) + parseInt(amulet.speed) + parseInt(artifact.speed);
    return equipment;
}

function calculateStat(base, equip, level, stars, isHP = false, posNat, negNat, name, mod1, mod2) {
    let stat;
    let mod = 1;

    level = parseInt(level);
    stars = parseInt(stars);
    base = parseInt(base);

    if (posNat == "attack" && name == "AttackM") {
        mod = 1 + mod1 / 100;
    }
    else if (posNat == "defense" && name == "DefenseM") {
        mod = 1 + mod1 / 100;
    }
    else if (posNat == "mAttack" && name == "AttackR") {
        mod = 1 + mod1 / 100;
    }
    else if (posNat == "mDefense" && name == "DefenseR") {
        mod = 1 + mod1 / 100;
    }
    else if (posNat == "speed" && name == "Speed") {
        mod = 1 + mod1 / 100;
    }
    else if (posNat == "health" && name == "Health") {
        mod = 1 + mod1 / 100;
    }
    if (negNat == "attack" && name == "AttackM") {
        mod = 1 + mod2 / 100;
    }
    else if (negNat == "defense" && name == "DefenseM") {
        mod = 1 + mod2 / 100;
    }
    else if (negNat == "mAttack" && name == "AttackR") {
        mod = 1 + mod2 / 100;
    }
    else if (negNat == "mDefense" && name == "DefenseR") {
        mod = 1 + mod2 / 100;
    }
    else if (negNat == "speed" && name == "Speed") {
        mod = 1 + mod2 / 100;
    }
    else if (negNat == "health" && name == "Health") {
        mod = 1 + mod2 / 100;
    }

    if (isHP) {
        stat = Math.max(Math.round((((2 * (base + equip) + stars * 5) * level / 100) + level + 15) * mod), 1);
    }
    else {
        stat = Math.max(Math.round(((2 * (base + equip) + stars * 5) * level / 100 + 10) * mod), 1);
    }


    return stat;
}


function checkStages() {
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    let tempDefStage1 = (defStages1.value != "--" ? parseInt(defStages1.value) : 0);
    let tempDefStage2 = (defStages2.value != "--" ? parseInt(defStages2.value) : 0);

    let tempDefRStage1 = (defRStages1.value != "--" ? parseInt(defRStages1.value) : 0);
    let tempDefRStage2 = (defRStages2.value != "--" ? parseInt(defRStages2.value) : 0);

    let tempAtkStage1 = (atkStages1.value != "--" ? parseInt(atkStages1.value) : 0);
    let tempAtkStage2 = (atkStages2.value != "--" ? parseInt(atkStages2.value) : 0);

    if (tempAtkStage1 > 0) {
        atk1 = Math.floor(atk1 * (1 + 0.5 * tempAtkStage1));
    }
    else if (tempAtkStage1 < 0) {
        atk1 = Math.max(1, Math.floor(atk1 * (2 / (2 - tempAtkStage1))));
    }

    if (tempDefStage1 > 0) {
        def1 = Math.floor(def1 * (1 + 0.5 * tempDefStage1));
    }
    else if (tempDefStage1 < 0) {
        def1 = Math.max(1, Math.floor(def1 * (2 / (2 - tempDefStage1))));
    }

   if (atkRStages1.value != "--" && parseInt(atkRStages1.value) > 0) {
        atkR1 = Math.floor(atkR1 * (1 + 0.5 * parseInt(atkRStages1.value)));
    }
    else if (atkRStages1.value != "--" && parseInt(atkRStages1.value) < 0) {
        atkR1 = Math.max(1, Math.floor(atkR1 * (2 / (2 - parseInt(atkRStages1.value)))));
    }

    if (tempDefRStage1 > 0) {
        defR1 = Math.floor(defR1 * (1 + 0.5 * tempDefRStage1));
    }
    else if (tempDefRStage1 < 0) {
        defR1 = Math.max(1, Math.floor(defR1 * (2 / (2 - tempDefRStage1))));
    }

    if (spdStages1.value != "--" && parseInt(spdStages1.value) > 0) {
        spd1 = Math.floor(spd1 * (1 + 0.5 * parseInt(spdStages1.value)));
    }
    else if (spdStages1.value != "--" && parseInt(spdStages1.value) < 0) {
        spd1 = Math.max(1, Math.floor(spd1 * (2 / (2 - parseInt(spdStages1.value)))));
    }

    if (tempAtkStage2 > 0) {
        atk2 = Math.floor(atk2 * (1 + 0.5 * tempAtkStage2));
    }
    else if (tempAtkStage2 < 0) {
        atk2 = Math.max(1, Math.floor(atk2 * (2 / (2 - tempAtkStage2))));
    }

    if (tempDefStage2 > 0) {
        def2 = Math.floor(def2 * (1 + 0.5 * tempDefStage2));
    }
    else if (tempDefStage2 < 0) {
        def2 = Math.max(1, Math.floor(def2 * (2 / (2 - tempDefStage2))));
    }

    if (atkRStages2.value != "--" && parseInt(atkRStages2.value) > 0) {
        atkR2 = Math.floor(atkR2 * (1 + 0.5 * parseInt(atkRStages2.value)));
    }
    else if (atkRStages2.value != "--" && parseInt(atkRStages2.value) < 0) {
        atkR2 = Math.max(1, Math.floor(atkR2 * (2 / (2 - parseInt(atkRStages2.value)))));
    }

    if (tempDefRStage2 > 0) {
        defR2 = Math.floor(defR2 * (1 + 0.5 * tempDefRStage2));
    }
    else if (tempDefRStage2 < 0) {
        defR2 = Math.max(1, Math.floor(defR2 * (2 / (2 - tempDefRStage2))));
    }

    if (spdStages2.value != "--" && parseInt(spdStages2.value) > 0) {
        spd2 = Math.floor(spd2 * (1 + 0.5 * parseInt(spdStages2.value)));
    }
    else if (spdStages2.value != "--" && parseInt(spdStages2.value) < 0) {
        spd2 = Math.max(1, Math.floor(spd2 * (2 / (2 - parseInt(spdStages2.value)))));
    }
}

function battleAdjustments(move, ability1, ability2, stuffUsed, atk, def, boastAttack, tempType, abilityCheck1, abilityCheck2, crit, stat2, firstHit, hitConfirm, foulHit, stats1, stats2) {
    //Grabbing unboosted stats and what boosts are currently in the calc.
    let baseAttack = calculateStat(atk.base, atk.equip, atk.level, atk.stars, undefined, atk.posNat, atk.negNat, atk.name, atk.mod1, atk.mod2);
    let baseDefense = calculateStat(def.base, def.equip, def.level, def.stars, undefined, def.posNat, def.negNat, def.name, def.mod1, def.mod2);
    let atkStage = (!atk.stage ? 0 : atk.stage);
    let defStage = (!def.stage ? 0 : def.stage);
    let moveMod;

    //Counting what hit this is during the calc process; 0 being the first hit.
    adjustmentCount += 1;
    if (firstHit) adjustmentCount = 0;
    let moveAdjustmentCount = adjustmentCount;

    //Checks for moves that affect the currently used offensive stat and adjusts subsequent hits' offensive stat
    if ((move.stat && move.stat.battle == "Offense" && move.stat.stat == atk.name && !(move.secondaryEffect && ability1 == "Brute Force")) || ability2 == "Guilt" || (move.name == "Chaotic Bolt" && stat2 == "frozen") || (move.name == "Icefall" && parseInt(stats1.spd) < parseInt(stats2.spd))) {
        moveMod = 0;
        if (ability2 == "Guilt") {
            moveMod += (ability1 == "Anomaly" ? 1 : -1);
            stuffUsed.ability2 = ability2;
        }
        if (move.name == "Chaotic Bolt" && stat2 == "frozen") moveMod += (ability1 == "Anomaly" ? -1 : 1); 
        else if (move.stat) moveMod += (ability1 == "Anomaly" ? move.stat.amount * -1 : move.stat.amount);
        else if (move.name == "Icefall" && parseInt(stats1.spd) < parseInt(stats2.spd)) moveMod += (ability1 == "Anomaly" ? -1 : 1);
        /*if (ability1 == "Staunch" && move.stat.amount < 0) {
            moveMod = 0;
            stuffUsed.ability1 = ability1;
        }*/
        if (((move.stat && move.stat.first) || (move.name == "Icefall" && parseInt(stats1.spd) < parseInt(stats2.spd)))) moveAdjustmentCount += 1;

        atkStage = (moveMod < 0 ? Math.max(atkStage + moveAdjustmentCount * moveMod, -6) : Math.min(atkStage + moveAdjustmentCount * moveMod, 6));

        /*if (ability1 == "One of Many" && moveMod < 0) {
            if (foulHit && atkStage < -1) atkStage = -1;
            else if (!foulHit && atkStage < 0) atkStage = 0;
            stuffUsed.ability1 = ability1;
        }*/

        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Fortified") atk.atk = baseAttack;
        if (firstHit && ability1 == "Anomaly") stuffUsed.ability1 = ability1;
    }

    //Checking for attack increasing abilities that are manually checked and adjusts subsequent hits' offensive stat
    if ((ability1 == "Avenger" || ability1 == "Resentment" || ability1 == "Crowd Support") && abilityCheck1) {
        if ((ability1 == "Avenger" && move.mr1 == "Melee Attack" && atk.name == "AttackM") || (ability1 == "Resentment" && move.mr1 == "Ranged Attack" && atk.name == "AttackR")) moveMod = 1;
        if (ability1 == "Crowd Support" && move.mr1 == "Melee Attack" && atk.name == "AttackM") moveMod = 2;
        //if (ability1 == "Boast" && move.mr1 == "Melee Attack" && atk.name == "AttackM") moveMod = (atk.atk > boastAttack ? 1 : -1);

        atkStage = (moveMod < 0 ? Math.max(atkStage + moveMod, -6) : Math.min(atkStage + moveMod, 6));
        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Fortified") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability1 = ability1;
    }

    //Checking for attack decreasing abilities that are manually checked and adjusts subsequent hits' offensive stat
    if ((ability2 == "Menacing Snarl" || ability2 == "Sickly Sweet" || ability2 == "Adorable") && abilityCheck2) {
        moveMod = 0;
        if ((ability2 == "Menacing Snarl" && move.mr1 == "Melee Attack" && atk.name == "AttackM") || (ability2 == "Sickly Sweet" && move.mr1 == "Ranged Attack" && atk.name == "AttackR") || (ability2 == "Adorable" && move.mr1 == "Melee Defense" && atk.name == "DefenseM")) moveMod -= 1;
        if (ability1 == "Stonefaced" || ability1 == "Anomaly") {
            moveMod = (ability1 == "Anomaly" ? 1 : 0);
            stuffUsed.ability1 = ability1;
        }
        if ((ability1 == "Combative" && move.mr1 == "Melee Attack" && atk.name == "AttackM") || (ability1 == "Resolve" && move.mr1 == "Ranged Attack" && atk.name == "AttackR")) {
            moveMod += 2;
            stuffUsed.ability1 = ability1;
        }
        if (ability1 == "Merciless" && move.mr1 == "Melee Attack" && atk.name == "AttackM" && ability2 == "Menacing Snarl") {
            moveMod += 4;
            stuffUsed.ability1 = ability1;
        }

        atkStage = (moveMod < 0 ? Math.max(atkStage + moveMod, -6) : Math.min(atkStage + moveMod, 6));

        /*if (ability1 == "One of Many" && moveMod < 0) {
            if (atkStage < 0 && !firstHit) atkStage = 0;
            stuffUsed.ability1 = ability1;
        }*/

        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Fortified") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checking for Glide boosting speed which affects Tempest damage
    /*if (ability1 == "Glide" && tempType == "Air" && move.mr1 == atk.name) {
        atkStage = Math.min(atkStage + adjustmentCount, 6);
        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Fortified") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability1 = ability1;
    }*/

    //Checks for moves that affect the currently used defensive stat and adjusts subsequent hits' defensive stat
    if ((move.stat && move.stat.battle == "Defense" && move.stat.stat == def.name && !(move.secondaryEffect && ability1 == "Brute Force")) || (move.name == "Chaotic Bolt" && stat2 == "vulnerable")) {
        moveMod = 0;
        if (move.name == "Chaotic Bolt" && stat2 == "vulnerable") moveMod += (ability2 == "Anomaly" ? 1 : -1);
        else if (move.stat) moveMod += (ability2 == "Anomaly" ? move.stat.amount * -1 : move.stat.amount);
        if ((ability2 == "Stonefaced" && moveMod < 0) || ((ability2 == "Battle Armor" || ability2 == "Odd Husk") && move.secondaryEffect)) {
            moveMod = 0;
            stuffUsed.ability2 = ability2;
        }
        if (move.stat && move.stat.first && firstHit) moveAdjustmentCount = 1;

        defStage = (moveMod < 0 ? Math.max(defStage + (moveAdjustmentCount * moveMod), -6) : Math.min(defStage + moveAdjustmentCount * moveMod, 6));

        /*if (ability2 == "One of Many" && moveMod < 0) {
            if (foulHit && defStage < -1 * moveMod * -1) defStage = -1 * moveMod * -1;
            else if (!foulHit && defStage < 0) defStage = 0;
            stuffUsed.ability2 = ability2;
        }*/

        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0 && ability2 != "Fortified") def.def = baseDefense;
        if (firstHit && ability2 == "Anomaly") stuffUsed.ability2 = ability2;
    }

    //Checks for certain defense increasing abilities and adjusts subsequent hits' defensive stat
    if ((((ability2 == "Strong Armor" && move.contact) || (ability2 == "Floaty" && tempType == "Air")) && move.mr2 == "Melee Defense" && def.name == "DefenseM") || (ability2 == "Defensive Priority" && abilityCheck2)) {
        defStage = (ability2 == "Defensive Priority" ? Math.min(defStage + 1, 6) : Math.min(defStage + adjustmentCount, 6));
        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0) def.def = baseDefense;
        if (ability1 == "Outboxer" && move.contact && ability2 == "Strong Armor") {
            def.def = baseDefense;
            if (firstHit) stuffUsed.ability1 = ability1;
        }
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checks for certain defense decreasing abilities and adjusts subsequent hits' defensive stat
    if ((ability2 == "Cracked" && move.mr == "Melee") && move.mr2 == "Melee Defense" && def.name == "DefenseM") {
        moveMod = adjustmentCount * -1
        defStage = Math.max(defStage + moveMod, -6);
        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0) def.def = baseDefense;
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checking for defense decreasing abilities that are manually checked and adjusts subsequent hits' defensive stat
    /*if (ability1 == "Adorable" && abilityCheck1) {
        moveMod = 0;
        if (ability1 == "Adorable" && move.mr2 == "Melee Defense" && def.name == "DefenseM") moveMod -= 1;
        if (ability2 == "Staunch" || ability2 == "Anomaly") {
            moveMod = (ability2 == "Anomaly" ? 1 : 0);
            stuffUsed.ability2 = ability2;
        }

        defStage = (moveMod < 0 ? Math.max(defStage + moveMod, -6) : Math.min(defStage + moveMod, 6));

        if (ability2 == "One of Many" && moveMod < 0) {
            if (defStage < 0 && !firstHit) defStage = 0;
            stuffUsed.ability2 = ability2;
        }

        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0 && ability2 != "Fortified") def.def = baseDefense;
        if (firstHit) stuffUsed.ability1 = ability1;

    }*/
}

function calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    if ((tempGender1 != gender1.value && firstLoom.name == "Staligant") ||
        (((tempAbility1 == "Vigor" || tempAbility1 == "Elegance") || (ability1 == "Vigor" || ability1 == "Elegance")) && immuneAbilityBoost1) ||
        ((tempAbility1 == "Reformation" || ability1 == "Reformation") && firstLoom.name == "Reliconis" && immuneAbilityBoost1) ||
        ((tempAbility1 == "Soul Fortification" || ability1 == "Soul Fortification") && firstLoom.name == "Armaratus") ||
        (tempAbility1 == "Split" || ability1 == "Split") && firstLoom.name == "Bungo") {
        loadBaseStats(1);
        loadStats();
    }
    if ((tempGender2 != gender2.value && secondLoom.name == "Staligant") ||
        (((tempAbility2 == "Vigor" || tempAbility2 == "Elegance") || (ability2 == "Vigor" || ability2 == "Elegance")) && immuneAbilityBoost2) ||
        ((tempAbility2 == "Reformation" || ability2 == "Reformation") && secondLoom.name == "Reliconis" && immuneAbilityBoost2) ||
        ((tempAbility2 == "Soul Fortification" || ability2 == "Soul Fortification") && secondLoom.name == "Armaratus") ||
        (tempAbility2 == "Split" || ability2 == "Split") && secondLoom.name == "Bungo") {
        loadBaseStats(2);
        loadStats();
    }

    let repeat1 = repeating1.value;
    let repeat2 = repeating2.value;

    let itemA = item1.value;
    let itemB = item2.value;

    let stat1 = status1.value;
    let stat2 = status2.value;

    let critOne1 = moveOneCrit1.checked;
    let critTwo1 = moveTwoCrit1.checked;
    let critThree1 = moveThreeCrit1.checked;
    let critFour1 = moveFourCrit1.checked;

    let critOne2 = moveOneCrit2.checked;
    let critTwo2 = moveTwoCrit2.checked;
    let critThree2 = moveThreeCrit2.checked;
    let critFour2 = moveFourCrit2.checked;

    let hitsOne1 = moveOneHits1.value;
    let hitsTwo1 = moveTwoHits1.value;
    let hitsThree1 = moveThreeHits1.value;
    let hitsFour1 = moveFourHits1.value;
    let hitsOne2 = moveOneHits2.value;
    let hitsTwo2 = moveTwoHits2.value;
    let hitsThree2 = moveThreeHits2.value;
    let hitsFour2 = moveFourHits2.value;

    let elementalOne1 = moveOneElemental1.value;
    let elementalTwo1 = moveTwoElemental1.value;
    let elementalThree1 = moveThreeElemental1.value;
    let elementalFour1 = moveFourElemental1.value;
    let elementalOne2 = moveOneElemental2.value;
    let elementalTwo2 = moveTwoElemental2.value;
    let elementalThree2 = moveThreeElemental2.value;
    let elementalFour2 = moveFourElemental2.value;

    let swarmOne1 = moveOneSwarm1.value;
    let swarmTwo1 = moveTwoSwarm1.value;
    let swarmThree1 = moveThreeSwarm1.value;
    let swarmFour1 = moveFourSwarm1.value;
    let swarmOne2 = moveOneSwarm2.value;
    let swarmTwo2 = moveTwoSwarm2.value;
    let swarmThree2 = moveThreeSwarm2.value;
    let swarmFour2 = moveFourSwarm2.value;

    let snowballOne1 = moveOneSnowball1.value;
    let snowballTwo1 = moveTwoSnowball1.value;
    let snowballThree1 = moveThreeSnowball1.value;
    let snowballFour1 = moveFourSnowball1.value;
    let snowballOne2 = moveOneSnowball2.value;
    let snowballTwo2 = moveTwoSnowball2.value;
    let snowballThree2 = moveThreeSnowball2.value;
    let snowballFour2 = moveFourSnowball2.value;

    let dmgMoveOneU1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, elementalOne1, swarmOne1, snowballOne1, false, level1.value);
    let dmgMoveOneL1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, elementalOne1, swarmOne1, snowballOne1, false, level1.value, true);
    let dmgMoveOnePercent1 = (dmgMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveOneDmg1.innerHTML = dmgMoveOnePercent1 + checkIceTrap(moveOne1, Math.min(dmgMoveOneL1, hp2), Math.min(dmgMoveOneU1, hp2), hp1, percentHP1.value, itemA, ability1, ability2, stat1, stat2);

    let dmgMoveTwoU1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, elementalTwo1, swarmTwo1, snowballTwo1, false, level1.value);
    let dmgMoveTwoL1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, elementalTwo1, swarmTwo1, snowballTwo1, false, level1.value, true);
    let dmgMoveTwoPercent1 = (dmgMoveTwoL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveTwoDmg1.innerHTML = dmgMoveTwoPercent1 + checkIceTrap(moveTwo1, Math.min(dmgMoveTwoL1, hp2), Math.min(dmgMoveTwoU1, hp2), hp1, percentHP1.value, itemA, ability1, ability2, ability2, stat1, stat2);

    let dmgMoveThreeU1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, elementalThree1, swarmThree1, snowballThree1, false, level1.value);
    let dmgMoveThreeL1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, elementalThree1, swarmThree1, snowballThree1, false, level1.value, true);
    let dmgMoveThreePercent1 = (dmgMoveThreeL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveThreeDmg1.innerHTML = dmgMoveThreePercent1 + checkIceTrap(moveThree1, Math.min(dmgMoveThreeL1, hp2), Math.min(dmgMoveThreeU1, hp2), hp1, percentHP1.value, itemA, ability1, ability2, stat1, stat2);

    let dmgMoveFourU1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, elementalFour1, swarmFour1, snowballFour1, false, level1.value);
    let dmgMoveFourL1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, elementalFour1, swarmFour1, snowballFour1, false, level1.value, true);
    let dmgMoveFourPercent1 = (dmgMoveFourL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveFourDmg1.innerHTML = dmgMoveFourPercent1 + checkIceTrap(moveFour1, Math.min(dmgMoveFourL1, hp2), Math.min(dmgMoveFourU1, hp2), hp1, percentHP1.value, itemA, ability1, ability2, stat1, stat2);

    //----------------------------------------------------------

    let dmgMoveOneU2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, elementalOne2, swarmOne2, snowballOne2, false, level2.value, undefined, true);
    let dmgMoveOneL2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, elementalOne2, swarmOne2, snowballOne2, false, level2.value, true, true);
    let dmgMoveOnePercent2 = (dmgMoveOneL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveOneDmg2.innerHTML = dmgMoveOnePercent2 + checkIceTrap(moveOne2, Math.min(dmgMoveOneL2, hp1), Math.min(dmgMoveOneU2, hp1), hp2, percentHP2.value, itemB, ability2, ability1, stat2, stat1);

    let dmgMoveTwoU2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, elementalTwo2, swarmTwo2, snowballTwo2, false, level2.value, undefined, true);
    let dmgMoveTwoL2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, elementalTwo2, swarmTwo2, snowballTwo2, false, level2.value, true, true);
    let dmgMoveTwoPercent2 = (dmgMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";
    
    moveTwoDmg2.innerHTML = dmgMoveTwoPercent2 + checkIceTrap(moveTwo2, Math.min(dmgMoveTwoL2, hp1), Math.min(dmgMoveTwoU2, hp1), hp2, percentHP2.value, itemB, ability2, ability1, stat2, stat1);

    let dmgMoveThreeU2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, elementalThree2, swarmThree2, snowballThree2, false, level2.value, undefined, true);
    let dmgMoveThreeL2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, elementalThree2, swarmThree2, snowballThree2, false, level2.value, true, true);
    let dmgMoveThreePercent2 = (dmgMoveThreeL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveThreeDmg2.innerHTML = dmgMoveThreePercent2 + checkIceTrap(moveThree2, Math.min(dmgMoveThreeL2, hp1), Math.min(dmgMoveThreeU2, hp1), hp2, percentHP2.value, itemB, ability2, ability1, stat2, stat1);

    let dmgMoveFourU2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, elementalFour2, swarmFour2, snowballFour2, false, level2.value, undefined, true);
    let dmgMoveFourL2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, elementalFour2, swarmFour2, snowballFour2, false, level2.value, true, true);

    let dmgMoveFourPercent2 = (dmgMoveFourL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveFourDmg2.innerHTML = dmgMoveFourPercent2 + checkIceTrap(moveFour2, Math.min(dmgMoveFourL2, hp1), Math.min(dmgMoveFourU2, hp1), hp2, percentHP2.value, itemB, ability2, ability1, stat2, stat1);
}

function detailedReport() {
    let selected = document.querySelector('input[name="moveResult"]:checked');
    let moveName;
    let move;
    let movePower;
    let crit;
    let repeat;
    let hits;
    let elemental;
    let swarm;
    let snowball;
    let second = false;
    let tempAtk = "";
    let tempDef = "";
    let tempHealth = "";
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let level = level1.value;
    let hp;
    let ice = iceTrap2.checked;
    let pylons = pylon2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];
    let stats1 = trueStats1;
    let stats2 = trueStats2;
    let gen = gender1.value;
    let pylonDmg;

    if (document.getElementById("moveOneLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl1").innerHTML;
        movePower = moveOnePower1.value;
        crit = moveOneCrit1.checked;
        repeat = repeating1.value;
        hits = moveOneHits1.value;
        elemental = moveOneElemental1.value;
        swarm = moveOneSwarm1.value;
        snowball = moveOneSnowball1.value;
    }
    else if (document.getElementById("moveTwoLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl1").innerHTML;
        movePower = moveTwoPower1.value;
        crit = moveTwoCrit1.checked;
        repeat = repeating1.value;
        hits = moveTwoHits1.value;
        elemental = moveTwoElemental1.value;
        swarm = moveTwoSwarm1.value;
        snowball = moveTwoSnowball1.value;
    }
    else if (document.getElementById("moveThreeLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl1").innerHTML;
        movePower = moveThreePower1.value;
        crit = moveThreeCrit1.checked;
        repeat = repeating1.value;
        hits = moveThreeHits1.value;
        elemental = moveThreeElemental1.value;
        swarm = moveThreeSwarm1.value;
        snowball = moveThreeSnowball1.value;
    }
    else if (document.getElementById("moveFourLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl1").innerHTML;
        movePower = moveFourPower1.value;
        crit = moveFourCrit1.checked;
        repeat = repeating1.value;
        hits = moveFourHits1.value;
        elemental = moveFourElemental1.value;
        swarm = moveFourSwarm1.value;
        snowball = moveFourSnowball1.value;
    }
    else if (document.getElementById("moveOneLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl2").innerHTML;
        movePower = moveOnePower2.value;
        crit = moveOneCrit2.checked;
        repeat = repeating2.value;
        hits = moveOneHits2.value;
        elemental = moveOneElemental2.value;
        swarm = moveOneSwarm2.value;
        snowball = moveOneSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
        pylons = pylon1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        stats1 = trueStats2;
        stats2 = trueStats1;
        gen = gender2.value;
    }
    else if (document.getElementById("moveTwoLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl2").innerHTML;
        movePower = moveTwoPower2.value;
        crit = moveTwoCrit2.checked;
        repeat = repeating2.value;
        hits = moveTwoHits2.value;
        elemental = moveTwoElemental2.value;
        swarm = moveTwoSwarm2.value;
        snowball = moveTwoSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
        pylons = pylon1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        stats1 = trueStats2;
        stats2 = trueStats1;
        gen = gender2.value;
    }
    else if (document.getElementById("moveThreeLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl2").innerHTML;
        movePower = moveThreePower2.value;
        crit = moveThreeCrit2.checked;
        repeat = repeating2.value;
        hits = moveThreeHits2.value;
        elemental = moveThreeElemental2.value;
        swarm = moveThreeSwarm2.value;
        snowball = moveThreeSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
        pylons = pylon1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        stats1 = trueStats2;
        stats2 = trueStats1;
        gen = gender2.value;
    }
    else if (document.getElementById("moveFourLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl2").innerHTML;
        movePower = moveFourPower2.value;
        crit = moveFourCrit2.checked;
        repeat = repeating2.value;
        hits = moveFourHits2.value;
        elemental = moveFourElemental2.value;
        swarm = moveFourSwarm2.value;
        snowball = moveFourSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
        pylons = pylon1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        stats1 = trueStats2;
        stats2 = trueStats1;
        gen = gender2.value;
    }
    let item = (second ? item1.value : item2.value);
    let ability = (second ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let abilitys = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    move = findMove(moveName);
    let qualifier = (move.hits ? "approx." : "");
    hp = (second ? currentHP1.value : currentHP2.value);
    let selfHP = (second ? currentHP2.value : currentHP1.value);
    let maxHP = (second ? hp1 : hp2);
    let myStatus = (second ? status2.value : status1.value);
    let currStatus = (second ? status1.value : status2.value);
    let statStr = "";
    let statStr2 = " " + currStatus.charAt(0).toUpperCase() + currStatus.slice(1);
    let counter = 0;
    let adaptive = { mr: "", mr1: "", mr2: ""};
    let adaptiveResult;
    let atkDef;
    if (move.name == "Fatal Flaw" && stats2.defR > stats2.def) {
        adaptive.mr = "Magical";
        adaptive.mr1 = "Ranged Attack";
        adaptive.mr2 = "Melee Defense";
        adaptiveResult = "melee";
        atkDef = getTempAtkDef(second, adaptive);
    } else if (move.name == "Spectral Ire" && stats1.atk > stats1.atkR) {
        adaptive.mr = "Magical";
        adaptive.mr1 = "Melee Attack";
        adaptive.mr2 = "Ranged Defense";
        adaptiveResult = "melee";
        atkDef = getTempAtkDef(second, adaptive);
    } else if (move.name == "Transcendent Power" && gen == "Male") {
        adaptive.mr = "Melee";
        adaptive.mr1 = "Melee Attack";
        adaptive.mr2 = "Melee Defense";
        adaptiveResult = "melee";
    } atkDef = getTempAtkDef(second, move);
    if ((move.mr == "Melee" && myStatus == "burned" && !firstLoom.types.includes("Fire") && !(adaptiveResult && adaptiveResult == "ranged")) || (move.mr == "Magical" && myStatus == "cursed" && !(adaptiveResult && adaptiveResult == "melee"))) statStr = " " + myStatus.charAt(0).toUpperCase() + myStatus.slice(1);
    if (statStr2 == " Healthy" || (statStr2 == " Burned" && secondLoom.types.includes("Fire")) || (statStr2 == " Paralasis" && secondLoom.types.includes("Spark")) || ((statStr2 == " Poisoned" || statStr2 == " Diseased") && secondLoom.types.includes("Poison")) || (statStr2 == " Frozen" && secondLoom.types.includes("Ice"))) statStr2 = "";
    else if (statStr2 == " Paralasis") statStr2 = " Paralyzed";
    let atkPlus = "";
    let defPlus = "";
    let healthPlus = "";

    if (atkDef.attack.stage != 0 && !isNaN(atkDef.attack.stage)) {
        tempAtk = (atkDef.attack.stage > 0 ? "+" : "") + atkDef.attack.stage + " ";
    }
    if (atkDef.defense.stage != 0 && !isNaN(atkDef.defense.stage)) {
        tempDef = (atkDef.defense.stage > 0 ? "+" : "") + atkDef.defense.stage + " ";
    }

    //tempAtk
    if (move.mr1 == "Ranged Attack" && adaptiveResult != "melee") {
        if ((atkDef.attack.posNat == "mAttack" && atkDef.attack.mod1 > 0) || (atkDef.attack.negNat == "mAttack" && atkDef.attack.mod2 > 0)) {
            atkPlus = "+";
        }
        //Negatives
        if ((atkDef.attack.posNat == "mAttack" && atkDef.attack.mod1 < 0) || (atkDef.attack.negNat == "mAttack" && atkDef.attack.mod2 < 0)) {
            atkPlus = "-";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + atkREV2.value + " " + atkPlus + "MAtk";
        }
        else {
            tempAtk = tempAtk + atkREV1.value + " " + atkPlus + "MAtk";
        }
    }
    else if ((move.mr1 == "Melee Attack" && !(abilitys == "Sand Swap" && sandstorm.checked)) || ((move.name == "Spectral Ire" || move.name == "Transcendent Power") && adaptiveResult == "melee")) {
        if ((atkDef.attack.posNat == "attack" && atkDef.attack.mod1 > 0) || (atkDef.attack.negNat == "attack" && atkDef.attack.mod2 > 0)) {
            atkPlus = "+";
        }
        //Negatives
        if ((atkDef.attack.posNat == "attack" && atkDef.attack.mod1 < 0) || (atkDef.attack.negNat == "attack" && atkDef.attack.mod2 < 0)) {
            atkPlus = "-";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + atkEV2.value + " " + atkPlus + "Atk";           
        }
        else {
            tempAtk = tempAtk + atkEV1.value + " " + atkPlus + "Atk";
        }    
    }
    else if (move.mr1 == "Ranged Defense") {
        if ((atkDef.attack.posNat == "mDefense" && atkDef.attack.mod1 > 0) || (atkDef.attack.negNat == "mDefense" && atkDef.attack.mod2 > 0)) {
            atkPlus = "+";
        }
        //Negatives
        if ((atkDef.attack.posNat == "mDefense" && atkDef.attack.mod1 < 0) || (atkDef.attack.negNat == "mDefense" && atkDef.attack.mod2 < 0)) {
            atkPlus = "-";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defREV2.value + " " + atkPlus + "MDef";           
        }
        else {
            tempAtk = tempAtk + defREV1.value + " " + atkPlus + "MDef";
        } 
    }
    else if (move.mr1 == "Melee Defense" || (abilitys == "Sand Swap" && sandstorm.checked && move.mr1 == "Melee Attack")) {
        if ((atkDef.attack.posNat == "defense" && atkDef.attack.mod1 > 0) || (atkDef.attack.negNat == "defense" && atkDef.attack.mod2 > 0)) {
            atkPlus = "+";
        }
        //Negatives
        if ((atkDef.attack.posNat == "defense" && atkDef.attack.mod1 < 0) || (atkDef.attack.negNat == "defense" && atkDef.attack.mod2 < 0)) {
            atkPlus = "-";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defEV2.value + " " + atkPlus + "Def";           
        }
        else {
            tempAtk = tempAtk + defEV1.value + " " + atkPlus + "Def";
        } 
    }
    else if (move.mr1 == "Speed") {
        if ((atkDef.attack.posNat == "speed" && atkDef.attack.mod1 > 0) || (atkDef.attack.negNat == "speed" && atkDef.attack.mod2 > 0)) {
            atkPlus = "+";
        }
        //Negatives
        if ((atkDef.attack.posNat == "speed" && atkDef.attack.mod1 < 0) || (atkDef.attack.negNat == "speed" && atkDef.attack.mod2 < 0)) {
            atkPlus = "-";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + spdEV2.value + " " + atkPlus + "Spd";           
        }
        else {
            tempAtk = tempAtk + spdEV1.value + " " + atkPlus + "Spd";
        } 
    }

    //tempDef
    if (move.mr2 == "Ranged Attack") {
        if ((atkDef.defense.posNat == "mAttack" && atkDef.defense.mod1 > 0) || (atkDef.defense.negNat == "mAttack" && atkDef.defense.mod2 > 0)) {
            defPlus = "+";
        }
        //Negatives
        if ((atkDef.defense.posNat == "mAttack" && atkDef.defense.mod1 < 0) || (atkDef.defense.negNat == "mAttack" && atkDef.defense.mod2 < 0)) {
            defPlus = "-";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + atkREV1.value + " " + defPlus + "MAtk";
        }
        else {
            tempDef = tempDef + atkREV2.value + " " + defPlus + "MAtk";           
        } 
    }
    else if (move.mr2 == "Melee Attack" || (ability == "Sand Swap" && sandstorm.checked && move.mr2 == "Melee Defense")) {
        if ((atkDef.defense.posNat == "attack" && atkDef.defense.mod1 > 0) || (atkDef.defense.negNat == "attack" && atkDef.defense.mod2 > 0)) {
            defPlus = "+";attack
        }
        //Negatives
        if ((atkDef.defense.posNat == "attack" && atkDef.defense.mod1 < 0) || (atkDef.defense.negNat == "attack" && atkDef.defense.mod2 < 0)) {
            defPlus = "-";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + atkEV1.value + " " + defPlus + "Atk";
        }
        else {
            tempDef = tempDef + atkEV2.value + " " + defPlus + "Atk";           
        } 
    }
    else if (move.mr2 == "Melee Defense" || (move.name == "Fatal Flaw" && stats2.defR > stats2.def) || (move.name == "Transcendent Power" && adaptiveResult == "melee")) {
        if ((atkDef.defense.posNat == "defense" && atkDef.defense.mod1 > 0) || (atkDef.defense.negNat == "defense" && atkDef.defense.mod2 > 0)) {
            defPlus = "+";
        }
        //Negatives
        if ((atkDef.defense.posNat == "defense" && atkDef.defense.mod1 < 0) || (atkDef.defense.negNat == "defense" && atkDef.defense.mod2 < 0)) {
            defPlus = "-";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + defEV1.value + " " + defPlus + "Def";
        }
        else {
            tempDef = tempDef + defEV2.value + " " + defPlus + "Def";           
        } 
    }
    else if (move.mr2 == "Ranged Defense" || (move.name == "Adaptive Assault" && firstLoom.baseStats.attackR > firstLoom.baseStats.attack)) {
        if ((atkDef.defense.posNat == "mDefense" && atkDef.defense.mod1 > 0) || (atkDef.defense.negNat == "mDefense" && atkDef.defense.mod2 > 0)) {
            defPlus = "+";
        }
        //Negatives
        if ((atkDef.defense.posNat == "mDefense" && atkDef.defense.mod1 < 0) || (atkDef.defense.negNat == "mDefense" && atkDef.defense.mod2 < 0)) {
            defPlus = "-";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + defREV1.value + " " + defPlus + "MDef";
        }
        else {
            tempDef = tempDef + defREV2.value + " " + defPlus + "MDef";           
        } 
    }
    else if (move.mr2 == "Speed") {
        if ((atkDef.defense.posNat == "speed" && atkDef.defense.mod1 > 0) || (atkDef.defense.negNat == "speed" && atkDef.defense.mod2 > 0)) {
            defPlus = "+";
        }
        //Negatives
        if ((atkDef.defense.posNat == "speed" && atkDef.defense.mod1 < 0) || (atkDef.defense.negNat == "speed" && atkDef.defense.mod2 < 0)) {
            defPlus = "-";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + spdEV1.value + " " + defPlus + "Spd";
        }
        else {
            tempDef = tempDef + spdEV2.value + " " + defPlus + "Spd";          
        } 
    }
    if ((atkDef.health.posNat == "health" && atkDef.health.mod1 > 0) || (atkDef.health.negNat == "health" && atkDef.health.mod2 > 0)) {
        healthPlus = "+";
    }
    //Negatives
    if ((atkDef.health.posNat == "health" && atkDef.health.mod1 < 0) || (atkDef.health.negNat == "health" && atkDef.health.mod2 < 0)) {
        healthPlus = "-";
    }
    //Used Stat
    if (second) {
        tempHealth = tempHealth + hpEV1.value + " " + healthPlus + "HP / ";
    }
    else {
        tempHealth = tempHealth + hpEV2.value + " " + healthPlus + "HP / ";          
    } 

    if (pylons) {
        pylonDmg = pylonButton(second,true);
    }

    if (move.power == 0) {
        let str = firstLoom.name + " " + move.name + " vs. " + tempHealth + secondLoom.name + ": 0-0 (0 - 0%) -- nice move there, bud";
        document.getElementById("detailedResult").innerHTML = str;
        document.getElementById("possibleDmg").innerHTML = "Possible Damage Amounts: (0)";
        return;
    }

    let possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, undefined, second, true);
    let possibleDmg = possibleArray[0];
    let foulDamage = possibleArray[1];
    let possibleDmg2 = possibleDmg[0];
    let possibleDmg3 = possibleDmg[20];
    if (foulDamage) {
        possibleDmg2 = possibleDmg2 + foulDamage[0];
        possibleDmg3 = possibleDmg3 + foulDamage[20];
    }
    let turnCount = 0;
    let lowerPercent = (possibleDmg2 / hp * 100).toFixed(1);
    let upperPercent = (possibleDmg3 / hp * 100).toFixed(1);
    let stuffUsed = possibleDmg[21];
    stuffUsed.ability1 = (stuffUsed.ability1 == "" ? "" : " " + stuffUsed.ability1);
    stuffUsed.ability2 = (stuffUsed.ability2 == "" ? "" : " " + stuffUsed.ability2);
    stuffUsed.item1 = (stuffUsed.item1 == "" ? "" : " " + stuffUsed.item1);
    stuffUsed.item2 = (stuffUsed.item2 == "" ? "" : " " + stuffUsed.item2);
    possibleDmg.pop();
    let possibleDmgStr = "Possible Damage Amounts: (" + displayDamage(possibleArray) + ")";
    let critStr = (crit == true ? " Crit " : "");
    let str = tempAtk + stuffUsed.item1 + stuffUsed.ability1 + statStr + " " + firstLoom.name + " " + critStr + move.name + stuffUsed.extra1 + " vs. " + tempHealth +
        tempDef + stuffUsed.item2 + stuffUsed.ability2 + stuffUsed.extra2 + statStr2 + " " + secondLoom.name + stuffUsed.weather + ": " + possibleDmg2 + "-" + possibleDmg3 + " (" + lowerPercent + " - " + upperPercent + "%) -- ";

    let hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, true)[1];

    document.getElementById("possibleDmg").innerHTML = possibleDmgStr;

    let addedDmg = 0;

    if (ice) {
        addedDmg = 10;
        /*if (halfIce) addedDmg = 6.25;

        if (types[secondLoom.types[0].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (types[secondLoom.types[0].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5;
        }
        if (secondLoom.types.includes("Fire")) {
            addedDmg *= 0.5;
            if (halfIce) addedDmg *= 0;
        }
        if (secondLoom.types.includes("Ice")) {
            addedDmg *= 0
        }*/
    }

    if (barb > 0 && !secondLoom.levitate) {
        if (barb == 1) {
            addedDmg += 12.5;
        } else if (barb == 2) {
            addedDmg += 1 / 6 * 100;
        } else if (barb == 3) {
            addedDmg += 25;
        }
    }

    let tickDamage = adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[0];
    tickDamage = tickDamage + Math.floor(maxHP * addedDmg / 100);
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[1];
    
    let OHKOs = [];
    let tickOHKOs = [];
    let THKOs = [];
    let TRHKOs = [];

    if (pylonDmg && pylonDmg.length == possibleDmg.length) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = possibleDmg[i] + pylonDmg[i];
        }
    }

    if (foulDamage && foulDamage.length == possibleDmg.length) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = possibleDmg[i] + foulDamage[i];
        }
    }

    for (let i = 0; i < possibleDmg.length; i++) {
        if (possibleDmg[i] >= hp) {
            OHKOs.push(possibleDmg[i]);
        }
        if (possibleDmg[i] + tickDamage >= hp) {
            tickOHKOs.push(possibleDmg[i]);
        }
    }

    if (tickOHKOs.length != 0) {
        let chance = (OHKOs.length / 21 * 100).toFixed(2);
        let chanceStr = qualifier + " " + chance + "% chance to OHKO";

        if (chance >= 100) {
            chanceStr = "guaranteed OHKO";
            str += chanceStr;
            document.getElementById("detailedResult").innerHTML = str;
            return;
        } else {
            chance = (tickOHKOs.length / 21 * 100).toFixed(2);
            chanceStr = qualifier + " " + chance + "% chance to OHKO";
            if (chance >= 100) {
                chanceStr = "guaranteed OHKO";
            }
        }
        str += chanceStr + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    counter = 1;
    hp = hp - tickDamage;

    if (move.knockOff) {
        item = "";
    }

    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg2 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg2.length - 1) {
        for (let i = 0; i < possibleDmg2.length; i++) {
            possibleDmg2[i] = possibleDmg2[i] + foulDamage[i];
        }
    }
    
    counter = 0;
    
    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg3 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg3.length - 1) {
        for (let i = 0; i < possibleDmg3.length; i++) {
            possibleDmg3[i] = possibleDmg3[i] + foulDamage[i];
        }
    }

    counter = 1;

    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg4 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg4.length - 1) {
        for (let i = 0; i < possibleDmg4.length; i++) {
            possibleDmg4[i] = possibleDmg4[i] + foulDamage[i];
        }
    }

    counter = 0;

    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg5 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg5.length - 1) {
        for (let i = 0; i < possibleDmg5.length; i++) {
            possibleDmg5[i] = possibleDmg5[i] + foulDamage[i];
        }
    }

    turnCount = 1;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount)[1];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            if (possibleDmg[i] + possibleDmg2[j] >= hp) {
                THKOs.push(possibleDmg[i] + possibleDmg2[j]);
            }
        }
    }

    if (THKOs.length != 0) {
        let chance = (THKOs.length / 441 * 100).toFixed(2);
        let chanceStr = qualifier + " " + chance + "% chance to 2HKO";
        if (chance >= 100) chanceStr = "guaranteed 2HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 2;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            for (let k = 0; k < possibleDmg3.length; k++) {
                if (possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k] >= hp) {
                    TRHKOs.push(possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k]);
                }
            }
        }
    }

    if (TRHKOs.length != 0) {
        let chance = (TRHKOs.length / 9261 * 100).toFixed(2);
        let chanceStr = qualifier + " " + chance + "% chance to 3HKO";
        if (chance >= 100) chanceStr = "guaranteed 3HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 3;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[0] + possibleDmg2[0] + possibleDmg3[0] + possibleDmg4[0] >= hp) {
        let FHKO = "guaranteed 4HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    } else if (possibleDmg[20] + possibleDmg2[20] + possibleDmg3[20] + possibleDmg4[20] >= hp) {
        let FHKO = "possible 4HKO";

        str += FHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 4;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[0] + possibleDmg2[0] + possibleDmg3[0] + possibleDmg4[0] + possibleDmg5[0] >= hp) {
        let FIHKO = "guaranteed 5HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    } else if (possibleDmg[20] + possibleDmg2[20] + possibleDmg3[20] + possibleDmg4[20] + possibleDmg5[20] >= hp) {
        let FIHKO = "possible 5HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    let badMove = "don't even bother, low damage";
    str += badMove;

    document.getElementById("detailedResult").innerHTML = str;
}

function isStab(userTypes, move) {
    if (userTypes.primary == move.type || userTypes.secondary == move.type) {
        return true;
    }
    return false;
}

function getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, hitConfirmer = false, level, ul = false, second = false, detailed = false, withoutSlapDown = true, takeSecondaryType = false, foulHit = false, shardSurge = false, pylons = false) {
    if (move.power == 0 && detailed) return [0];
    if (move.power == 0) return 0;

    let bothTypes = getTypes(second);
    let types1 = bothTypes.firstLoom;
    let types2 = bothTypes.secondLoom;
    let multi = 1;
    let effectiveness;
    let dmg;
    let foulDmg = 0;
    let tempType = move.type;
    let tempPower = movePower;
    let tempAtk;
    let tempDef;
    let tempStats;
    if (hits && !hitConfirmer) hits = hits.charAt(0);
    let gen1 = gender1.value;
    let gen2 = gender2.value;
    let stats1;
    let stats2;
    let boosts1;
    let boosts2;
    let theStats1;
    let theStats2;
    if (second) {
        stats1 = {stars: stars2.value, atk: statAtk2.innerHTML, def: statDef2.innerHTML, atkR: statAtkR2.innerHTML, defR: statDefR2.innerHTML, spd: statSpd2.innerHTML, hpPercent: percentHP2.value, totalHP: totalHP2.innerHTML, repeat: repeating2.value};
        boosts1 = [atkStages2.value, defStages2.value, atkRStages2.value, defRStages2.value, spdStages2.value];
        stats2 = {stars: stars1.value, atk: statAtk1.innerHTML, def: statDef1.innerHTML, atkR: statAtkR1.innerHTML, defR: statDefR1.innerHTML, spd: statSpd1.innerHTML, hpPercent: percentHP1.value, totalHP: totalHP1.innerHTML, repeat: repeating1.value};
        boosts2 = [atkStages1.value, defStages1.value, atkRStages1.value, defRStages1.value, spdStages1.value];
        theStats1 = trueStats2;
        theStats2 = trueStats1;
    } else {
        stats1 = {stars: stars1.value, atk: statAtk1.innerHTML, def: statDef1.innerHTML, atkR: statAtkR1.innerHTML, defR: statDefR1.innerHTML, spd: statSpd1.innerHTML, hpPercent: percentHP1.value, totalHP: totalHP1.innerHTML, repeat: repeating1.value};
        boosts1 = [atkStages1.value, defStages1.value, atkRStages1.value, defRStages1.value, spdStages1.value];
        stats2 = {stars: stars2.value, atk: statAtk2.innerHTML, def: statDef2.innerHTML, atkR: statAtkR2.innerHTML, defR: statDefR2.innerHTML, spd: statSpd2.innerHTML, hpPercent: percentHP2.value, totalHP: totalHP2.innerHTML, repeat: repeating2.value};
        boosts2 = [atkStages2.value, defStages2.value, atkRStages2.value, defRStages2.value, spdStages2.value];
        theStats1 = trueStats1;
        theStats2 = trueStats2;
    }
    let ability1 = (second == false ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let ability2 = (second == false ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    let typeModAbility1 = findTypeModAbility(ability1);
    let typeModAbility2 = findTypeModAbility(ability2);
    let btl1 = (second == false ? enteredBtl2.checked : enteredBtl1.checked);
    let btl2 = (second == false ? enteredBtl1.checked : enteredBtl2.checked);
    let wall = (second == false ? wall2.checked : wall1.checked);
    let shield = (second == false? shield2.checked : shield1.checked);
    let shale = (second == false ? shale2.checked : shale1.checked);
    let seasoned = (second == false? seasoned2.checked : seasoned1.checked);
    let stat1 = (second == false ? status1.value : status2.value);
    let stat2 = (second == false ? status2.value : status1.value);
    let itemA = (second == false ? item1.value : item2.value);
    let itemB = (second == false ? item2.value : item1.value);
    let tempItem;
    let isDouble = (singleDouble.value == "singles" ? false : true);
    let guardian = (second == false ? guardian2.checked : guardian1.checked);
    let tagTeam = (second == false ? tagTeam1.checked : tagTeam2.checked);
    let basicCare = (second == false? basicCare2.checked : basicCare1.checked);
    let archmageOne = (second == false ? archmage1.checked : archmage2.checked);
    let archmageTwo = (second == false ? archmage2.checked : archmage1.checked);
    let lipidOne = (second == false ? lipid2.checked : lipid1.checked);
    let lipidTwo = (second == false? lipid1.checked : lipid2.checked);
    let possibleDmg = [];
    let possibleFoulDmg;
    let stuffUsed = { ability1: "", ability2: "", item1: "", item2: "", extra1: "", extra2: "", weather: ""};
    let adaptive = { mr: "", mr1: "", mr2: ""};
    let bees = (second == false ? iceTrap2.checked : iceTrap1.checked);
    let pylon = (second == false ? pylon2.checked : pylon1.checked);
    if (pylons) pylon = false;
    let boastAttack = 0;

    let immuneBoostCheck1 = (second == false ? immuneAbilityBoost1.checked : immuneAbilityBoost2.checked);
    let immuneBoostCheck2 = (second == false ? immuneAbilityBoost2.checked : immuneAbilityBoost1.checked);

    if (pylons) {
        ability1 = "None";
        itemA = "None";
        tempPower = 40;
    }

    if (loom1.name == "Mammolten" && ability1 == "Eruption" && immuneBoostCheck1) {
        types1.secondary = "Fire";
        stuffUsed.ability1 = ability1;
    }
    if (loom2.name == "Mammolten" && ability2 == "Eruption" && immuneBoostCheck2) {
        types2.secondary = "Fire";
        stuffUsed.ability2 = ability2;
    }

    if (move.name == "Fatal Flaw") {
        if (theStats2.defR > theStats2.def) {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Melee Defense";
        } else {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
        }
        tempStats = getTempAtkDef(second, adaptive);
    } else if (move.name == "Spectral Ire") {
        if (theStats1.atk > theStats1.atkR) {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Melee Attack";
            adaptive.mr2 = "Ranged Defense";
        } else {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
        }
        tempStats = getTempAtkDef(second, adaptive);
    } else if (move.name == "Transcendent Power") {
        if (gen1 == "Male") {
            adaptive.mr = "Melee";
            adaptive.mr1 = "Melee Attack";
            adaptive.mr2 = "Melee Defense";
        } else {
            adaptive.mr = "Magic";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
        }
        tempStats = getTempAtkDef(second, adaptive);
    } else tempStats = getTempAtkDef(second, move, ability1, ability2);
    tempAtk = tempStats.attack;
    tempDef = tempStats.defense;

    if (pylons) {
        tempAtk.atk = calculateStat(100, 0, tempDef.level, 5, undefined, "none", "none", "None", tempAtk.mod1, tempAtk.mod2);
        level = tempDef.level;
    }    

    if (move.name == "Tsunami Drop" || move.name == "Body Throw") {
        tempPower = getTripRootPower(loom2.weight);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Boo!") {
        tempPower = getSpeedPower(stats1.spd, stats2.spd, "fast");
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Meteor Launch") {
        tempPower = getSpeedPower(stats1.spd, stats2.spd, "slow");
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Loyalty") tempPower = 90;

    if (move.name == "Surprise!" && loom1.name == "Bungo") {
        if (repeat == 2) {
            tempPower = 100;
            stuffUsed.ability1 = "Bitty";
            stuffUsed.extra1 += " (" + tempPower + " BP)";
        } else if (repeat == 3) {
            tempPower = 180;
            stuffUsed.ability1 = "Itty";
            stuffUsed.extra1 += " (" + tempPower + " BP)";
        }
    }

    if (loom2.name == "Bungo" && ability2 == "Split") {
        if (stats2.repeat == 2) stuffUsed.ability2 = "Bitty";
        else if (stats2.repeat == 3) stuffUsed.ability2 = "Itty"
    }

    if ((ability1 == "Nullify") || 
       (ability1 == "Annihilation")) {
        ability2 = "None";
        stuffUsed.ability1 = ability1;
    }
    if ((ability2 == "Nullify") || 
       (ability2 == "Bully" && loom2.height > loom1.height)) {
        ability1 = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Moratorium") {
        itemB = "None";
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Moratorium") {
        itemA = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Barkenstein" && (tempType == "Melee" || tempType == "Basic") && loom2.types.includes("Spirit")) stuffUsed.ability1 = ability1;

    if (loom1.name == "Lacergen" && itemA.includes("Data")) {
        types1.secondary = itemA.slice(0,-5);
        stuffUsed.item1 = itemA;
    }

    if (loom2.name == "Lacergen" && itemB.includes("Data")) {
        types2.secondary = itemB.slice(0,-5);
        stuffUsed.item2 = itemB;
    }

    if (move.name == "Elemental Claws" && itemA.includes("Data")) {
        tempType = itemA.slice(0,-5);
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if ((ability2 == "Rejuvenator") ||
        ((ability2 == "Vigor" || ability2 == "Elegance") && immuneBoostCheck2) ||
        (ability2 == "Sand Swap" && sandstorm.checked) ||
        (ability2 == "Soul Fortification" && stats2.hpPercent < 50)) {
        stuffUsed.ability2 = ability2;
    }

    if (((ability1 == "Vigor" || ability1 == "Elegance") && immuneBoostCheck1) ||
        (ability1 == "Sand Swap" && sandstorm.checked) ||
        (ability1 == "Soul Fortification" && stats1.hpPercent < 50) ||
        (ability1 == "Brainfreeze" && stat2 == "frozen")) {
        stuffUsed.ability1 = ability1;
    }

    if (move.name == "Shard Surge" && !shardSurge) {
        let water = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, foulHit, "Water");
        let crystal = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, foulHit, "Crystal");

        if (water > crystal) tempType = "Water";
        stuffUsed.extra1 += " (" + tempType + ")";
    } else if (move.name == "Shard Surge" && shardSurge) tempType = shardSurge;

    /*if (move.name == "Tri-Elemental Slash" && !shardSurge) {
        let fire = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, foulHit, "Fire");
        let spark = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, foulHit, "Spark");
        let ice = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, foulHit, "Ice");
        let highest = Math.max(fire,spark,ice);

        if (highest == fire) tempType = "Fire"
        else if (highest == spark) tempType = "Spark";
        else if (highest == ice) tempType = "Ice";
        stuffUsed.extra1 += " (" + tempType + ")";
    } else if (move.name == "Tri-Elemental Slash" && shardSurge) tempType = shardSurge;*/

    if (move.name == "Chemical Breath") {
        if (types1.secondary != "None") {
            tempType = types1.secondary;
            stuffUsed.extra1 += " (" + tempType + ")";
        }
    }

    if (move.name == "Climate Shot") {
        if (rain.checked) tempType = "Water";
        else if (acidRain.checked) tempType = "Poison";
        else if (chocolateRain.checked) tempType = "Food";
        else if (sandstorm.checked) tempType = "Earth";
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if (move.name == "Tri-Elemental Slash") {
        tempType = elemental;
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if (move.name == "Swarm" || move.name == "Necromancy") {
        swarm = parseInt(swarm.charAt(0));
        tempPower = Number(tempPower) + Number(tempPower) / 4 * swarm;
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Starbreaker") {
        tempPower = Number(tempPower) - (stats1.stars - 1) * 20;
        stuffUsed.extra1 += " (" + tempPower + " BP)"; 
    }

    if (move.name == "Choke") {
        tempPower = Math.max(Math.round(tempPower * stats2.hpPercent / 100), 40);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.statBuff) {
        if (move.name == "Blessed Blade") {
            tempPower = Number(tempPower) + 20 * countBoosts(boosts1);
        } else if (move.name == "The Flood") {
            tempPower = Number(tempPower) + 15 * countBoosts(boosts1);
        }
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }


    //Base ------------------------------------

    dmg = Math.floor(2 * level / 5) + 2;

    //Power ----------------------------------------

    if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }
    else if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type2 && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }
    if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type3 && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Dimwitted") {
        multi *= 1.5;
        itemA = "None";
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Dimwitted") {
        itemB = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Galvanize" && tempType == "Basic") {
        tempType = "Spark";
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }
    if (ability1 == "Toxicity" && move.mr == "Melee") {
        tempType = "Poison";
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }
    if (ability1 == "Your Meowjesty" && tempType == "Basic") {
        tempType = "Air";
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Apparition" && tempType == "Basic") {
        tempType = "Spirit";
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Luminosity" && tempType == "Dark") {
        tempType = "Light";
        multi *= 1.3;
        stuffUsed.ability1 = ability1
    }

    if (move.name == "Chaotic Bolt" && stat2 != "healthy") {
        if (stat2 == "paralasis") {
            tempType = "Spark";
            stuffUsed.extra1 += " (" + tempType + ")";
        } else if (stat2 == "enraged" && withoutSlapDown) {
            multi *= 1.5;
            stuffUsed.extra1 += " (" + tempPower * 2 + " BP)";
        } else if (stat2 == "burned" || stat2 == "poisoned" || stat2 == "diseased") {
            multi *= 1.25;
            stuffUsed.extra1 += " (" + tempPower * 1.25 + " BP)";
        }
    }

    if (((move.name == "Wind Shear" && parseInt(stats1.spd) > parseInt(stats2.spd) && !btl1)) ||
       (((move.name == "Retribution" || move.name == "Counter Punch"/* || move.name == "Icefall"*/) && parseInt(stats1.spd) < parseInt(stats2.spd) && !btl1))) {
        multi *= 2;
        stuffUsed.extra1 += " (" + tempPower * 2 + " BP)";
    }

    if ((ability1 == "Fire Up") && immuneBoostCheck1) {
        if (tempType == typeModAbility1.typeModifier.type) {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }

    if ((ability1 == "Chlorokinesis" && immuneBoostCheck1 && tempType == "Mind" && withoutSlapDown) ||
       (ability1 == "True Power" && stats1.hpPercent <= 20)) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Envy" && itemA == "None") || 
       (ability1 == "Brute Force" && move.secondaryEffect == true) ||
       (ability1 == "Gloomy" && tempType == "Dark") ||
       (ability1 == "Overbite" && move.bite) ||
       (ability1 == "Vengeance" && (parseInt(stats1.spd) < parseInt(stats2.spd) || (btl1 && withoutSlapDown))) ||
       (ability1 == "Sand Surge" && sandstorm.checked) ||
       (ability1 == "Vocalist" && move.sound) ||
       (ability1 == "Air Current" && stats1.hpPercent == 100 && tempType == "Air") ||
       (ability1 == "Chef" && (loom2.types.includes("Food") || chocolateRain.checked)) ||
       (ability1 == "Pugilist" && move.punch) ||
       (ability1 == "Bubble Blaster" && loom2.types.includes("Air")) ||
       (ability1 == "Rain Power" && rain.checked) ||
       (ability1 == "Savage" && !isStab(types1, { type: tempType })) ||
       (ability1 == "Eruption" && immuneBoostCheck1 && tempType == "Fire") ||
       (ability1 == "Soul Link" && immuneBoostCheck1) ||
       (ability1 == "Kindling" && stat2 == "burned")) {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Cardinal Sins" && parseInt(stats1.spd) > parseInt(stats2.spd)) {
        multi *= 1.4;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Destructive Anger" && stat1 == "enraged") ||
       (ability1 == "Filament" && immuneBoostCheck1 && tempType == "Light") ||
       ((ability1 == "Battery Charge" || ability1 == "Amp It Up") && immuneBoostCheck1 && tempType == "Spark") ||
       (ability1 == "Thermal Energy" && immuneBoostCheck1 && (tempType == "Spark" || tempType == "Fire")) ||
       (ability1 == "High Value Target" && immuneBoostCheck1) ||
       (ability1 == "Oasis Deity" && sandstorm.checked && tempType == "Water") ||
       (ability1 == "Opportunist" && stat2 != "healthy")) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Covetous" && itemB != "None") ||
       (ability1 == "Nitelite" && tempType == "Light")) {
        multi *= 1.25;
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Gloomy" && tempType == "Dark") {
        multi *= 1.3;
        stuffUsed.ability2 = ability2;
    }

    if ((ability1 == "Rapier" && move.priority) ||
       (ability1 == "Slash Expert" && move.slash) ||
       (ability1 == "Grounded" && immuneBoostCheck1 && (loom2.types.includes("Air") || ability2 == "Levitate"))) {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

     if (ability1 == "Chanting" && move.sound) {
        let chanting = 1;
        if (repeat == 2) {
            chanting = 1.5;
            multi *= 1.5;
        } else if (repeat > 2) {
            chanting = 1.5 + 0.1 * (repeat - 2);
            multi *= chanting;
        }
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if (move.name == "Snow Roller") {
        tempPower = Number(tempPower) * 2 ** (snowball - 1);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (ability1 == "Mental Momentum") {
        let chanting = Math.min((1 + 0.1 * (repeat - 1)), 1.3);
        multi *= chanting;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if (ability1 == "Confidence") {
        let chanting = 1 + 0.1 * (repeat - 1);
        multi *= chanting;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if (ability1 == "Courteous" && tempPower >= 100) {
        multi *= 0.75;
        stuffUsed.ability1 = ability1;
    }

    if ((itemA == "Champion Belt" && move.mr == "Melee") ||
        (itemA == "Magic Wand" && move.mr == "Magic")) {
        multi *= 1.1;
        stuffUsed.item1 = itemA;
    }

    if ((itemA == "Lucky Pebble" && tempType == "Earth") ||
       (itemA == "Battery" && tempType == "Spark") ||
       (itemA == "Ice Pack" && tempType == "Ice") ||
       (itemA == "Used Timber" && tempType == "Fire") ||
       (itemA == "Bubblegum" && tempType == "Food") ||
       (itemA == "Small Sprout" && tempType == "Plant") ||
       (itemA == "Delicate Wing" && tempType == "Insect") ||
       (itemA == "Pretty Seashell" && tempType == "Water") ||
       (itemA == "Perfect Alloy" && tempType == "Metal") ||
       (itemA == "Crooked Talon" && tempType == "Beast") ||
       (itemA == "Moon Charm" && tempType == "Dark") ||
       (itemA == "Refractive Prism" && tempType == "Light") ||
       (itemA == "Decorative Fan" && tempType == "Air") ||
       (itemA == "Homemade Plush" && tempType == "Basic") ||
       (itemA == "Refined Crystal" && tempType == "Crystal") ||
       (itemA == "Imbued Relic" && tempType == "Mind") ||
       (itemA == "Studded Fang" && tempType == "Mythic") ||
       (itemA == "Questionable Sludge" && tempType == "Poison") ||
       (itemA == "Gauze Wrap" && tempType == "Melee") ||
       (itemA == "Conductor's Baton" && move.sound) ||
       (itemA == "Spirit Jar" && tempType == "Spirit")) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    if (itemA == "Magical Jelly" && withoutSlapDown && move.mr == "Magic") {
        if (ability1 == "Jelly Enhancer") {
            multi *= 1.6;
            stuffUsed.ability1 = ability1;
        }else multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    if (itemA.includes(tempType) && itemA.includes("Taffy") && (withoutSlapDown || ability1 == "Trick or Treat") && !foulHit) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
        if (ability1 == "Trick or Treat") stuffUsed.ability1 = ability1;
    }

    if (itemB != "None" && move.knockOff == true && (withoutSlapDown || ability2 == "Ward") && !(itemB.includes("Rune"))) {
        multi *= 2;
        stuffUsed.item2 = itemB;
        stuffUsed.ability2 = (ability2 == "Ward" ? ability2 : stuffUsed.ability2);
    }

    if (((move.name == "Hex" || move.name == "Hexblade" || move.name == "Hex Punch") && stat2 != "healthy") ||
        (move.name == "Soulfire" && stat2 == "cursed") ||
        (move.name == "Just Desserts" && stats1.hpPercent < 50) ||
        (move.name == "Toxic Bomb" && (stat2 == "poisoned" || stat2 == "diseased")) ||
        (move.name == "Pursuit" && btl1) ||
        (move.name == "Night Night" && stat2 == "asleep")) {
        multi *= 2;
        stuffUsed.extra1 += " (" + (tempPower * 2) + " BP)";
    }

    if ((move.name == "Flame Rattle" && (stat2 == "burned" || stat2 == "frozen")) ||
        (move.name == "Ferocious Onslaught" && btl1)) {
        multi *= 1.5;
        stuffUsed.extra1 += " (" + (tempPower * 1.5) + " BP)";
    }

    if ((ability2 == "Courteous" && tempPower >= 100) ||
        (ability2 == "Pecking Order" && tempPower <= 60)) {
        multi *= 0.75;
        stuffUsed.ability2 = ability2;
    }

    if ((ability2 == "Exoskeleton" && move.mr == "Melee") ||
        (ability2 == "Royal Decree" && parseInt(stats1.spd) > parseInt(stats2.spd))) {
        multi *= 0.7;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Fur Coat" && move.contact && ability1 != "Outboxer") {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Jab Cross" && move.punch) {
        multi *= 0.7;
    }
    /*if (foulHit) {
        multi *= 0.25;
    }*/

    if (tagTeam && isDouble) {
        multi *= 1.5;
        stuffUsed.extra1 += " (Combo Support)"
    }

    if (rain.checked && tempType == "Water") {
        multi *= 1.25;
        stuffUsed.weather += " in Rain";
    }
    if (rain.checked && tempType == "Fire") {
        multi *= 0.5;
        stuffUsed.weather += " in Rain";
    }
    if (acidRain.checked && tempType == "Poison") {
        multi *= 1.25;
        stuffUsed.weather += " in Acid Rain";
    }
    if (chocolateRain.checked && (tempType == "Food")) {
        multi *= 1.25;
        stuffUsed.weather += " in Chocolate Rain";
    }
    if (darkExpansion.checked && tempType == "Dark") {
        multi *= 1.5;
        stuffUsed.weather += " in Darkness Expansion";
    }
    if (darkExpansion.checked && tempType == "Light" && withoutSlapDown) {
        multi *= 0.5;
        stuffUsed.weather += " in Darkness Expansion";
    }
    if (tempType == "Dark" && lightOrb.checked && withoutSlapDown) {
        multi *= 0.5;
        stuffUsed.weather += " with Light Orb";
    }

    tempPower = pokeRound(tempPower * multi);
    multi = 1;

    if (ability1 == "Delicate" && tempPower <= 60) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }

    tempPower = pokeRound(tempPower * multi);
    multi = 1;

    battleAdjustments(move, ability1, ability2, stuffUsed, tempAtk, tempDef, boastAttack, tempType, immuneBoostCheck1, immuneBoostCheck2, crit, stat2, withoutSlapDown, hitConfirmer, foulHit, stats1, stats2);

    //Attack -------------------------------------------

    if ((crit && ability2 != "Fortified") && tempAtk.stage < 0) {
        tempAtk.atk = calculateStat(tempAtk.base, tempAtk.equip, tempAtk.level, tempAtk.stars, undefined, tempAtk.posNat, tempAtk.negNat, tempAtk.name, tempAtk.mod1, tempAtk.mod2);
    }

    if (ability2 == "Apathetic" || ability2 == "Ignorant" || ability2 == "Calm") {
        tempAtk.atk = calculateStat(tempAtk.base, tempAtk.equip, tempAtk.level, tempAtk.stars, undefined, tempAtk.posNat, tempAtk.negNat, tempAtk.name, tempAtk.mod1, tempAtk.mod2);
        stuffUsed.ability2 = ability2;
    }
    if (archmageOne) {
        multi *= 1.2;
        stuffUsed.weather += " with Archmage";
    }
    if (ability1 == "Corruption" && move.mr == "Melee") {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }
    if ((ability1 == "Trump Card" && stat1 != "healthy" && move.mr == "Melee") ||
        (ability1 == "Dauntless" && stat1 != "healthy" && move.mr == "Magic") ||
        (ability1 == "Bandit" && stats1.hpPercent < 50 && move.mr1 == "Melee Defense")) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    if ((move.mr1 == "Melee Attack" && ability1 == "Hidden Strength")) {
        multi *= 2;
        stuffUsed.ability1 = ability1
    }
    if ((itemA == "Cursed Cloak" && move.mr1 == "Ranged Defense") ||
        (itemA == "Enchanted Sapphire" && ((move.mr == "Magic" && adaptive.mr != "Melee") || adaptive.mr == "Magic")) ||
        (itemA == "Enchanted Ruby" && ((move.mr == "Melee" && adaptive.mr != "Magic") || adaptive.mr == "Melee"))) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }

    tempAtk.atk = pokeRound(tempAtk.atk * multi);
    multi = 1;

    //Defense ----------------------------------------------------

    if (((crit && ability2 != "Fortified") || move.name == "Precision Dart" || move.name == "Piercing Ice") && tempDef.stage > 0) {
        tempDef.def = calculateStat(tempDef.base, tempDef.equip, tempDef.level, tempDef.stars, undefined, tempDef.posNat, tempDef.negNat, tempDef.name, tempDef.mod1, tempDef.mod2);
    }
    if (ability1 == "Apathetic" || ability1 == "Ignorant" || ability1 == "Calm" || (ability1 == "Nihil" && !withoutSlapDown)) {
        tempDef.def = calculateStat(tempDef.base, tempDef.equip, tempDef.level, tempDef.stars, undefined, tempDef.posNat, tempDef.negNat, tempDef.name, tempDef.mod1, tempDef.mod2);
        stuffUsed.ability1 = ability1;
    }
    if (lipidOne) {
        multi *= 1.1;
        stuffUsed.weather += " with Lipid Scale";
    }
    if (ability2 == "Spell Shield" && (move.mr == "Magic" || adaptive.mr2 == "Ranged Defense")) {
        multi *= 2;
        stuffUsed.ability2 = ability2;
    }
    if ((ability2 == "Misery Guard" && stat2 != "healthy" && move.mr2 == "Melee Defense") ||
        (ability2 == "Bandit" && stats2.hpPercent < 50 && move.mr2 == "Melee Defense")) {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if ((itemB == "Gold Laminate" && loom2.finalEvo == false) ||
        (itemB == "Cursed Cloak" && move.mr2 == "Ranged Defense")) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }

    tempDef.def = pokeRound(tempDef.def * multi);
    multi = 1;

    dmg = Math.floor(Math.floor(dmg * tempAtk.atk / tempDef.def * tempPower) / 50) + 2;

    if (isDouble && move.aoe == true) {
        multi *= 0.75;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Crit and Random -----------------------------

    if (crit && ability2 != "Fortified") {
        if (ability1 == "Marksman") {
            multi *= 2.25;
            stuffUsed.ability1 = ability1;
        }
        else multi *= 1.5;
    }
    if (crit && ability2 == "Fortified") stuffUsed.ability2 = ability2;

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //STAB ---------------------------------

    if (isStab(types1, { type: tempType }) && ability1 == "Routine") {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }
    else if (isStab(types1, { type: tempType }) && !pylons) {
        multi *= 1.5;
    }
    else if (ability1 == "Harlequin") {
        multi *= 1.25;
        stuffUsed.ability1 = ability1;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Type -------------------------------

    let spiteWeak = 1;

    if (types[types2.primary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        if (ability2 == "Apex" && types2.primary == "Beast") stuffUsed.ability2 = ability2;
        else if (ability2 == "Spiteful") {
            multi *= 0.5;
            stuffUsed.ability2 = ability2;
        }
        else multi *= 2;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        if (ability2 == "Apex" && types2.secondary == "Beast") stuffUsed.ability2 = ability2;
        else if (ability2 == "Spiteful") {
            multi *= 0.5;
            stuffUsed.ability2 = ability2;
        }
        else multi *= 2;
    }
    if (types[types2.primary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        if (ability2 == "Apex" && types2.primary == "Beast") stuffUsed.ability2 = ability2;
        else if (ability2 == "Spiteful") {
            multi *= 2;
            spiteWeak *= 2;
            stuffUsed.ability2 = ability2;
        }
        else multi *= 0.5;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        if (ability2 == "Apex" && types2.secondary == "Beast") stuffUsed.ability2 = ability2;
        else if (ability2 == "Spiteful") {
            multi *= 2;
            spiteWeak *= 2;
            stuffUsed.ability2 = ability2;
        }
        else multi *= 0.5;
    }
    if (types[types2.primary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !((((ability1 == "Grounded" && immuneBoostCheck1) || itemB == "Heavy Blanket") && loom2.types.includes("Air"))) && !(ability1 == "Barkenstein" && (tempType == "Melee" || tempType == "Basic") && types2.primary == "Spirit")) {
        /*if (ability2 == "Spiteful") {
            multi *= 2;
            spiteWeak *= 2;
            stuffUsed.ability2 = ability2;
            if (spiteWeak > 2) multi = 2;
        }
        else */multi *= 0;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !((((ability1 == "Grounded" && immuneBoostCheck1) || itemB == "Heavy Blanket") && loom2.types.includes("Air"))) && !(ability1 == "Barkenstein" && (tempType == "Melee" || tempType == "Basic") && types2.secondary == "Spirit")) {
        /*if (ability2 == "Spiteful") {
            multi *= 2;
            spiteWeak *= 2;
            stuffUsed.ability2 = ability2;
            if (spiteWeak > 2) multi = 2;
        }
        else */multi *= 0;
    }
    if (itemB == "Jetpack" && tempType == "Earth" && withoutSlapDown) {
        multi *= 0;
        stuffUsed.item2 = itemB;
    }
    if (ability2 == "Absorber" && ((tempType == "Basic" && !(itemB.includes("Data"))) || (itemB.includes("Data") && tempType == itemB.slice(0,-5)))) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }
    if (move.typeModifier != undefined && (types2.primary == move.typeModifier.type || types2.secondary == move.typeModifier.type)) {
        multi *= move.typeModifier.modifier;
    }
    if ((ability1 == "Bird of Prey" && tempType == "Air" && loom2.types.includes("Air")) ||
        (ability1 == "Helios" && tempType == "Fire" && loom2.types.includes("Earth"))) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Illogical" && tempType == "Mind" && loom2.types.includes("Mind") && ability2 != "Spiteful") {
        multi *= 4;
        stuffUsed.ability1 = ability1;
    }

    effectiveness = multi;

    if ((types1.primary == "Food" || types1.secondary == "Food") && seasoned) {
        multi *= 1.3;
        stuffUsed.extra2 += " Seasoned"
    }
    if (move.name == "Pursuit") {
        if (ability2 == "Escapist") {
            multi = 0;
            effectiveness = 0;
            stuffUsed.ability2 = ability2;
        }/* else {
            multi = 1;
            effectiveness = 1;
        }*/    
    }

    if ((ability1 == "Nullify") ||
        (ability1 == "Annihilation") ||
        (ability1 == "Grounded" && immuneBoostCheck1 && ability2 == "Levitate")) {
        typeModAbility2 = undefined;
    }

    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type && typeModAbility2.powerMod == false && !(tempType == "Earth" && itemB == "Heavy Blanket")) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }
    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type2 && typeModAbility2.powerMod == false && !(tempType == "Earth" && itemB == "Heavy Blanket")) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }

    if (((ability1 == "Rule of Cool" || ability1 == "Jester Privilege") && effectiveness < 1) ||
        (ability1 == "Almagest" && tempType == types1.secondary && effectiveness >= 2)) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Overwhelm" && effectiveness > 1) {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Status ------------------------

    if ((stat1 == "cursed" && move.mr == "Magic" && ability1 != "Dauntless" && types1.primary != "Spirit" && types1.secondary != "Spirit") ||
        (stat1 == "burned" && move.mr == "Melee" && move.name != "Ill Will" && ability1 != "Trump Card" && types1.primary != "Fire" && types1.secondary != "Fire")) multi *= 0.75;

    if (ability1 == "Crispy" && stat1 == "burned" && types1.primary != "Fire" && types1.secondary != "Fire") {
        multi *= 1.75;
        stuffUsed.ability1 = ability1;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Other --------------------------------

    if (itemB.includes(tempType) && itemB.includes("Candy Cube") && (withoutSlapDown || ability2 == "Everlasting") && !foulHit) {
        multi *= 0.5;
        stuffUsed.item2 = itemB;
    }

    if ((effectiveness > 1 && ability2 == "Unbreakable")  ||
        (ability2 == "Guardian" && immuneBoostCheck2) ||
        ((ability2 == "Resilience" || ability2 == "Refreshed Resilience") && effectiveness < 1)) {
        multi *= 0.75;
        stuffUsed.ability2 = ability2;
    }
    if (effectiveness > 1 && itemB == "Defensive Jelly" && withoutSlapDown) {
        if (ability2 == "Jelly Enhancer") {
            multi *= 0.4;
            stuffUsed.ability2 = ability2;
        } else multi *= 0.7;
        stuffUsed.item2 = itemB;
    }
    if (effectiveness > 1 && shale && ability1 != "Bypass") {
        multi *= 0.5;
        stuffUsed.weather += " through Shale";
    }

    if (itemA == "Lethal Ornament") {
        multi *= 1.3;
        stuffUsed.item1 = itemA;
    }

    if (itemA == "Empowered Ring" && effectiveness > 1) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    if (ability1 == "The Flock") {
        let flock = (second == false ? owol1.value : owol2.value);
        flock = (1 + 0.2 * flock);
        multi *= flock;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + tempPower * flock + " BP)";
    }

    if (ability1 == "Alacrity") {
        if (immuneBoostCheck1) multi *= 0.8;
        else multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if (isDouble && basicCare) {
        multi *= 0.75;
    }
    /*if (stat2 == "vulnerable") {
        multi *= 1.5;
        stuffUsed.extra2 += " Vulnerable";
    }*/
    if (ability1 == "Enfeeble" && stats1.hpPercent < 50) {
        multi *= 0.5;
        stuffUsed.ability1 = ability1;
    }
    if ((ability2 == "Sand Screen" && sandstorm.checked) ||
        (ability2 == "Mischievous" && countBoosts(boosts1) > 0)) {
        multi *= 0.7;
        stuffUsed.ability2 = ability2;
    }
    if ((ability2 == "Gaseous Form" && move.contact) ||
        (ability2 == "Naughty List" && (loom1.name.includes("-Awakened") || loom1.name.includes("-Mother")))) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }
    if (wall && move.mr == "Melee" && ability1 != "Bypass") {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Crystal Wall";
    }
    if (shield && move.mr == "Magic" && ability1 != "Bypass") {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Magical Shield";
    }

    /*if (ability1 == "Confidence") {
        multi *= confidenceBoost(loom1.baseStats, loom2.baseStats);
        stuffUsed.ability1 = ability1;
    }*/
    if ((ability2 == "Sugar Coating" && stats2.hpPercent == 100 && withoutSlapDown && !bees && !pylon && !foulHit) ||
        (ability2 == "Warden" && !pylon && btl1 && withoutSlapDown && !foulHit)) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Bulwark" && (move.priority || (ability1 == "Ice Stream" && tempType == "Ice" && stats1.hpPercent == 100) || (ability1 == "Superluminal" && tempType == "Light" && stats1.hpPercent == 100) || (ability1 == "Speedy Recovery" && move.drain))) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }

    if (itemB == "Used Crayons" || itemB == "Dark Chocolate") stuffUsed.item2 = itemB;

    if (ability1 == "Jab Cross" && move.punch && !foulHit && !(isDouble && move.aoe == true) && !move.hits) {
        if (detailed) {
            let foulArray = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, true);
            foulDmg = foulArray[0];
            possibleFoulDmg = foulArray[1];
        } else {
            foulDmg = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, false, level, ul, second, detailed, withoutSlapDown, takeSecondaryType, true);
        }
        stuffUsed.ability1 = ability1;
    }

    if (ul && !pylons) {
        multi *= 0.9;
    }

    dmg = (dmg * multi);
    multi = 1;

    let multiHits = [];
    let multiDmg = 0;
    if (move.hits && !hitConfirmer) {
        hits = hits.charAt(0);
        if (move.name == "Double Bite") hits = 2;
        if (move.name == "Quad Strike") hits = 4;
        for (let i = 0; i < hits - 1; i++) {
            multiHits.push(getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, elemental, swarm, snowball, true, level, ul, second, detailed, false));
        }
        stuffUsed.extra1 += " (" + hits + " hits)";
        multiHits.forEach(num => multiDmg += num);
    }

    if (detailed && !hitConfirmer) {
        let numb;
        if (move.hits) {
            if (move.name == "Double Bite") hits = 2;
            if (move.name == "Quad Strike") hits = 4;
        }
        for (let i = 0.9; i < 1.11; i += 0.01) {
            let sum = 0;
            numb = i.toFixed(3);
            if (itemA == "Strength Jelly" && withoutSlapDown && Math.floor(dmg * numb) < Math.floor(parseInt(stats2.totalHP) * 1/4)){
                if (ability1 == "Jelly Enhancer") {
                    multi = 3;
                    if (i == 0.9) stuffUsed.ability1 = ability1;
                } else multi = 2;
                if (i == 0.9) stuffUsed.item1 = itemA;
            }
            multiHits.forEach(num => sum += Math.floor(num * numb));
            possibleDmg.push(Math.floor(dmg * multi * numb + sum));
            multi = 1;
        }
        if (foulHit) {
            return [dmg, possibleDmg];
        }
        if (shardSurge) return dmg;
        possibleDmg[21] = stuffUsed;
        return [possibleDmg, possibleFoulDmg];
    }

    if (!ul && !detailed) multi *= 1.1;
    dmg = Math.floor(dmg * multi);
    multi = 1;

    if (itemA == "Strength Jelly" && withoutSlapDown && dmg < Math.floor(parseInt(stats2.totalHP) * 1/4)){
        ability1 == "Jelly Enhancer" ? multi *= 3 : multi *= 2;
    }
    dmg = (Math.floor(dmg * multi + multiDmg));

    if (shardSurge) return dmg;

    return dmg + foulDmg;
}

function getTempAtkDef(second, mr, ability1, ability2) {
    let posNat1 = document.getElementById("posNat1").value;
    let negNat1 = document.getElementById("negNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let negNat2 = document.getElementById("negNat2").value;

    let tempAtk;
    let tempDef;
    let tempHealth;
    //tempAtk
    if (mr.mr1 == "Ranged Attack") {
        if (second) {
            tempAtk = { atk: atkR2, base: baseAtkR2.value, equip: equipment2.mAttack, name: "AttackR", posNat: posNat2, negNat: negNat2, stage: parseInt(atkRStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: atkR1, base: baseAtkR1.value, equip: equipment1.mAttack, name: "AttackR", posNat: posNat1, negNat: negNat1, stage: parseInt(atkRStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }    
    }
    else if (mr.mr1 == "Melee Attack") {
        if (second) {
            tempAtk = { atk: atk2, base: baseAtk2.value, equip: equipment2.attack, name: "AttackM", posNat: posNat2, negNat: negNat2, stage: parseInt(atkStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: atk1, base: baseAtk1.value, equip: equipment1.attack, name: "AttackM", posNat: posNat1, negNat: negNat1, stage: parseInt(atkStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }
    }
    else if (mr.mr1 == "Ranged Defense") {
        if (second) {
            tempAtk = { atk: defR2, base: baseDefR2.value, equip: equipment2.mDefense, name: "DefenseR", posNat: posNat2, negNat: negNat2, stage: parseInt(defRStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: defR1, base: baseDefR1.value, equip: equipment1.mDefense, name: "DefenseR", posNat: posNat1, negNat: negNat1, stage: parseInt(defRStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }
    }
    else if (mr.mr1 == "Melee Defense") {
        if (second) {
            tempAtk = { atk: def2, base: baseDef2.value, equip: equipment2.defense, name: "DefenseM", posNat: posNat2, negNat: negNat2, stage: parseInt(defStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: def1, base: baseDef1.value, equip: equipment1.defense, name: "DefenseM", posNat: posNat1, negNat: negNat1, stage: parseInt(defStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }
    }
    else if (mr.mr1 == "Speed") {
        if (second) {
            tempAtk = { atk: spd2, base: baseSpd2.value, equip: equipment2.speed, name: "Speed", posNat: posNat2, negNat: negNat2, stage: parseInt(spdStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: spd1, base: baseSpd1.value, equip: equipment1.speed, name: "Speed", posNat: posNat1, negNat: negNat1, stage: parseInt(spdStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }
    }
    else {
        tempAtk = { atk: spd2, base: baseSpd2.value, equip: equipment2.speed, name: "Speed", posNat: posNat2, negNat: negNat2, stage: parseInt(spdStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
    }
    //tempDef
    if (mr.mr2 == "Ranged Attack") {
        if (second) {
            tempDef = { def: atkR1, base: baseAtkR1.value, equip: equipment1.mAttack, name: "AttackR", posNat: posNat1, negNat: negNat1, stage: parseInt(atkRStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: atkR2, base: baseAtkR2.value, equip: equipment2.mAttack, name: "AttackR", posNat: posNat2, negNat: negNat2, stage: parseInt(atkRStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }
    else if (mr.mr2 == "Melee Attack") {
        if (second) {
            tempDef = { def: atk1, base: baseAtk1.value, equip: equipment1.attack, name: "AttackM", posNat: posNat1, negNat: negNat1, stage: parseInt(atkStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: atk2, base: baseAtk2.value, equip: equipment2.attack, name: "AttackM", posNat: posNat2, negNat: negNat2, stage: parseInt(atkStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }
    else if (mr.mr2 == "Ranged Defense" && !(mr.name == "Fatal Flaw" && trueStats2.defR > trueStats2.def)) {
        if (second) {
            tempDef = { def: defR1, base: baseDefR1.value, equip: equipment1.mDefense, name: "DefenseR", posNat: posNat1, negNat: negNat1, stage: parseInt(defRStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: defR2, base: baseDefR2.value, equip: equipment2.mDefense, name: "DefenseR", posNat: posNat2, negNat: negNat2, stage: parseInt(defRStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }
    else if (mr.mr2 == "Melee Defense" || (mr.name == "Fatal Flaw" && trueStats2.defR > trueStats2.def)) {
        if (second) {
            tempDef = { def: def1, base: baseDef1.value, equip: equipment1.defense, name: "DefenseM", posNat: posNat1, negNat: negNat1, stage: parseInt(defStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: def2, base: baseDef2.value, equip: equipment2.defense, name: "DefenseM", posNat: posNat2, negNat: negNat2, stage: parseInt(defStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }
    else if (mr.mr2 == "Speed") {
        if (second) {
            tempDef = { def: spd1, base: baseSpd1.value, equip: equipment1.speed, name: "Speed", posNat: posNat1, negNat: negNat1, stage: parseInt(spdStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: spd2, base: baseSpd2.value, equip: equipment2.speed, name: "Speed", posNat: posNat2, negNat: negNat2, stage: parseInt(spdStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }
    else {
        tempDef = { def: spd2, base: baseSpd2.value, equip: equipment2.speed, name: "Speed", posNat: posNat2, negNat: negNat2, stage: parseInt(spdStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
    }

    if (second) {
        tempHealth = { health: hp2, base: baseHP2, equip: equipment2.health, name: "Health", posNat: posNat1, negNat: negNat1, level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
    } else {
        tempHealth = { health: hp1, base: baseHP1, equip: equipment1.health, name: "Health", posNat: posNat2, negNat: negNat2, level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
    }

    if (ability1 == "Sand Swap" && sandstorm.checked && mr.mr1 == "Melee Attack") {
        if (second) {
            tempAtk = { atk: def2, base: baseDef2.value, equip: equipment2.defense, name: "DefenseM", posNat: posNat2, negNat: negNat2, stage: parseInt(defStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        } else {
            tempAtk = { atk: def1, base: baseDef1.value, equip: equipment1.defense, name: "DefenseM", posNat: posNat1, negNat: negNat1, stage: parseInt(defStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        }
    }
    if (ability2 == "Sand Swap" && sandstorm.checked && mr.mr2 == "Melee Defense") {
        if (second) {
            tempDef = { def: atk1, base: baseAtk1.value, equip: equipment1.attack, name: "AttackM", posNat: posNat1, negNat: negNat1, stage: parseInt(atkStages1.value), level: level1.value, stars: stars1.value, mod1: nat1Mod1.value, mod2: nat2Mod1.value };
        } else {
            tempDef = { def: atk2, base: baseAtk2.value, equip: equipment2.attack, name: "AttackM", posNat: posNat2, negNat: negNat2, stage: parseInt(atkStages2.value), level: level2.value, stars: stars2.value, mod1: nat1Mod2.value, mod2: nat2Mod2.value };
        }
    }

    return { attack: tempAtk, defense: tempDef, health: tempHealth };
}

function getTypes(second) {
    let obj = {};
    obj.firstLoom = {};
    obj.secondLoom = {};

    if (second) {
        obj.firstLoom.primary = primaryTypeDropdown2.value;
        obj.firstLoom.secondary = secondaryTypeDropdown2.value;

        obj.secondLoom.primary = primaryTypeDropdown1.value;
        obj.secondLoom.secondary = secondaryTypeDropdown1.value;

        return obj;
    }

    obj.firstLoom.primary = primaryTypeDropdown1.value;
    obj.firstLoom.secondary = secondaryTypeDropdown1.value;

    obj.secondLoom.primary = primaryTypeDropdown2.value;
    obj.secondLoom.secondary = secondaryTypeDropdown2.value;

    return obj;
}

function pylonButton(second = false, calc = false, statRefresh) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let level = level1.value;
    let maxHP = hp2;
    let pylonDmg;
    if (second) {
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        maxHP = hp1;
    }

    pylonDmg = getMultiplier(firstLoom, secondLoom, findMove("Shock"), "50", false, undefined, undefined, undefined, undefined, undefined, false, level, undefined, second, true, true, undefined, undefined, undefined, true)[0];
    pylonDmg.pop();
    for (let i = 0; i < pylonDmg.length; i++) {
        pylonDmg[i] = Math.min(pylonDmg[i], Math.floor(maxHP / 5));
    }
    let lowerPylon = (pylonDmg[0] / maxHP * 100).toFixed(1);
    let upperPylon = (pylonDmg[20] / maxHP * 100).toFixed(1);
    if (second) {
        pylonCalc1.innerHTML = lowerPylon + "-" + upperPylon + "%";
    } else {
        pylonCalc2.innerHTML = lowerPylon + "-" + upperPylon + "%";
    }
    if (pylon1.checked) pylonCalc1.style.visibility = "visible";
    else pylonCalc1.style.visibility = "hidden";
    if (pylon2.checked) pylonCalc2.style.visibility = "visible";
    else pylonCalc2.style.visibility = "hidden";

    if (calc) return pylonDmg;
    if (!statRefresh) detailedReport();
}

function countBoosts(boost) {
    let count = 0;
    for (let i = 0; i < boost.length; i++) {
        if (boost[i] == "--" || boost[i] < 0) boost[i] = 0;
        else count = count + parseInt(boost[i]);
    }
    return count;
}

function confidenceBoost(loom1, loom2) {
    let totalStats1 = loom1.hp + loom1.attack + loom1.defense + loom1.attackR + loom1.defenseR + loom1.speed;
    let totalStats2 = loom2.hp + loom2.attack + loom2.defense + loom2.attackR + loom2.defenseR + loom2.speed;

    if (totalStats1 < totalStats2) return 1.3;

    return 1;
}

function getTripRootPower(weight) {
    if (weight < 10) {
        return 20;
    }
    if (weight < 25) {
        return 40;
    }
    if (weight < 50) {
        return 60;
    }
    if (weight < 100) {
        return 80;
    }
    if (weight < 200) {
        return 100;
    }
    return 120;
}

function getSpeedPower(spd1, spd2, ver) {
    if (ver == "fast") {
        if (spd1 / spd2 < 0.5) return 40;
        if (spd1 / spd2 < 1 && spd1 / spd2 >= 0.5) return 60;
        if (spd1 / spd2 < 1.5 && spd1 / spd2 >= 1) return 80;
        if (spd1 / spd2 < 2 && spd1 / spd2 >= 1.5) return 100;
        return 120;
    } else if (ver == "slow") {
        if (spd1 / spd2 < 0.5) return 120;
        if (spd1 / spd2 < 1 && spd1 / spd2 >= 0.5) return 100;
        if (spd1 / spd2 < 1.5 && spd1 / spd2 >= 1) return 80;
        if (spd1 / spd2 < 2 && spd1 / spd2 >= 1.5) return 60;
        return 40;
    }    
}

function specializationCount(second) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);

    let counter = 0;
    if (second) {
        if (moveOne2.name == "(No Move)") counter++;
        if (moveTwo2.name == "(No Move)") counter++;
        if (moveThree2.name == "(No Move)") counter++;
        if (moveFour2.name == "(No Move)") counter++;
        return counter;
    }
    if (moveOne1.name == "(No Move)") counter++;
    if (moveTwo1.name == "(No Move)") counter++;
    if (moveThree1.name == "(No Move)") counter++;
    if (moveFour1.name == "(No Move)") counter++;
    return counter;
}

function displayDamage(damage) {
    if (damage[1]) {
        return "1st Hit: " + damage[0].join(", ") + "; 2nd Hit: " + damage[1].join(", ");
    }
    damage.pop();
    return damage[0].join(", ");
}

function adjustHP(loom1, loom2, hp1, hp2, item, ability, status, second = false, counter, OHKO, onlyIncludeIceTrap = false) {
    let newHP = 0;
    let multi = 1;
    let ice = iceTrap2.checked;
    let pylons = pylon2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];
    let sap = { attacker: sapPlant1.checked, defender: sapPlant2.checked };
    let pestilence = pestilence2.checked;
    let quicksand = quicksand2.checked;
    let buzzolen = buzzolen2.checked;
    let sorrow = sorrow2.checked;
    let softWater = softWater2.checked;
    let disease = diseased2.value;
    let hazardString = "";

    if (second) {
        loom1 = loomians[pokeDropdown2.value.toLowerCase()];
        loom2 = loomians[pokeDropdown1.value.toLowerCase()];
        ice = iceTrap1.checked;
        pylons = pylon1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        sap = { attacker: sapPlant2.checked, defender: sapPlant1.checked };
        pestilence = pestilence1.checked;
        quicksand = quicksand1.checked;
        buzzolen = buzzolen1.checked;
        sorrow = sorrow1.checked;
        softWater = softWater1.checked;
        disease = diseased1.value;
    }
    disease = parseInt(disease);

    if (ice) {
        /*if (loom2.types.includes("Fire") || halfIce) {
            if (loom2.types.includes("Fire") && halfIce){
            } else {
                hazardString += "halved icicle trap and "
            }
        }*/
        //else {
            hazardString += "bee summon and ";
        //}
        if (onlyIncludeIceTrap) {
            hazardString = hazardString.substr(0, hazardString.length - 5);
            hazardString = " after " + hazardString;
            return [hp1, hazardString];
        }
    }

    if (pylons) hazardString += "pylons and ";

    if (barb > 0  && !loom2.levitate) {
        if (barb == 1) {
            hazardString += "1 layer of barbs and ";
        } else if (barb == 2) {
            hazardString += "2 layers of barbs and ";
        } else if (barb == 3) {
            hazardString += "3 layer of barbs and ";
        }
    }

    if (ability == "Rejuvenator" || item == "Sponge") {
        multi *= 1.25;
    }

    if (status == "burned" && !loom2.types.includes("Fire") && ability != "Aqua Body") multi *= 0.5;
    
    if (!loom2.types.includes("Plant") && sap.defender == true) {
        newHP += Math.floor(hp1 * 1 / 10);
        hazardString += "parasitic seeds damage and ";
    }

    if (pestilence) {
        newHP += Math.floor(hp1 * 1 / 12);
        hazardString += "wrap damage and ";
    }

    if (quicksand) {
        newHP += Math.floor(hp1 * 1 / 12);
        hazardString += "frostbite damage and ";
    }

    if (buzzolen) {
        newHP += Math.floor(hp1 * 1 / 12);
        hazardString += "gehenna damage and ";
    }

    if (sorrow) {
        newHP += Math.floor(hp1 * 1 / 12);
        hazardString += "sorrow damage and ";
    }

    if (!OHKO) {
        if (!loom1.types.includes("Plant") && sap.attacker == true) {
            newHP -= Math.floor(hp2 * 1 / 10 * multi);
            hazardString += "parasitic seeds recovery and ";
        }
        if (softWater) {
            newHP -= Math.floor(hp1 * 1 / 16 * multi);
            hazardString += "life roots recovery and "
        }
        if (item == "Used Crayons") {
            newHP -= Math.floor(hp1 * 1 / 16 * multi);
            hazardString += "used crayons recovery and ";
        }
        if (item == "Dark Chocolate") {
            if (loom2.types.includes("Food")) {
                newHP -= Math.floor(hp1 * 1 / 16 * multi);
                hazardString += "dark chocolate recovery and ";
            } else {
                newHP += Math.floor(hp1 * 1 / 16);
                hazardString += "dark chocolate damage and ";
            }
        }
        if (chocolateRain.checked) {
            newHP -= Math.floor(hp1 * 1 / 16 * multi);
            hazardString += "chocolate rain recovery and ";
        }

        if (sandstorm.checked && ability == "Desert Body") {
            newHP -= Math.floor(hp1 * 1 / 10);
            hazardString += "sandstorm recovery and ";
        }

        if (acidRain.checked && ability == "Healthy Toxins") {
            newHP -= Math.floor(hp1 * 1 / 10);
            hazardString += "acid rain recovery and ";
        }

        if (rain.checked && (ability == "Fish Outta Water" || ability == "Hydration")) {
            newHP -= Math.floor(hp1 * 1 / 10);
            hazardString += "rain recovery and ";
        }

        if ((status == "poisoned" || status == "diseased") && ability == "Detox") {
            newHP -= Math.floor(hp1 * 1 / 16);
            hazardString += "detox recovery and ";
        }

        if (ability == "Stitching") {
            newHP -= Math.floor(hp1 * 1 / 16);
            hazardString += "stitching recovery and ";
        }
    }
    
    let otherAbility = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    if (status == "burned" && !loom2.types.includes("Fire") && ability != "Aqua Body") {
        if (otherAbility == "First Degree Burns") newHP += Math.floor (hp1 * 1 / 6);
        if (ability == "Crispy") newHP += Math.floor (hp1 * 1 / 4);
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "burn damage and ";
    }

    if (acidRain.checked && !loom2.types.includes("Poison") && ability != "Healthy Toxins") {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "acid rain damage and ";
    }

    if (sandstorm.checked && !loom2.types.includes("Earth") && !loom2.types.includes("Metal") && ability != "Desert Body" && ability != "Oasis Deity" && ability != "Dust Storm") {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "sandstorm damage and ";
    }

    if (status == "poisoned" && !loom2.types.includes("Poison") && !loom2.types.includes("Metal") && !loom2.types.includes("Crystal") && ability != "Detox") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "poison damage and ";
    }
    if (status == "diseased" && !loom2.types.includes("Poison") && !loom2.types.includes("Metal") && !loom2.types.includes("Crystal") && ability != "Detox") {
        newHP += Math.floor(hp1 * (disease + counter) / 16);
        hazardString += "disease damage and ";
    }

    if (status == "frozen" && otherAbility == "Brainfreeze" && !loom2.types.includes("Ice")) {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "brainfreeze damage and ";
    }

    if (status == "frozen" && otherAbility == "Hypothermia" && !loom2.types.includes("Ice")) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "hypothermia damage and ";
    }

    hazardString = hazardString.substr(0, hazardString.length - 5);
    if (hazardString.length == 0) return [newHP, hazardString];
    hazardString = " after " + hazardString;
    return [newHP, hazardString];
}

function checkIceTrap(move, l, u, hp, hpPercent, item, ability, ability2, stat1, stat2) {
    if (l == 0 && u == 0) return "";
    if (move.drain || (ability == "Leech" && move.type == "Insect") || (ability == "Vampire" && move.type == "Dark") || (move.name == "Chaotic Bolt" && stat2 == "marked") || (ability == "The Fungus" && move.mr == "Magic") || ((ability == "Hirudotherapy" || ability == "Chlorobite" || item == "Plastic Fangs") && move.bite) || (ability == "Soul Fortification" && hpPercent < 50 && move.mr == "Melee")) {
        let drain = move.drain;
        if ((ability == "The Fungus" && move.mr == "Magic") || (ability == "Soul Fortification" && hpPercent < 50 && move.mr == "Melee") || (ability == "Chlorobite" && move.bite)) {
            if (!drain) drain = 1/4;
            else drain += 1/4;
        } else if ((ability == "Leech" && move.type == "Insect") || (ability == "Vampire" && move.type == "Dark") || (move.name == "Chaotic Bolt" && stat2 == "marked") || (ability == "Hirudotherapy" && move.bite)) {
            if (!drain) drain = 1/2;
            else drain += 1/2;
        }
        if (item == "Plastic Fangs" && move.bite) {
            if (!drain) drain = 1/4;
            else drain += 1/4;
        }
        let drainStat = (stat1 == "burned" ? 0.5 : 1);
        let drainMI = (item == "Drain Orb" ? 1.2 : 1);
        let drainMA = ((ability == "Rejuvenator" || item == "Sponge") ? 1.25 : 1); 
        let drainL = Math.max(Math.floor(l * drain * drainMI * drainMA * drainStat), 1);
        let drainU = Math.max(Math.floor(u * drain * drainMI * drainMA * drainStat), 1);
        if (ability2 == "Tainted") return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recoil damage)";
        return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recovered)";
    }
    if (move.recoil) {
        if (ability == "Tenacious" || ability == "Direct Combatant") return "";
        let recoilL = (Math.max(Math.floor(l * move.recoil), 1));
        let recoilU = Math.max(Math.floor(u * move.recoil), 1);
        return " (" + (recoilL / hp * 100).toFixed(1) + " - " + (recoilU / hp * 100).toFixed(1) + "% recoil damage)";
    }
    /*if (move.name == "Flail") {
        return " (" + (Math.floor(hp / 8) / hp * 100).toFixed(1) + "% recoil damage)";
    }*/
    else return "";
}

function findMove(name) {
    for (let move in moves) {
        if (moves[move].name == name) {
            return moves[move];
        }
    }
}

function findTypeModAbility(name) {
    for (let ability in typeModAbilities) {
        if (typeModAbilities[ability].name == name) {
            return typeModAbilities[ability];
        }
    }
    return undefined;
}

function pokeRound(val) {
    if (val - Math.floor(val) > 0.5) {
        return Math.ceil(val);
    }
    return Math.floor(val);
}

function decode(txt) {
    let decoded = pako.inflate(atob(txt), { to: "string" });
    let json = JSON.parse(decoded);
    return json;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
