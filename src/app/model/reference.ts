import {Tag} from './tag';
export class Reference {

    public id: number;
    public name: string;
    public type: string;
    public value: string;
    public tags: Tag[];
	public ranking: number;
	public comment: string;
    constructor() {
        this.id = 0;
    }
}
