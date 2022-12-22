const MinLat=35.65;
const MaxLat=35.75;
const MinLng=51.20;
const MaxLng=51.45;

function randomLocationGenerator(){
    return ({lat: Math.random() * (MaxLat - MinLat ) + MinLat, lng:Math.random() * (MaxLng - MinLng ) + MinLng})
}

export default randomLocationGenerator;