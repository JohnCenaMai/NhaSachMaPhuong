
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 300);
});
function moicapnhat() {
    document.getElementById("0").innerHTML = "Truyện mới cập nhật";
    document.getElementById("img1").src = "./image/moicapnhat/1.jpg";
    document.getElementById("img2").src = "./image/moicapnhat/2.jpg";
    document.getElementById("img3").src = "./image/moicapnhat/3.jpg";
    document.getElementById("img4").src = "./image/moicapnhat/4.jpg";
    document.getElementById("img5").src = "./image/moicapnhat/5.jpg";
    document.getElementById("img6").src = "./image/moicapnhat/6.jpg";
    document.getElementById("img7").src = "./image/moicapnhat/7.jpg";
    document.getElementById("img8").src = "./image/moicapnhat/8.jpg";

    document.getElementById("t1").innerHTML = "Bốn Anh Tài";
    document.getElementById("tg1").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t2").innerHTML = "Chàng Ngốc Học Khôn";
    document.getElementById("tg2").innerHTML = "Của Mộc Tử Lãng";

    document.getElementById("t3").innerHTML = "1001 Bí ẩn chưa có lời giải";
    document.getElementById("tg3").innerHTML = "Nhà xuất bản Hải Phòng";

    document.getElementById("t4").innerHTML = "Khoa học: nghịch lý";
    document.getElementById("tg4").innerHTML = "Nhà xuất bản Trẻ";
    
    document.getElementById("t5").innerHTML = "Mặt trời mọc trông bóng Hoàng Hôn";
    document.getElementById("tg5").innerHTML = "Của Mộc Tử Lãng";

    document.getElementById("t6").innerHTML = "Quỷ Hàm Thiên Hạ";
    document.getElementById("tg6").innerHTML = "Của Mộc Tử Lãng";

    document.getElementById("t7").innerHTML = "Cỗ máy thời gian";
    document.getElementById("tg7").innerHTML = "Của H.G.WELLS";

    document.getElementById("t8").innerHTML = "Geogre và vụ nổ Big Bang";
    document.getElementById("tg8").innerHTML = "Lucy Hawking và Stephen Hawking";

}

function TrinhTham() {
    document.getElementById("0").innerHTML = "Truyện Trinh thám";
    document.getElementById("img1").src = "./image/TrinhThamImage/trinhtham1.jpg";
    document.getElementById("img2").src = "./image/TrinhThamImage/trinhtham2.jpg";
    document.getElementById("img3").src = "./image/TrinhThamImage/trinhtham3.jpg";
    document.getElementById("img4").src = "./image/TrinhThamImage/trinhtham4.jpg";
    document.getElementById("img5").src = "./image/TrinhThamImage/trinhtham5.jpg";
    document.getElementById("img6").src = "./image/TrinhThamImage/trinhtham6.jpg";
    document.getElementById("img7").src = "./image/TrinhThamImage/trinhtham7.jpg";
    document.getElementById("img8").src = "./image/TrinhThamImage/trinhtham8.jpg";

    document.getElementById("t1").innerHTML = "Câu chuyện án mạng đêm cuối năm";
    document.getElementById("tg1").innerHTML = "Của AGATHA CHRISTIE";

    document.getElementById("t2").innerHTML = "Chuỗi án mạng A.B.C";
    document.getElementById("tg2").innerHTML = "Của AGATHA CHRISTIE";

    document.getElementById("t3").innerHTML = "Mặt trời mọc trông bóng Hoàng Hôn";
    document.getElementById("tg3").innerHTML = "Của Mộc Tử Lãng";

    document.getElementById("t4").innerHTML = "Quỷ Hàm Thiên Hạ";
    document.getElementById("tg4").innerHTML = "Của Mộc Tử Lãng";

    document.getElementById("t5").innerHTML = "Tình yêu phù thủy (biệt thự bạch mã)";
    document.getElementById("tg5").innerHTML = "Của AGATHA CHRISTIE";

    document.getElementById("t6").innerHTML = "Bộ phim khó quay";
    document.getElementById("tg6").innerHTML = "Của ALFRED HTCHCOOK";

    document.getElementById("t7").innerHTML = "Đồng hồ la hét";
    document.getElementById("tg7").innerHTML = "Của ALFRED HTCHCOOK";

    document.getElementById("t8").innerHTML = "Con gà đội vương niệm";
    document.getElementById("tg8").innerHTML = "Của ALFRED HTCHCOOK";

}

