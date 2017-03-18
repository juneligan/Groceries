"use strict";
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var user_1 = require("../domain/user");
var role_1 = require("../domain/role");
var user_service_1 = require("../../shared/service/user.service");
var role_service_1 = require("../../shared/service/role.service");
var Sqlite = require("nativescript-sqlite");
var InitializerService = (function () {
    function InitializerService(userService, roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }
    InitializerService.prototype.initializeRolesAndUsers = function () {
        var _this = this;
        var roleAdmin = new role_1.Role();
        roleAdmin.name = "ADMIN";
        this.roleService.addRole(roleAdmin).then(function (insertedRoleAdmin) {
            _this.initializeAdminUser(insertedRoleAdmin);
        });
        var roleCustomer = new role_1.Role();
        roleCustomer.name = "CUSTOMER";
        this.roleService.addRole(roleCustomer).then(function (insertedRoleCustomer) {
            _this.initializeCustomerUser(insertedRoleCustomer);
        });
    };
    InitializerService.prototype.initializeAdminUser = function (role) {
        var userAdmin = new user_1.User();
        userAdmin.emailAddress = "user.admin@yopmail.com";
        userAdmin.username = "usernameAdmin";
        userAdmin.firstname = "user";
        userAdmin.lastname = "admin";
        userAdmin.password = "passwordAdmin";
        userAdmin.role = role;
        this.register(userAdmin);
    };
    InitializerService.prototype.initializeCustomerUser = function (role) {
        var userCustomer = new user_1.User();
        userCustomer.emailAddress = "user.customer@yopmail.com";
        userCustomer.username = "usernameCustomer";
        userCustomer.firstname = "customer";
        userCustomer.lastname = "user";
        userCustomer.password = "passwordCustomer";
        userCustomer.role = role;
        this.register(userCustomer);
    };
    InitializerService.prototype.register = function (user) {
        this.userService.register(user)
            .then(function (result) {
            console.log("Account added successfully.");
        }).catch(function (error) {
            console.log("Account already exists.");
        });
    };
    return InitializerService;
}());
InitializerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, role_service_1.RoleService])
], InitializerService);
exports.InitializerService = InitializerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXRpYWxpemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUczQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBTS9CLHVDQUFzQztBQUN0Qyx1Q0FBc0M7QUFFdEMsa0VBQWdFO0FBQ2hFLGtFQUFnRTtBQUVoRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLGtCQUFrQjtJQUk3Qiw0QkFBb0IsV0FBd0IsRUFBVSxXQUF3QjtRQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRixvREFBdUIsR0FBdkI7UUFBQSxpQkFjQztRQWJDLElBQUksU0FBUyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDM0IsU0FBUyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsaUJBQWlCO1lBQ3hELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxZQUFZLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUM5QixZQUFZLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxvQkFBb0I7WUFDOUQsS0FBSSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLElBQVU7UUFDNUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUMzQixTQUFTLENBQUMsWUFBWSxHQUFHLHdCQUF3QixDQUFDO1FBQ2xELFNBQVMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG1EQUFzQixHQUF0QixVQUF1QixJQUFVO1FBQy9CLElBQUksWUFBWSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDOUIsWUFBWSxDQUFDLFlBQVksR0FBRywyQkFBMkIsQ0FBQztRQUN4RCxZQUFZLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO1FBQzNDLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQy9CLFlBQVksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQzlCLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCx5QkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBS3NCLDBCQUFXLEVBQXVCLDBCQUFXO0dBSm5FLGtCQUFrQixDQXVEOUI7QUF2RFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyRGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vdXNlci5kYW9cIjtcbmltcG9ydCB7IENhdGVnb3J5RGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vY2F0ZWdvcnkuZGFvXCI7XG5pbXBvcnQgeyBSb2xlRGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vcm9sZS5kYW9cIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9kb21haW4vdXNlclwiO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gXCIuLi9kb21haW4vcm9sZVwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb2xlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZS9yb2xlLnNlcnZpY2VcIjtcblxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm9sZVNlcnZpY2U6IFJvbGVTZXJ2aWNlKSB7fVxuXG4gIGluaXRpYWxpemVSb2xlc0FuZFVzZXJzKCkge1xuICAgIGxldCByb2xlQWRtaW4gPSBuZXcgUm9sZSgpO1xuICAgIHJvbGVBZG1pbi5uYW1lID0gXCJBRE1JTlwiO1xuICAgIHRoaXMucm9sZVNlcnZpY2UuYWRkUm9sZShyb2xlQWRtaW4pLnRoZW4oaW5zZXJ0ZWRSb2xlQWRtaW4gPT4ge1xuICAgICAgdGhpcy5pbml0aWFsaXplQWRtaW5Vc2VyKGluc2VydGVkUm9sZUFkbWluKTtcbiAgICB9KTtcbiAgICBcblxuICAgIGxldCByb2xlQ3VzdG9tZXIgPSBuZXcgUm9sZSgpO1xuICAgIHJvbGVDdXN0b21lci5uYW1lID0gXCJDVVNUT01FUlwiO1xuICAgIHRoaXMucm9sZVNlcnZpY2UuYWRkUm9sZShyb2xlQ3VzdG9tZXIpLnRoZW4oaW5zZXJ0ZWRSb2xlQ3VzdG9tZXIgPT4ge1xuICAgICAgdGhpcy5pbml0aWFsaXplQ3VzdG9tZXJVc2VyKGluc2VydGVkUm9sZUN1c3RvbWVyKTtcbiAgICB9KTtcbiAgICBcbiAgfVxuXG4gIGluaXRpYWxpemVBZG1pblVzZXIocm9sZTogUm9sZSkge1xuICAgIGxldCB1c2VyQWRtaW4gPSBuZXcgVXNlcigpO1xuICAgIHVzZXJBZG1pbi5lbWFpbEFkZHJlc3MgPSBcInVzZXIuYWRtaW5AeW9wbWFpbC5jb21cIjtcbiAgICB1c2VyQWRtaW4udXNlcm5hbWUgPSBcInVzZXJuYW1lQWRtaW5cIjtcbiAgICB1c2VyQWRtaW4uZmlyc3RuYW1lID0gXCJ1c2VyXCI7XG4gICAgdXNlckFkbWluLmxhc3RuYW1lID0gXCJhZG1pblwiO1xuICAgIHVzZXJBZG1pbi5wYXNzd29yZCA9IFwicGFzc3dvcmRBZG1pblwiO1xuICAgIHVzZXJBZG1pbi5yb2xlID0gcm9sZTtcblxuICAgIHRoaXMucmVnaXN0ZXIodXNlckFkbWluKTtcbiAgfVxuXG4gIGluaXRpYWxpemVDdXN0b21lclVzZXIocm9sZTogUm9sZSkge1xuICAgIGxldCB1c2VyQ3VzdG9tZXIgPSBuZXcgVXNlcigpO1xuICAgIHVzZXJDdXN0b21lci5lbWFpbEFkZHJlc3MgPSBcInVzZXIuY3VzdG9tZXJAeW9wbWFpbC5jb21cIjtcbiAgICB1c2VyQ3VzdG9tZXIudXNlcm5hbWUgPSBcInVzZXJuYW1lQ3VzdG9tZXJcIjtcbiAgICB1c2VyQ3VzdG9tZXIuZmlyc3RuYW1lID0gXCJjdXN0b21lclwiO1xuICAgIHVzZXJDdXN0b21lci5sYXN0bmFtZSA9IFwidXNlclwiO1xuICAgIHVzZXJDdXN0b21lci5wYXNzd29yZCA9IFwicGFzc3dvcmRDdXN0b21lclwiO1xuICAgIHVzZXJDdXN0b21lci5yb2xlID0gcm9sZTtcblxuICAgIHRoaXMucmVnaXN0ZXIodXNlckN1c3RvbWVyKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHVzZXIpXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBhZGRlZCBzdWNjZXNzZnVsbHkuXCIpO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudCBhbHJlYWR5IGV4aXN0cy5cIik7XG4gICAgfSk7XG4gIH1cbiAgXG59ICJdfQ==