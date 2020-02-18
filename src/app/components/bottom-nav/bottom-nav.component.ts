import { Component, OnInit } from "@angular/core";
import {
    OnTabSelectedEventData,
    BubbleNavigationItem
} from "nativescript-bubble-navigation";
import { Router } from "@angular/router";

@Component({
    selector: "app-bottom-nav",
    templateUrl: "bottom-nav.component.html",
    styleUrls: ["./bottom-nav.component.css"]
})
export class BottomNavComponent implements OnInit {
    public title: string = "Home";
    public bg: string = "#e57373";
    public tabs: BubbleNavigationItem[];
    constructor(private router: Router) {
        this.tabs = [
            new BubbleNavigationItem("Home", "home"),
            new BubbleNavigationItem("Scores", "rank"),
            new BubbleNavigationItem("About", "info")
        ];
    }

    onBubbleNavigationTabSelected(args: OnTabSelectedEventData): void {
        this.title = args.name.toLowerCase();
        this.bg = this.tabs[args.position].colorInactive;

        this.router.navigate([this.title]);
    }

    ngOnInit() {}
}
