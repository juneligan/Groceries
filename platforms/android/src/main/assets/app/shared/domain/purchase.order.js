"use strict";
var user_1 = require("../domain/user");
var PurchaseOrder = (function () {
    function PurchaseOrder() {
        this.orderedItems = [];
        this.user = new user_1.User();
    }
    return PurchaseOrder;
}());
exports.PurchaseOrder = PurchaseOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyY2hhc2Uub3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwdXJjaGFzZS5vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsdUNBQXNDO0FBRXRDO0lBTUk7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2R1Y3RcIjtcbmltcG9ydCB7IE9yZGVyZWRJdGVtIH0gZnJvbSBcIi4uL2RvbWFpbi9vcmRlcmVkLml0ZW1cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vZG9tYWluL3VzZXJcIjtcblxuZXhwb3J0IGNsYXNzIFB1cmNoYXNlT3JkZXIge1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXNlcjogVXNlcjtcblx0dG90YWxBbW91bnQ6IG51bWJlcjtcblx0b3JkZXJlZEl0ZW1zOiBBcnJheTxPcmRlcmVkSXRlbT47XG5cdFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9yZGVyZWRJdGVtcyA9IFtdO1xuXHRcdHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgfVxufVxuIl19