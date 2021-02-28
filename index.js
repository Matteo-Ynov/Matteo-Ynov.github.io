var number;
var size;
var list;
var rainbow;
var i;
var j;
var sortingAlgorithm;
document.querySelector('input[type=range]').addEventListener('input', function rangeChange() {
    this.setAttribute('value', this.value);
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function sin_to_hex(i, phase) {
    var sin = Math.sin((Math.PI / size) * 2 * i + phase);
    var int = Math.floor(sin * 127) + 128;
    var hex = int.toString(16);

    return hex.length === 1 ? "0" + hex : hex;
}

function setup() {
    createCanvas(1000, 1000);
    number = document.getElementById("number").value;
    size = number * number;
    list = shuffle(Array.from(Array(size).keys()));
    rainbow = new Array(size);
    i = 0;
    j = 0;
    frameRate(number * 1, 5);
    sortingAlgorithm = document.getElementById("sorting").value

    for (var a = 0; a < size; a++) {
        var red = sin_to_hex(a, (0 * Math.PI * 2) / 3);
        var blue = sin_to_hex(a, (1 * Math.PI * 2) / 3);
        var green = sin_to_hex(a, (2 * Math.PI * 2) / 3);
        rainbow[a] = "#" + red + green + blue;
    }
}

function draw() {
    const offsetX = 10;
    const offsetY = 10;

    const sizeX = 500 / number;
    const sizeY = 500 / number;
    switch (sortingAlgorithm) {
        case "Selection Sort":
            min = i;
            for (var j = 0; j < len - i - 1; j++) {
                if(list[j] < list[min]) {
                    min=j; 
                }
                }
                if (min != i) {
                    let tmp = list[i]; 
                    list[i] = list[min];
                    list[min] = tmp;      
            }
        case 'Bubble Sort':
            var len = list.length;
            for (var j = 0; j < len - i - 1; j++) {
                if (list[j] > list[j + 1]) {
                    var temp = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = temp;
                }
            }
        case 'Insertion Sort':
        case 'Merge Sort':
        case 'Quick Sort':
        default:
    }


    for (let k = 0; k < Math.sqrt(size); k++) {
        for (let l = 0; l < Math.sqrt(size); l++) {
            noStroke();
            fill(rainbow[list[k * Math.sqrt(size) + l]]);
            rect(k * sizeX + offsetX, l * sizeY + offsetY, sizeX, sizeY);
        }
    }

    j++;
    if (j >= len - i - 1) {
        j = 0;
        i++;
        if (i == len) {
            i = 0;
        }
    }
}

