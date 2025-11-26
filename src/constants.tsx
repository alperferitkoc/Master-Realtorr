import React from 'react';
import { SlideData, SlideType } from './types';

export const REFERENCE_CODE = "NCY931";
export const MASTER_REALTOR_LOGO = "https://iili.io/KZ2a0uV.png";
export const EMLAK_SEPETTE_LOGO = "https://iili.io/KZ2acyQ.md.png";

const BG_INTRO = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjkzNnwwfDF8c2VhcmNofDR8fG1vZGVybiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzE5OTM2MTg5fDA&ixlib.rb-4.0.3&q=80&w=1080";
const IMG_SALES_PRES = "https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjkzNnwwfDF8c2VhcmNofDEwfHxyZWFsJTIwZXN0YXRlJTIwc2FsZXxlbnwwfHx8fDE3MTk5MzYyMzh8MA&ixlib.rb-4.0.3&q=80&w=1080";
const IMG_FREELANCE = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjkzNnwwfDF8c2VhcmNofDd8fGZyZWVsYW5jZXIlMjBsYXB0b3AlMjBjYWZlfGVufDB8fHx8fDE3MTk5MzYyODN8MA&ixlib.rb-4.0.3&q=80&w=1080";
const IMG_TEAM = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjkzNnwwfDF8c2VhcmNofDExfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3MTk5MzYzMTF8MA&ixlib.rb-4.0.3&q=80&w=1080";

// Vurgu Stili (Master Realtor Sarısı + Siyah Yazı)
const HIGHLIGHT_STYLE = "bg-brand-yellow text-brand-dark font-bold px-2 py-0.5 rounded shadow-sm";

