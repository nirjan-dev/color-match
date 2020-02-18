import { Component, OnInit } from "@angular/core";
import * as utils from "tns-core-modules/utils/utils";
@Component({
    selector: "app-about",
    templateUrl: "about.component.html",
    styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    private openLink(link: string) {
        utils.openUrl(link);
    }
}
