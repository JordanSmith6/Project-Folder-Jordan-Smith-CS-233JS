// same as previous lab
import './general';
import { Chart, registerables } from 'chart.js';

 class NPCGenerator{
  constructor() {
    Chart.register(...registerables);
    this.npc = {
      //Race
      race: "",
      //Subrace
      subrace: "",
      //Class
      class: "",
      //Strength
      str: 0,
      //Dexterity
      dex: 0,
      //Constitutuin
      con: 0,
      //Intelligence
      int: 0,
      //Wisdom
      wis: 0,
      //Charisma
      cha: 0
    }
    //Class API
    this.classURL = "https://www.dnd5eapi.co/api/classes/";
    //Stores the Class Info
    this.classData;
    //Race API
    this.raceURL = "https://www.dnd5eapi.co/api/races/";
    //Stores the Race Info
    this.raceData;
    this.$buttonClick = 0;
    this.$chartVar;
    this.$form = document.querySelector('#GenerateForm');
    this.$statCanvas = document.querySelector('#statChart');
    this.generate = this.generate.bind(this);
    this.$form.addEventListener("Generate",this.generate);
    this.renderNPC = this.renderNPC.bind(this);
    //this.renderNPCClassInfo = this.renderNPCClassInfo.bind(this);
    //this.renderNPCRaceInfo = this.renderNPCRaceInfo.bind(this);
    //this.randomGenerator();
    this.addEventListeners();
  }
addEventListeners(){
  //this.$form.addEventListener('click',this.randomGenerator());
  this.$form.addEventListener('click',this.generate);

}

randomGenerator(){
  const classRandom = Math.floor(Math.random() * 12) + 1;
  if (classRandom == 1){
    this.npc.class = 'barbarian'
  }
  if (classRandom == 2){
    this.npc.class = 'bard'
  }
  if (classRandom == 3){
    this.npc.class = 'cleric'
  }
  if (classRandom == 4){
    this.npc.class = 'druid'
  }
  if (classRandom == 5){
    this.npc.class = 'fighter'
  }
  if (classRandom == 6){
    this.npc.class = 'monk'
  }
  if (classRandom == 7){
    this.npc.class = 'paladin'
  }
  if (classRandom == 8){
    this.npc.class = 'ranger'
  }
  if (classRandom == 9){
    this.npc.class = 'rogue'
  }
  if (classRandom == 10){
    this.npc.class = 'sorcerer'
  }
  if (classRandom == 11){
    this.npc.class = 'warlock'
  }
  if (classRandom == 12){
    this.npc.class = 'wizard'
  }
  //Used to rig rolls
  const raceRandom = Math.floor(Math.random() * 9) + 1;
  //const raceRandom = 2;
  if (raceRandom == 1){
    this.npc.race = 'dragonborn'
  }
  if (raceRandom == 2){
    this.npc.race = 'dwarf'
  }
  if (raceRandom == 3){
    this.npc.race = 'elf'
  }
  if (raceRandom == 4){
    this.npc.race = 'gnome'
  }
  if (raceRandom == 5){
    this.npc.race = 'half-elf'
  }
  if (raceRandom == 6){
    this.npc.race = 'half-orc'
  }
  if (raceRandom == 7){
    this.npc.race = 'halfling'
  }
  if (raceRandom == 8){
    this.npc.race = 'human'
  }
  if (raceRandom == 9){
    this.npc.race = 'tiefling'
  }
  this.npc.str = Math.floor(Math.random() * (18 - 3) +3);
  this.npc.dex = Math.floor(Math.random() * (18 - 3) +3);
  this.npc.con = Math.floor(Math.random() * (18 - 3) +3);
  this.npc.int = Math.floor(Math.random() * (18 - 3) +3);
  this.npc.wis = Math.floor(Math.random() * (18 - 3) +3);
  this.npc.cha = Math.floor(Math.random() * (18 - 3) +3);

  if (raceRandom == 1){
    this.npc.str = this.npc.str + 2
    this.npc.cha = this.npc.cha + 1
  }
  if (raceRandom == 2){
    this.npc.con = this.npc.con + 2
    this.npc.wis = this.npc.wis + 1
  }
  if (raceRandom == 3){
    this.npc.dex = this.npc.dex + 2
    this.npc.int = this.npc.int + 1
  }
  if (raceRandom == 4){
    this.npc.int = this.npc.int + 2
    this.npc.con = this.npc.con + 1
  }
  if (raceRandom == 5){
    this.npc.cha = this.npc.cha + 2
    const randomElfOne = Math.floor(Math.random() * 5)+1;
    if (randomElfOne == 1){this.npc.str = this.npc.str + 1}
    if (randomElfOne == 2){this.npc.dex = this.npc.dex + 1}
    if (randomElfOne == 3){this.npc.con = this.npc.con + 1}
    if (randomElfOne == 4){this.npc.int = this.npc.int + 1}
    if (randomElfOne == 5){this.npc.wis = this.npc.wis + 1}
    const randomElfTwo = Math.floor(Math.random() * 5)+1;
    if (randomElfTwo == 1){
      if(randomElfOne == randomElfTwo){const randomElfThree = Math.floor(Math.random() * 4)+1;
        if (randomElfThree == 1){this.npc.dex = this.npc.dex + 1}
        if (randomElfThree == 2){this.npc.con = this.npc.con + 1}
        if (randomElfThree == 3){this.npc.int = this.npc.int + 1}
        if (randomElfThree == 4){this.npc.wis = this.npc.wis + 1}
      }
      else this.npc.str = this.npc.str + 1}
    if (randomElfTwo == 2){if(randomElfOne == randomElfTwo){const randomElfThree = Math.floor(Math.random() * 4)+1;
      if (randomElfThree == 1){this.npc.dex = this.npc.str + 1}
      if (randomElfThree == 2){this.npc.con = this.npc.con + 1}
      if (randomElfThree == 3){this.npc.int = this.npc.int + 1}
      if (randomElfThree == 4){this.npc.wis = this.npc.wis + 1}}
    else this.npc.dex = this.npc.dex + 1}
    if (randomElfTwo == 3){if(randomElfOne == randomElfTwo){const randomElfThree = Math.floor(Math.random() * 4)+1;
      if (randomElfThree == 1){this.npc.dex = this.npc.dex + 1}
      if (randomElfThree == 2){this.npc.con = this.npc.str + 1}
      if (randomElfThree == 3){this.npc.int = this.npc.int + 1}
      if (randomElfThree == 4){this.npc.wis = this.npc.wis + 1}}
    else this.npc.con = this.npc.con + 1}
    if (randomElfTwo == 4){if(randomElfOne == randomElfTwo){const randomElfThree = Math.floor(Math.random() * 4)+1;
      if (randomElfThree == 1){this.npc.dex = this.npc.dex + 1}
      if (randomElfThree == 2){this.npc.con = this.npc.con + 1}
      if (randomElfThree == 3){this.npc.int = this.npc.str + 1}
      if (randomElfThree == 4){this.npc.wis = this.npc.wis + 1}}
    else this.npc.int = this.npc.int + 1}
    if (randomElfTwo == 5){if(randomElfOne == randomElfTwo){const randomElfThree = Math.floor(Math.random() * 4)+1;
      if (randomElfThree == 1){this.npc.dex = this.npc.dex + 1}
      if (randomElfThree == 2){this.npc.con = this.npc.con + 1}
      if (randomElfThree == 3){this.npc.int = this.npc.int + 1}
      if (randomElfThree == 4){this.npc.wis = this.npc.str + 1}}
    else this.npc.wis = this.npc.wis + 1}
  }
  if (raceRandom == 6){
    this.npc.str = this.npc.str + 2
    this.npc.con = this.npc.con + 1
  }
  if (raceRandom == 7){
    this.npc.cha = this.npc.cha + 1
    this.npc.dex = this.npc.dex + 2
  }
  if (raceRandom == 8){
    this.npc.dex = this.npc.dex + 1
    this.npc.str = this.npc.str + 1
    this.npc.con = this.npc.con + 1
    this.npc.int = this.npc.int + 1
    this.npc.wis = this.npc.wis + 1
    this.npc.cha = this.npc.cha + 1
  }
  if (raceRandom == 9){
    this.npc.cha = this.npc.cha + 2
    this.npc.int = this.npc.int + 1
  }

//console.log(this.npc)

}
generate(event){
event.preventDefault();
var classDataVar;
var raceDataVar;
this.randomGenerator()
    fetch(`${this.classURL}${this.npc.class}`)
      .then(response => response.json())
      .then(data => {
        this.classData = data;
        classDataVar = this.classData;
        //console.log(classDataVar)
        //console.log(this.classData)
        fetch(`${this.raceURL}${this.npc.race}`)
        .then(response => response.json())
        .then(data => {
          this.raceData = data;
          raceDataVar= data;
          this.renderNPC(this.raceData,this.classData)
          //console.log(this.raceData)
          //console.log(this.classData)
        }

        )
        
      })
      .catch(error => {
        alert('There was a problem getting location information!')
      });
      
      
      //console.log(raceDataVar,classDataVar)
      
}

renderNPC(raceDataInput,classDataInput){
  
  const classHTML = this.renderNPCClassInfo(classDataInput);
  //console.log(classDataInput)
  const raceHTML = this.renderNPCRaceInfo(raceDataInput);
  const combinedHTML = this.combineHtml(raceHTML,classHTML)
  document.getElementById("NPCAREA").innerHTML = combinedHTML;
  var chartData;
  var statChartConst;
  var buttonClicks = 0;
  
  //document.getElementById("chartArea").innerHTML = '<canvas id="statChart"></canvas>';
  chartData = {
    datasets: [{
        data: [this.npc.str, this.npc.dex, this.npc.con,this.npc.int,this.npc.wis,this.npc.cha], // the chart expects the values in an array in this order
        backgroundColor:[
          'rgba(255, 0, 0, 0.6)',
          'rgba(255, 244, 79, 0.6)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(0, 0, 255, 0.6)',
          'rgba(106,13,173, 0.6)',
          'rgba(251, 198, 207, 0.6)'
          

        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white'
        ],
        borderWidth: 1
    }],
    labels: [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma'

    ]
  };
 

if (this.$buttonClick > 0){
  console.log()
  this.$chartVar.data.datasets[0].data[0] = this.npc.str
  this.$chartVar.data.datasets[0].data[1] = this.npc.dex
  this.$chartVar.data.datasets[0].data[2] = this.npc.con
  this.$chartVar.data.datasets[0].data[3] = this.npc.int
  this.$chartVar.data.datasets[0].data[4] = this.npc.wis
  this.$chartVar.data.datasets[0].data[5] = this.npc.cha
  this.$chartVar.update();
}
if (this.$buttonClick == 0){
  this.$chartVar = 
  new Chart(this.$statCanvas, {
    type: 'pie',
    data: chartData,
    options: {}
  });
  this.$buttonClick = this.$buttonClick +1;
}

}
renderNPCClassInfo(classInfo){
  var profList = "";
  var invList = "";

  for (let i = 0; i < classInfo.proficiencies.length; i++){
    
    profList = profList + classInfo.proficiencies[i].name + ', '
     
  }
  for (let i = 0; i < classInfo.starting_equipment.length; i++){
     
    invList = invList + classInfo.starting_equipment[i].quantity + ' ' + classInfo.starting_equipment[i].equipment.name + ', '  
  }
  for (let i = 0; i < classInfo.starting_equipment_options.length; i++){
    
    invList = invList + classInfo.starting_equipment_options[i].desc + ', '  
  }

profList = profList.substring(0, profList.length - 2);
console.log(profList);
invList = invList.substring(0,invList.length - 2)
console.log(invList)

  return `<div>
                <h2>Class:${classInfo.name}</h2>
                <h2>Hitdice:D${classInfo.hit_die}</h2>
                <h2>Skill Choices:${classInfo.proficiency_choices[0].desc}</h2>
                <h2>Proficencies:${profList}</h2>
                <h2>Inventory:${invList}</h2>
              </div>
              `
}
renderNPCRaceInfo(raceInfo){
  var raceProf = ""
  var lang = ""
  var traits = ""
  if (raceInfo.starting_proficiencies.length > 0){
  for (let i = 0; i < raceInfo.starting_proficiencies.length; i++){
    
    raceProf = raceProf + raceInfo.starting_proficiencies[i].name + ','
  }
}
if (raceInfo.name == 'Half-Elf'){
  raceProf = raceProf + ' Two skills of youe choice.'
}
if (raceInfo.name == 'Dwarf'){
  raceProf = raceProf + ' You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.'
}   
for (let i = 0; i < raceInfo.languages.length; i++){
    
  lang = lang + raceInfo.languages[i].name + ', '

}
if (typeof raceInfo.language_options != 'undefined') {
  lang = lang + raceInfo.language_options.choose + ' of any languages. '
}
for (let i = 0; i < raceInfo.traits.length; i++){
    
  traits = traits + raceInfo.traits[i].name + ','
}



  raceProf = raceProf.substring(0, raceProf.length - 1);
lang = lang.substring(0,lang.length -2);
traits = traits.substring(0,traits.length -2);












  

  return `<div>
                <h2>Race:${raceInfo.name}</h2>
                <h2>Size:${raceInfo.size}</h2>
                <h2>Racial Proficencies:${raceProf}</h2>
                <h2>Languages:${lang}</h2>
                <h2>Traits: ${traits}</h2>
              </div>
              `
}
combineHtml(HTMLOne,HTMLTwo){

  return HTMLOne + HTMLTwo



}




 }
 window.onload = () => {new NPCGenerator();}
