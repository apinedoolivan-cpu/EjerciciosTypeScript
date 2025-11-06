interface IArmable {
    dameFuerzaDeAtaque(): number;
}
class Katana implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 50;
    }
}
class Shuriken implements IArmable {
    dameFuerzaDeAtaque(): number {
        return 20;
    }
}
class Kunai implements IArmable{
    dameFuerzaDeAtaque(): number {
        return 15;
    }
}
class Kama implements IArmable{
    dameFuerzaDeAtaque(): number {
        return 5;
    }
}
class Katanaka implements IArmable{
    dameFuerzaDeAtaque(): number {
        return 100;
    }
}
class Naginata implements IArmable{
    dameFuerzaDeAtaque(): number {
        return 80;
    }
}
interface IDefendible {
    dameDefensa():number;
}
class ArmaduraPaja implements IDefendible{
    dameDefensa(): number {
        return 10;
    }
}
class ArmaduraBronce implements IDefendible{
    dameDefensa(): number {
        return 15;
    }
}
class ArmaduraAcero implements IDefendible{
    dameDefensa(): number {
        return 100;
    }
}
class ArmaduraDiamante implements IDefendible{
    dameDefensa(): number {
        return 150;
    }
}

class Ninja{
    ataque: IArmable;
    defensa: IDefendible;

    constructor(ataque: IArmable, defensa: IDefendible){
        this.ataque = ataque;
        this.defensa = defensa;
    }
}

const Tipo = {
  Genin: "Genin",
  Chulin: "Chulin",
  Jounin: "Jounin",
  Hokage: "Hokage",
} as const;

type Tipo = (typeof Tipo)[keyof typeof Tipo];

class FactoriaNinja {
  dameNinja(TipoNinja: Tipo): Ninja {
    switch (TipoNinja) {
      case Tipo.Genin:
        return new Ninja(new Kama(), new ArmaduraPaja());
      case Tipo.Chulin:
        return new Ninja(new Katana(), new ArmaduraBronce());
      case Tipo.Jounin:
        return new Ninja(new Katanaka(), new ArmaduraAcero());
      case Tipo.Hokage:
        return new Ninja(new Naginata(), new ArmaduraDiamante());
      default:
        return new Ninja(new Katana(), new ArmaduraBronce());
    }
  }
}
let ArrayNinjas: Ninja[]=[];
let Ninja1 = new FactoriaNinja().dameNinja(Tipo.Genin);
let Ninja2 = new FactoriaNinja().dameNinja(Tipo.Chulin);
let Ninja3 = new FactoriaNinja().dameNinja(Tipo.Jounin);
let Ninja4 = new FactoriaNinja().dameNinja(Tipo.Hokage);

ArrayNinjas.push(Ninja1, Ninja2, Ninja3, Ninja4)

ArrayNinjas.forEach(element => {
    console.log("La defensa de este ninja es: "+ element.defensa.dameDefensa())
});

