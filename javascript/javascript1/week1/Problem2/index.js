// housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300

//Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. 
//The garden size is 100m2. The house costs 2.500.000. //
//Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high. 
//The garden size is 70m2. This house costs 1.000.000.
//Figure out if Peter and Julia are paying too much or too little using Javascript and the formula specified above.

let length=8;

let deep=10;

let high=10;

let peterGardenSize=100;

const peterHouseVolume=length*deep*high;

const peterHousePrice=peterHouseVolume*2.5*1000+peterGgardenSize;

const peterPrice=2500000;

console.log('PRICE CALCULATION FOR Peter');
if (peterPrice<peterHousePrice) {
    console.log('Peter is paying LESS than the house price');
}
if (peterPrice= = =peterHousePrice) {
        console.log('Peter is paying EQUAL to the listed  price of the house');
} 
else {
    console.log('Peter is paying MORE than the house price');
}


/////////////////////////////////////////////////////////////////////////


let juliaHouselength=5;

let juliaHousedeep=11;

let juliaHousehigh=18;

let  juliaGardenSize=70;

const juliaHouseVolume=juliaHouselength*juliaHousedeep*juliaHousehigh;

let juliaHousePrice=juliaHouseVolume*2.5*1000+juliaGardenSize;

const juliaPrice=1000000;

console.log('Price calculation for Julia');
if (juliaPrice<juliaHousePrice) {
    console.log('Julia is paying LESS than the house price')
} 

if (juliaPrice = = = juliaHouseHousePrice) {
    console.log('Julia is paying EQUAL to the listed  price of the house');

else {
    console.log('Julia is paying MORE than the house price')


}


