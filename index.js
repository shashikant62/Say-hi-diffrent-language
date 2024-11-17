const greetings = {
    en: 'Hi',
    es: 'Hola',
    fr: 'Bonjour',
    de: 'Hallo',
    it: 'Ciao',
    hi: 'नमस्ते',
    ja: 'こんにちは',
    zh: '你好',
    ar: 'مرحبا',
    ru: 'Привет',
  };
  
  function sayHi(language = 'en') {
    return greetings[language] || greetings['en'];
  }
  
  module.exports = sayHi;
  