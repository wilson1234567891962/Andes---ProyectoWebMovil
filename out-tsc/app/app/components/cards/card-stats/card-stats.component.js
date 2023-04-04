import { __decorate } from "tslib";
import { Component, Input } from "@angular/core";
let CardStatsComponent = class CardStatsComponent {
    constructor() {
        this._statSubtitle = "Traffic";
        this._statTitle = "350,897";
        this._statArrow = "up";
        this._statPercent = "3.48";
        this._statPercentColor = "text-emerald-500";
        this._statDescripiron = "Since last month";
        this._statIconName = "far fa-chart-bar";
        this._statIconColor = "bg-red-500";
    }
    get statSubtitle() {
        return this._statSubtitle;
    }
    set statSubtitle(statSubtitle) {
        this._statSubtitle = statSubtitle === undefined ? "Traffic" : statSubtitle;
    }
    get statTitle() {
        return this._statTitle;
    }
    set statTitle(statTitle) {
        this._statTitle = statTitle === undefined ? "350,897" : statTitle;
    }
    // The value must match one of up or down
    get statArrow() {
        return this._statArrow;
    }
    set statArrow(statArrow) {
        this._statArrow =
            statArrow !== "down" && statArrow !== "up" ? "up" : statArrow;
    }
    get statPercent() {
        return this._statPercent;
    }
    set statPercent(statPercent) {
        this._statPercent = statPercent === undefined ? "3.48" : statPercent;
    }
    // can be any of the text color utilities
    // from tailwindcss
    get statPercentColor() {
        return this._statPercentColor;
    }
    set statPercentColor(statPercentColor) {
        this._statPercentColor =
            statPercentColor === undefined ? "text-emerald-500" : statPercentColor;
    }
    get statDescripiron() {
        return this._statDescripiron;
    }
    set statDescripiron(statDescripiron) {
        this._statDescripiron =
            statDescripiron === undefined ? "Since last month" : statDescripiron;
    }
    get statIconName() {
        return this._statIconName;
    }
    set statIconName(statIconName) {
        this._statIconName =
            statIconName === undefined ? "far fa-chart-bar" : statIconName;
    }
    // can be any of the background color utilities
    // from tailwindcss
    get statIconColor() {
        return this._statIconColor;
    }
    set statIconColor(statIconColor) {
        this._statIconColor =
            statIconColor === undefined ? "bg-red-500" : statIconColor;
    }
    ngOnInit() { }
};
__decorate([
    Input()
], CardStatsComponent.prototype, "statSubtitle", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statTitle", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statArrow", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statPercent", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statPercentColor", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statDescripiron", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statIconName", null);
__decorate([
    Input()
], CardStatsComponent.prototype, "statIconColor", null);
CardStatsComponent = __decorate([
    Component({
        selector: "app-card-stats",
        templateUrl: "./card-stats.component.html",
    })
], CardStatsComponent);
export { CardStatsComponent };
//# sourceMappingURL=card-stats.component.js.map