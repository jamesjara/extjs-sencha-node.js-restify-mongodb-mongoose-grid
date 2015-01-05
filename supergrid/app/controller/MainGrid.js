Ext.define('supergrid.controller.MainGrid', {
    extend: 'Ext.app.Controller',
    stores: ['MainGrid'],
    models: ['MainGrid'],
    views: ['MainGrid'],
    init: function() {
        this.control({
            'MainGrid button[id=searchbt]': {
                click: function(aButton, aEvent,
                    aOptions) {
                    this.gridSearch(Ext.ComponentQuery
                        .query(
                            '#searchtxt')[
                            0].getValue()
                    );
                }
            },
            'MainGrid': {
                selectionchange: this.selectionchange
            }
        });
    },
    gridSearch: function(v) {
        Ext.getStore('MainGrid').load({
            params: {
                search: v,
                queryType: 'default'
            }
        });
    },
    selectionchange: function(model, records) {
        if (records[0]) {
            rec = records[0];
            //Show html in field
            Ext.ComponentQuery.query(
                'MainGridDetail > #html')[0].setValue(
                rec.get('HTML'));
            console.log(rec.get('HTML'));
            //Locate place in a map
            rec = rec.get('GEO');
            var coors = rec.latitude + ',' + rec.longitude;
            var googlemapTag =
                "https://maps.googleapis.com/maps/api/staticmap?center=" +
                coors + "&zoom=11&size=200x200";
            var googlemapTag2 =
                "https://maps.googleapis.com/maps/api/streetview?center=" +
                coors + "&zoom=11&size=200x200";
            Ext.ComponentQuery.query(
                'MainGridDetail > #map1')[0].setSrc(
                googlemapTag);
            Ext.ComponentQuery.query(
                'MainGridDetail > #map2')[0].setSrc(
                googlemapTag2);
        }
    }
});