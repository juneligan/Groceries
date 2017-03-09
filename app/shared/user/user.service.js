"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var user_dao_1 = require("../../shared/dao/user.dao");
var Sqlite = require("nativescript-sqlite");
var UserService = (function () {
    function UserService(userDao, http) {
        this.userDao = userDao;
        this.http = http;
    }
    UserService.prototype.test = function (user) {
        user.username = "test12345";
    };
    UserService.prototype.test2 = function () {
    };
    UserService.prototype.test3 = function () {
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userDao.fetchUserByUsernameOrEmailAddress(user)
                .then(function (result) {
                reject(null);
            }).catch(function (error) {
                _this.userDao.insert(user).
                    then(function (result) {
                    resolve(result);
                })
                    .catch(function (error) {
                    reject("Failed to insert User."); // need exception here;
                });
            });
        });
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userDao.fetchUser(user)
                .then(function (result) {
                resolve(true);
            })
                .catch(function (error) {
                reject(false);
            });
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_dao_1.UserDao, http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHNEQUFvRDtBQU1wRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLFdBQVc7SUFJdEIscUJBQW9CLE9BQWdCLEVBQVUsSUFBVTtRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFHNUQsMEJBQUksR0FBSixVQUFLLElBQVU7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQTtJQUM3QixDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCwyQkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQWVDO1FBZEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUM7aUJBQ25ELElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2QsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ1QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUFBLENBQUMsQ0FBQztxQkFDbEIsS0FBSyxDQUFDLFVBQUEsS0FBSztvQkFDVixNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBLHVCQUF1QjtnQkFDMUQsQ0FBQyxDQUFDLENBQUM7WUFFTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFVQztRQVRDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDM0IsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSCxrQkFBQztBQUFELENBQUMsQUFwREQsSUFvREM7QUFwRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUtrQixrQkFBTyxFQUFnQixXQUFJO0dBSjdDLFdBQVcsQ0FvRHZCO0FBcERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyRGFvIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kYW8vdXNlci5kYW9cIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY291Y2hiYXNlXCI7XG5cbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyRGFvOiBVc2VyRGFvLCBwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cblxuICB0ZXN0KHVzZXI6IFVzZXIpIHtcblxuICAgIHVzZXIudXNlcm5hbWUgPSBcInRlc3QxMjM0NVwiXG4gIH1cblxuICB0ZXN0Migpe1xuICB9XG5cbiAgdGVzdDMoKXtcbiAgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpOiBQcm9taXNlPFVzZXIgfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy51c2VyRGFvLmZldGNoVXNlckJ5VXNlcm5hbWVPckVtYWlsQWRkcmVzcyh1c2VyKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgcmVqZWN0KG51bGwpXG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMudXNlckRhby5pbnNlcnQodXNlcikuXG4gICAgICAgIHRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCl9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT57XG4gICAgICAgICAgcmVqZWN0KFwiRmFpbGVkIHRvIGluc2VydCBVc2VyLlwiKTsvLyBuZWVkIGV4Y2VwdGlvbiBoZXJlO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbiAgbG9naW4odXNlcjogVXNlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnVzZXJEYW8uZmV0Y2hVc2VyKHVzZXIpXG4gICAgICAudGhlbihyZXN1bHQgPT57XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+e1xuICAgICAgICByZWplY3QoZmFsc2UpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBcbn0iXX0=