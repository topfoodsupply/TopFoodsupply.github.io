import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "searchPlaceholder": "Search products by name or HS Code...",
        "home": "Home",
        "catalog": "Catalog",
        "docs": "Docs",
        "profile": "Profile"
      },
      "footer": {
        "desc": "Dual-market commerce engine synchronizing high-frequency domestic consumption with complex international B2B exports.",
        "export": "Export & Compliance",
        "docVault": "Documentation Vault",
        "taxCalc": "Tax & Duty Calculator",
        "certs": "Certifications",
        "supply": "Supply Chain",
        "fefo": "FEFO Inventory Logic",
        "trace": "Traceability & Recalls",
        "logistics": "Logistics Partners",
        "contact": "Contact",
        "hq": "Tehran HQ: +98 21 0000 0000",
        "sales": "Global Sales: info@topfoodsupply.ir"
      },
      "home": {
        "title1": "Global Sourcing,",
        "title2": "Localized Precision.",
        "subtitle": "The dual-market food commerce engine. Seamlessly combining high-speed domestic delivery with fully compliant, multi-currency international B2B exports.",
        "btnExport": "Browse Export Catalog",
        "btnLocal": "Domestic Delivery (Shetab)",
        "feat1Title": "Food Safety & Traceability",
        "feat1Desc": "Automated FEFO (First-Expired, First-Out) logic and batch tracking for instant recall management.",
        "feat2Title": "Automated Compliance",
        "feat2Desc": "Instant generation of Commercial Invoices, COOs, and HS-Code based Tax/Duty DDP estimations.",
        "feat3Title": "Hyper-Local Speed",
        "feat3Desc": "Optimized mobile-first interface for low-bandwidth zones with integrated Shetab payment gateways.",
        "catTitle": "Export Catalog",
        "catDesc": "Verified B2B suppliers, certified for global distribution.",
        "btnViewAll": "View All SKUs"
      },
      "product": {
        "hsCode": "HS Code",
        "b2b": "B2B Price",
        "retail": "Retail / B2C",
        "addToOrder": "Add to Order"
      },
      "blog": {
        "title": "Knowledge Hub",
        "desc": "Insights, guides, and updates on our natural products.",
        "readMore": "Read Article",
        "viewAll": "View All Posts"
      },
      "docs": {
        "title": "Date Syrup: The Pure Natural Sweetener",
        "date": "September 16, 2026",
        "p1": "Date Syrup, also known as Date Honey or Date Molasses, is a pure, natural sweetener made from the concentrated juice of premium quality dates (Phoenix dactylifera). It is produced by carefully boiling and filtering date pulp to extract a thick, dark, and nutrient-rich syrup.",
        "p2": "Unlike refined sugar, date syrup is 100% natural, chemical-free, and retains all the goodness of whole dates including essential vitamins, minerals, and antioxidants.",
        "p3": "IRAN had been a growing producer and exporter of high-quality Date Syrup, made primarily from naturally ripened dates cultivated in Vast palm groves. It is increasingly favored in international markets for its rich caramel flavor, smooth texture, and high nutritional value."
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "searchPlaceholder": "ابحث عن المنتجات بالاسم أو كود النظام المنسق...",
        "home": "الرئيسية",
        "catalog": "الكتالوج",
        "docs": "الوثائق",
        "profile": "الحساب"
      },
      "footer": {
        "desc": "محرك تجارة مزدوج السوق يزامن الاستهلاك المحلي عالي التردد مع صادرات B2B الدولية المعقدة.",
        "export": "التصدير والامتثال",
        "docVault": "مخزن الوثائق",
        "taxCalc": "حاسبة الضرائب والرسوم",
        "certs": "الشهادات",
        "supply": "سلسلة التوريد",
        "fefo": "منطق مخزون FEFO",
        "trace": "التتبع والاسترداد",
        "logistics": "شركاء اللوجستيات",
        "contact": "اتصل بنا",
        "hq": "المقر الرئيسي بطهران: 0000 0000 21 98+",
        "sales": "المبيعات العالمية: info@topfoodsupply.ir"
      },
      "home": {
        "title1": "التوريد العالمي،",
        "title2": "الدقة المحلية.",
        "subtitle": "محرك التجارة الغذائية المزدوج السوق. يجمع بسلاسة بين التوصيل المحلي السريع وصادرات B2B الدولية المتوافقة تمامًا ومتعددة العملات.",
        "btnExport": "تصفح كتالوج التصدير",
        "btnLocal": "التوصيل المحلي (شتاب)",
        "feat1Title": "سلامة الأغذية وتتبعها",
        "feat1Desc": "منطق FEFO الآلي وتتبع الدُفعات لإدارة الاسترداد الفوري.",
        "feat2Title": "الامتثال الآلي",
        "feat2Desc": "الإنشاء الفوري للفواتير التجارية وشهادات المنشأ وتقديرات الضرائب بناءً على كود النظام المنسق.",
        "feat3Title": "سرعة محلية فائقة",
        "feat3Desc": "واجهة محسنة للهواتف المحمولة متكاملة مع بوابات الدفع المحلية.",
        "catTitle": "كتالوج التصدير",
        "catDesc": "موردو B2B المعتمدون، ومعتمدون للتوزيع العالمي.",
        "btnViewAll": "عرض جميع المنتجات"
      },
      "product": {
        "hsCode": "كود النظام المنسق",
        "b2b": "سعر B2B",
        "retail": "سعر التجزئة / B2C",
        "addToOrder": "أضف للطلب"
      },
      "blog": {
        "title": "مركز المعرفة",
        "desc": "رؤى وأدلة وتحديثات حول منتجاتنا الطبيعية.",
        "readMore": "اقرأ المقال",
        "viewAll": "عرض جميع المقالات"
      },
      "docs": {
        "title": "دبس التمر: المُحلي الطبيعي الأفضل",
        "date": "16 سبتمبر 2026",
        "p1": "دبس التمر، المعروف أيضاً بعسل التمر أو عسل البلح، هو مُحلي نقي وطبيعي يُصنع من العصير المركز للتمور عالية الجودة (Phoenix dactylifera). يتم إنتاجه عن طريق غلي وتصفية لب التمر بعناية لاستخراج شراب كثيف وداكن وغني بالعناصر الغذائية.",
        "p2": "على عكس السكر المكرر، يعتبر دبس التمر طبيعياً بنسبة 100٪، وخالياً من المواد الكيميائية، ويحتفظ بجميع فوائد التمور الكاملة بما في ذلك الفيتامينات والمعادن ومضادات الأكسدة الأساسية.",
        "p3": "كانت إيران ولا تزال منتجاً ومصدراً متنامياً لدبس التمر عالي الجودة، المصنوع أساساً من التمور الناضجة طبيعياً المزروعة في بساتين النخيل الشاسعة. ويحظى بشعبية متزايدة في الأسواق الدولية بفضل نكهة الكراميل الغنية، وقوامه الناعم، وقيمته الغذائية العالية."
      }
    }
  },
  fa: {
    translation: {
      "nav": {
        "searchPlaceholder": "جستجوی محصول با نام یا کد HS...",
        "home": "خانه",
        "catalog": "کاتالوگ",
        "docs": "مطالب",
        "profile": "حساب"
      },
      "footer": {
        "desc": "موتور تجارت دوبازاره: مصرف داخلی و صادرات عمده مواد غذایی.",
        "export": "صادرات و انطباق",
        "docVault": "اسناد",
        "taxCalc": "محاسبه مالیات و عوارض",
        "certs": "گواهی‌ها",
        "supply": "زنجیره تأمین",
        "fefo": "منطق موجودی FEFO",
        "trace": "ردیابی و فراخوان",
        "logistics": "شرکای حمل",
        "contact": "تماس",
        "hq": "دفتر تهران: ‎+98 21 0000 0000",
        "sales": "فروش جهانی: info@topfoodsupply.ir"
      },
      "home": {
        "title1": "تأمین جهانی،",
        "title2": "دقت محلی.",
        "subtitle": "موتور تجارت مواد غذایی برای دو بازار. ارسال داخلی سریع، در کنار صادرات عمده چندارزی و منطبق با مقررات.",
        "btnExport": "کاتالوگ صادرات",
        "btnLocal": "ارسال داخلی (شتاب)",
        "feat1Title": "ایمنی و ردیابی غذا",
        "feat1Desc": "منطق FEFO و ردیابی بچ برای فراخوان سریع محصول.",
        "feat2Title": "انطباق خودکار",
        "feat2Desc": "صدور فوری فاکتور تجاری، گواهی مبدأ و برآورد مالیات بر اساس کد HS.",
        "feat3Title": "سرعت محلی",
        "feat3Desc": "رابط مناسب موبایل و اینترنت ضعیف، با درگاه پرداخت شتاب.",
        "catTitle": "کاتالوگ صادرات",
        "catDesc": "تأمین‌کننده‌های تأییدشده برای توزیع جهانی.",
        "btnViewAll": "همه کالاها"
      },
      "product": {
        "hsCode": "کد HS",
        "b2b": "قیمت عمده",
        "retail": "خرده / مصرف‌کننده",
        "addToOrder": "افزودن به سفارش"
      },
      "blog": {
        "title": "دانستنی‌ها",
        "desc": "نکته‌ها و خبرها درباره محصول‌های طبیعی.",
        "readMore": "خواندن مطلب",
        "viewAll": "همه مطالب"
      },
      "docs": {
        "title": "شیره خرما: شیرین‌کننده طبیعی",
        "date": "۱۶ سپتامبر ۲۰۲۶",
        "p1": "شیره خرما از آب غلیظ‌شده خرمای باکیفیت (Phoenix dactylifera) گرفته می‌شود. با جوشاندن و صاف کردن گوشت خرما، شیره‌ای غلیظ، تیره و مغذی به دست می‌آید.",
        "p2": "بر خلاف شکر تصفیه‌شده، شیره خرما کاملاً طبیعی است، ماده شیمیایی ندارد و ویتامین، مواد معدنی و آنتی‌اکسیدان خرما را نگه می‌دارد.",
        "p3": "ایران تولیدکننده و صادرکننده شیره خرمای باکیفیت است؛ بیشتر از خرمای رسیده نخلستان‌های گسترده. در بازار جهانی به‌خاطر طعم کاراملی، بافت نرم و ارزش غذایی‌اش خواستنی است."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
