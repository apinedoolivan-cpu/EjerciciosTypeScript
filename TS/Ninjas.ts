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
  Banzai: "Banzai",
  Linkuei: "Linkuei",
} as const;

type Tipo = (typeof Tipo)[keyof typeof Tipo];

class FactoriaNinja {
  dameNinja(TipoNinja: Tipo): Ninja {
    switch (TipoNinja) {
      case Tipo.Genin:
        return new Ninja(new Shuriken(), new ArmaduraPaja());
      case Tipo.Chulin:
        return new Ninja(new Katana(), new ArmaduraBronce());
      case Tipo.Jounin:
        return new Ninja(new Katanaka(), new ArmaduraAcero());
      case Tipo.Hokage:
        return new Ninja(new Naginata(), new ArmaduraDiamante());
      case Tipo.Banzai:
        return new Ninja(new Kama(), new ArmaduraPaja());
      case Tipo.Linkuei:
        return new Ninja(new Kunai(), new ArmaduraAcero());
      default:
        return new Ninja(new Katana(), new ArmaduraBronce());
    }
  }
}
const ArrayNinjas: Ninja[]=[];
const Ninja1 = new FactoriaNinja().dameNinja(Tipo.Genin);
const Ninja2 = new FactoriaNinja().dameNinja(Tipo.Chulin);
const Ninja3 = new FactoriaNinja().dameNinja(Tipo.Jounin);
const Ninja4 = new FactoriaNinja().dameNinja(Tipo.Hokage);
const Ninja5 = new FactoriaNinja().dameNinja(Tipo.Banzai);
const Ninja6 = new FactoriaNinja().dameNinja(Tipo.Linkuei);

ArrayNinjas.push(Ninja1, Ninja2, Ninja3, Ninja4, Ninja5, Ninja6);

ArrayNinjas.forEach(element => {
    console.log("El ataque de este ninja es: "+ element.ataque.dameFuerzaDeAtaque())
});

ArrayNinjas.forEach(element => {
    console.log("La defensa de este ninja es: "+ element.defensa.dameDefensa())
});

