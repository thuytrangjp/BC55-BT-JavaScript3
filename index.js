//Tạo mảng listNumber
var listNumber = [];

function themSo() {
  //DOM tới input#txtNumber lấy value
  var txtNumber = document.getElementById("txtNumber").value * 1;
  //thêm phần tử vào mảng listNumber
  listNumber.push(txtNumber);

  document.getElementById("txtNumber").value = "";

  document.getElementById("idListNumber").innerHTML = listNumber;
}

//1. Tổng số dương
function function1() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var tongSoDuong = 0;

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number > 0) {
      tongSoDuong += number;
    }
  }

  var result = "Tổng số dương là : " + tongSoDuong;

  document.getElementById("idFunctionResult").innerHTML = result;
}


//2. Đếm số dương
function function2() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var demSoDuong = 0;

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number > 0) {
      demSoDuong++;
    }
  }

  var result = "Số dương: " + demSoDuong;

  document.getElementById("idFunctionResult").innerHTML = result;
}



//3. Tìm số nhỏ nhất

function function3() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var soNhoNhat = listNumber[0];

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number < soNhoNhat) {
      soNhoNhat = number;
    }
  }

  var result = "Số nhỏ nhất: " + soNhoNhat;

  document.getElementById("idFunctionResult").innerHTML = result;
}


//4. Tìm số dương nhỏ nhất

function function4() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }
  //Tạo mảng chỉ nhận số dương từ List Number user input
  var listSoDuong = [];

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number > 0) {
      listSoDuong.push(number);
    }
  }
  if (listSoDuong.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Không có số dương";
    //dừng chương trình
    return;
  }
  //So sánh tìm số dương nhỏ nhất trong list số dương

  var soDuongNhoNhat = listSoDuong[0];

  for (var i = 0; i < listSoDuong.length; i++) {
    var soDuong = listSoDuong[i];
    if (soDuong < soDuongNhoNhat) {
      soDuongNhoNhat = soDuong;
    }
  }

  var result = "Số dương nhỏ nhất: " + soDuongNhoNhat;

  document.getElementById("idFunctionResult").innerHTML = result;
}



//5. Tìm số chẵn cuối cùng

function function5() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var soChan;

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number % 2 === 0) {
      soChan = number;
    }
  }

  var result = "Số chẵn cuối cùng là: " + soChan;

  document.getElementById("idFunctionResult").innerHTML = result;
}



//7. Sắp xếp tăng dần

function function7() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  for (var i = 0; i < listNumber.length - 1; i++) {
    for (var j = i + 1; j < listNumber.length; j++) {
      if (listNumber[i] > listNumber[j]) {
        //hoán vị
        var temp = listNumber[i];
        listNumber[i] = listNumber[j];
        listNumber[j] = temp;
      }
    }
  }

  var result = "Mảng sau khi sắp xếp: " + listNumber;

  document.getElementById("idFunctionResult").innerHTML = result;
}


//8. Tìm số ngtố đầu tiên
function function8() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var soNgTo = 0;

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    console.log(number);
    // Nếu number >= 2 và n chỉ chia hết cho chính nó và 1 là số nguyên tố
    if (number == 2) {
      soNgTo = number;
      break;
    } else if (number > 2) {
      // lặp từ 2 tới n-1\
      var countSoChiaHet = 0;
      for (var j = 2; j < number - 1; j++) {
        if (number % j == 0) {
          countSoChiaHet++;
          break;
        }
      }
      if (countSoChiaHet == 0) {
        soNgTo = number;
        break;
      }
    }
  }

  //Kiểm tra cuối cùng mảng có số nguyên tố hay không
  if (soNgTo < 2) {
    document.getElementById("idFunctionResult").innerHTML =
      "Mảng không có số nguyên tố";
    //dừng chương trình
    return;
  }

  var result = "Số nguyên tố đầu tiên là: " + soNgTo;

  document.getElementById("idFunctionResult").innerHTML = result;
}


//9. Đếm số nguyên

function function9() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var demSoNguyen = 0

  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (Number.isInteger(number) == true) {
      demSoNguyen++;
    }
  }

  var result = "Số nguyên: " + demSoNguyen;

  document.getElementById("idFunctionResult").innerHTML = result;
}


//10. Ss lượng số âm và dương
function function10() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  //Đếm số dương
  var demSoDuong = 0;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number > 0) {
      demSoDuong++;
    }
  }

  //Đếm số âm
  var demSoAm = 0;
  for (var i = 0; i < listNumber.length; i++) {
    var number = listNumber[i];
    if (number < 0) {
      demSoAm++;
    }
  }

  //So sánh
  if (demSoAm == demSoDuong) {
    result = "Số Âm = Số Dương";
  }
  else if (demSoAm < demSoDuong) {
    result = "Số Âm < Số Dương";
  }
  else {
    result = "Số Âm > Số Dương";
  };

  document.getElementById("idFunctionResult").innerHTML = result;
}



//6. Đổi chỗ
function function6() {
  //kiểm tra mảng listNumber có phần tử hay k?
  if (listNumber.length === 0) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào mảng";
    //dừng chương trình
    return;
  }

  var viTriMot = document.getElementById("inputOne").value;
  var viTriHai = document.getElementById("inputTwo").value;

  //Kiểm tra xem hai giá trị nhập đã điền đủ chưa
  if (viTriMot == "" || viTriHai == "") {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập số vào cả hai input";
    //dừng chương trình
    return;
  }

  viTriMot = viTriMot - 1;
  viTriHai = viTriHai - 1;
  //Kiểm tra xem hai giá trị có nằm trong chiều dài mảng hay không
  if (viTriMot < 0 || viTriHai < 0 || viTriMot > listNumber.length - 1 || viTriHai > listNumber.length - 1) {
    document.getElementById("idFunctionResult").innerHTML =
      "Vui lòng nhập vị trí hợp lệ cho cả hai số";
    //dừng chương trình
    return;
  }

  //Lấy giá trị hiện thời của hai vị trí
  var giaTriViTriMot = listNumber[viTriMot];
  var giaTriViTriHai = listNumber[viTriHai];

  //Hoán vị
  listNumber[viTriMot] = giaTriViTriHai;
  listNumber[viTriHai] = giaTriViTriMot;

  var result = "Mảng sau khi sắp xếp: " + listNumber;

  document.getElementById("idListNumber").innerHTML = listNumber;
  document.getElementById("idFunctionResult").innerHTML = result;
}