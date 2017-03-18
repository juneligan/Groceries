import { Component, OnInit } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { Datasource } from "../app/datasource";
import { InitializerService } from "../app/shared/service/initializer.service";

var Sqlite = require("nativescript-sqlite");

@Component({
  selector: "main",
  providers: [InitializerService],
  template: "<page-router-outlet></page-router-outlet>" 
})
export class AppComponent  implements OnInit {


    private database: any;
    private isInstantiated: boolean;
    private isLoaded: boolean;

    constructor(private initializerService: InitializerService) {
        if(!this.isInstantiated) {
            (new Sqlite(Datasource.databaseName)).then(db => {
                db.execSQL(`CREATE TABLE IF NOT EXISTS schema_update (id INTEGER PRIMARY KEY AUTOINCREMENT, version_description TEXT)`)
                .then(id => {
                    this.database = db;
                    this.isInstantiated = true;
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });
        }
    }

  ngOnInit() {
    setTimeout(() => {
            this.fetchByVersionDescription().then(results => {
            if(results.length == 0) {
              console.log("-----------inserting------------");
              this.initializerService.initializeRolesAndUsers();
            } else {
              console.log("-----------DO NOTHING------------");
            }
          }).catch(error =>{
          });
        }, 500);
    
  }


    public insert(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.database.execSQL(`INSERT INTO schema_update (version_description) VALUES (?)`,Datasource.latest_version)
            .then(id => {
                console.log("INSERT RESULT", id);
            }, error => {
                console.log("INSERT ERROR", error);
            });
        });
    }

//TODO cant resolve duplicate insertion

    public fetchByVersionDescription(): Promise<any> {
      console.log(Datasource.latest_version);
        return new Promise((resolve, reject) => {
          this.database.all("SELECT * FROM schema_update where id = ?", [Datasource.latest_version]).then(rows => {
                  let schemaUpdates = [];
                  for(var row in rows) {
                      schemaUpdates.push({
                          "id": rows[row][0],
                          "firstname": rows[row][1]
                      });
                  }

          console.log("-----------fetching- in resolve-----------");
                  console.dump(schemaUpdates);
                  resolve(schemaUpdates);
              }, error => {

          console.log("-----------fetching- in error-----------");
                console.dump(error);
                  reject(error);
              });
        });
    }
  
}
