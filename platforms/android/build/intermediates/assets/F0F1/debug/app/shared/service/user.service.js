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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHNEQUFvRDtBQU1wRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUc1QyxJQUFhLFdBQVc7SUFJdEIscUJBQW9CLE9BQWdCLEVBQVUsSUFBVTtRQUFwQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFHNUQsMEJBQUksR0FBSixVQUFLLElBQVU7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQTtJQUM3QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBZUM7UUFkQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQztpQkFDbkQsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNaLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDVCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQUEsQ0FBQyxDQUFDO3FCQUNsQixLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNWLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUEsdUJBQXVCO2dCQUMxRCxDQUFDLENBQUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7aUJBQ3RCLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQVNDO1FBUkMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUMzQixJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBS2tCLGtCQUFPLEVBQWdCLFdBQUk7R0FKN0MsV0FBVyxDQXdEdkI7QUF4RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXJEYW8gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2Rhby91c2VyLmRhb1wiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2RvbWFpbi91c2VyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xuXG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckRhbzogVXNlckRhbywgcHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG5cbiAgdGVzdCh1c2VyOiBVc2VyKSB7XG5cbiAgICB1c2VyLnVzZXJuYW1lID0gXCJ0ZXN0MTIzNDVcIlxuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlcik6IFByb21pc2U8VXNlciB8IHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnVzZXJEYW8uZmV0Y2hVc2VyQnlVc2VybmFtZU9yRW1haWxBZGRyZXNzKHVzZXIpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICByZWplY3QobnVsbClcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy51c2VyRGFvLmluc2VydCh1c2VyKS5cbiAgICAgICAgdGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KX0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PntcbiAgICAgICAgICByZWplY3QoXCJGYWlsZWQgdG8gaW5zZXJ0IFVzZXIuXCIpOy8vIG5lZWQgZXhjZXB0aW9uIGhlcmU7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZldGNoQWxsKCk6IFByb21pc2U8QXJyYXk8VXNlcj4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy51c2VyRGFvLmZldGNoQWxsKClcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy51c2VyRGFvLmZldGNoVXNlcih1c2VyKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIFxufSAiXX0=