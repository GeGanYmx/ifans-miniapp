"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartDate = function (date) {
    var delta = date.getTime() - Date.now();
    if (delta < 60000) {
        return 'Just now';
    }
    else if (delta < 3600000) {
        return Math.floor(delta / 60000) + 'minutes ago';
    }
    else if (delta < 259200000) {
        return '1 hours ago';
    }
    else if (delta >= 259200000) {
        return '3 day ago';
    }
    return "NOW";
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxTQUFTLEdBQUcsVUFBQyxJQUFTO0lBQy9CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEMsSUFBRyxLQUFLLEdBQUcsS0FBSyxFQUFFO1FBQ2QsT0FBTyxVQUFVLENBQUE7S0FDcEI7U0FBTSxJQUFHLEtBQUssR0FBRyxPQUFPLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBQyxhQUFhLENBQUM7S0FDbEQ7U0FBTSxJQUFHLEtBQUssR0FBRyxTQUFTLEVBQUU7UUFDekIsT0FBTyxhQUFhLENBQUM7S0FDeEI7U0FBSyxJQUFHLEtBQUssSUFBSSxTQUFTLEVBQUU7UUFDekIsT0FBTyxXQUFXLENBQUM7S0FDdEI7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc21hcnREYXRlID0gKGRhdGU6RGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgZGVsdGEgPSBkYXRlLmdldFRpbWUoKS1EYXRlLm5vdygpO1xyXG4gICAgaWYoZGVsdGEgPCA2MDAwMCkge1xyXG4gICAgICAgIHJldHVybiAnSnVzdCBub3cnXHJcbiAgICB9IGVsc2UgaWYoZGVsdGEgPCAzNjAwMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGVsdGEgLyA2MDAwMCkrJ21pbnV0ZXMgYWdvJztcclxuICAgIH0gZWxzZSBpZihkZWx0YSA8IDI1OTIwMDAwMCApe1xyXG4gICAgICAgIHJldHVybiAnMSBob3VycyBhZ28nO1xyXG4gICAgfWVsc2UgaWYoZGVsdGEgPj0gMjU5MjAwMDAwICl7XHJcbiAgICAgICAgcmV0dXJuICczIGRheSBhZ28nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiTk9XXCI7XHJcbn1cclxuIl19