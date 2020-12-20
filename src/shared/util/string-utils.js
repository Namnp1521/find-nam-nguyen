/**
 * format number
 * @param {*} number
 */
export const formatNumberByMoney = (number) => {
  return new Intl.NumberFormat().format(number);
};

/**
 * format number by  currencyCd
 * @param {*} number
 * @param {*} currencyCd
 */
export const formatNumberByCurrencyCd = (number, currencyCd) => {
  if (currencyCd === undefined || currencyCd === null) {
    return new Intl.NumberFormat('ja-JP', {
      maximumFractionDigits: 2
    }).format(number);
  }
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: currencyCd,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,

  }).format(number);
};

/**
 * convert string YYYY-MM-DD to date
 * @param {*} dateStr
 */
export function toDate(dateStr) {
  if (dateStr != null) {
    var parts = dateStr.split("-");
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
}
/**
 * concat string XX>XX>XX
 * @param char
 * @param valueArr
 */
export function concatStringByChar(char, valueArr) {
  let res = "";
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] === null || valueArr[i] === "") break;
    res += valueArr[i] + char;
  }
  return res.slice(0, res.length - 1);
}
/**
 * c
 * @param {*} inputDate 
 */
export function formatDate(inputDate) {
  var pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!inputDate || !inputDate.match(pattern)) {
    return null;
  }
  return inputDate.replace(pattern, '$1/$2/$3');
}

/**
 * convert max length text
 * @param text
 * @param maxLength
 */
export function convertMaxLengthText(text, maxLength) {
  if (text) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.toString().substring(0, maxLength) + "...";
  }
}

/**
 * format string to float
 * @param text
 */
export function formatStringToFloat(text) {
  let res = "";
  let maxDigitBefore = 13; // max digit before dot
  let maxDigitAfter = 2; // max digit before dot
  if (text) {
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);

      if (res === "" && char === 0) {
        continue;
      }

      // get number
      if ("0123456789".includes(char)) {
        if (!res.includes(".")) {
          if (maxDigitBefore > 0) {
            res += char;
            maxDigitBefore--;
          }
        } else {
          if (maxDigitAfter > 0) {
            res += char;
            maxDigitAfter--;
          }
        }
      }
      // get dot
      if (char === "." && !res.includes(".")) {
        res += char;
      }
    }
  }

  if (res === "") {
    res = "0";
  }
  return res;
}

export function convertDateTime(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}