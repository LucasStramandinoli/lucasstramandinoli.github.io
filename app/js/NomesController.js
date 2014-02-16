/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var NomesApp = angular.module('NomesApp', []);

NomesApp.controller('NomesListCtrl', function($scope) {

    $scope.nomes = [
        {'name': 'Lucas', 'sobrenome': 'Stramandinoli'},
        {'name': 'Junior', 'sobrenome': 'Soares'}
    ];

    $scope.AddNome = function() {
        $scope.nomes.push(
                {name: $scope.item.name, sobrenome: $scope.item.name}
        );
    };

});