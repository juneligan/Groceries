"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var product_dao_1 = require("../../shared/dao/product.dao");
var ProductService = (function () {
    function ProductService(productDao, http) {
    }
    ProductService.prototype.load = function () {
        console.log("load method");
    };
    ProductService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    ProductService.prototype.add = function (name) {
        console.log("add method");
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [product_dao_1.ProductDao, http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQThDO0FBQzlDLDhCQUFxQztBQUNyQyxpQ0FBK0I7QUFJL0IsNERBQTBEO0FBRzFELElBQWEsY0FBYztJQUN6Qix3QkFBWSxVQUFzQixFQUFFLElBQVU7SUFBRyxDQUFDO0lBRWxELDZCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTdCLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLElBQVk7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFoQlksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUVhLHdCQUFVLEVBQVEsV0FBSTtHQURuQyxjQUFjLENBZ0IxQjtBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kdWN0XCI7XG5pbXBvcnQgeyBQcm9kdWN0RGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vcHJvZHVjdC5kYW9cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvZHVjdERhbzogUHJvZHVjdERhbywgaHR0cDogSHR0cCkge31cblxuICBsb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKFwibG9hZCBtZXRob2RcIik7XG4gICAgXG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbiAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwiYWRkIG1ldGhvZFwiKTtcbiAgfVxufSJdfQ==