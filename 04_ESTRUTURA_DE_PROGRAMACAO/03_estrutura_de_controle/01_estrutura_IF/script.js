let isRico = false;

let din = 300;
if(din > 1000){
        isRico = true
}

let idade = 25;
if (idade < 30){
    if (isRico){
        console.log("Vc é rico");
        console.log("Pode Entrar");
    } else{
        console.log("Sua pobre")
        console.log("Pode ir embora")
    }
} else{
    console.log("Pode ir embora")
}