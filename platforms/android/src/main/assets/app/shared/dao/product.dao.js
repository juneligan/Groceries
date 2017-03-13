"use strict";
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var ProductDao = (function () {
    function ProductDao() {
        var _this = this;
        if (!this.isInstantiated) {
            (new Sqlite("Delicacies.db")).then(function (db) {
                db.execSQL("CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,\n                            unitPrice TEXT, sellPrice TEXT)\n                ").then(function (id) {
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
    return ProductDao;
}());
ProductDao = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductDao);
exports.ProductDao = ProductDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0NBQTJDO0FBRzNDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRzVDLElBQWEsVUFBVTtJQUtuQjtRQUFBLGlCQWVDO1FBZEcsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDakMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxxS0FFVixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRTtvQkFDTixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQy9CLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsVUFBQSxLQUFLO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUE4RkwsaUJBQUM7QUFBRCxDQUFDLEFBbEhELElBa0hDO0FBbEhZLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTs7R0FDQSxVQUFVLENBa0h0QjtBQWxIWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kdWN0XCI7XG5cbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3REYW8ge1xuXG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuICAgIHByaXZhdGUgaXNJbnN0YW50aWF0ZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYoIXRoaXMuaXNJbnN0YW50aWF0ZWQpIHtcbiAgICAgICAgICAgIChuZXcgU3FsaXRlKFwiRGVsaWNhY2llcy5kYlwiKSkudGhlbihkYiA9PiB7XG4gICAgICAgICAgICAgICAgZGIuZXhlY1NRTChgQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgcHJvZHVjdCAoaWQgSU5URUdFUiBQUklNQVJZIEtFWSBBVVRPSU5DUkVNRU5ULCBuYW1lIFRFWFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdFByaWNlIFRFWFQsIHNlbGxQcmljZSBURVhUKVxuICAgICAgICAgICAgICAgIGApLnRoZW4oaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJbnN0YW50aWF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1BFTiBEQiBFUlJPUlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gcHVibGljIGluc2VydChwcm9kdWN0OiBQcm9kdWN0KTogUHJvbWlzZTxQcm9kdWN0PiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwoYElOU0VSVCBJTlRPIHVzZXIgKHVzZXJuYW1lLCBlbWFpbEFkZHJlc3MsIHBhc3N3b3JkLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSBWQUxVRVMgKD8sID8sID8sID8sID8pYCxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Byb2R1Y3QudXNlcm5hbWUsIHVzZXIuZW1haWxBZGRyZXNzLCB1c2VyLnBhc3N3b3JkLCB1c2VyLmZpcnN0bmFtZSwgdXNlci5sYXN0bmFtZV0pXG4gICAgLy8gICAgICAgICAudGhlbihpZCA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgUkVTVUxUXCIsIGlkKTtcbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmV0Y2hVc2VyQnlJZChpZCkpO1xuICAgIC8vICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU5TRVJUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgZmV0Y2hVc2VyQnlJZChpZDogYW55KTogUHJvbWlzZTxVc2VyPiB7XG4gICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUICogRlJPTSB1c2VyIHdoZXJlIGlkID0gP1wiLCBbaWRdKS50aGVuKHJvd3MgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGxldCB1c2VycyA9IFtdO1xuICAgIC8vICAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdXNlcnMucHVzaCh7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVswXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHVzZXJzKTtcbiAgICAvLyAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuXG4gICAgLy8gcHVibGljIGZldGNoVXNlckJ5VXNlcm5hbWVPckVtYWlsQWRkcmVzcyh1c2VyOiBVc2VyKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIuZW1haWxBZGRyZXNzKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2codXNlci51c2VybmFtZSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIucGFzc3dvcmQpO1xuICAgIC8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5kYXRhYmFzZS5hbGwoXCJTRUxFQ1QgaWQsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lLCBlbWFpbEFkZHJlc3MgRlJPTSB1c2VyIHdoZXJlIGVtYWlsQWRkcmVzcyA9ID8gT1IgdXNlcm5hbWUgPSA/XCIsXG4gICAgLy8gICAgICAgICBbdXNlci5lbWFpbEFkZHJlc3MsIHVzZXIudXNlcm5hbWVdKS50aGVuKHJvd3MgPT4ge1xuICAgIC8vICAgICAgICAgIGxldCB1c2VycyA9IFtdO1xuICAgIC8vICAgICAgICAgICAgIGZvcih2YXIgcm93IGluIHJvd3MpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdXNlcnMucHVzaCh7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHJvd3Nbcm93XVswXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwiZmlyc3RuYW1lXCI6IHJvd3Nbcm93XVsxXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiByb3dzW3Jvd11bM10sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcImVtYWlsQWRkcmVzc1wiOiByb3dzW3Jvd11bNF1cbiAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHJlc29sdmUodXNlcnMpO1xuICAgIC8vICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBwdWJsaWMgZmV0Y2hVc2VyKHVzZXI6IFVzZXIpOiBQcm9taXNlPFVzZXI+IHtcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuZGF0YWJhc2UuYWxsKFwiU0VMRUNUIGlkLCBmaXJzdG5hbWUsIGxhc3RuYW1lLCB1c2VybmFtZSwgZW1haWxBZGRyZXNzIEZST00gdXNlciB3aGVyZSAoZW1haWxBZGRyZXNzID0gPykgQU5EIHBhc3N3b3JkID0gP1wiLFxuICAgIC8vICAgICAgICAgW3VzZXIuZW1haWxBZGRyZXNzLCB1c2VyLnBhc3N3b3JkXSkudGhlbihyb3dzID0+IHtcbiAgICAvLyAgICAgICAgICBsZXQgdXNlcnMgPSBbXTtcbiAgICAvLyAgICAgICAgICAgICBmb3IodmFyIHJvdyBpbiByb3dzKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiByb3dzW3Jvd11bMF0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiByb3dzW3Jvd11bMV0sXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBcImxhc3RuYW1lXCI6IHJvd3Nbcm93XVsyXSxcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogcm93c1tyb3ddWzNdLFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgXCJlbWFpbEFkZHJlc3NcIjogcm93c1tyb3ddWzRdXG4gICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICByZXNvbHZlKHVzZXJzKTtcbiAgICAvLyAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIGZldGNoQWxsKCkge1xuICAgIC8vIHZhciB1c2VycyA9IFtdO1xuICAgIC8vICAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gdXNlclwiKS50aGVuKHJvd3MgPT4ge1xuICAgIC8vICAgICAgICAgZm9yKHZhciByb3cgaW4gcm93cykge1xuICAgIC8vICAgICAgICAgICAgIHVzZXJzLnB1c2goe1xuICAgIC8vICAgICAgICAgICAgICAgICBcImZpcnN0bmFtZVwiOiByb3dzW3Jvd11bMV0sXG4gICAgLy8gICAgICAgICAgICAgICAgIFwibGFzdG5hbWVcIjogcm93c1tyb3ddWzJdXG4gICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0sIGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUIEVSUk9SXCIsIGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG59Il19