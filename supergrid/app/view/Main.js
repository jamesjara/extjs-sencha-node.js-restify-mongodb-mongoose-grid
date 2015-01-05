Ext.define('supergrid.view.Main', {
    extend: 'Ext.container.Container',
    requires: ['Ext.tab.Panel', 'Ext.layout.container.Border',
        'supergrid.view.MainGridDetail'
    ],
    xtype: 'app-main',
    layout: {
        type: 'border'
    },
    items: [{
        region: 'center',
        xtype: 'MainGrid',
        title: 'Center Tab 1'
    }, {
        region: 'east',
        xtype: 'MainGridDetail',
        title: 'Center Tab 1',
        collapsible: true,
        split: true,
        width: 150
    }]
});