;
function logBook(fname, mobile, region, code) {
    console.log("\nUser Details \nName: " + fname + "\nMobile No.: " + mobile + "\nPostal Code: " + code + "\nRegion: " + region);
}
var CallObj = logBook;
CallObj('Ameya', 9987658911, 'India', '+91');
var CallObj2 = logBook;
CallObj2('Abcdef', 8172574191, 'India');
