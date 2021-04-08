// This isn't necessary but it keeps the editor from thinking L and carto are typos
/* global L, carto */

var map = L.map("map", {
  center: [40.728090,-73.924113],
  zoom: 11
});

// Add base layer
L.tileLayer(
  "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
  {
    maxZoom: 18
  }
).addTo(map);

// Initialize Carto
var client = new carto.Client({
  apiKey: "default_public",
  username: "castd986"
});

// Initialze data source
var fridgeSource = new carto.source.SQL("SELECT * FROM castd986.nyc_fridges_geocoded");

// Create style for the data
var fridgeStyle = new carto.style.CartoCSS(`
  #layer [zoom <=11] {
  marker-width: 20;
  marker-fill: #d7212f;
  marker-fill-opacity: 0.75;
  marker-file: url('');
  marker-allow-overlap: true;
  marker-comp-op: multiply;
  marker-line-width: 0;
  marker-line-color: #FFFFFF;
  marker-line-opacity: 1;
}
#layer [zoom >=12] {
  marker-width: 15;
  marker-fill: #d7212f;
  marker-fill-opacity: 1;
  marker-file: url('');
  marker-allow-overlap: true;
  marker-line-width: 0;
  marker-line-color: #FFFFFF;
  marker-line-opacity: 1;
} 
`);

// Add style to the data
var fridgeLayer = new carto.layer.Layer(fridgeSource, fridgeStyle);

//nycha
var nychaSource = new carto.source.SQL("SELECT * FROM castd986.nycha_developments");

var nychaStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: #ffffff;
  polygon-opacity: 1;
  polygon-comp-op: color-burn;
}
#layer::outline {
  line-width: 0.5;
  line-color: #ffffff;
  line-opacity: 1;
}
`);

var nychaLayer = new carto.layer.Layer(nychaSource, nychaStyle);

//brooklyn redlining
var bkredSource = new carto.source.SQL("SELECT * FROM castd986.cartodb_query_4 WHERE holc_grade = 'D'");

var bkredStyle = new carto.style.CartoCSS(`
#layer {
  [zoom <= 12] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.5;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
#layer {
  [zoom >= 13] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.75;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
`);

var bkredLayer = new carto.layer.Layer(bkredSource, bkredStyle);

//bronx redlining
var bxredSource = new carto.source.SQL("SELECT * FROM castd986.cartodb_query_3 WHERE holc_grade = 'D'");

var bxredStyle = new carto.style.CartoCSS(`
#layer {
  [zoom <= 12] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.5;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
#layer {
  [zoom >= 13] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.75;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
`);

var bxredLayer = new carto.layer.Layer(bxredSource, bxredStyle);

//manhattan redlining
var mnredSource = new carto.source.SQL("SELECT * FROM castd986.cartodb_query_2 WHERE holc_grade = 'D'");

var mnredStyle = new carto.style.CartoCSS(`
#layer {
  [zoom <= 12] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.5;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
#layer {
  [zoom >= 13] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.75;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
`);

var mnredLayer = new carto.layer.Layer(mnredSource, mnredStyle);

//queens redlining
var qnsredSource = new carto.source.SQL("SELECT * FROM castd986.cartodb_query_1 WHERE holc_grade = 'D'");

var qnsredStyle = new carto.style.CartoCSS(`
#layer {
  [zoom <= 12] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.5;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
#layer {
  [zoom >= 13] {
  polygon-fill: ramp([holc_grade], (#ece747, #eeeeee, #67b4b1, #25b77a), ("C", "D", "B", "A"), "=");
  polygon-comp-op: lighten;
  polygon-opacity: 0.75;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
  }
}
`);

var qnsredLayer = new carto.layer.Layer(qnsredSource, qnsredStyle);

//income to poverty ratio
var ratioSource = new carto.source.SQL("SELECT * FROM castd986.ratioincomepoverty");

var ratioStyle = new carto.style.CartoCSS(`
#layer {
  polygon-fill: ramp([under_50], (#f3cbd3, #e498b4, #ca699d, #a24186, #6c2167), quantiles);
  polygon-opacity: ramp([under_50], (.15, .33, .50, .68, .85), quantiles);
  polygon-opacity: 0.5;
  polygon-comp-op: overlay;
}
#layer::outline {
  line-width: 0;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
`);

var ratioLayer = new carto.layer.Layer(ratioSource, ratioStyle);

// Add the data to the map as a layer
client.addLayer(fridgeLayer);
client.addLayer(nychaLayer);
client.addLayer(bkredLayer);
client.addLayer(bxredLayer);
client.addLayer(mnredLayer);
client.addLayer(qnsredLayer);
client.addLayer(ratioLayer);
client.getLeafletLayer().addTo(map);


// Keep track of whether the boroughs layer is currently visible
var fridgesVisible = true;

// When the boroughs button is clicked, show or hide the layer
var fridgesButton = document.querySelector('.toggle-fridges');
fridgesButton.addEventListener('click', function () {
  if (fridgesVisible) {
    // Boroughs are visible, so remove that layer
    client.removeLayer(fridgeLayer);
    
    // Then update the variable tracking whether the layer is shown
    fridgesVisible = false;
  }
  else {
    // Do the reverse if boroughs are not visible
    client.addLayer(fridgeLayer);
    fridgesVisible = true;
  }
});

var ratioVisible = true;

var ratioButton = document.querySelector('.toggle-ratio');
ratioButton.addEventListener('click', function () {
  if (ratioVisible) {
    // Boroughs are visible, so remove that layer
    client.removeLayer(ratioLayer);
    
    // Then update the variable tracking whether the layer is shown
    ratioVisible = false;
  }
  else {
    // Do the reverse if boroughs are not visible
    client.addLayer(ratioLayer);
    ratioVisible = true;
  }
});