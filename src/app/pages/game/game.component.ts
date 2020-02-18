import { Component, OnInit } from "@angular/core";
import { prompt, inputType } from "tns-core-modules/ui/dialogs";
import * as appSettings from "tns-core-modules/application-settings/application-settings";
@Component({
    selector: "app-game",
    templateUrl: "game.component.html",
    styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
    public currentColorText;
    public currentColor;
    public score;
    public gameOver = false;
    private promptOptions = {
        title: "Save your score",
        defaultText: "Enter your name",
        okButtonText: "Save score",
        cancelButtonText: "Cancel",
        cancelable: true,
        inputType: inputType.text
    };

    public availableColors = [
        "Red",
        "Blue",
        "Brown",
        "Pink",
        "Purple",
        "Yellow",
        "Orange",
        "Green",
        "Black"
    ];
    constructor() {}

    ngOnInit() {
        this.startGame();
    }

    public startGame() {
        this.setColor();
        this.score = 0;
        this.gameOver = false;
    }

    // TODO: finish save score functionality
    // public saveScore() {
    //     prompt(this.promptOptions).then(name => {
    //         let scores = JSON.parse(appSettings.getString("cm-scores", "[]"));
    //         scores.push({
    //             id: new Date().toISOString(),
    //             name: name,
    //             score: this.score
    //         });
    //         appSettings.setString("cm-scores", JSON.stringify(scores));
    //         this.startGame();
    //     });
    // }

    setColor() {
        const randomColorTextIndex = this.getRandomNumber(
            this.availableColors.length
        );
        const randomColorIndex = this.getRandomNumber(
            this.getRandomNumber(this.availableColors.length)
        );
        this.currentColorText = this.availableColors[randomColorTextIndex];
        this.currentColor = this.availableColors[randomColorIndex];
    }

    private getRandomNumber(limit: number) {
        return Math.ceil(Math.random() * limit);
    }

    public handleBtnClick(btn: "match" | "no-match") {
        if (btn === "match") {
            if (this.currentColor === this.currentColorText) {
                this.score += 100;
                this.setColor();
            } else {
                this.gameOver = true;
            }
        } else {
            if (this.currentColorText !== this.currentColor) {
                this.score += 100;
                this.setColor();
            } else {
                this.gameOver = true;
            }
        }
    }
}
