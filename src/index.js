module.exports=function getZerosCount(number, base) {
    let result = 0;
    let delitel = base;
    let mass = [1, 2, 3, 5, 7, 9, 11, 13];
    let mass2 = [];
    let num=0;
    let obj = {};
    let schetchik = 1;
    let itog = [];
    for (let i = 1; i < mass.length; i++) {

        if (base / mass[i] == Math.floor(base / mass[i])) {
            base /= mass[i];
            mass2.push(mass[i]);
            i = 0;
        }
        else if (i == mass.length - 1) {
            mass2.push(base);
        }
        else if (base == delitel && i == mass.length - 1)
            break;

        else if (base == 1) {
            break;
        }

    }


    if (mass2.length == 1) {
        obj[mass2[0]] = 1;
    }
    else
        for (let i = 1; i < mass2.length + 1; i++) {
            if (mass2[num] == mass2[i]) {
                schetchik++;
                continue;
            }
            else {
                obj[mass2[num]] = schetchik;
                num = i;
                schetchik = 1;
            }


        }
    for (key in obj) {
        delitel=+key;
        while (true) {
            let dop = number / delitel;
            dop = Math.floor(dop);
            result += dop;
            delitel *=+key;
            if (delitel>number) {
                break;
            }
        }
    itog.push(Math.floor(result/obj[key]));
        result=0;
    }
 if(itog.length==1)
 {return itog[0]}
 else
    for(let i=0; i<itog.length-1;i++){
        if(itog[i]<itog[i+1])
            result=itog[i];
        else result=itog[i+1];
}
    return result;

}


// console.log(getZerosCount(82410884, 29));