function CoTich() {
	document.getElementById("0").innerHTML = "Truyện cổ tich";
    document.getElementById("img1").src = "./image/CoTichImage/cotich1.jpg";
    document.getElementById("img2").src = "./image/CoTichImage/cotich2.jpg";
    document.getElementById("img3").src = "./image/CoTichImage/cotich3.jpg";
    document.getElementById("img4").src = "./image/CoTichImage/cotich4.jpg";
    document.getElementById("img5").src = "./image/CoTichImage/cotich5.jpg";
    document.getElementById("img6").src = "./image/CoTichImage/cotich6.jpg";
    document.getElementById("img7").src = "./image/CoTichImage/cotich7.jpg";
    document.getElementById("img8").src = "./image/CoTichImage/cotich8.jpg";

    document.getElementById("t1").innerHTML = "Giết chó khuyên chồng";
    document.getElementById("tg1").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t2").innerHTML = "Hồn Trương Ba, Da Hàng Thịt";
    document.getElementById("tg2").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t3").innerHTML = "Nghêu Sò Ốc Hến";
    document.getElementById("tg3").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t4").innerHTML = "Người Hóa Hổ";
    document.getElementById("tg4").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t5").innerHTML = "Bốn Anh Tài";
    document.getElementById("tg5").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t6").innerHTML = "Chàng Ngốc Học Khôn";
    document.getElementById("tg6").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t7").innerHTML = "Chuyện nàng Tô Thị";
    document.getElementById("tg7").innerHTML = "Của nhà xuất bản mỹ thuật";

    document.getElementById("t8").innerHTML = "Đeo Nhạc Cho Mèo";
    document.getElementById("tg8").innerHTML = "Của nhà xuất bản mỹ thuật";

}

function KhoaHoc() {
	document.getElementById("0").innerHTML = "Truyện khoa học";
    document.getElementById("img1").src = "./image/KhoaHocImage/khoahoc1.jpg";
    document.getElementById("img2").src = "./image/KhoaHocImage/khoahoc2.jpg";
    document.getElementById("img3").src = "./image/KhoaHocImage/khoahoc3.jpg";
    document.getElementById("img4").src = "./image/KhoaHocImage/khoahoc4.jpg";
    document.getElementById("img5").src = "./image/KhoaHocImage/khoahoc5.jpg";
    document.getElementById("img6").src = "./image/KhoaHocImage/khoahoc6.jpg";
    document.getElementById("img7").src = "./image/KhoaHocImage/khoahoc7.jpg";
    document.getElementById("img8").src = "./image/KhoaHocImage/khoahoc8.jpg";

    document.getElementById("t1").innerHTML = "Tổ chức công việc khoa học";
    document.getElementById("tg1").innerHTML = "Của Nguyễn Hiến Lê";

    document.getElementById("t2").innerHTML = "Khoa học công trình";
    document.getElementById("tg2").innerHTML = "Nhà xuất bản Giáo Dục Việt Nam";

    document.getElementById("t3").innerHTML = "Khoa học môi trường";
    document.getElementById("tg3").innerHTML = "Nhà xuất bản Giáo Dục Việt Nam";

    document.getElementById("t4").innerHTML = "1001 Bí ẩn chưa có lời giải";
    document.getElementById("tg4").innerHTML = "Nhà xuất bản Hải Phòng";

    document.getElementById("t5").innerHTML = "Khoa học quảng cáo";
    document.getElementById("tg5").innerHTML = "Của David Ogilvy";

    document.getElementById("t6").innerHTML = "Cuộc cách mạng ngược trong khoa học";
    document.getElementById("tg6").innerHTML = "FriendRich A.Hayek";

    document.getElementById("t7").innerHTML = "Giải trí khoa học";
    document.getElementById("tg7").innerHTML = "Nhà xuất bản Đông Á";

    document.getElementById("t8").innerHTML = "Khoa học: nghịch lý";
    document.getElementById("tg8").innerHTML = "Nhà xuất bản Trẻ";
}

