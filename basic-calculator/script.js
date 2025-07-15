let btns = document.querySelectorAll(".btn");
let string = "";
for (btns of btns) {
    {
        btns.addEventListener("click", function (event) {
            let inpValue = event.target.innerHTML;
            let action = event.currentTarget.dataset.action;
            if (action == "backspace") {
                string = string.slice(0, string.length - 1);
                document.querySelector("input").value = string;
            }
            else if (inpValue == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if (inpValue == 'AC') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (inpValue === "%") {
                string = string = string + "/100";
                document.querySelector('input').value = string;
            }
            else {
                string = string + inpValue;
                document.querySelector('input').value = string;
            }
        })
    }
}