Ext.define('supergrid.view.MainGridDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.MainGridDetail',
    title: 'asd',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        height: 200,
        layout: 'fit',
        margin: '0 0 3 0',
        xtype: 'textarea',
        itemId: 'html'
    }, {
        height: 200,
        layout: 'fit',
        xtype: 'image',
        mode: 'image',
        itemId: 'map1'
    }, {
        height: 200,
        layout: 'fit',
        xtype: 'image',
        mode: 'image',
        itemId: 'map2'
    }],
    initComponent: function() {
        this.callParent(arguments);
    }
});