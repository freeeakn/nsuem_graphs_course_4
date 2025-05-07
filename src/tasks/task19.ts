/*

  19.Найти минимальный элемент во всей матрице,
  в каждой строке и в каждом столбце.
  Для каждого столбца выписать сам элемент и его позицию (номер строки и столбца).

*/

// Специальный тип данных для матрицы
interface MatrixElement {
  value: number;
  row: number;
  col: number;
}

export const analyzeMatrix = (): void => {
  console.log("\n=== Задание 19: Анализ матрицы ===");

  // Генерируем случайную матрицу 5x5 с числами от 1 до 100
  const matrix: number[][] = [];
  const rows = 5;
  const cols = 5;

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = Math.floor(Math.random() * 100) + 1;
    }
  }

  // Выводим матрицу
  console.log("\nСгенерированная матрица:");
  matrix.forEach((row) => console.log(row.join("\t")));

  // Переменная для хранения минимального элемента во всей матрице
  let globalMin: MatrixElement = { value: Infinity, row: -1, col: -1 };

  // Переменная для хранения минимального элемента в каждой строке
  const rowMins: MatrixElement[] = [];

  // Переменная для хранения минимального элемента в каждом столбце
  const colMins: MatrixElement[] = Array(cols)
    .fill(null)
    .map(() => ({ value: Infinity, row: -1, col: -1 }));

  for (let i = 0; i < rows; i++) {
    let rowMin: MatrixElement = { value: Infinity, row: i, col: -1 };

    for (let j = 0; j < cols; j++) {
      const current = matrix[i][j];

      // Проверка на глобальный минимум
      if (current < globalMin.value) {
        globalMin = { value: current, row: i, col: j };
      }

      // Проверка на минимум в строке
      if (current < rowMin.value) {
        rowMin = { value: current, row: i, col: j };
      }

      // Проверка на минимум в столбце
      if (current < colMins[j].value) {
        colMins[j] = { value: current, row: i, col: j };
      }
    }

    rowMins.push(rowMin);
  }

  // Выводим результаты
  console.log("\nМинимальный элемент во всей матрице:");
  console.log(
    `Значение: ${globalMin.value}, Позиция: [${globalMin.row + 1},${
      globalMin.col + 1
    }]`
  );

  console.log("\nМинимальные элементы в строках:");
  rowMins.forEach((min, index) => {
    console.log(
      `Строка ${index + 1}: ${min.value} (позиция [${min.row + 1},${
        min.col + 1
      }])`
    );
  });

  console.log("\nМинимальные элементы в столбцах:");
  colMins.forEach((min, index) => {
    console.log(
      `Столбец ${index + 1}: ${min.value} (позиция [${min.row + 1},${
        min.col + 1
      }])`
    );
  });
}
