
  require([
    "esri/map",
    "esri/dijit/HomeButton",
    "esri/arcgis/utils",
    "dojo/_base/array",
    "esri/layers/FeatureLayer",
    "esri/dijit/Scalebar",
    "esri/dijit/PopupTemplate",
    "esri/dijit/LayerSwipe",
    "dojo/parser",
    "dojo/domReady!"
], function(Map, HomeButton, utils, array, FeatureLayer, Scalebar, PopupTemplate, LayerSwipe) {

    map = new Map("map", {
        basemap: "topo",
        center: [-88.89, 40.04],
        zoom: 3
    });

    //Imagery Dry Year 2012
    var popupTemplate = new PopupTemplate({
        title: "2012 NDVI Value",
        description: "NDVI Value = {GRIDCODE}"
    });

    var featureLayer2 = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2012/FeatureServer/0",{
        infoTemplate: popupTemplate
    });

    map.addLayer(featureLayer2);

    //Imagery Wet Year 2015
    var popupTemplate2015 = new PopupTemplate({
        title: "Imagery Wet Year 2015",
        description: "NDVI Value = {GRIDCODE}"
    });
    var featureLayer3 = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2015/FeatureServer/0", {
        infoTemplate: popupTemplate2015   
    }); 

    map.addLayer(featureLayer3);


    var swipeWidget = new LayerSwipe({
        theme: "LayerSwipe",
        map: map,
        layers: [featureLayer3],
        tool: "vertical",
        toolClip: 9,
        toolOffsetTop: null,
        toolOffsetLeft: null
    }, "layerSwiper");
    swipeWidget.startup();

     
  //Land Cover
  var popupTemplateLandCover = new PopupTemplate({
        title: "Land Cover",
        description: "Land Cover Type = {Land_cover}"
     });
  
  var featureLayer = new FeatureLayer("http://services.arcgis.com/8df8p0NlLFEShl0r/arcgis/rest/services/Land_Cover/FeatureServer/0",{
    infoTemplate: popupTemplateLandCover
  });
    
    
    map.addLayer(featureLayer);




    var home = new HomeButton({
        map: map
    }, "HomeButton");
    home.startup();

});