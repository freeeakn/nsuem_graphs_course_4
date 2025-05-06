import * as task1 from "./tasks/task1";
import * as task2 from "./tasks/task2";
import * as task3 from "./tasks/task3";
import * as task4 from "./tasks/task4";
import * as task5 from "./tasks/task5";
import * as task6 from "./tasks/task6";
import * as task7 from "./tasks/task7";
import * as task8 from "./tasks/task8";
import * as task9 from "./tasks/task9";

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

function runTask5() {
  console.log("\n=== Задание 5 ===");
  task5.runIntervalFilter();
}

function runTask6() {
  console.log("\n=== Задание 6 ===");
  task6.runLuckyNumberCheck();
}

function runTask7() {
  console.log("\n=== Задание 7 ===");
  task7.runMultiplicationTask();
}

function runTask8() {
  console.log("\n=== Задание 8 ===");
  task8.runSequenceProcessing();
}

function runTask9() {
  task9.runSequenceAnalysis();
}

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
}
