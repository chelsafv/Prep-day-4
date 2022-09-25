function isKabisat(year){
    if(year%400==0){
        console.log("Kabisat");
    }else if(year%4==0 && year%100!=0){
        console.log("Kabisat")
    }else{
        console.log("Bukan Kabisat")
    }
}

isKabisat(1900);
isKabisat(2000);
isKabisat(2001);
isKabisat(2016);