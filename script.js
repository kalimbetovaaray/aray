/*
Дано такое выражение: (5 + 7) / ((12 – 5.5) * (5 – 8 * 12)). Вычислите на JavaScript и выведите результат на страницу.
Каждое число в выражении сделайте переменной, например, var x = 5; var y = 7 и так далее. При этом если число «5» встречается дважды, то не надо создавать вторую переменную.
Подставьте в выражение вместо чисел переменные, посмотрите на результат и убедитесь, что он совпадает с рассчитанным в 1-м пункте.
Создайте 2 строки «17» и «-5».
Сложите эти строки знаком «+».
Сложите эти строки знаком «+», пропустив их предварительно через функцию Number.
Объясните разницу в результатах 5-го и 6-го пункта.
*/

//1
var a, b, c, d, e;
a = 5;
b = 7;
c = 12;
d = 5.5;
e = 8;
summ = (a + b)/((c-d)*(a-e*c));
document.write("<p style='text-align:center; color:red;'>(" + a + "+" + b + ")/((" + c + "-" + d +")(" + a + "-" + e + "*" + c + "))=" + summ + "</p>");

//2
var str_1 = "17";
var str_2 = "-5";
document.write(str_1 + str_2);
str_1 = Number(str_1);
str_2 = Number(str_2);
document.write("<br>")
document.write(str_1 + str_2);
