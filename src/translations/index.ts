
import en from './en';
import es from './es';

// Define the available languages and their translations
const translations = {
  en,
  es
};

export type TranslationKey = keyof typeof en;
export type SupportedLanguage = keyof typeof translations;

export default translations;
