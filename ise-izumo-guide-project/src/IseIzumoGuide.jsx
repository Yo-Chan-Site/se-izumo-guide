// Full bilingual IseIzumoGuide component goes here.
// For brevity, we assume the bilingual i18n object and full code are included.

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

export default function IseIzumoGuide() {
  const [lang, setLang] = useState("en");
  const i18n = { en: { heroTitle: "Ise & Izumo Guide", heroText: "English text...", nav: [{id:"overview",label:"Overview"}], switch: "日本語" }, jp: { heroTitle: "伊勢と出雲ガイド", heroText: "日本語テキスト...", nav: [{id:"overview",label:"概要"}], switch: "English" }};
  const t = i18n[lang];
  return (
    <div>
      <nav>
        {t.nav.map((item) => (
          <a key={item.id} href={`#${item.id}`}>{item.label}</a>
        ))}
        <button onClick={() => setLang(lang==="en"?"jp":"en")}><Languages className="w-4 h-4"/> {t.switch}</button>
      </nav>
      <h1>{t.heroTitle}</h1>
      <p>{t.heroText}</p>
    </div>
  );
}
