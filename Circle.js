const button = document.querySelector("button");
let x, input1, input2;
const body = document.querySelector("body");

// Функция кнопки "Нарисовать"
const push2 = () => {
    y = parseInt(input1.value);
    if (y == 10) {
    
        let div = document.createElement("div")
        div.style.cssText = `
            display: grid;
            grid-template-columns: repeat(10,30px);
            margin: auto 40%; `;
        body.appendChild(div);

        for (i=0; i<100; i++) {
            x = Math.ceil(Math.random()*360);
            var circle = document.createElement("div")
            circle.classList.add("circle");
            circle.style.cssText = `
            margin: 10px auto;
            border-radius: 50%; `;
            circle.style.width = y + "px";
            circle.style.height = y + "px";
            circle.style.backgroundColor = "hsl(" + x + ", 100%, 50%)";  

            div.appendChild(circle);
        }
        
        const circlesAll = document.querySelectorAll(".circle")
        circlesAll.forEach(function (element, index, arr) {
            element.onclick = function () {
                this.remove();
            }
        })
        input2.removeEventListener("click", push2, false);
    }
}

// Функция кнопки "Нарисовать круг"
const push1 = () => {
    input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Введите диаметр круга: 10";
    input1.style.cssText = `
    margin: 10px auto;
    width: 165px;
    display: block; `;

    input2 = document.createElement("input");
    input2.type = "button";
    input2.value = "Нарисовать";
    input2.style.cssText = `
    margin: 10px auto;
    display: block; `;
    
    body.append(input1, input2);
    
    button.removeEventListener("click", push1, false);
    input2.addEventListener("click", push2, false);

    input1.addEventListener("keypress", (e) => {
        if (String.fromCharCode(e.keyCode) != '1'
            && String.fromCharCode(e.keyCode) != '0'
            ) {
            e.preventDefault();
        }
        if (input1.value.length > 1) {
            e.preventDefault();
        }
    }) 
}

button.addEventListener("click", push1, false);
