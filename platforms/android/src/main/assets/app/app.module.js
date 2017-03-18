"use strict";
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var user_service_1 = require("./shared/service/user.service");
var role_service_1 = require("./shared/service/role.service");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var user_dao_1 = require("./shared/dao/user.dao");
var product_dao_1 = require("./shared/dao/product.dao");
var category_dao_1 = require("./shared/dao/category.dao");
var role_dao_1 = require("./shared/dao/role.dao");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            http_1.NativeScriptHttpModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes),
            nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'material-design-icons.css'
            })
        ],
        declarations: [
            app_component_1.AppComponent
        ].concat(app_routing_1.navigatableComponents),
        providers: [user_dao_1.UserDao, product_dao_1.ProductDao, role_dao_1.RoleDao, category_dao_1.CategoryDao, user_service_1.UserService, role_service_1.RoleService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5QztBQUN6QyxvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLDBEQUFtRTtBQUNuRSxzREFBdUU7QUFDdkUsdUVBQThEO0FBQzlELDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFFNUQsaURBQStDO0FBQy9DLDZDQUE4RDtBQUM5RCxrREFBZ0Q7QUFDaEQsd0RBQXNEO0FBQ3RELDBEQUF3RDtBQUN4RCxrREFBZ0Q7QUFvQmhELElBQWEsU0FBUztJQUF0QjtJQUF3QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQXpCLElBQXlCO0FBQVosU0FBUztJQWxCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsNkJBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw2QkFBc0I7WUFDdEIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO1lBQ3hDLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDdEIsS0FBSyxFQUFFLDJCQUEyQjthQUNuQyxDQUFDO1NBQ0g7UUFDSCxZQUFZO1lBQ1YsNEJBQVk7aUJBQ1gsbUNBQXFCLENBQ3ZCO1FBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQU8sRUFBRSx3QkFBVSxFQUFFLGtCQUFPLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLENBQUM7UUFDaEYsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9zZXJ2aWNlL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm9sZVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvc2VydmljZS9yb2xlLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgVXNlckRhbyB9IGZyb20gXCIuL3NoYXJlZC9kYW8vdXNlci5kYW9cIjtcbmltcG9ydCB7IFByb2R1Y3REYW8gfSBmcm9tIFwiLi9zaGFyZWQvZGFvL3Byb2R1Y3QuZGFvXCI7XG5pbXBvcnQgeyBDYXRlZ29yeURhbyB9IGZyb20gXCIuL3NoYXJlZC9kYW8vY2F0ZWdvcnkuZGFvXCI7XG5pbXBvcnQgeyBSb2xlRGFvIH0gZnJvbSBcIi4vc2hhcmVkL2Rhby9yb2xlLmRhb1wiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcydcbiAgICAgIH0pXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LCBcbiAgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzXG4gIF0sXG4gIHByb3ZpZGVyczogW1VzZXJEYW8sIFByb2R1Y3REYW8sIFJvbGVEYW8sIENhdGVnb3J5RGFvLCBVc2VyU2VydmljZSwgUm9sZVNlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19