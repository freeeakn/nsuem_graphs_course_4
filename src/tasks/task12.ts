import * as readlineSync from "readline-sync";

/*

  12.С клавиатуры вводится ( в одну строку ) предложение.
  В конце предложения может стоять точка, восклицательный или вопросительный знак.
  Слова разделяются некоторым количеством пробелов. Подсчитать количество слов в предложении.

*/

export const countWords = (sentence: string): number => {
  // Удаляем знаки препинания в конце предложения
  const cleanedSentence = sentence.replace(/[.!?]$/, "");

  // Разделяем на слова, учитывая возможные множественные пробелы
  const words = cleanedSentence.trim().split(/\s+/);

  // Фильтруем пустые строки на случай, если были только пробелы
  return words.filter((word) => word.length > 0).length;
};

export const runWordCount = (): void => {
  console.log("\n=== Задание 12: Подсчет слов в предложении ===");

  const sentence = readlineSync.question("Введите предложение: ");

  if (!sentence.trim()) {
    console.log("Ошибка: введена пустая строка");
    return;
  }

  const wordCount = countWords(sentence);
  console.log(`Количество слов в предложении: ${wordCount}`);

  const cleaned = sentence.replace(/[.!?]$/, "").trim();
  const words = cleaned.split(/\s+/).filter((w) => w.length > 0);
  console.log("Найденные слова:", words);
};
