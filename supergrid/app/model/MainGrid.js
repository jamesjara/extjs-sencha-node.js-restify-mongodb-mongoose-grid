Ext.define('supergrid.model.MainGrid', {
    extend: 'Ext.data.Model',
    fields: [{
        name: '_id'
    }, {
        name: 'URL',
        type: 'string'
    }, {
        name: 'AS'
    }, {
        name: 'DATE'
    }, {
        name: 'SEQ'
    }, {
        name: 'Huella'
    }, {
        name: 'HTML'
    }, {
        name: 'PUERTO'
    }, {
        name: 'CODIGO'
    }, {
        name: 'GEO'
    }],
    idProperty: '_id',
});
