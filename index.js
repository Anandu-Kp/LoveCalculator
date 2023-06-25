const form = document.getElementById("form");

function countChar(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != " ") {
            let char = arr[i];
            let count = 0;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] != " " && arr[j] == char) {
                    count++;
                    arr[j] = " "
                }
            }
            result.push(count);
        }
    }
    return result;
}

function calculatePercentage(arr) {
    if (arr.length <= 2) {
        return (arr[0] * 10) + arr[1];
    }
    let arr1 = [];
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        if (i == j) {
            arr1.push(arr[i]);
            break;
        }
        let k = arr[i] + arr[j];
        if (k > 9) {
            arr1.push(Math.floor(k / 10));
            arr1.push(k % 10);
        }
        else {
            arr1.push(k);
        }
    }

    return calculatePercentage(arr1)

}


function addToDocument(result) {
    const formContainer = document.getElementsByClassName("form-container")[0];
    const form = document.getElementById("form");
    const resultNode = document.createElement("div");

    const tryAgainButton = document.createElement("button");
    tryAgainButton.innerText = "TryAgain";
    tryAgainButton.id = "try-again";
    tryAgainButton.onclick = () => {
        formContainer.removeChild(resultNode);
        form.style.display = "flex";
        form.reset();
    };

    resultNode.className = "result-container";
    resultNode.innerHTML = `
                                    <h1 >${result}</h1>

                                     
                                     `;
    form.style.display = "none";
    resultNode.appendChild(tryAgainButton);
    formContainer.appendChild(resultNode);
}


function onSubmitForm(event) {
    event.preventDefault();
    const formElements = event.target;
    let name1 = formElements["name1"].value.trim();
    name1 += "love";
    let name2 = formElements["name2"].value.trim();
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    let arr = name1.split("");
    arr = arr.concat(name2.split(""));
    let counted = countChar(arr);
    const result = calculatePercentage(counted) + "%";
    addToDocument(result);

}
form.addEventListener("submit", onSubmitForm)
form.removeEventListener("click", onSubmitForm);
