var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_226_ANP_ITRF08_27022024_1 = new ol.format.GeoJSON();
var features_226_ANP_ITRF08_27022024_1 = format_226_ANP_ITRF08_27022024_1.readFeatures(json_226_ANP_ITRF08_27022024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_226_ANP_ITRF08_27022024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_226_ANP_ITRF08_27022024_1.addFeatures(features_226_ANP_ITRF08_27022024_1);
var lyr_226_ANP_ITRF08_27022024_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_226_ANP_ITRF08_27022024_1, 
                style: style_226_ANP_ITRF08_27022024_1,
                popuplayertitle: "226_ANP_ITRF08_27022024",
                interactive: true,
                title: '<img src="styles/legend/226_ANP_ITRF08_27022024_1.png" /> 226_ANP_ITRF08_27022024'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_226_ANP_ITRF08_27022024_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_226_ANP_ITRF08_27022024_1];
lyr_226_ANP_ITRF08_27022024_1.set('fieldAliases', {'ID_ANP': 'ID_ANP', 'NOMBRE': 'NOMBRE', 'CAT_MANEJO': 'CAT_MANEJO', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', 'S_TERRES': 'S_TERRES', 'S_MARINA': 'S_MARINA', 'PRIM_DEC': 'PRIM_DEC', 'ULT_DOF': 'ULT_DOF', 'PCM1': 'PCM1', 'SINAP': 'SINAP', });
lyr_226_ANP_ITRF08_27022024_1.set('fieldImages', {'ID_ANP': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'S_TERRES': 'TextEdit', 'S_MARINA': 'TextEdit', 'PRIM_DEC': 'DateTime', 'ULT_DOF': 'DateTime', 'PCM1': 'TextEdit', 'SINAP': 'TextEdit', });
lyr_226_ANP_ITRF08_27022024_1.set('fieldLabels', {'ID_ANP': 'inline label - always visible', 'NOMBRE': 'inline label - always visible', 'CAT_MANEJO': 'inline label - always visible', 'ESTADOS': 'inline label - always visible', 'MUNICIPIOS': 'inline label - always visible', 'REGION': 'inline label - always visible', 'SUPERFICIE': 'inline label - always visible', 'S_TERRES': 'inline label - always visible', 'S_MARINA': 'inline label - always visible', 'PRIM_DEC': 'inline label - always visible', 'ULT_DOF': 'inline label - always visible', 'PCM1': 'inline label - always visible', 'SINAP': 'inline label - visible with data', });
lyr_226_ANP_ITRF08_27022024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});