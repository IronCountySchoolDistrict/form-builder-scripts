define(["jquery"], function($) {
    return {
        main: function() {
            this.bindRunCalc();
        },

        /**
         * convert a table row to an object
         * @param  {jQuery} row
         * @return {object}
         */
        toObject: function(row) {
            var object = {};
            object.location = row.find("td:nth-child(2)").find("input[checked=checked]").val();
            object.amntOfTime = row.find("td:nth-child(3)").find("input").val();
            object.frequency = row.find("td:nth-child(4)").find("input").val();
            return object;
        },

        bindRunCalc: function() {
            var calcTables = $('table:eq(0),table:eq(1)');
            var calcRows = calcTables.find('tbody tr.collection-row');
            var calcElems = calcRows.find('td:nth-child(2),td:nth-child(3),td:nth-child(4) input');
            $(document).on('change', 'table:lt(2) tbody .collection-row td:gt(0):lt(3) input:not(:hidden)', function() {
                console.log('event fired');
            });
        }
    };
});