"use strict";
var core_1 = require("@angular/core");
var datasource_1 = require("../app/datasource");
var initializer_service_1 = require("../app/shared/service/initializer.service");
var Sqlite = require("nativescript-sqlite");
var AppComponent = (function () {
    function AppComponent(initializerService) {
        var _this = this;
        this.initializerService = initializerService;
        if (!this.isInstantiated) {
            (new Sqlite(datasource_1.Datasource.databaseName)).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS schema_update (id INTEGER PRIMARY KEY AUTOINCREMENT, version_description TEXT)")
                    .then(function (id) {
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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fetchByVersionDescription().then(function (results) {
                if (results.length == 0) {
                    console.log("-----------inserting------------");
                    _this.initializerService.initializeRolesAndUsers();
                }
                else {
                    console.log("-----------DO NOTHING------------");
                }
            }).catch(function (error) {
            });
        }, 500);
    };
    AppComponent.prototype.insert = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.database.execSQL("INSERT INTO schema_update (version_description) VALUES (?)", datasource_1.Datasource.latest_version)
                .then(function (id) {
                console.log("INSERT RESULT", id);
            }, function (error) {
                console.log("INSERT ERROR", error);
            });
        });
    };
    //TODO cant resolve duplicate insertion
    AppComponent.prototype.fetchByVersionDescription = function () {
        var _this = this;
        console.log(datasource_1.Datasource.latest_version);
        return new Promise(function (resolve, reject) {
            _this.database.all("SELECT * FROM schema_update where id = ?", [datasource_1.Datasource.latest_version]).then(function (rows) {
                var schemaUpdates = [];
                for (var row in rows) {
                    schemaUpdates.push({
                        "id": rows[row][0],
                        "firstname": rows[row][1]
                    });
                }
                console.log("-----------fetching- in resolve-----------");
                console.dump(schemaUpdates);
                resolve(schemaUpdates);
            }, function (error) {
                console.log("-----------fetching- in error-----------");
                console.dump(error);
                reject(error);
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        providers: [initializer_service_1.InitializerService],
        template: "<page-router-outlet></page-router-outlet>"
    }),
    __metadata("design:paramtypes", [initializer_service_1.InitializerService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCxnREFBK0M7QUFDL0MsaUZBQStFO0FBRS9FLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBTzVDLElBQWEsWUFBWTtJQU9yQixzQkFBb0Isa0JBQXNDO1FBQTFELGlCQWNDO1FBZG1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEQsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLElBQUksTUFBTSxDQUFDLHVCQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUN6QyxFQUFFLENBQUMsT0FBTyxDQUFDLDJHQUEyRyxDQUFDO3FCQUN0SCxJQUFJLENBQUMsVUFBQSxFQUFFO29CQUNKLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUNuQixLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDL0IsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVILCtCQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLFVBQVUsQ0FBQztZQUNILEtBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0JBQzdDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDcEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7Z0JBQ25ELENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFZCxDQUFDO0lBR1EsNkJBQU0sR0FBYjtRQUFBLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsNERBQTRELEVBQUMsdUJBQVUsQ0FBQyxjQUFjLENBQUM7aUJBQzVHLElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQyxFQUFFLFVBQUEsS0FBSztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLHVDQUF1QztJQUU1QixnREFBeUIsR0FBaEM7UUFBQSxpQkFzQkM7UUFyQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7Z0JBQzVGLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsR0FBRyxDQUFBLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsYUFBYSxDQUFDLElBQUksQ0FBQzt3QkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzVCLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFBRSxVQUFBLEtBQUs7Z0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUE1RUQsSUE0RUM7QUE1RVksWUFBWTtJQUx4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsU0FBUyxFQUFFLENBQUMsd0NBQWtCLENBQUM7UUFDL0IsUUFBUSxFQUFFLDJDQUEyQztLQUN0RCxDQUFDO3FDQVEwQyx3Q0FBa0I7R0FQakQsWUFBWSxDQTRFeEI7QUE1RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcbmltcG9ydCB7IERhdGFzb3VyY2UgfSBmcm9tIFwiLi4vYXBwL2RhdGFzb3VyY2VcIjtcbmltcG9ydCB7IEluaXRpYWxpemVyU2VydmljZSB9IGZyb20gXCIuLi9hcHAvc2hhcmVkL3NlcnZpY2UvaW5pdGlhbGl6ZXIuc2VydmljZVwiO1xuXG52YXIgU3FsaXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGVcIik7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYWluXCIsXG4gIHByb3ZpZGVyczogW0luaXRpYWxpemVyU2VydmljZV0sXG4gIHRlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCIgXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCAgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG4gICAgcHJpdmF0ZSBpc0luc3RhbnRpYXRlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzTG9hZGVkOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpbml0aWFsaXplclNlcnZpY2U6IEluaXRpYWxpemVyU2VydmljZSkge1xuICAgICAgICBpZighdGhpcy5pc0luc3RhbnRpYXRlZCkge1xuICAgICAgICAgICAgKG5ldyBTcWxpdGUoRGF0YXNvdXJjZS5kYXRhYmFzZU5hbWUpKS50aGVuKGRiID0+IHtcbiAgICAgICAgICAgICAgICBkYi5leGVjU1FMKGBDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBzY2hlbWFfdXBkYXRlIChpZCBJTlRFR0VSIFBSSU1BUlkgS0VZIEFVVE9JTkNSRU1FTlQsIHZlcnNpb25fZGVzY3JpcHRpb24gVEVYVClgKVxuICAgICAgICAgICAgICAgIC50aGVuKGlkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZSA9IGRiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSW5zdGFudGlhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFRBQkxFIEVSUk9SXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZldGNoQnlWZXJzaW9uRGVzY3JpcHRpb24oKS50aGVuKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgaWYocmVzdWx0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0taW5zZXJ0aW5nLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVyU2VydmljZS5pbml0aWFsaXplUm9sZXNBbmRVc2VycygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLURPIE5PVEhJTkctLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT57XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgXG4gIH1cblxuXG4gICAgcHVibGljIGluc2VydCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5leGVjU1FMKGBJTlNFUlQgSU5UTyBzY2hlbWFfdXBkYXRlICh2ZXJzaW9uX2Rlc2NyaXB0aW9uKSBWQUxVRVMgKD8pYCxEYXRhc291cmNlLmxhdGVzdF92ZXJzaW9uKVxuICAgICAgICAgICAgLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIFJFU1VMVFwiLCBpZCk7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuLy9UT0RPIGNhbnQgcmVzb2x2ZSBkdXBsaWNhdGUgaW5zZXJ0aW9uXG5cbiAgICBwdWJsaWMgZmV0Y2hCeVZlcnNpb25EZXNjcmlwdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgY29uc29sZS5sb2coRGF0YXNvdXJjZS5sYXRlc3RfdmVyc2lvbik7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgKiBGUk9NIHNjaGVtYV91cGRhdGUgd2hlcmUgaWQgPSA/XCIsIFtEYXRhc291cmNlLmxhdGVzdF92ZXJzaW9uXSkudGhlbihyb3dzID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCBzY2hlbWFVcGRhdGVzID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVXBkYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiByb3dzW3Jvd11bMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHJvd3Nbcm93XVsxXVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLWZldGNoaW5nLSBpbiByZXNvbHZlLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmR1bXAoc2NoZW1hVXBkYXRlcyk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHNjaGVtYVVwZGF0ZXMpO1xuICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tZmV0Y2hpbmctIGluIGVycm9yLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kdW1wKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIFxufVxuIl19