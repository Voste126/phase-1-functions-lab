// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const destinationhq = 42;//new york 42th street 
    const block = Math.abs(street - destinationhq);// use math.abs to get an absolute value 
    return block;
}
//console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(street) {
    const feetPerBlock = 264;
    const distanceToHq = distanceFromHqInBlocks(street) * feetPerBlock;
    return distanceToHq;
  }
function distanceTravelledInFeet(start, destination){
    //let start;
    //let destination;
    const distanceMovedinFeet = Math.abs (destination - start) * 264;
    return distanceMovedinFeet;

}
function calculatesFarePrice(start, destination){
    const totalDistance = Math.abs(destination - start) * 264;
    let charges = 0;
    if(totalDistance <= 400){
        charges = 0;
    }else if(totalDistance > 400 && totalDistance < 2000){
        charges = Math.abs(totalDistance - 400)* 0.02;
    }else if(totalDistance >=2000 && totalDistance < 2500){
        charges = 25;
    }else{
        charges ='cannot travel that far'
    }
return charges;
}
console.log(calculatesFarePrice(50,58))