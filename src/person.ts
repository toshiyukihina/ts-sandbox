class Person {
  constructor(public name:string, public birthday:Date) {
  }
}

var p:Person[] = [
  new Person("Jack", new Date()),
  new Person("Jone", new Date(2014, 10, 24))
];

for (var i = 0; i < p.length; i++) {
  var day = p[i].birthday;
  if (day.getMonth() == 2 && day.getDay() == 29) {
    console.log(p[i]);
  } else {
    console.log(p[i]);
  }
}
