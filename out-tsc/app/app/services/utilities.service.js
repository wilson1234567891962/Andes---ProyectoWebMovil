import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let UtilitiesService = class UtilitiesService {
    constructor() {
    }
    validatorsFields(input) {
        return input !== undefined && input !== null && input !== 'null' && input.length !== 0;
    }
    validatorsEmail(input) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
        if (!input.match(validRegex)) {
            return false;
        }
        else {
            return true;
        }
    }
    validatorDate(input, count) {
        const date = new Date();
        const system = new Date();
        system.setDate(date.getDate() + count);
        if (system > input) {
            return false;
        }
        return true;
    }
    conversionDate(inputDataPicker, validationDate) {
        const date = new Date(this.changeFormatDate(validationDate));
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        inputDataPicker.setDate(inputDataPicker.getDate() + 1);
        return day === inputDataPicker.getDate() && month === inputDataPicker.getMonth() && year === inputDataPicker.getFullYear();
    }
    changeFormatDate(value) {
        const date = value;
        const tmp = date.split('-');
        const newDate = tmp[1] + '-' + tmp[0] + '-' + tmp[2];
        return newDate;
    }
    betweenDate(inputStartDataPicker, inputEndDatePicker, validationDate) {
        const date = new Date(this.changeFormatDate(validationDate));
        inputStartDataPicker.setDate(inputStartDataPicker.getDate());
        inputEndDatePicker.setDate(inputEndDatePicker.getDate() + 1);
        return inputStartDataPicker <= date && inputEndDatePicker >= date;
    }
    paginate(totalItems, currentPage = 1, pageSize = 10, maxPages = 10) {
        // calculate total pages
        const totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage;
        let endPage;
        if (totalPages <= maxPages) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // total pages more than max so calculate start and end pages
            const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            }
            else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        // calculate start and end item indexes
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        // return object with all pager properties required by the view
        return {
            totalItems,
            currentPage,
            pageSize,
            totalPages,
            startPage,
            endPage,
            startIndex,
            endIndex,
            pages
        };
    }
};
UtilitiesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UtilitiesService);
export { UtilitiesService };
//# sourceMappingURL=utilities.service.js.map