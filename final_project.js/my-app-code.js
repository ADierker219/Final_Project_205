
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
        zoom: 13
    });

    //Imagery Dry Year 2012
    var popupTemplate = new PopupTemplate({
        title: "Here Be the TITLE",
        description: "And some info about this thing like the Grid Code = {GRIDCODE}"
    });

    var featureLayer2 = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2012/FeatureServer/0",{
        infoTemplate: popupTemplate
    });

    map.addLayer(featureLayer2);

    //Imagery Wet Year 2015
    var popupTemplate2015 = new PopupTemplate({
        title: "Imagery Wet Year 2015",
        description: "And some info about this thing like the Grid Code = {GRIDCODE}"
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

    /*  
  //Aquifers
  var featureLayer3 = new FeatureLayer("https://landscape1.arcgis.com/arcgis/rest/services/USA_Aquifers/MapServer/0");

    map.addLayer(featureLayer3);




     */

    /*
  var scalebar = new Scalebar({
          map: map,
      }, "Scalebar");
          // "dual" displays both miles and kilometers
          // "english" is the default, which displays miles
          // use "metric" for kilometers
          scalebarUnit: "dual"
  });

  */

    var home = new HomeButton({
        map: map
    }, "HomeButton");
    home.startup();

});
