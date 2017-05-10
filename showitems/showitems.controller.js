(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShowItems', ShowItems);

    ShowItems.$inject = ['UserService', '$rootScope', '$scope', 'FlashService'];
    function ShowItems(UserService, $rootScope, $scope, FlashService) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;
        vm.editUser = editUser;
        vm.saveEdit = saveEdit;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            var confirmDel = confirm("Deleting?");
            if (confirmDel == true) {
                UserService.Delete(id)
                    .then(function () {
                        loadAllUsers();
                    });
            }
            FlashService.Error('Deleted!', true);
        }

        function editUser($event, user) {
            user.isEditable = true;
            var obj = ($event.currentTarget);

            $(obj).parent().find('.savebtn').show();
            $(obj).parent().find('.rembtn').hide();
            $(obj).hide();
        }

        function saveEdit($event, user) {
            // Save logic
            user.isEditable = false;
            UserService.Update(user)
                .then(function () {
                    var obj = ($event.currentTarget);
                    $(obj).parent().find('.editbtn').show();
                    $(obj).parent().find('.rembtn').show();
                    $(obj).hide();
                });
        }
    }

})();