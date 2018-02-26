enum Name { John, Sergey = 0, Ivan };
enum Month { January, February, March, April, May, June, July, August, September, October, November, December };

// OK
let january: Month = Month.January;
january

// OK too
let numJanuary: number = Month.January;