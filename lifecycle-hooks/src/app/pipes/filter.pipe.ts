import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "PriceFilter"
})
export class PriceFilterPipe implements PipeTransform{
    transform(v : any, price : number) {
        return v.filter((e)=>{
            return e.price > price;
        })
    }
}