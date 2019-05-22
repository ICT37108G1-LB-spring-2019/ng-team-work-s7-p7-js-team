import { Component, OnInit, Input } from "@angular/core";
import { RequestService } from "../request.service";
@Component({
  selector: "app-cakedetailedinfo",
  templateUrl: "./cakedetailedinfo.component.html",
  styleUrls: ["cakedetailedinfo.component.css"]
})
export class CakedetailedinfoComponent implements OnInit {
  @Input() ids;
  datas: object;
  constructor(private req: RequestService) {}
  ngOnInit() {
    this.req.info(this.ids).subscribe(data => {
      this.datas = data;
    });
  }
}
