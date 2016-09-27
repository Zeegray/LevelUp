var a = prompt("Введите возраст");
if (a > 0 && a <= 3) {
    console.log("Младенец")
} else if (a > 3 && a <= 12) {
    console.log("Ребенок");
} else if (a > 12 && a <= 16) {
    console.log("Подросток");
} else if (a > 16 && a <= 21) {
    console.log("Молодец");
} else if (a > 21 && a < 55) {
    console.log("Мужчина/Женщина среднего возраста");
} else if (a >= 55 && a < 60) {
    console.log("Женщина пенсионер");
    console.log("Мужчина среднего возраста");
} else if (a >= 60) {
    console.log("Мужчина/Женщина пенсионер");
} 