var qrCode; // ตัวแปรเก็บ QRCode object สำหรับการบันทึก

function generateQRCode() {
    // รับค่าลิงก์จาก input
    var link = document.getElementById("linkInput").value;

    // ตรวจสอบว่ามีการกรอกลิงก์หรือไม่
    if (link === "") {
        alert("กรุณากรอกลิงก์");
        return;
    }

    // ลบ QR Code เก่าที่เคยแสดง
    document.getElementById("qrcode").innerHTML = "";

    // สร้าง QR Code ใหม่
    qrCode = new QRCode(document.getElementById("qrcode"), {
        text: link,  // ลิงก์ที่ต้องการแปลงเป็น QR Code
        width: 300,  // ขนาด QR Code
        height: 300, // ขนาด QR Code
        colorDark: "#000000",  // สีของ QR Code
        colorLight: "#ffffff", // สีพื้นหลัง
        correctLevel: QRCode.CorrectLevel.L // ระดับการแก้ไขข้อผิดพลาด (L, M, Q, H)

    });

    // แสดงปุ่ม "บันทึก QR Code" เมื่อ QR Code ถูกสร้าง
    document.getElementById("saveBtn").style.display = "inline-block";
}

function saveQRCode() {
    // หา element ของ QR Code ที่แสดง
    var qrElement = document.getElementById("qrcode").getElementsByTagName("img")[0];
    if (qrElement) {
        // สร้างลิงก์สำหรับดาวน์โหลด
        var imageUrl = qrElement.src;

        // สร้างลิงก์ดาวน์โหลด
        var a = document.createElement("a");
        a.href = imageUrl;
        a.download = "qrcode.png"; // กำหนดชื่อไฟล์ที่จะบันทึก
        a.click();
    } else {
        alert("กรุณาสร้าง QR Code ก่อน");
    }
}
