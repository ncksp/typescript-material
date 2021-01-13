let isSuccess : boolean = true
let num : number = 1
let firstName : string = "Nicko"

let names : string[] = ["n", "i", "c", "k", "o"]
let values : Array<number> = [1, 2, 4]

let mySelf : [string, number, number] = ["Nicko", 20, 2000]

enum Gender {
    MAlE,
    FEMALE
}

enum Data {
    SATU = "Makanan",
    DUA = "Minuman"
}

let anies : any = [1] //type data bebas
anies = "string"


let datas : any[] = []
datas.push({
    "name": 1
})


let phoneNumer : number | string

phoneNumer = 12312312
phoneNumer = "08123213"

console.log(phoneNumer);
