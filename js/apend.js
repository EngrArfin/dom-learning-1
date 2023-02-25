const mainContainer = document.getElementById('main-container')


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= ' My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText= ' Birinay Khabo';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText= 'Muri ';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText= 'Salat';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer,appendChild(section)

// innerDirectly

const sectionDress = document.createElement('section');
section.innerText =`
<h1> My Dress Section </h1>
<ul>
    <li>Pant</li>
    <li>Panjami</li>
    <li>T-shary</li>
</ul> 
`
mainContainer.appendChild(sectionDress);