
   require([
  "esri/map",
  "esri/dijit/LayerSwipe",
  "esri/arcgis/utils",
  "dojo/_base/array",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, LayerSwipe, utils, array, FeatureLayer) {
  
   map = new Map("map", {
    basemap: "topo",
    center: [-88.9733898, 40.063171],
    zoom: 11
     
 
  });
  

/*
//US Percent Agriculture
  var featureLayer = new FeatureLayer("https://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/APHG_AgLand_update_2016/FeatureServer/0");
    
    map.add(featureLayer);
    
*/

 
//Imagery Dry Year 2012
  var featureLayer2 = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2012/FeatureServer/0");
  
    map.addLayer(featureLayer2);

     //Imagery Wet Year 2015
    var featureLayer3 = new             FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2015/FeatureServer/0"); 
  
    map.addLayer(featureLayer3);
  
          
            
          var swipeWidget = new LayerSwipe({
            theme: "LayerSwipe",
            map: map,
            layers: [featureLayer2],
            tool: "vertical",
            toolClip: 9,
            toolOffsetTop: null,
            toolOffsetLeft: null
            
         }, "LayerSwipe");
         swipeWidget.startup();
    
  });

   

