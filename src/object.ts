class Counter {
  constructor(private value:number = 0) {
  }
  public setValue(value:number):void {
    this.value = value;
  }
  public getValue():number {
    return this.value;
  }
}

class StaticCounter {
  public static value:number;
  public static setValue = function(value:number):void {
    this.value = value;
  }
  public static getValue = function():number {
    return this.value;
  }
}

StaticCounter.setValue(100);
console.log(StaticCounter.getValue());

var c:Counter = new Counter();
console.log(c.getValue());
c.setValue(300);
console.log(c.getValue());

class Greeting {
  constructor(private msg:string) {
    if (msg == undefined) {
      this.msg = "Nothing to say";
    }
  }

  say():string {
    return this.msg;
  }
}

var g:Greeting = new Greeting('Hello');
console.log(g.say());
