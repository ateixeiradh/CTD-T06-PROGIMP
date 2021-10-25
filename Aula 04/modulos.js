let global = 10;
export const name = "Leandro";

export function soma(a,b){
    return a+b;
}

export function subtrai(a,b){
    return subtrai2(a,b);
}

function subtrai2(a,b){
    return a-b;
}

export function reduzGlobal(){
    global = global - 1;
    console.log(global);
}

export function printGlobal(){
    console.log(global);
}