function VienTuong() {	
	document.getElementById("0").innerHTML = "Truyện viễn tưởng";
    document.getElementById("img1").src = "./image/VienTuongImage/vientuong1.jpg";
    document.getElementById("img2").src = "./image/VienTuongImage/vientuong2.jpg";
    document.getElementById("img3").src = "./image/VienTuongImage/vientuong3.jpg";
    document.getElementById("img4").src = "./image/VienTuongImage/vientuong4.jpg";
    document.getElementById("img5").src = "./image/VienTuongImage/vientuong5.jpg";
    document.getElementById("img6").src = "./image/VienTuongImage/vientuong6.jpg";
    document.getElementById("img7").src = "./image/VienTuongImage/vientuong7.jpg";

    document.getElementById("t1").innerHTML = "Người về từ sao hỏa";
    document.getElementById("tg1").innerHTML = "Của Andy Weir";

    document.getElementById("t2").innerHTML = "Tận thế";
    document.getElementById("tg2").innerHTML = "Của Lưu Từ Hân";

    document.getElementById("t3").innerHTML = "DUNE";
    document.getElementById("tg3").innerHTML = "Của Frank Herbert";

    document.getElementById("t4").innerHTML = "45 độ F";
    document.getElementById("tg4").innerHTML = "Của Ray Bradbury";

    document.getElementById("t5").innerHTML = "Cỗ máy thời gian";
    document.getElementById("tg5").innerHTML = "Của H.G.WELLS";

    document.getElementById("t6").innerHTML = "Geogre và vụ nổ Big Bang";
    document.getElementById("tg6").innerHTML = "Lucy Hawking và Stephen Hawking";

    document.getElementById("t7").innerHTML = "I, Robot to obey";
    document.getElementById("tg7").innerHTML = "Mickey Zucker Reichert";

    document.getElementById("t8").innerHTML = "Khoa học: nghịch lý";
    document.getElementById("tg8").innerHTML = "Của nhà xuất bản Trẻ";

}

function NguNgon() {
	document.getElementById("0").innerHTML = "Truyện ngụ ngôn";
    document.getElementById("img1").src = "./image/NguNgonImage/ngungon1.jpg";
    document.getElementById("img2").src = "./image/NguNgonImage/ngungon2.jpg";
    document.getElementById("img3").src = "./image/NguNgonImage/ngungon3.jpg";
    document.getElementById("img4").src = "./image/NguNgonImage/ngungon4.jpg";
    document.getElementById("img5").src = "./image/NguNgonImage/ngungon5.jpg";
    document.getElementById("img6").src = "./image/NguNgonImage/ngungon6.jpg";
    document.getElementById("img7").src = "./image/NguNgonImage/ngungon7.jpg";
    document.getElementById("img8").src = "./image/NguNgonImage/ngungon8.jpg";

    document.getElementById("t1").innerHTML = "Tình bạn của rái cá";
    document.getElementById("tg1").innerHTML = "Sưu tầm";

    document.getElementById("t2").innerHTML = "Thầy tu rởm";
    document.getElementById("tg2").innerHTML = "Sưu tầm";

    document.getElementById("t3").innerHTML = "Chuyện ngụ ngôn của bác sĩ miền rừng";
    document.getElementById("tg3").innerHTML = "Dr Paul White";

    document.getElementById("t4").innerHTML = "Nai và chó sói";
    document.getElementById("tg4").innerHTML = "Sưu tầm";

    document.getElementById("t5").innerHTML = "Truyện ngụ ngôn thiếu nhi";
    document.getElementById("tg5").innerHTML = "Sưu tầm";

    document.getElementById("t6").innerHTML = "Cẩm nang xử thế";
    document.getElementById("tg6").innerHTML = "Sue Gallehugh,Ph.D,Allen Gallehugh";

    document.getElementById("t7").innerHTML = "Thơ ngụ ngôn";
    document.getElementById("tg7").innerHTML = "Của La Fontaine";

    document.getElementById("t8").innerHTML = "108 Truyện ngụ ngôn hay nhất";
    document.getElementById("tg8").innerHTML = "Sưu tầm";

}

function Show() {
    var x = document.getElementsByClassName("a1");
    if (x[0].style.display === "block") {
        x[0].style.display = "none";
    } else {
        x[0].style.display = "block";
    }

    if (x[1].style.display === "block") {
        x[1].style.display = "none";
    } else {
        x[1].style.display = "block";
    }

    if (x[2].style.display === "block") {
        x[2].style.display = "none";
    } else {
        x[2].style.display = "block";
    }

    if (x[3].style.display === "block") {
        x[3].style.display = "none";
    } else {
        x[3].style.display = "block";
    }

    if (x[4].style.display === "block") {
        x[4].style.display = "none";
    } else {
        x[4].style.display = "block";
    }
}
