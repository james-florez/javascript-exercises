// From the example
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Added content
// 1
const content1 = document.createElement('p');
content1.textContent = 'Hey I\'m red';
content1.style.color = 'red';

container.appendChild(content1)

// 2
const content2 = document.createElement('h3');
content2.textContent = "I\'m a blue h3!";
content2.style.color = 'blue';
container.appendChild(content2);

// 3
const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = 'thick solid black';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
div.appendChild(p);

container.appendChild(div);