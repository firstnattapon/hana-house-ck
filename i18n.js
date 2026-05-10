/**
 * i18n Translation System for Hana House เชียงของ
 * Supports: ไทย (th), English (en), 中文 (zh)
 * Uses data-i18n attributes + localStorage for persistence
 */

const translations = {
  th: {
    // Topbar
    topbar_text: "🕐 เปิดให้บริการ 24 ชั่วโมง",
    // Nav
    nav_about: "เกี่ยวกับเรา",
    nav_rooms: "ห้องพัก",
    nav_amenities: "สิ่งอำนวยความสะดวก",
    nav_map: "แผนที่",
    nav_call: "📞 โทรจอง",
    // Hero
    hero_badge: "Boutique Hotel · เชียงของ",
    hero_title: "Hana House เชียงของ",
    hero_desc: "โรงแรมบูติกสไตล์ Soft Loft ใจกลางอำเภอเชียงของ จังหวัดเชียงราย พักผ่อนท่ามกลางบรรยากาศอบอุ่น ใกล้ด่านพรมแดนไทย-ลาว",
    hero_book: "จองห้องพัก — Agoda",
    hero_call: "📞 โทรสอบถาม",
    // Features Strip
    feat_24h: "เปิด 24 ชั่วโมง",
    feat_border: "ใกล้ด่านพรมแดน",
    feat_parking: "ที่จอดรถฟรี",
    feat_wifi: "Wi-Fi ฟรี",
    // About
    about_tag: "เกี่ยวกับเรา",
    about_title: "ที่พักสไตล์ Soft Loft กลางเมืองเชียงของ",
    about_p1: "Hana House เชียงของ เป็นโรงแรมบูติกที่ออกแบบด้วยแนวคิด Soft Loft ผสานความดิบของผนังปูนเปลือยเข้ากับความอบอุ่นของไม้ระแนง WPC และแสงไฟ Warm-white สร้างบรรยากาศที่ผ่อนคลายและมีเอกลักษณ์เฉพาะตัว",
    about_p2: "ตั้งอยู่ใจกลางอำเภอเชียงของ จังหวัดเชียงราย ใกล้กับด่านพรมแดนไทย-ลาว (สะพานมิตรภาพไทย-ลาว แห่งที่ 4) เหมาะสำหรับนักเดินทางที่ต้องการที่พักสะดวกสบาย ทั้งสำหรับการท่องเที่ยวและการเดินทางข้ามแดน",
    about_p3: "ทุกห้องพักได้รับการดูแลอย่างพิถีพิถัน พร้อมสิ่งอำนวยความสะดวกครบครัน ด้วยบริการเปิดต้อนรับตลอด 24 ชั่วโมง คุณสามารถเช็คอินได้ทุกเวลาอย่างสะดวกสบาย",
    about_cta: "📞 โทร 062-663-0332",
    // Rooms
    rooms_tag: "ห้องพักของเรา",
    rooms_title: "ห้องพักสไตล์มินิมอล ดีไซน์ Soft Loft",
    rooms_desc: "ห้องพักออกแบบอย่างพิถีพิถัน เน้นความสะอาด สะดวกสบาย ตกแต่งด้วยโทนสีอบอุ่น ผนังปูนเปลือยคู่กับไม้ระแนงและแสงไฟ Warm-white",
    room_standard: "ห้อง Standard",
    room_bathroom: "ห้องน้ำสะอาด",
    room_common: "พื้นที่ส่วนกลาง",
    // Amenities
    amenities_tag: "สิ่งอำนวยความสะดวก",
    amenities_title: "ครบครันทุกความต้องการ",
    am_wifi: "Wi-Fi ความเร็วสูง ฟรีทุกห้อง",
    am_parking: "ที่จอดรถส่วนตัว ฟรี",
    am_aircon: "เครื่องปรับอากาศทุกห้อง",
    am_hotwater: "น้ำอุ่นตลอด 24 ชั่วโมง",
    am_tv: "Smart TV ทุกห้อง",
    am_toiletries: "ชุดอาบน้ำและผ้าเช็ดตัว",
    am_keycard: "ระบบ Key Card ปลอดภัย",
    am_24h: "ต้อนรับ 24 ชั่วโมง",
    // Location
    location_tag: "ที่ตั้งและเวลาทำการ",
    location_title: "เดินทางมาหาเราได้ง่าย",
    loc_heading: "📍 ที่ตั้ง",
    loc_address_label: "ที่อยู่",
    loc_address_val: "109, สถาน, ตำบล สถาน",
    loc_district_label: "อำเภอ",
    loc_district_val: "เชียงของ",
    loc_province_label: "จังหวัด",
    loc_province_val: "เชียงราย 57140",
    loc_phone_label: "โทรศัพท์",
    hours_heading: "🕐 เวลาทำการ",
    hours_days: "จันทร์ - อาทิตย์",
    hours_open: "เปิด 24 ชั่วโมง",
    checkin_label: "เช็คอิน",
    checkout_label: "เช็คเอาท์",
    early_checkin: "สอบถามล่วงหน้า",
    // CTA
    cta_title: "พร้อมสัมผัสประสบการณ์ <span class=\"accent\">Hana House</span>?",
    cta_desc: "จองห้องพักผ่าน Agoda หรือโทรหาเราโดยตรงเพื่อรับข้อเสนอพิเศษ",
    cta_book: "จองผ่าน Agoda",
    cta_call: "📞 โทร 062-663-0332",
    // Footer
    footer_desc: "โรงแรมบูติกสไตล์ Soft Loft ตั้งอยู่ใจกลางอำเภอเชียงของ จังหวัดเชียงราย ใกล้ด่านพรมแดนไทย-ลาว พร้อมให้บริการตลอด 24 ชั่วโมง",
    footer_links: "ลิงก์ด่วน",
    footer_map: "แผนที่และที่ตั้ง",
    footer_book: "จองห้องพัก",
    footer_book_agoda: "จองผ่าน Agoda",
    footer_book_call: "โทรจองโดยตรง",
    open_24: "24 ชั่วโมง ทุกวัน"
  },

  en: {
    topbar_text: "🕐 Open 24 Hours",
    nav_about: "About Us",
    nav_rooms: "Rooms",
    nav_amenities: "Amenities",
    nav_map: "Map",
    nav_call: "📞 Call Now",
    hero_badge: "Boutique Hotel · Chiang Khong",
    hero_title: "Hana House Chiang Khong",
    hero_desc: "A Soft Loft boutique hotel in the heart of Chiang Khong, Chiang Rai. Relax in a warm atmosphere, close to the Thai-Lao border.",
    hero_book: "Book Now — Agoda",
    hero_call: "📞 Contact Us",
    feat_24h: "Open 24 Hours",
    feat_border: "Near Border Crossing",
    feat_parking: "Free Parking",
    feat_wifi: "Free Wi-Fi",
    about_tag: "About Us",
    about_title: "Soft Loft Stay in the Heart of Chiang Khong",
    about_p1: "Hana House Chiang Khong is a boutique hotel designed with a Soft Loft concept, blending raw exposed concrete with the warmth of WPC wood slats and warm-white lighting to create a relaxing and unique atmosphere.",
    about_p2: "Located in the center of Chiang Khong District, Chiang Rai, near the Thai-Lao border (Thailand-Laos Friendship Bridge No. 4), ideal for travelers seeking comfortable accommodation for tourism and cross-border travel.",
    about_p3: "Every room is meticulously maintained with full amenities. With 24-hour reception, you can check in at any time conveniently.",
    about_cta: "📞 Call 062-663-0332",
    rooms_tag: "Our Rooms",
    rooms_title: "Minimal Style Rooms, Soft Loft Design",
    rooms_desc: "Meticulously designed rooms emphasizing cleanliness and comfort, decorated in warm tones with exposed concrete, wood slats, and warm-white lighting.",
    room_standard: "Standard Room",
    room_bathroom: "Clean Bathroom",
    room_common: "Common Area",
    amenities_tag: "Amenities",
    amenities_title: "Everything You Need",
    am_wifi: "High-Speed Wi-Fi, Free in All Rooms",
    am_parking: "Private Parking, Free",
    am_aircon: "Air Conditioning in Every Room",
    am_hotwater: "Hot Water 24 Hours",
    am_tv: "Smart TV in Every Room",
    am_toiletries: "Toiletries & Towels",
    am_keycard: "Secure Key Card System",
    am_24h: "24-Hour Reception",
    location_tag: "Location & Hours",
    location_title: "Easy to Find Us",
    loc_heading: "📍 Location",
    loc_address_label: "Address",
    loc_address_val: "109, Sathan, Tambon Sathan",
    loc_district_label: "District",
    loc_district_val: "Chiang Khong",
    loc_province_label: "Province",
    loc_province_val: "Chiang Rai 57140",
    loc_phone_label: "Phone",
    hours_heading: "🕐 Operating Hours",
    hours_days: "Mon – Sun",
    hours_open: "Open 24 Hours",
    checkin_label: "Check-in",
    checkout_label: "Check-out",
    early_checkin: "Please inquire in advance",
    cta_title: "Ready to Experience <span class=\"accent\">Hana House</span>?",
    cta_desc: "Book through Agoda or call us directly for special offers.",
    cta_book: "Book via Agoda",
    cta_call: "📞 Call 062-663-0332",
    footer_desc: "Soft Loft boutique hotel in the heart of Chiang Khong, Chiang Rai, near the Thai-Lao border. Open 24 hours.",
    footer_links: "Quick Links",
    footer_map: "Map & Location",
    footer_book: "Reservations",
    footer_book_agoda: "Book via Agoda",
    footer_book_call: "Call Direct",
    open_24: "24 Hours, Every Day"
  },

  zh: {
    topbar_text: "🕐 全天24小时营业",
    nav_about: "关于我们",
    nav_rooms: "客房",
    nav_amenities: "设施",
    nav_map: "地图",
    nav_call: "📞 立即致电",
    hero_badge: "精品酒店 · 清孔",
    hero_title: "Hana House 清孔",
    hero_desc: "位于泰国清莱府清孔县中心的 Soft Loft 风格精品酒店，氛围温馨舒适，毗邻泰老边境口岸。",
    hero_book: "立即预订 — Agoda",
    hero_call: "📞 联系我们",
    feat_24h: "全天24小时",
    feat_border: "靠近边境口岸",
    feat_parking: "免费停车",
    feat_wifi: "免费 Wi-Fi",
    about_tag: "关于我们",
    about_title: "清孔市中心的 Soft Loft 住宿",
    about_p1: "Hana House 清孔是一家以 Soft Loft 理念设计的精品酒店，融合裸露混凝土的原始感与 WPC 木条的温暖质感和暖白灯光，营造出轻松独特的氛围。",
    about_p2: "酒店位于清莱府清孔县中心，毗邻泰老友谊大桥（第四座），是前往泰老边境旅游或过境旅客的理想住宿选择。",
    about_p3: "每间客房均经过精心维护，设施齐全。酒店提供24小时前台服务，您可随时便捷办理入住手续。",
    about_cta: "📞 致电 062-663-0332",
    rooms_tag: "我们的客房",
    rooms_title: "简约风格客房，Soft Loft 设计",
    rooms_desc: "精心设计的客房，注重整洁舒适，以暖色调装饰，搭配裸露混凝土、木条和暖白灯光。",
    room_standard: "标准客房",
    room_bathroom: "洁净卫浴",
    room_common: "公共区域",
    amenities_tag: "酒店设施",
    amenities_title: "一应俱全",
    am_wifi: "高速 Wi-Fi，所有客房免费",
    am_parking: "私人停车位，免费",
    am_aircon: "每间客房配备空调",
    am_hotwater: "24小时热水供应",
    am_tv: "每间客房配备智能电视",
    am_toiletries: "洗浴用品和毛巾",
    am_keycard: "安全门卡系统",
    am_24h: "24小时前台服务",
    location_tag: "位置与营业时间",
    location_title: "轻松找到我们",
    loc_heading: "📍 位置",
    loc_address_label: "地址",
    loc_address_val: "109, Sathan, Tambon Sathan",
    loc_district_label: "县",
    loc_district_val: "清孔",
    loc_province_label: "府",
    loc_province_val: "清莱 57140",
    loc_phone_label: "电话",
    hours_heading: "🕐 营业时间",
    hours_days: "周一至周日",
    hours_open: "全天24小时",
    checkin_label: "入住",
    checkout_label: "退房",
    early_checkin: "请提前咨询",
    cta_title: "准备好体验 <span class=\"accent\">Hana House</span>？",
    cta_desc: "通过 Agoda 预订或直接致电我们享受优惠。",
    cta_book: "通过 Agoda 预订",
    cta_call: "📞 致电 062-663-0332",
    footer_desc: "位于清莱府清孔县中心的 Soft Loft 精品酒店，毗邻泰老边境口岸，全天24小时为您服务。",
    footer_links: "快速导航",
    footer_map: "地图与位置",
    footer_book: "预订客房",
    footer_book_agoda: "通过 Agoda 预订",
    footer_book_call: "直接致电预订",
    open_24: "全天24小时，每天开放"
  }
};

// Keys that contain HTML (innerHTML instead of textContent)
const htmlKeys = ['cta_title'];

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (htmlKeys.includes(key)) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // Save to localStorage
  localStorage.setItem('lang', lang);

  // Sync dropdown
  const switcher = document.getElementById('lang-switcher');
  if (switcher) switcher.value = lang;
}

// Init on page load
(function initI18n() {
  const savedLang = localStorage.getItem('lang') || 'th';
  const switcher = document.getElementById('lang-switcher');

  // Apply saved language
  applyLanguage(savedLang);

  // Bind change event
  if (switcher) {
    switcher.addEventListener('change', function () {
      applyLanguage(this.value);
    });
  }
})();
