export function shipment(basicValue){ //:Double
    let shipping;
    if(basicValue < 100){
        shipping = 20;
    }
    else if(basicValue >= 100 && basicValue <= 200){
        shipping = 12;
    }
    else{
        shipping = 0;
    }
    return shipping;
}

