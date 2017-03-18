"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/service/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var InitializerComponent = (function () {
    function InitializerComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoaded = false;
    }
    InitializerComponent.prototype.ngOnInit = function () {
        console.log("---------------->initialization");
        // this.router.navigate(["/login"]);
    };
    return InitializerComponent;
}());
InitializerComponent = __decorate([
    core_1.Component({
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], InitializerComponent);
exports.InitializerComponent = InitializerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhbGl6ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5pdGlhbGl6ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFFekUsa0VBQWdFO0FBQ2hFLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFTL0IsSUFBYSxvQkFBb0I7SUFJL0IsOEJBQW9CLE1BQWMsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBcEUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ4RixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBR2pCLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQy9DLG9DQUFvQztJQUN0QyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9CQUFvQjtJQUpoQyxnQkFBUyxDQUFDO1FBQ1QsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN6QixDQUFDO3FDQU00QixlQUFNLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7R0FKN0Usb0JBQW9CLENBV2hDO0FBWFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kb21haW4vdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2UvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbml0aWFsaXplckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXNMb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0+aW5pdGlhbGl6YXRpb25cIik7XG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgfVxufVxuIl19