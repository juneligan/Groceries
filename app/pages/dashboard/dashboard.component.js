"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/service/user.service");
var router_1 = require("@angular/router");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var DashboardComponent = (function () {
    function DashboardComponent(fonticon, router, userService) {
        this.fonticon = fonticon;
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
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService, router_1.Router, user_service_1.UserService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RTtBQUV6RSxrRUFBZ0U7QUFDaEUsMENBQXlDO0FBSXpDLHVFQUErRDtBQVMvRCxJQUFhLGtCQUFrQjtJQU83Qiw0QkFBb0IsUUFBNEIsRUFBVSxNQUFjLEVBQVUsV0FBd0I7UUFBdEYsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFOMUcsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSTBGLENBQUM7SUFFOUcsZ0NBQUcsR0FBSCxVQUFJLElBQVU7SUFFZCxDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDMUIsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQztZQUNILEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBaEN5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtxREFBQztBQUxuQyxrQkFBa0I7SUFQOUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSwrQkFBK0IsQ0FBQztLQUNyRixDQUFDO3FDQVM4Qiw4Q0FBa0IsRUFBa0IsZUFBTSxFQUF1QiwwQkFBVztHQVAvRixrQkFBa0IsQ0FxQzlCO0FBckNZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZG9tYWluL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC1jb21tb24uY3NzXCIsIFwicGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyTGlzdDogQXJyYXk8VXNlcj4gPSBbXTtcbiAgaXNMb2FkaW5nID0gZmFsc2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIGFkZCh1c2VyOiBVc2VyKSB7XG5cbiAgfVxuICBzdWJtaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3VzZXJzXCJdKTtcbiAgfVxuXG4gIHNob3dVc2VyKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UuZmV0Y2hBbGwoKVxuICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgIGNvbnNvbGUuZHVtcCh1c2Vycyk7XG4gICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyKT0+IHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC51bnNoaWZ0KHVzZXIpO1xuICAgICAgfSlcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICBhbGVydChcIkNhbid0IGFjY2VzcyBkYXRhYmFzZS5cIik7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1VzZXIoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==