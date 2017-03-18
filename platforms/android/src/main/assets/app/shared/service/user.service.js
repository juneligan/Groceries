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
    UserService.prototype.register = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //TODO optimize username signup checker
            _this.userDao.fetchUserByEmailAddress(user)
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
    UserService.prototype.fetchAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userDao.fetchAll()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
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
                console.log("IM HERE");
                resolve(true);
            }).catch(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHNEQUFvRDtBQUtwRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLFdBQVc7SUFJdEIscUJBQW9CLE9BQWdCLEVBQVUsSUFBVTtRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFHNUQsMEJBQUksR0FBSixVQUFLLElBQVU7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQTtJQUM3QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBZ0JDO1FBZkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsdUNBQXVDO1lBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDO2lCQUN6QyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNkLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFBQSxDQUFDLENBQUM7cUJBQ2xCLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQSx1QkFBdUI7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtpQkFDdEIsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDVixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFBaEIsaUJBVUM7UUFUQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7aUJBQzNCLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBMURELElBMERDO0FBMURZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FLa0Isa0JBQU8sRUFBZ0IsV0FBSTtHQUo3QyxXQUFXLENBMER2QjtBQTFEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlckRhbyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGFvL3VzZXIuZGFvXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZG9tYWluL3VzZXJcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxudmFyIFNxbGl0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlXCIpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuXG4gIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJEYW86IFVzZXJEYW8sIHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuXG4gIHRlc3QodXNlcjogVXNlcikge1xuXG4gICAgdXNlci51c2VybmFtZSA9IFwidGVzdDEyMzQ1XCJcbiAgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpOiBQcm9taXNlPFVzZXIgfCBzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy9UT0RPIG9wdGltaXplIHVzZXJuYW1lIHNpZ251cCBjaGVja2VyXG4gICAgICB0aGlzLnVzZXJEYW8uZmV0Y2hVc2VyQnlFbWFpbEFkZHJlc3ModXNlcilcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHJlamVjdChudWxsKVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnVzZXJEYW8uaW5zZXJ0KHVzZXIpLlxuICAgICAgICB0aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+e1xuICAgICAgICAgIHJlamVjdChcIkZhaWxlZCB0byBpbnNlcnQgVXNlci5cIik7Ly8gbmVlZCBleGNlcHRpb24gaGVyZTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hBbGwoKTogUHJvbWlzZTxBcnJheTxVc2VyPj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnVzZXJEYW8uZmV0Y2hBbGwoKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbiAgbG9naW4odXNlcjogVXNlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnVzZXJEYW8uZmV0Y2hVc2VyKHVzZXIpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU0gSEVSRVwiKTtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIFxufSAiXX0=