export const SLIDES: SlideData[] = [
  {
    id: 0,
    type: SlideType.INTRO,
    title: "Master Realtor",
    subtitle: "\"Maliyetine Ev\" Projelerinin Özel Satış Gücüne Katılın ve Kazancınızı Zirveye Taşıyın.",
    image: BG_INTRO,
    backgroundColor: 'dark'
  },
  {
    id: 1,
    type: SlideType.SECTION_HEADER,
    title: "Biz Kimiz?",
    description: (
      <span className="leading-relaxed">
        <span className={HIGHLIGHT_STYLE}>"Maliyetine Ev"</span> ile proje geliştiriyor, 
        <span className={`${HIGHLIGHT_STYLE} ml-1`}>"Master Realtor"</span> ile bu projeler için özel portföy sağlıyor ve tek yetkili olarak satışını yönetiyoruz.
      </span>
    ),
    backgroundColor: 'light'
  },
  {
    id: 2,
    type: SlideType.INSTRUCTION, 
    title: "Neden Master Realtor?",
    description: (
      // DÜZELTME: mt-8 eklendi (Başlık ile liste arası açıldı)
      <ul className="list-none space-y-6 mt-8">
        <li className="flex items-start gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <strong className="block text-xl text-brand-dark mb-1">Tek Satış Yetkilisi Olun</strong>
            <span className="text-gray-600">"Maliyetine Ev" projelerinin satışında tek yetkili siz olun.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">🏷️</span>
          <div>
            <strong className="block text-xl text-brand-dark mb-1">Rekabetçi Fiyatlar</strong>
            <span className="text-gray-600">Piyasadaki en rekabetçi fiyat politikası ile kolay satış.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">💳</span>
          <div>
            <strong className="block text-xl text-brand-dark mb-1">Ödeme Kolaylığı</strong>
            <span className="text-gray-600">Faizsiz, bankasız, sabit taksitli cazip seçenekler.</span>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-2xl">📂</span>
          <div>
            <strong className="block text-xl text-brand-dark mb-1">Sürekli Portföy</strong>
            <span className="text-gray-600">Sürekli ve kazançlı portföy akışı.</span>
          </div>
        </li>
      </ul>
    ),
    image: IMG_SALES_PRES,
    backgroundColor: 'light',
    imageFit: 'cover',
    hideOverlay: true
  },
  {
    id: 3,
    type: SlideType.SECTION_HEADER,
    title: "Kariyer Yolunuzu Seçin",
    description: "Size en uygun modeli seçerek Master Realtor ailesine katılın. İki farklı yol, iki farklı kazanç fırsatı.",
    backgroundColor: 'light'
  },
  {
    id: 4,
    type: SlideType.INSTRUCTION,
    title: (
      <span>
        <span className="underline decoration-4 decoration-brand-dark underline-offset-4">1. Yol:</span> Ofissiz Emlakçı
      </span>
    ),
    // DÜZELTME: Üyelik Bedeli siyah, Rakam sarı highlight
    subtitle: (
      <span className="text-brand-dark font-normal">
        Üyelik Bedeli: <span className={HIGHLIGHT_STYLE}>5.000 TL</span> (Tek Seferlik)
      </span>
    ),
    description: (
      <ul className="list-none space-y-4 text-lg">
        <li>
          <strong className="block text-brand-dark">
            Komisyon Kazancı: <span className={HIGHLIGHT_STYLE}>%30</span>
          </strong>
          <span className="text-sm text-gray-600">Alınan emlakçı komisyonunun %30'unu kazanın.</span>
        </li>
        <li>🚀 <strong>MYK5 Belgesiz Başlangıç:</strong> Belge zorunluluğu yok.</li>
        <li>🔗 <strong>Link Paylaşım Sistemi:</strong> Emlak Sepette altyapısı ile satış.</li>
        <li>📂 <strong>Sınırsız Portföy:</strong> Tüm sistem portföylerine erişim.</li>
      </ul>
    ),
    image: IMG_FREELANCE,
    backgroundColor: 'light',
    imageFit: 'cover',
    hideOverlay: true
  },
  {
    id: 5,
    type: SlideType.INSTRUCTION,
    title: (
      <span>
        <span className="underline decoration-4 decoration-brand-dark underline-offset-4">2. Yol:</span> Dijital Danışman
      </span>
    ),
    // DÜZELTME: Danışmanlık Bedeli siyah, Rakam sarı highlight
    subtitle: (
      <span className="text-brand-dark font-normal block leading-tight">
        Danışmanlık Bedeli: <span className={HIGHLIGHT_STYLE}>Aylık 3.000 TL</span>
        <br />
        <span className="text-sm text-gray-500 mt-1 inline-block font-light">(Ödeme, ilk portföy satışından sonra başlar)</span>
      </span>
    ),
    description: (
      <ul className="list-none space-y-4 text-lg">
        <li>
          <strong className="block text-brand-dark text-xl">
            Komisyon Kazancı: <span className={HIGHLIGHT_STYLE}>%75</span>
          </strong>
          <span className="text-sm text-gray-700 font-medium">Alınan komisyonun %75'ini kazanarak yüksek gelir elde edin.</span>
        </li>
        <li>📊 <strong>Ücretsiz Data Desteği:</strong> Reklamlardan gelen müşteri desteği.</li>
        <li>🎓 <strong>Kapsamlı Eğitim:</strong> 80 Saatlik uzmanlık eğitimi ve sertifika.</li>
        <li>👥 <strong>Kendi Ekibini Kur:</strong> Alt ekip kurma ve yönetme yetkisi.</li>
      </ul>
    ),
    image: IMG_TEAM,
    backgroundColor: 'light',
    imageFit: 'cover',
    hideOverlay: true
  },
  {
    id: 6,
    type: SlideType.COMPARISON_TABLE,
    title: "Hangi Model Size Uygun?",
    backgroundColor: 'light',
    comparisonData: {
      col1Title: "Ofissiz Emlakçı",
      col2Title: "Dijital Danışman",
      rows: [
        { feature: "Komisyon Kazanç Oranı", val1: "<span class='font-extrabold text-lg'>%30</span>", val2: "%75" },
        { feature: "Link ile Satış", val1: true, val2: true },
        { feature: "Sınırsız Portföy", val1: true, val2: true },
        { feature: "MYK5 Belgesi Zorunluluğu", val1: "Gerekmez", val2: "Gerekli" },
        { feature: "Ücretsiz Data Desteği", val1: false, val2: true },
        { feature: "Kapsamlı Eğitim (80 Saat)", val1: false, val2: true },
        { feature: "Kendi Ekibini Kurma", val1: false, val2: true },
      ]
    }
  },
  {
    id: 7,
    type: SlideType.TILED_GRID,
    title: "Kapsamlı Eğitim Programı",
    subtitle: "Toplam 80 Saatlik Uzmanlık Eğitimi",
    backgroundColor: 'light',
    gridTiles: [
      { icon: "🎯", title: "Amaç", description: "Sektördeki en donanımlı dijital danışmanları yetiştirmek." },
      { icon: "📚", title: "İçerik", description: "Teorik eğitim ve pratik saha uygulamaları. Sertifika ve kitap hediyesi." },
      { icon: "🗓️", title: "Süre", description: "10 ay boyunca, ayda 1 tam gün (8 saat). Toplam 80 saat." },
      { icon: "📈", title: "Kazanım", description: "Satış teknikleri, müşteri yönetimi ve portföy uzmanlığı." },
    ]
  },
  {
    id: 8,
    type: SlideType.SPLIT_HIGHLIGHT,
    title: "Kendi Ofisinizi Açın",
    highlightNumber: "6",
    subtitle: "AY STAJ",
    description: "Kazancınızı bir üst seviyeye taşımak ve Brokerlığa yükselmek için tek şart: Herhangi bir gayrimenkul firmasında 6 ay staj yapmış olmak.",
    backgroundColor: 'dark'
  },
  {
    id: 9,
    type: SlideType.CTA,
    title: "Birlikte Büyüyelim",
    description: "Fırsatları görüşmek ve Master Realtor ailesine katılmak için bize hemen ulaşın.",
    backgroundColor: 'dark'
  }
];