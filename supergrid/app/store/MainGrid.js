Ext.define('supergrid.store.MainGrid', {
    extend: 'Ext.data.Store',
    model: 'supergrid.model.MainGrid',
    autoLoad: true,
    remoteSort: true,
    proxy: {
        type: 'ajax',
        //MUST USE CORS
        url: 'http://localhost:8080/results',
        simpleSortMode: true,
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        }
    }
});
