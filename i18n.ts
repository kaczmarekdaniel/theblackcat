// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./src/assets/translations"; // assuming you export your resources from a file

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		detection: {
			order: ["querystring", "cookie", "localStorage", "path", "subdomain"],
			caches: ["localStorage", "cookie"],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
