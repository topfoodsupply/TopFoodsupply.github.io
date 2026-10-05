import React from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTranslation } from 'react-i18next';

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, totalItems, totalB2BAmount } = useCart();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar' | 'fa';

  if (!isCartOpen) return null;

  const handleWhatsAppInquiry = () => {
    const itemsSummary = cart
      .map(
        item =>
          `• ${item.product.name[lang]} - Qty: ${item.quantity} ${item.product.unit} (Estimated: ${item.product.currency} ${((item.product.bulkPrice || item.product.price) * item.quantity).toFixed(2)})`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello TopFood Supply,\n\nI would like to request an official wholesale/export quotation (RFQ) for the following items:\n\n${itemsSummary}\n\nTotal Estimated: USD ${totalB2BAmount.toFixed(2)}\n\nPlease provide CIF/FOB terms and Certificate of Analysis (CoA).`
    );

    window.open(`https://wa.me/989120000000?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        dir={lang === 'en' ? 'ltr' : 'rtl'}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-base sm:text-lg leading-none">
                {lang === 'fa' ? 'سبد استعلام سفارش' : lang === 'ar' ? 'سلة طلب الاستفسار (RFQ)' : 'Order Inquiry / RFQ Cart'}
              </h2>
              <span className="text-xs text-slate-500 font-medium">
                {totalItems} {lang === 'fa' ? 'مورد انتخاب‌شده' : lang === 'ar' ? 'عناصر محددة' : 'items selected'}
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-semibold text-slate-700 text-base mb-1">
                {lang === 'fa' ? 'لیست استعلام خالی است' : lang === 'ar' ? 'قائمة الاستفسار فارغة' : 'Your inquiry list is empty'}
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                {lang === 'fa'
                  ? 'از کاتالوگ محصول انتخاب کنید تا استعلام قیمت عمده ساخته شود.'
                  : lang === 'ar'
                  ? 'اختر المنتجات من الكتالوج لإضافتها إلى طلب عرض السعر المباشر.'
                  : 'Add products from the catalog to build your wholesale quotation inquiry.'}
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div
                key={item.product.id}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 items-center"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name[lang]}
                  className="w-16 h-16 rounded-lg object-contain bg-white shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 truncate">
                    {item.product.name[lang]}
                  </h4>
                  <div className="text-xs text-emerald-700 font-bold my-1">
                    {item.product.currency} {(item.product.bulkPrice || item.product.price).toFixed(2)}
                    <span className="text-[10px] text-slate-500 font-normal"> / {item.product.unit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-slate-300 rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-s"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-slate-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-e"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-500">
                      {item.product.unit}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-slate-400 hover:text-red-500 p-1.5 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600 font-medium">
                {lang === 'fa' ? 'جمع تقریبی عمده' : lang === 'ar' ? 'التقدير الأولي (B2B)' : 'Estimated Wholesale Total'}
              </span>
              <span className="text-lg font-bold text-emerald-700" dir="ltr">
                USD {totalB2BAmount.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>
                {lang === 'fa' ? 'فرستادن استعلام در واتساپ' : lang === 'ar' ? 'إرسال الاستفسار عبر واتساب' : 'Send Inquiry via WhatsApp'}
              </span>
            </button>

            <button
              onClick={clearCart}
              className="w-full py-2 text-xs text-slate-500 hover:text-red-600 font-medium transition-colors text-center block"
            >
              {lang === 'fa' ? 'خالی کردن سبد' : lang === 'ar' ? 'تفريغ السلة' : 'Clear Inquiry Items'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
