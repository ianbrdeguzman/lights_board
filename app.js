const container = document.querySelector('.container');
const numberOfSquares = 1000;
const colorArray = [
    '#c0392b', 
    '#e74c3c', 
    '#9b59b6', 
    '#8e44ad',
    '#2980b9',
    '#3498db',
    '#1abc9c',
    '#16a085',
    '#27ae60',
    '#2ecc71',
    '#f1c40f',
    '#f39c12',
    '#e67e22',
    '#d35400',
    '#ecf0f1',
    '#bdc3c7',
    '#95a5a6',
    '#7f8c8d',
    '#34495e',
    '#2c3e50',  
];

const changeColor = (square) => {
    const color = randomColor();
    
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 10px 0 ${color}`
};

const removeColor = (square) => {
    const defaultColor = '#272727'
    square.style.backgroundColor = defaultColor;
    square.style.boxShadow = 'none'
}

const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
};


for (let i = 0; i < numberOfSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        changeColor(square);
    });

    square.addEventListener('mouseout', () => {
        removeColor(square);
    })
}