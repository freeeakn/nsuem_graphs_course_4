import * as readlineSync from "readline-sync";

/*

  16.Символы из одного массива переписать в два:
  в первый переписать цифры, а во второй маленькие латинские буквы.
  а)Порядок символов оставить тот же;
  б) Порядок символов поменять.

*/

export const separateCharacters = (): void => {
  console.log("\n=== Задание 16: Разделение символов ===");
  console.log("Введите символы через пробел:");

  const input = readlineSync.question("Символы: ");
  const chars = input.trim().split(/\s+/);

  if (chars.length === 0) {
    console.log("Ошибка: не введено ни одного символа");
    return;
  }

  // Часть а) с сохранением порядка
  const digitsOriginal: string[] = [];
  const lettersOriginal: string[] = [];

  // Часть б) с обратным порядком
  const digitsReversed: string[] = [];
  const lettersReversed: string[] = [];

  for (const char of chars) {
    if (char.length !== 1) {
      console.log(`Пропуск: '${char}' не является одиночным символом`);
      continue;
    }

    // Проверка на цифру
    if (/\d/.test(char)) {
      digitsOriginal.push(char);
      digitsReversed.unshift(char); // Добавляем в начало для обратного порядка
    }
    // Проверка на строчную латинскую букву
    else if (/[a-z]/.test(char)) {
      lettersOriginal.push(char);
      lettersReversed.unshift(char); // Добавляем в начало для обратного порядка
    }
  }

  console.log("\nа) С сохранением порядка:");
  console.log("Цифры:", digitsOriginal.join(" "));
  console.log("Буквы:", lettersOriginal.join(" "));

  console.log("\nб) С обратным порядком:");
  console.log("Цифры:", digitsReversed.join(" "));
  console.log("Буквы:", lettersReversed.join(" "));

  // Дополнительная информация
  console.log("\nСтатистика:");
  console.log("Всего символов:", chars.length);
  console.log("Цифр:", digitsOriginal.length);
  console.log("Строчных латинских букв:", lettersOriginal.length);
  console.log(
    "Других символов:",
    chars.length - digitsOriginal.length - lettersOriginal.length
  );
};
