import * as task1 from "./tasks/task1";
import * as task2 from "./tasks/task2";
import * as task3 from "./tasks/task3";
import * as task4 from "./tasks/task4";
import * as task5 from "./tasks/task5";
import * as task6 from "./tasks/task6";
import * as task7 from "./tasks/task7";
import * as task8 from "./tasks/task8";
import * as task9 from "./tasks/task9";
import * as task10 from "./tasks/task10";
import * as task11 from "./tasks/task11";
import * as task12 from "./tasks/task12";
import * as task13 from "./tasks/task13";
import * as task14 from "./tasks/task14";
import * as task15 from "./tasks/task15";
import * as task16 from "./tasks/task16";
import * as task17 from "./tasks/task17";
import * as task18 from "./tasks/task18";
import * as task19 from "./tasks/task19";
import * as task20 from "./tasks/task20";
import * as task21 from "./tasks/task21";
import * as task22 from "./tasks/task22";

const runTask1 = () => {
  const speeds = task1.generateTestData();
  console.log("\n=== Задание 1 ===");
  console.log("Скорости автомобилей:", speeds);
  console.log(
    "Два самых быстрых (один проход):",
    task1.findTwoMaxOnePass(speeds)
  );
  console.log(
    "Два самых быстрых (два прохода):",
    task1.findTwoMaxTwoPasses(speeds)
  );
};

const runTask2 = () => {
  console.log("\n=== Задание 2 ===");
  task2.runInteractiveCalculations();
};

const runTask3 = () => {
  console.log("\n=== Задание 3 ===");
  task3.runArrayProcessing();
};

const runTask4 = () => {
  console.log("\n=== Задание 4 ===");
  task4.runNumberProcessing();
};

const runTask5 = () => {
  console.log("\n=== Задание 5 ===");
  task5.runIntervalFilter();
};

const runTask6 = () => {
  console.log("\n=== Задание 6 ===");
  task6.runLuckyNumberCheck();
};

const runTask7 = () => {
  console.log("\n=== Задание 7 ===");
  task7.runMultiplicationTask();
};

const runTask8 = () => {
  console.log("\n=== Задание 8 ===");
  task8.runSequenceProcessing();
};

const runTask9 = () => {
  task9.runSequenceAnalysis();
};

const runTask10 = () => {
  task10.runFibonacciTasks();
};

const runTask11 = () => {
  task11.runNumberReversal();
};

const runTask12 = () => {
  task12.runWordCount();
};

const runTask13 = () => {
  task13.findTwoSmallestNumbers();
};

const runTask14 = () => {
  task14.runPerfectNumbersSearch();
};

const runTask15 = () => {
  task15.findDuplicateElements();
};

const runTask16 = () => {
  task16.separateCharacters();
};

const runTask17 = () => {
  task17.processArrayWithMinElement();
};

const runTask18 = () => {
  task18.mergeSortedArrays();
};

const runTask19 = () => {
  task19.analyzeMatrix();
};

const runTask20 = () => {
  task20.drawMultipleBorders();
};

const runTask21 = () => {
  task21.generateNumbersDivisibleBy12();
};

const runTask22 = () => {
  task22.demonstrateArrayOperations();
};

const taskToRun = process.argv[2];

switch (taskToRun) {
  case "task1":
    runTask1();
    break;
  case "task2":
    runTask2();
    break;
  case "task3":
    runTask3();
    break;
  case "task4":
    runTask4();
    break;
  case "task5":
    runTask5();
    break;
  case "task6":
    runTask6();
    break;
  case "task7":
    runTask7();
    break;
  case "task8":
    runTask8();
    break;
  case "task9":
    runTask9();
    break;
  case "task10":
    runTask10();
    break;
  case "task11":
    runTask11();
    break;
  case "task12":
    runTask12();
    break;
  case "task13":
    runTask13();
    break;
  case "task14":
    runTask14();
    break;
  case "task15":
    runTask15();
    break;
  case "task16":
    runTask16();
    break;
  case "task17":
    runTask17();
    break;
  case "task18":
    runTask18();
    break;
  case "task19":
    runTask19();
    break;
  case "task20":
    runTask20();
    break;
  case "task21":
    runTask21();
    break;
  case "task22":
    runTask22();
    break;
  default:
    runTask1();
    runTask2();
    runTask3();
    runTask4();
    runTask5();
    runTask6();
    runTask7();
    runTask8();
    runTask9();
    runTask10();
    runTask11();
    runTask12();
    runTask13();
    runTask14();
    runTask15();
    runTask16();
    runTask17();
    runTask18();
    runTask19();
    runTask20();
    runTask21();
    runTask22();
}
