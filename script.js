function convertToRoman() {
    let num = document.getElementById("dec").value;
    let total = "";
    let arrNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let arrRom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    function remFinder(input, figure) {
        return parseInt(input % figure)
    }

    function tally(count) {
        let roman = ""
        let i = 0;
        while (i < count) {
            roman += arrRom[j];
            i++
        }
    return roman
    }

    let remainder = num;

    for (var j=0; j < arrNum.length; j++) {
        total = total + tally(parseInt(remainder / arrNum[j]))
        remainder = remFinder(remainder, arrNum[j])
    }

    console.log(total);
    
    document.getElementById("output").innerHTML = total;
  }