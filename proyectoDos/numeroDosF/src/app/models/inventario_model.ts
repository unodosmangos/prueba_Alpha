
export class modelInventario{
  _id?: any;
  item: string;
  descripcion: string;
  rutaImg: string;

  constructor(item:string, descripcion:string, rutaImg:string){
    this.item = item
    this.descripcion = descripcion
    this.rutaImg = rutaImg
  }
}
