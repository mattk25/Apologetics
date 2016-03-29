import {Reference} from '../model/reference';
export class Topic {

   id: number
   name: string
   image: string
   references: Reference[]

   constructor() {
       this.id=0
   }
}
