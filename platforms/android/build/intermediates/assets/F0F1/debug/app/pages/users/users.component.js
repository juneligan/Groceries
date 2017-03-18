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
    UsersComponent.prototype.pageLoaded = function (args) {
        // var page = <pages.Page>args.object;
        // var viewModel = new observable.Observable();
        // var glyphs = new Array<observable.Observable>();
        // var charCode = 0xe903;
        // for(; charCode <= 0xeaea; charCode++){
        //     var glyph = new observable.Observable();
        //     glyph.set("icon", String.fromCharCode(charCode));
        //     glyph.set("code", charCode.toString(16));
        //     glyphs.push(glyph);
        // }
        // viewModel.set("glyphs", glyphs)
        // page.bindingContext = viewModel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsa0VBQWdFO0FBZWhFLElBQWEsY0FBYztJQU96Qix3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFONUMsYUFBUSxHQUFnQixFQUFFLENBQUM7UUFDM0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBSTRCLENBQUM7SUFFaEQsNEJBQUcsR0FBSCxVQUFJLElBQVU7SUFFZCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQTBCO1FBQ25DLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0MsbURBQW1EO1FBQ25ELHlCQUF5QjtRQUN6Qix5Q0FBeUM7UUFDekMsK0NBQStDO1FBQy9DLHdEQUF3RDtRQUN4RCxnREFBZ0Q7UUFDaEQsMEJBQTBCO1FBQzFCLElBQUk7UUFDSixrQ0FBa0M7UUFDbEMsbUNBQW1DO0lBQ3JDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTthQUMxQixJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDakIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ1osS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsVUFBVSxDQUFDO1lBQ0gsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7QUE1Q3lCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2lEQUFDO0FBTG5DLGNBQWM7SUFQMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQVNpQywwQkFBVztHQVBqQyxjQUFjLENBaUQxQjtBQWpEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZG9tYWluL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcblxuICBpbXBvcnQgb2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGVcIik7XG5pbXBvcnQgcGFnZXMgPSByZXF1aXJlKFwidWkvcGFnZVwiKTtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy91c2Vycy91c2Vycy5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvdXNlcnMvdXNlcnMtY29tbW9uLmNzc1wiLCBcInBhZ2VzL3VzZXJzL3VzZXJzLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdXNlckxpc3Q6IEFycmF5PFVzZXI+ID0gW107XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgYWRkKHVzZXI6IFVzZXIpIHtcblxuICB9XG5cbiAgcGFnZUxvYWRlZChhcmdzOiBvYnNlcnZhYmxlLkV2ZW50RGF0YSkge1xuICAgIC8vIHZhciBwYWdlID0gPHBhZ2VzLlBhZ2U+YXJncy5vYmplY3Q7XG4gICAgLy8gdmFyIHZpZXdNb2RlbCA9IG5ldyBvYnNlcnZhYmxlLk9ic2VydmFibGUoKTtcbiAgICAvLyB2YXIgZ2x5cGhzID0gbmV3IEFycmF5PG9ic2VydmFibGUuT2JzZXJ2YWJsZT4oKTtcbiAgICAvLyB2YXIgY2hhckNvZGUgPSAweGU5MDM7XG4gICAgLy8gZm9yKDsgY2hhckNvZGUgPD0gMHhlYWVhOyBjaGFyQ29kZSsrKXtcbiAgICAvLyAgICAgdmFyIGdseXBoID0gbmV3IG9ic2VydmFibGUuT2JzZXJ2YWJsZSgpO1xuICAgIC8vICAgICBnbHlwaC5zZXQoXCJpY29uXCIsIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpKTtcbiAgICAvLyAgICAgZ2x5cGguc2V0KFwiY29kZVwiLCBjaGFyQ29kZS50b1N0cmluZygxNikpO1xuICAgIC8vICAgICBnbHlwaHMucHVzaChnbHlwaCk7XG4gICAgLy8gfVxuICAgIC8vIHZpZXdNb2RlbC5zZXQoXCJnbHlwaHNcIiwgZ2x5cGhzKVxuICAgIC8vIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XG4gIH1cblxuICBzaG93VXNlcigpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmZldGNoQWxsKClcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBjb25zb2xlLmR1bXAodXNlcnMpO1xuICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcik9PiB7XG4gICAgICAgIHRoaXMudXNlckxpc3QudW5zaGlmdCh1c2VyKTtcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgYWxlcnQoXCJDYW4ndCBhY2Nlc3MgZGF0YWJhc2UuXCIpO1xuICAgIH0pO1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dVc2VyKCk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICB9XG59XG4iXX0=