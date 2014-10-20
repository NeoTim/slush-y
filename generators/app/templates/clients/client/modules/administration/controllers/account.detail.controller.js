;(function(){
  'use strict';
  angular
    .module('administration')
    .controller('AccountDetailController', AccountDetailController);

  /* @inject */
  function AccountDetailController(ResolvedAccount, $scope, User, Auth, $state, logger) {
    var vm = this;

    vm.account = ResolvedAccount;
    vm.updateUser = updateUser;
    console.log(vm.account)

    //////////////////////

    function updateUser(){<% if(restangular){ %>

      vm.account.save()<% } %><% if(http){ %>
      User.update(vm.account._id, vm.account)<% } %>
        .then( function ( data ){

          $state.go('admin.account-detail', {id: vm.account._id});

        });

    }
  }

}).call(this);