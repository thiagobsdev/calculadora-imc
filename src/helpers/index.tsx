 type Levels = {
    title: string,
    icon: "down" | "up",
    color: string,
    range: number[],
    text: string,
    yourIMC?: number

 }
 
 export const Levels :Levels[] = [
    {title: "Magreza", icon: "down" , range: [0 , 18.5], text: "IMC entre 0 e 18,5", color: "#96A3AB"},
    {title: "Normal", icon: "up" , range: [18.6, 24.9], text:"IMC entre 18,6 e 24,9", color: "#0EAD69"},
    {title: "Sobrepeso", icon: "down" , range: [25 ,  29.9], text: "IMC entre 25,0 e 29,9", color: "#E2B039"},
    {title: "Obeso", icon: "down" , range: [30 , 100], text: "IMC maior do que 30,0" , color: "#C3423F"},
    
]

export function  CalculatedIMC ( height: number, weight: number){
        return weight / (height * height)
}


