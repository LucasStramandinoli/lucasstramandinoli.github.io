/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*JQUERY*/
$(document).ready(function() {
    $('#addcol').click(function() {
        var $tablerow = $('table.BlackBoard').find('tr');
        var $tablecol = $tablerow.find('td');
        
        
        boardsize = 5;
        count = 0;
            var rowCount = $tablerow.length -1;
            var colCount = $tablecol.length ;
        alert('rowCount: ' + rowCount + '/ boardsize: ' + boardsize + '/ colCount: ' + colCount);
        if(rowCount <= (boardsize)){
        $tablerow.each(function(index, value) {

            
            count += 1;
            //alert('Working on row: ' + count);
            var $listitem = $(this);
            //alert('ListItem: ' + $listitem.index());
            n = parseInt($listitem.index());
            //alert('Value of n: ' + n);
            var $newRow = $("<td>" + n + "</td>");
            $("table.BlackBoard tr:eq(" + n + ")").append($newRow);
        });
    }
    });
});
