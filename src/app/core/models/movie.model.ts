export class MovieModel {

    constructor(
        public id:number,
        public Title:string,
        public Year:string,
        public Saleprice:number,
        public Rentalprice:number,
        public Forrental:boolean,
        public Forsale:boolean,
        public Commingsoon:boolean,
        public Noavailable:boolean,
        public Rated:string,
        public Released:string,
        public Runtime:string,
        public Genre:string,
        public Director:string,
        public Writer:string,
        public Actors:string,
        public Plot:string,
        public Language:string,
        public Country:string,
        public Awards:string,
        public Poster:string,
        public Banner:string,
        public Trailer:string
    ){}
    
}