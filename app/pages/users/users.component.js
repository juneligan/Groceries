"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/service/user.service");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var UsersComponent = (function () {
    function UsersComponent(fonticon, userService) {
        this.fonticon = fonticon;
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
    UsersComponent.prototype.search = function () {
        alert("searching user. . . ");
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
    __metadata("design:paramtypes", [nativescript_ng2_fonticon_1.TNSFontIconService, user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsa0VBQWdFO0FBS2hFLHVFQUErRDtBQVMvRCxJQUFhLGNBQWM7SUFPekIsd0JBQW9CLFFBQTRCLEVBQVUsV0FBd0I7UUFBOUQsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5sRixhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUMzQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFJa0UsQ0FBQztJQUV0Riw0QkFBRyxHQUFILFVBQUksSUFBVTtJQUVkLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUMxQixJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1osS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUVFLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixVQUFVLENBQUM7WUFDSCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQW5DeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFMbkMsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBUzhCLDhDQUFrQixFQUF1QiwwQkFBVztHQVB2RSxjQUFjLENBd0MxQjtBQXhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZG9tYWluL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvdXNlcnMvdXNlcnMuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3VzZXJzL3VzZXJzLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy91c2Vycy91c2Vycy5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHVzZXJMaXN0OiBBcnJheTxVc2VyPiA9IFtdO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGlzdExvYWRlZCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgYWRkKHVzZXI6IFVzZXIpIHtcblxuICB9XG5cbiAgc2hvd1VzZXIoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5mZXRjaEFsbCgpXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgY29uc29sZS5kdW1wKHVzZXJzKTtcbiAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIpPT4ge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LnVuc2hpZnQodXNlcik7XG4gICAgICB9KVxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGFsZXJ0KFwiQ2FuJ3QgYWNjZXNzIGRhdGFiYXNlLlwiKTtcbiAgICB9KTtcblxuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIFxuICAgIGFsZXJ0KFwic2VhcmNoaW5nIHVzZXIuIC4gLiBcIik7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dVc2VyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=