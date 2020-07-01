enum MOTOR {
    //% block="front-left"
    M2 = 2,
    //% block="front-right"
    M1 = 1,
    //% block="rear-left"
    M3 = 3,
    //% block="rear-right"
    M4 = 4
}

enum LIGHT {
    //% block="front-left"
    FRONT_LEFT = 1,
    //% block="front-right"
    FRONT_RIGHT = 2,
    //% block="rear-brake"
    BACK = 3
}

let buf = pins.createBuffer(10);

//% weight=5 color=#007A4B icon="\uf1b9"
//% groups='["Basic", "Advance"]'
namespace Car101 {
    const Car_Address = 0x10;

    //% blockId=DisableCar block="car stop"
    //% weight=85
    //% group="Basic"
    export function DisableCar(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "F".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "T".charCodeAt(0);
        pins.i2cWriteBuffer(Car_Address, buf);
        buf[2] = "O".charCodeAt(0);
        buf[3] = "F".charCodeAt(0);
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=EnableCar block="car start"
    //% weight=85
    //% group="Basic"
    export function EnableCar(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "E".charCodeAt(0);
        buf[3] = "N".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
        buf[2] = "C".charCodeAt(0);
        buf[3] = "R".charCodeAt(0);
        pins.i2cWriteBuffer(Car_Address, buf);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "O".charCodeAt(0);
        pins.i2cWriteBuffer(Car_Address, buf);
    }
    
    //% blockId=BrakeCar block="car brake"
    //% weight=75
    //% group="Basic"
    export function CarBrake(): void {
        
        // ...
        
    }

    //% blockId=SetMecanum block="driving: X-speed $x| \\%, Y-speed $y| \\%, A-rotation $a| \\%"
    //% x.min=-100 x.max=100
    //% x.defl=60
    //% y.min=-100 y.max=100
    //% y.defl=60
    //% a.min=-100 a.max=100
    //% a.defl=60
    //% weight=75
    //% group="Basic"
    export function SetMecanum(x: number, y: number, a: number): void {
        let xf, yf, af;
        if (x >= 0)
            xf = 1;
        else
        {
            xf = 0;
            x = -x;
        }
        if (y >= 0)
            yf = 1;
        else
        {
            yf = 0;
            y = -y;
        }
        if (a >= 0)
            af = 1;
        else
        {
            af = 0;
            a = -a;
        }
        
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "C".charCodeAt(0);
        buf[3] = "S".charCodeAt(0);
        buf[4] = xf;
        buf[5] = x;
        buf[6] = yf;
        buf[7] = y;
        buf[8] = af;
        buf[9] = a;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=LightOff block="turn off the car light |%light|"
    //% weight=65
    //% group="Basic"
    export function LightOff(light:LIGHT): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "L".charCodeAt(0);
        buf[3] = "F".charCodeAt(0);
        buf[4] = light;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=LightOn block="turn on the car light |%light|"
    //% weight=65
    //% group="Basic"
    export function LightOn(light:LIGHT): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "L".charCodeAt(0);
        buf[3] = "T".charCodeAt(0);
        buf[4] = light;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=SetBrake block="set the wheel |%motor| brake"
    //% weight=75
    //% group="Advance"
    export function SetBrake(motor:MOTOR): void {
        
        // ...
        
    }
    
    //% blockId=SetMotor block="set the wheel |%motor| speed $speed| \\%"
    //% speed.min=-100 speed.max=100
    //% speed.defl=60
    //% weight=75
    //% group="Advance"
    export function SetMotor(motor:MOTOR,speed:number): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "M".charCodeAt(0);
        buf[3] = "S".charCodeAt(0);
        buf[4] = motor;
        buf[5] = 1;
        buf[6] = speed;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=GetSensor block="distance ahead (mm)"
    //% weight=65
    //% group="Advance"
    export function GetSensor(): number {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "G".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);       
        let distance=pins.i2cReadNumber(Car_Address,NumberFormat.UInt16LE)
        return distance;
    }
}