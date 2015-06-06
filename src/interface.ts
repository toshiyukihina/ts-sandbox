interface Ship {
  GetLength(): number;
}

interface WarShip extends Ship {
  GetWeaponName(): string;
}

class Yamato implements WarShip {
  public GetLength(): number {
    return 263;
  }
  public GetWeaponName(): string {
    return "46cm cannon";
  }
}

var yamato:WarShip = new Yamato();
console.log(yamato.GetLength());
console.log(yamato.GetWeaponName());
