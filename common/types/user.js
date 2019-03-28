"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EFollowStatus;
(function (EFollowStatus) {
    EFollowStatus[EFollowStatus["Unfollow"] = 0] = "Unfollow";
    EFollowStatus[EFollowStatus["Following"] = 1] = "Following";
    EFollowStatus[EFollowStatus["Mutual"] = 2] = "Mutual";
})(EFollowStatus = exports.EFollowStatus || (exports.EFollowStatus = {}));
var EUserStatus;
(function (EUserStatus) {
    EUserStatus[EUserStatus["Normal"] = 0] = "Normal";
    EUserStatus[EUserStatus["Ban"] = 1] = "Ban";
    EUserStatus[EUserStatus["Delete"] = 2] = "Delete";
})(EUserStatus = exports.EUserStatus || (exports.EUserStatus = {}));
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIseURBQVksQ0FBQTtJQUNaLDJEQUFhLENBQUE7SUFDYixxREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLGlEQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0lBQ1AsaURBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xyXG4gIGlkOiBudW1iZXIsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGF2YXRhcj86IHN0cmluZyxcclxuICBzaWduPzogc3RyaW5nLFxyXG4gIGZvbGxvd1N0YXR1cz86IEVGb2xsb3dTdGF0dXMsXHJcbiAgY291bnRlcj86IHtcclxuICAgIGZhbnM/OiBudW1iZXIsXHJcbiAgICBhY3Rpdml0eT86IG51bWJlcixcclxuICB9XHJcbiAgc3RhdHVzPzogRVVzZXJTdGF0dXMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVGb2xsb3dTdGF0dXMge1xyXG4gIFVuZm9sbG93ID0gMCwgLy8g5pyq5YWz5rOoXHJcbiAgRm9sbG93aW5nID0gMSwgLy8g5bey5YWz5rOoXHJcbiAgTXV0dWFsID0gMiwgLy8g55u45LqS5YWz5rOoXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVVc2VyU3RhdHVzIHtcclxuICBOb3JtYWwgPSAwLFxyXG4gIEJhbiA9IDEsIC8vIOiiq+emgeeUqFxyXG4gIERlbGV0ZSA9IDIsIC8vIOeUqOaIt+azqOmUgOS6huiHquW3sei0puWPt1xyXG59XHJcbiJdfQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQSxJQUFZLGFBSVg7QUFKRCxXQUFZLGFBQWE7SUFDdkIseURBQVksQ0FBQTtJQUNaLDJEQUFhLENBQUE7SUFDYixxREFBVSxDQUFBO0FBQ1osQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLGlEQUFVLENBQUE7SUFDViwyQ0FBTyxDQUFBO0lBQ1AsaURBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xuICBpZDogbnVtYmVyLFxuICBuYW1lOiBzdHJpbmcsXG4gIGF2YXRhcj86IHN0cmluZyxcbiAgc2lnbj86IHN0cmluZyxcbiAgZm9sbG93U3RhdHVzPzogRUZvbGxvd1N0YXR1cyxcbiAgY291bnRlcj86IHtcbiAgICBmYW5zPzogbnVtYmVyLFxuICAgIGFjdGl2aXR5PzogbnVtYmVyLFxuICB9XG4gIHN0YXR1cz86IEVVc2VyU3RhdHVzLFxufVxuXG5leHBvcnQgZW51bSBFRm9sbG93U3RhdHVzIHtcbiAgVW5mb2xsb3cgPSAwLCAvLyDmnKrlhbPms6hcbiAgRm9sbG93aW5nID0gMSwgLy8g5bey5YWz5rOoXG4gIE11dHVhbCA9IDIsIC8vIOebuOS6kuWFs+azqFxufVxuXG5leHBvcnQgZW51bSBFVXNlclN0YXR1cyB7XG4gIE5vcm1hbCA9IDAsXG4gIEJhbiA9IDEsIC8vIOiiq+emgeeUqFxuICBEZWxldGUgPSAyLCAvLyDnlKjmiLfms6jplIDkuoboh6rlt7HotKblj7dcbn1cbiJdfQ==
>>>>>>> sunda
