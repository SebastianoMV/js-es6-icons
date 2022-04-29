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

const iconFiltred = [];

document.getElementById('from-select').addEventListener('change', function(){
	iconFiltred.length = 0;
	let valueSelected = this.value;
	generaFiltred(valueSelected);
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
	const output = `
	<div class="col col-2 mt-2 mb-5 mx-2">
    <div class="card d-flex align-items-center justify-content-center" style="width: 100%; height: 100px;border-radius: 10px;  color: ${nomeArray[i].color}; font-size: 50px;">
      <i class="${nomeArray[i].family} ${nomeArray[i].prefix}${nomeArray[i].name}"></i>
      <h5 class="card-title" style="color: black;">${icone[i].name}</h5>
    </div>
  </div>`
	document.querySelector('.row').innerHTML += output;
}


for(let i in icone){
	genera(i,icone);
}



function generaFiltred (value){
  for (let i = 0; i < icone.length; i++) {
		if(icone[i].type == value){ 
			iconFiltred.push(icone[i]);
		 } 	
	}
  
} 


