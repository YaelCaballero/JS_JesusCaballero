/*Esta class se forma para que todos los datos de los pokemones en la pokedex se automaticen desde aquí. De no estar, los datos mandados al usuario tendrían que ser
  trabajados por cada pokemón*/
class Pokemon {
    constructor(nombre, naturaleza, tipo, vida = 1, ataque = 1, defensa = 1, velocidad = 1, nivel = 1) {
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    subirLvl() {
        /*Este if cuida de que las estadísticas y la vida del pokemón sea mayor a 1. Además también verifica que el nivel no exceda de 99. Si alguna de estas características
          no es garantizada se le informará al usuario de dicho problema*/
        if (this.nivel < 100 && this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0) {
            this.nivel++;
            console.log(`Su pokémon ha subido de nivel. Ahora es nivel: ${this.nivel}`);
            //Este switch trabaja en que se sumen 4 puntos a la estadística correspondiente según la naturaleza del pokemán y que se notifique al respecto
            switch (this.naturaleza) {
                case "Audaz":
    
                    this.ataque+=4;
                    console.log(`Además, su ataque ha aumentado a: ${this.ataque}`);
                    break;
    
                case "Osada":
    
                    this.defensa+=4;
                    console.log(`Además, su defensa ha aumentado a: ${this.defensa}`);
                    break;
    
                case "Cauta":
    
                    this.vida+=4;
                    console.log(`Además, su vida ha aumentado a: ${this.vida}`);
                    break;
    
                case "Alegre":
    
                    this.velocidad+=4;
                    console.log(`Además, su velocidad ha aumentado a: ${this.velocidad}`);
                    break;
            
                default:
                    break;
            }
        } else if (this.nivel >= 100) {
            console.log("Su pokemon ha llegado al nivel 100, ya no puede subir más.");
        } else if (!(this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0)) {
            console.log("Ninguna de las estadísticas puede ser menor a 0");
        }
    }

    presentarse() {
        if (this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0) {
            //Este console.log imprime los datos principales del pokemón
            console.log(`Hola. Me llamo ${this.nombre}, soy tipo ${this.tipo} y estoy al nivel ${this.nivel}`);
        } else if (!(this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0)) {
            console.log("Ninguna de las estadísticas puede ser menor a 0");
        }
    }

    sumaStats() {
        if (this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0) {
            //Esta variable suma las estadísticas para que sea más sencillo imprimir el resultado
            let suma = this.vida+this.ataque+this.defensa+this.velocidad;
            console.log(`suma de estadísticas: ${suma}`);
        } else if (!(this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0)) {
            console.log("Ninguna de las estadísticas puede ser menor a 0");
        }
    }

    promStats() {
        if (this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0) {
            //Esta variable hace lo mismo que suma, pero después lo divide entre el número de estadísticas para saber su promedio
            let prom = (this.vida+this.ataque+this.defensa+this.velocidad)/4;
            console.log(`promedio de estadísticas: ${prom}`);
        } else if (!(this.nivel > 0 && this.ataque > 0 && this.defensa > 0 && this.velocidad > 0 && this.vida > 0)) {
            console.log("Ninguna de las estadísticas puede ser menor a 0");
        }
    }
}

//En este bloque de constantes se encuentran los pokemones de la pokedex, hay que recordar que sus estadísticas deben ser mayores a 0 y el nivel menor a 100 
const PK1 = new Pokemon("charmander", "Osada", "fuego", 4, 6, 3, 1, 2);
const PK2 = new Pokemon("Bulbasaur", "Audaz", "planta", 3, 7, 4, 2, 1);
const PK3 = new Pokemon("Pikachu", "Alegre", "eléctrico", 2, 9, 4, 4, 3);
const PK4 = new Pokemon("Rapidash", "Cauta", "fuego", 5, 2, 8, 8, 4);
const PK5 = new Pokemon("Ditto", "Audaz", "normal", 17, 2, 6, 3, 67);