let map = L.map('map').setView([-34.612918138033976, -58.43811578328029],12.3)
 
L.tileLayer('https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i349018013!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0',{
            attribution: '&copy; Powered by Google'
}).addTo(map);
 
document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,13);
})
 
// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});
 
// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);
 
// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);
 
// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>");
       
    }
}
 
// Agregar capa en formato GeoJson
L.geoJson(garage).addTo(map);
 
var garage = L.geoJson(garage,{
    onEachFeature: popup
}).addTo(map);

L.control.locate().addTo(map);

