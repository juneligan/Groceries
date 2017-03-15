"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/service/user.service");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.userList = [];
        this.isLoading = false;
        this.listLoaded = false;
    }
    DashboardComponent.prototype.add = function (user) {
    };
    DashboardComponent.prototype.submit = function () {
        this.router.navigate(["/users"]);
    };
    DashboardComponent.prototype.showUser = function () {
        var _this = this;
        this.userService.fetchAll()
            .then(function (users) {
            console.dump(users);
            users.forEach(function (user) {
                _this.userList.unshift(user);
            });
        }).catch(function (error) {
            alert("Can't access database.");
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.showUser();
        }, 500);
        this.isLoading = false;
        this.listLoaded = true;
    };
    return DashboardComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], DashboardComponent.prototype, "container", void 0);
DashboardComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/dashboard/dashboard.html",
        styleUrls: ["pages/dashboard/dashboard-common.css", "pages/dashboard/dashboard.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUV6RSxrRUFBZ0U7QUFDaEUsMENBQXlDO0FBWXpDLElBQWEsa0JBQWtCO0lBTzdCLDRCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTnBFLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUlvRCxDQUFDO0lBRXhFLGdDQUFHLEdBQUgsVUFBSSxJQUFVO0lBRWQsQ0FBQztJQUNELG1DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFBLEtBQUs7WUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNqQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDWixLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFVLENBQUM7WUFDSCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQztBQWhDeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7cURBQUM7QUFMbkMsa0JBQWtCO0lBUDlCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsc0NBQXNDLEVBQUUsK0JBQStCLENBQUM7S0FDckYsQ0FBQztxQ0FTNEIsZUFBTSxFQUF1QiwwQkFBVztHQVB6RCxrQkFBa0IsQ0FxQzlCO0FBckNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZG9tYWluL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlckxpc3Q6IEFycmF5PFVzZXI+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgYWRkKHVzZXI6IFVzZXIpIHtcblxuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdXNlcnNcIl0pO1xuICB9XG5cbiAgc2hvd1VzZXIoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5mZXRjaEFsbCgpXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgY29uc29sZS5kdW1wKHVzZXJzKTtcbiAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpPT4ge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LnVuc2hpZnQodXNlcik7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFsZXJ0KFwiQ2FuJ3QgYWNjZXNzIGRhdGFiYXNlLlwiKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VXNlcigpO1xuICAgICAgICB9LCA1MDApO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19