const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//let totalBatteries
const reducer = function (accumulator, currentValue){
                let totalBatteries=accumulator + currentValue;
                return totalBatteries;
      }

let totalBatteries=batteryBatches.reduce( reducer,0);
