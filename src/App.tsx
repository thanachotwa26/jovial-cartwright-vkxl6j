import React from "react";

// --- ส่วนที่ 1: หน้าตาของการ์ดบริการ (ไม่มีการดึงไอคอนจากภายนอก) ---
function ServiceCard({ title, price, desc }: { title: string, price: string, desc: string }) {
  return (
    <div className="p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all bg-white text-center">
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
        ⭐
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-blue-600 font-bold text-xl mb-4">เริ่มต้น {price}</p>
      <p className="text-gray-500 mb-8">{desc}</p>
      <button className="w-full py-3 bg-gray-50 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-colors">
        รายละเอียดเพิ่มเติม
      </button>
    </div>
  );
}

// --- ส่วนที่ 2: หน้าเว็บหลัก ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* เมนูบนสุด */}
      <nav className="fixed w-full bg-white shadow-md z-50 py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-black text-blue-600">
          PROM <span className="text-gray-400 font-light">CLEAN</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 font-bold hover:bg-blue-700 transition">
          📞 02-XXX-XXXX
        </button>
      </nav>

      {/* ส่วนหัว (Hero) */}
      <header className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Professional Cleaning <br />
            <span className="text-blue-600">You Can Trust</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10">
            PROM Cleaning Service – สะอาดทุกมุม มั่นใจทุกตารางนิ้ว โดยทีมงานมืออาชีพ
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
              จองบริการเลย
            </button>
          </div>
        </div>
      </header>

      {/* ส่วนบริการ (Services) */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          บริการของเรา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Home & Condo"
            price="500.-"
            desc="ทำความสะอาดที่พักอาศัย ดูแลโดยแม่บ้านมืออาชีพ"
          />
          <ServiceCard
            title="Deep Cleaning"
            price="2,500.-"
            desc="ทำความสะอาดครั้งใหญ่ ขจัดคราบฝังลึก เน้นทุกซอกมุม"
          />
          <ServiceCard
            title="Office & Shop"
            price="เสนอราคา"
            desc="บริการสำหรับออฟฟิศ ร้านค้า และสถานประกอบการ"
          />
        </div>
      </section>

      {/* ส่วนท้าย (Footer) */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">PROM Cleaning Service</h3>
          <p className="text-gray-400 mb-8">ความสะอาดของคุณ คือความสุขของเรา</p>
          <div className="flex justify-center gap-6 text-gray-300">
            <span className="cursor-pointer hover:text-blue-500">👍 Facebook</span>
            <span className="cursor-pointer hover:text-blue-500">✉️ Email</span>
            <span className="cursor-pointer hover:text-blue-500">📍 แผนที่</span>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2026 PROM Cleaning Service - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}