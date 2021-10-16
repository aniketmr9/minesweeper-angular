import { Component, OnInit } from "@angular/core";
declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "";
  rows = new Array(10);
  columns = new Array(10);
  ngOnInit(): void {
    this.title = "Test";
  }
  this.checkCell = function (buttonId) {
    $("#"+buttonId).css("background-color","#ffffff");
  };
}
