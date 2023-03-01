let obiwanAttack = 25
let anakinAttack = 35

if (obiwanAttack > anakinAttack) {
    console.log('obiwan has a better attack than anakin.')
} else if (anakinAttack > obiwanAttack) {
    console.log('anakin has a better attack than obiwan.')
} else {
    console.log('anakin and obiwan have the same attack.')
}

let obiwanHealth = 100
let obiwanDefense = 30

//check to see if obiwan can survive an attack from anikan
//if he can, health to be decreased by anakins attack and then his new health logged
//otherwise, obiwan was killed by anakin

if (obiwanHealth > anakinAttack) {
    obiwanHealth = obiwanHealth - anakinAttack
 console.log("obiwan health is now" + obiwanHealth)
} else {
    console.log("obiwan was killed by anakin")
} if (obiwanHealth - anakinAttack > 0) {
    obiwanHealth -= anakinAttack
    console.log("obiwan took damage but survived with obiwanHealth" )
} else {
    console.log("obiwan has been slain")
} 
for(let i = 0; i < 5; i++){
 } if(obiwanHealth > anakinAttack - obiwanDefense) {
        obiwanHealth -= anakinAttack - obiwanDefense
        console.log("obiwan is now + obiwanHealth")
    } else {
        console.log("obiwan was slain by Anakin, becoming even more powerful than Anakin can imagine.")
    
}
while(obiwanHealth >0) {
    obiwanHealth -= ( anakinAttack - obiwanDefense)
    console.log(`obiwan health is now at ${obiwanHealth}`)
}

{console.log('obiwan is part of the living force now')
}