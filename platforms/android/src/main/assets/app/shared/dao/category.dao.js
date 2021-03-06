"use strict";
var core_1 = require("@angular/core");
var category_1 = require("../domain/category");
var config_1 = require("../config");
var Sqlite = require("nativescript-sqlite");
var CategoryDao = (function () {
    function CategoryDao() {
        var _this = this;
        if (!this.isInstantiated) {
            (new Sqlite(config_1.Config.databaseName)).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)\n                ").then(function (id) {
                    _this.database = db;
                    _this.isInstantiated = true;
                }, function (error) {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, function (error) {
                console.log("OPEN DB ERROR", error);
            });
        }
    }
    CategoryDao.prototype.insert = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.execSQL("INSERT INTO category (name) VALUES (?)", [category.name])
                .then(function (id) {
                console.log("INSERT RESULT", id);
                resolve(_this.fetchById(id));
            }, function (error) {
                console.log("INSERT ERROR", error);
            });
        });
    };
    CategoryDao.prototype.fetchById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.execSQL("SELECT id, name from category where id = ?", [id])
                .then(function (rows) {
                var category = new category_1.Category();
                for (var row in rows) {
                    category.id = rows[row][0];
                    category.name = rows[row][1];
                }
                resolve(category);
            }, function (error) {
                reject(error);
            });
        });
    };
    CategoryDao.prototype.fetchByName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.execSQL("SELECT id, name from category where id = ?", [name])
                .then(function (rows) {
                var category = new category_1.Category();
                for (var row in rows) {
                    category.id = rows[row][0];
                    category.name = rows[row][1];
                }
                resolve(category);
            }, function (error) {
                reject(error);
            });
        });
    };
    return CategoryDao;
}());
CategoryDao = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CategoryDao);
exports.CategoryDao = CategoryDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2F0ZWdvcnkuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBMkM7QUFDM0MsK0NBQThDO0FBQzlDLG9DQUFtQztBQUVuQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLFdBQVc7SUFLcEI7UUFBQSxpQkFjQztRQWJHLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxlQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNyQyxFQUFFLENBQUMsT0FBTyxDQUFDLHlHQUNWLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUNOLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDL0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxRQUFrQjtRQUFoQyxpQkFVQztRQVRHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5RSxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwrQkFBUyxHQUFoQixVQUFpQixFQUFVO1FBQTNCLGlCQWNDO1FBYkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNENBQTRDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkUsSUFBSSxDQUFDLFVBQUEsSUFBSTtnQkFDUixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztnQkFDOUIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUNELE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLElBQVk7UUFBL0IsaUJBY0M7UUFiRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyw0Q0FBNEMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6RSxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUNSLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO2dCQUM5QixHQUFHLENBQUEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNsQixRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0IsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBaEVELElBZ0VDO0FBaEVZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTs7R0FDQSxXQUFXLENBZ0V2QjtBQWhFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi9kb21haW4vY2F0ZWdvcnlcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlEYW8ge1xuXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICAgIHByaXZhdGUgaXNJbnN0YW50aWF0ZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNJbnN0YW50aWF0ZWQpIHtcbiAgICAgICAgICAgIChuZXcgU3FsaXRlKENvbmZpZy5kYXRhYmFzZU5hbWUpKS50aGVuKGRiID0+IHtcbiAgICAgICAgICAgICAgICBkYi5leGVjU1FMKGBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBjYXRlZ29yeSAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBuYW1lIFRFWFQpXG4gICAgICAgICAgICAgICAgYCkudGhlbihpZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0luc3RhbnRpYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFURSBUQUJMRSBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUEVOIERCIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBQcm9taXNlPENhdGVnb3J5PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoYElOU0VSVCBJTlRPIGNhdGVnb3J5IChuYW1lKSBWQUxVRVMgKD8pYCxbY2F0ZWdvcnkubmFtZV0pXG4gICAgICAgICAgICAudGhlbihpZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hCeUlkKGlkKSk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBmZXRjaEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8Q2F0ZWdvcnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChgU0VMRUNUIGlkLCBuYW1lIGZyb20gY2F0ZWdvcnkgd2hlcmUgaWQgPSA/YCxbaWRdKVxuICAgICAgICAgICAgLnRoZW4ocm93cyA9PiB7XG4gICAgICAgICAgICAgIGxldCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKSB7XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeS5pZCA9IHJvd3Nbcm93XVswXTtcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5Lm5hbWUgPSByb3dzW3Jvd11bMV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVzb2x2ZShjYXRlZ29yeSk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmV0Y2hCeU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxDYXRlZ29yeT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKGBTRUxFQ1QgaWQsIG5hbWUgZnJvbSBjYXRlZ29yeSB3aGVyZSBpZCA9ID9gLFtuYW1lXSlcbiAgICAgICAgICAgIC50aGVuKHJvd3MgPT4ge1xuICAgICAgICAgICAgICBsZXQgY2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoKTtcbiAgICAgICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuaWQgPSByb3dzW3Jvd11bMF07XG4gICAgICAgICAgICAgICAgICBjYXRlZ29yeS5uYW1lID0gcm93c1tyb3ddWzFdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc29sdmUoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==