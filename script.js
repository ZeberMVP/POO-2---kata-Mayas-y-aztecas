/* Construye las siguientes clases:

Warrior:

constructor(life, power): Establece el valor de las propiedades life y power

attack: Devuelve el valor de power del guerrero

defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

Maya: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

drinkColaCao: Suma 10 al poder.

Aztec: extiende de la clase Warrior

constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

drinkNesquik: Suma 10 a la vida.
*/

class Warrior {
    constructor (life, power) {
        this.life = life;
        this.power = power;
    }
    attack () {console.log(`${this.power} puntos de poder`) };
    defend (damage) {
        this.life -= damage;
        console.log(`${this.life} puntos de vida restantes`); 
    };
}

class Maya extends Warrior {
    constructor (life, power) {
        super (life, power);
    }
    drinkColaCao () { this.power += 10 };
}

class Aztec extends Warrior {
    constructor (life, power) {
        super (life, power);
    }
    drinkNesquik () { this.power += 10 };
}

/* Realiza la siguiente cadena de intercambio de golpes.

Azteca bebe nesquik

Maya bebe Cola Cao

Maya ataca a azteca. Azteca defiende.

Azteca ataca a maya. Maya defiende.
*/
let maya = new Maya(35, 10);
let aztec = new Aztec(40, 5);

aztec.drinkNesquik();

maya.drinkColaCao();

maya.attack();
aztec.defend(maya.power);

aztec.attack();
maya.defend(aztec.power);