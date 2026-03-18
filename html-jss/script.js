function printPattern(){
    let n = parseInt(document.getElementById("num").value);
    let result = "";

    for(let i = 0; i < n; i++){
        for(let j = 0; j <= i; j++){
            result += "*";
        }
        result += '\n';
    }

    document.getElementById("output").textContent = result; 
}