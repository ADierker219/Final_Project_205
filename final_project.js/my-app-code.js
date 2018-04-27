
   require([
  "esri/map",
  "esri/dijit/HomeButton",
  "esri/arcgis/utils",
  "dojo/_base/array",
  "esri/layers/FeatureLayer",
  "esri/dijit/Scalebar",
  "dojo/parser",
  "dojo/domReady!"
], function(Map, HomeButton, utils, array, FeatureLayer) {
  
   map = new Map("map", {
    basemap: "topo",
    center: [-88.9733898, 40.063171],
    zoom: 11
     
 
  });
  


 
//Imagery Dry Year 2012
  var featureLayer2 = new FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2012/FeatureServer/0");
  
    map.addLayer(featureLayer2);

//Imagery Wet Year 2015
   var featureLayer3 = new             FeatureLayer("https://services.arcgis.com/YseQBnl2jq0lrUV5/arcgis/rest/services/final_2015/FeatureServer/0"); 
  
    map.addLayer(featureLayer3);
  
  
    /*  
  //Aquifers
  var featureLayer3 = new FeatureLayer("https://landscape1.arcgis.com/arcgis/rest/services/USA_Aquifers/MapServer/0");
  
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
  
  var dojoConfig = {
        parseOnLoad: true,
        packages: [{
          "name": "myModules",
          "location": location.pathname.replace(/\/[^/]+$/, "") + "/myModules"
        }]
      };
    
  });
