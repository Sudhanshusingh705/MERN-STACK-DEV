class Laptop
{
    constructor(ram, hdd, cpu){
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }
    turnOn = () => {
        console.log('Laptop turns on');
    }
    getCPU = () => {
        console.log('CPU is ' +this.cpu);
    }
}

let lappy = new Laptop(4,500, 'i9');
lappy.turnOn();
lappy.getCPU();

let lappy2 = new Laptop(10,1000, 'i5');
lappy2.turnOn();
lappy2.getCPU();