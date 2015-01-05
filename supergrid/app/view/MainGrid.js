Ext.define('supergrid.view.MainGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.MainGrid',
    title: 'asd',
    loadMask: true,
    store: 'supergrid.store.MainGrid',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'MainGrid',
        dock: 'bottom',
        displayInfo: true
    }],
    tbar: [{
        xtype: 'textfield',
        itemId: 'searchtxt'
    }, {
        text: 'Search',
        id: 'searchbt'
    }],
    initComponent: function() {
        this.store = 'MainGrid';
        this.columns = [{
                dataIndex: '_id',
                text: '_id'
            }, {
                dataIndex: 'URL',
                text: 'URL'
            }, {
                dataIndex: 'AS',
                text: 'AS'
            }, {
                dataIndex: 'DATE',
                text: 'DATE'
            }, {
                dataIndex: 'SEQ',
                text: 'SEQ'
            }, {
                dataIndex: 'Huella',
                text: 'Huella'
            },{
                dataIndex: 'PUERTO',
                text: 'PUERTO',
                renderer: 'htmlEncode'
            }, {
                dataIndex: 'CODIGO',
                text: 'CODIGO'
            }
        ]
        this.callParent(arguments);
    }
});