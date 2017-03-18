"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var category_dao_1 = require("../../shared/dao/category.dao");
var CategoryService = (function () {
    function CategoryService(categoryDao, http) {
    }
    CategoryService.prototype.load = function () {
        console.log("load method");
    };
    CategoryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    CategoryService.prototype.add = function (name) {
        console.log("add method");
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [category_dao_1.CategoryDao, http_1.Http])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS5zZXJ2aWNlLi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBQzNDLHNDQUE4QztBQUM5Qyw4QkFBcUM7QUFDckMsaUNBQStCO0FBSS9CLDhEQUE0RDtBQUc1RCxJQUFhLGVBQWU7SUFDMUIseUJBQVksV0FBd0IsRUFBRSxJQUFVO0lBQUcsQ0FBQztJQUVwRCw4QkFBSSxHQUFKO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FFYywwQkFBVyxFQUFRLFdBQUk7R0FEckMsZUFBZSxDQWUzQjtBQWZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2R1Y3RcIjtcbmltcG9ydCB7IENhdGVnb3J5RGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vY2F0ZWdvcnkuZGFvXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihjYXRlZ29yeURhbzogQ2F0ZWdvcnlEYW8sIGh0dHA6IEh0dHApIHt9XG5cbiAgbG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWQgbWV0aG9kXCIpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxuXG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhcImFkZCBtZXRob2RcIik7XG4gIH1cbn0iXX0=