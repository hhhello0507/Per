const languageType: { [key: string]: string } = {
    lang_ar: "Arabic",
    lang_bg: "Bulgarian",
    lang_ca: "Catalan",
    lang_cs: "Czech",
    lang_da: "Danish",
    lang_de: "German",
    lang_el: "Greek",
    lang_en: "English",
    lang_es: "Spanish",
    lang_et: "Estonian",
    lang_fi: "Finnish",
    lang_fr: "French",
    lang_hr: "Croatian",
    lang_hu: "Hungarian",
    lang_id: "Indonesian",
    lang_is: "Icelandic",
    lang_it: "Italian",
    lang_iw: "Hebrew",
    lang_ja: "Japanese",
    lang_ko: "Korean",
    lang_lt: "Lithuanian",
    lang_lv: "Latvian",
    lang_nl: "Dutch",
    lang_no: "Norwegian",
    lang_pl: "Polish",
    lang_pt: "Portuguese",
    lang_ro: "Romanian",
    lang_ru: "Russian",
    lang_sk: "Slovak",
    lang_sl: "Slovenian",
    lang_sr: "Serbian",
    lang_sv: "Swedish",
    lang_tr: "Turkish",
    lang_zh_CN: "Chinese (Simplified)",
    lang_zh_TW: "Chinese (Traditional)"
};

function languageTypeKey(value: string): string | undefined {
    for (const key of Object.keys(languageType)) {
        if (languageType[key] === value) return key;
    }
}

export {languageType, languageTypeKey};