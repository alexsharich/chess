import { Figure, FigureName } from "./Figure";
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'
import { Colors } from "../Colors";
import { Cell } from "../Cell";

export class King extends Figure {
    constructor(color:Colors,cell:Cell){
        super(color,cell);
        this.logo = color ===Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureName.KING;
    }
}