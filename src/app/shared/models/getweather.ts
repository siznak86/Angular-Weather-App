export class Getweather {
    condition: string;
    date: Date;
    icon: string;
    location:{
        latitude: number;
        longitude: number;
        name: string;
    }
    temperature:{
        current: number;
        maximum: number;
        minimum: number;
    }
}
