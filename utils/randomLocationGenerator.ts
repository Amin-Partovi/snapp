const MinLat=35.65;
const MaxLat=35.75;
const MinLng=51.20;
const MaxLng=51.45;

function randomLocationGenerator(){
    return ({lat: Math.random() * (MaxLat - MinLat + 1) + MinLat, lng:Math.random() * (MaxLng - MinLng + 1) + MinLng})
}

export default randomLocationGenerator;