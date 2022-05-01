const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


document.getElementById('from-select').addEventListener('change', function(){
	const iconFiltred = [];
	let valueSelected = this.value;
	generaFiltred(valueSelected , iconFiltred);
	console.log(this.value);
	document.querySelector('.row').innerHTML = '';
	if(valueSelected !=null){
		for(let i in iconFiltred){
			genera(i,iconFiltred);
		}
	}
	if(valueSelected == 'all'){
		for(let i in icone){
			genera(i,icone);
		}
	}
});

function genera(i, nomeArray){
	icone[i].color = getRandomColor();
	const output = `
	<div class="col col-2 mt-2 mb-5 mx-2">
    <div class="card d-flex align-items-center justify-content-center" style="width: 100%; height: 100px;border-radius: 10px;  color: ${nomeArray[i].color}; font-size: 50px;">
      <i class="${nomeArray[i].family} ${nomeArray[i].prefix}${nomeArray[i].name}"></i>
      <h5 class="card-title" style="color: black;">${nomeArray[i].name}</h5>
    </div>
  </div>`
	document.querySelector('.row').innerHTML += output;
}

for(let i in icone){
	genera(i,icone);
}

function generaFiltred (value,array){
  for (let i = 0; i < icone.length; i++) {
		if(icone[i].type == value){ 
			array.push(icone[i]);
		 } 	
	}
} 

//Bocus 1
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Bonus 2
const optionArr = ['all','animal','vegetable','user']
const form = document.querySelector('#from-select');
function printOption() {
	optionArr.forEach(element => form.appendChild(new Option(element, element)));
	
}
printOption();
