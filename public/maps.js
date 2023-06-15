var mymap = L.map('maps').setView([-6.160960, 106.746927], 11.5);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoibWFyaWZmaW4iLCJhIjoiY2tqM3V3OHByMGY4ejJybnE0ZDZpN2JpdSJ9.VkZp3cjQSPoL7lpc-VWsCg'
}).addTo(mymap);


function processData(){
    var value = $("#inputNumber1").val();
    var result = "Angka " + value ;
    if(value === "") {
        result = "Silahkan Input Nilai Varibel Dahulu...";
    }else if(parseInt(value)%2 ===0) {
        result += " adalah bilangan GENAP";
    }else{
        result += " adalah bilangan GANJIL";
    }
    $("#resultNumber").text(result)
}
var defaultJson = {
	"title": "Kota Jakarta Barat",
	"version": "0.1",
	"copyright": "(c)2019 Gayuh Tri Satria, based on data from OpenStreetMap",
	"copyrightShort": "thetrisatria",
	"copyrightUrl": "https://thetrisatria.com",
	"type": "FeatureCollection",
	
}
var layer = L.geoJson();

function ProcessMaps(){
    var code = $("#codeMaps").val();
    if(code == "") {
        layer.clearLayers();
    } else {
      layer.clearLayers();
      layer = L.geoJson(JSON.parse(code)).addTo(mymap);
    }
}

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Berdasarkan Jenis Kelamin'
    },
    xAxis: {
        categories: [
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Laki-laki',
        data: [5285321, 5334781, 5362748]

    }, {
        name: 'Perempuan',
        data: [5272489, 5227307, 5282028]

    }]
});


Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Berdasarkan Kelompok Umur'
    },
    xAxis: {
        categories: [
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '0-4',
        data: [888844, 661018, 799048]

    }, {
        name: '5-9',
        data: [940893, 893762, 800839]

    }, {
        name: '10-14',
        data: [785054, 874865, 813264]

    }, {
        name: '15-19',
        data: [720094, 825828, 834848]

    }, {
        name: '20-24',
        data: [756189, 818069, 854382]

    }, {
        name: '25-29',
        data: [929123, 835638, 859215]

    }, {
        name: '30-34',
        data: [1023219, 861109, 883303]

    }, {
        name: '35-39',
        data: [983591, 974357, 873639]

    }, {
        name: '40-44',
        data: [861840, 913386, 856926]

    }, {
        name: '45-49',
        data: [730336, 799344, 787945]

    }, {
        name: '50-54',
        data: [610235, 670571, 680391]

    }, {
        name: '55-59',
        data: [485560, 526403, 560584]

    }, {
        name: '60-64',
        data: [359213, 377636, 422277]

    }, {
        name: '65+',
        data: [483619, 530102, 618115]

    }]
});

$(document).ready(function(){
    $("#processMaps").click();
});