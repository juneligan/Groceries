"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/service/user.service");
var UsersComponent = (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.userList = [];
        this.isLoading = false;
        this.listLoaded = false;
    }
    UsersComponent.prototype.add = function (user) {
    };
    UsersComponent.prototype.showUser = function () {
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
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.showUser();
        }, 500);
        this.isLoading = false;
        this.listLoaded = true;
    };
    return UsersComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], UsersComponent.prototype, "container", void 0);
UsersComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/users/users.html",
        styleUrls: ["pages/users/users-common.css", "pages/users/users.css"]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsa0VBQWdFO0FBYWhFLElBQWEsY0FBYztJQU96Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFONUMsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSTRCLENBQUM7SUFFaEQsNEJBQUcsR0FBSCxVQUFJLElBQVU7SUFFZCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7YUFDMUIsSUFBSSxDQUFDLFVBQUEsS0FBSztZQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQ2pCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNaLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVUsQ0FBQztZQUNILEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBN0J5QjtJQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzs4QkFBWSxpQkFBVTtpREFBQztBQUxuQyxjQUFjO0lBUDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDckUsQ0FBQztxQ0FTaUMsMEJBQVc7R0FQakMsY0FBYyxDQWtDMUI7QUFsQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RvbWFpbi91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZS91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy91c2Vycy91c2Vycy5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdXNlcnMvdXNlcnMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3VzZXJzL3VzZXJzLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlckxpc3Q6IEFycmF5PFVzZXI+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgYWRkKHVzZXI6IFVzZXIpIHtcblxuICB9XG5cbiAgc2hvd1VzZXIoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5mZXRjaEFsbCgpXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgY29uc29sZS5kdW1wKHVzZXJzKTtcbiAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpPT4ge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LnVuc2hpZnQodXNlcik7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFsZXJ0KFwiQ2FuJ3QgYWNjZXNzIGRhdGFiYXNlLlwiKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93VXNlcigpO1xuICAgICAgICB9LCA1MDApO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgfVxufVxuIl19