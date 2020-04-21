export const convertToTimestamp = (str) => {
    var mnths = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12"
    }
    str = str.split(" ");
    var newDate = mnths[str[1]] + "/" + str[2] + "/" + str[3];
    return (new Date(newDate).getTime())
  }
 export const formatDate = (str) => {
    var days = {
      0: "Chủ nhật",
      1: "Thứ 2",
      2: "Thứ 3",
      3: "Thứ 4",
      4: "Thứ 5",
      5: "Thứ 6",
      6: "Thứ 7",

    }
    var day = days[str.getDay()];
    var year = str.getFullYear();
    var month = str.getMonth() + 1;
    var date = str.getDate();
    return (day + ", " + year + "/" + ((month < 10) ? ("0" + month) : month) + "/" + ((date < 10) ? ("0" + date) : date));
  }
