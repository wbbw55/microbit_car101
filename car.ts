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

/*
enum DIRECTION{
    NEGATIVE = 0,
    POSATIVE = 1
}
*/

let buf = pins.createBuffer(10);

//% weight=5 color=#007A4B icon="\uf63b"
//% groups='["Basic", "Advance"]'
namespace Car101 {
    const Car_Address = 0x10;

    //% blockId=EnableCar block="car start"
    //% weight=65
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

    //% blockId=DisableCar block="car stop"
    //% weight=65
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

    // blockId=CarRun block="Run the Car"
    // weight=65
    /*
    export function CarRun(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "C".charCodeAt(0);
        buf[3] = "R".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    // blockId=CarStop block="Stop the Car"
    // weight=65
    export function CarStop(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "T".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }
    */

    // blockId=SensorOn block="Open the Distance Sensor"
    // weight=65
    /*
    export function SensorOn(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "S".charCodeAt(0);
        buf[3] = "O".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }
    */

    // blockId=SensorOff block="Stop the Distance Sensor"
    // weight=65
    /*
    export function SensorOff(): void {
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
    }
    */

    //% blockId=SetMecanum block="driving: X-axis |%x|%, Y-axis |%y|%, A-rotation |%a|%"
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

    //% blockId=LightOn block="turn on the car light |%light|"
    //% weight=75
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

    //% blockId=LightOff block="turn off the car light |%light|"
    //% weight=75
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

    //% blockId=SetMotor block="set the wheel |%motor| speed |%speed|%"
    //% weight=75
    //% group="Advance"
    export function SetMotor(motor:MOTOR,speed:number): void {
        let dir: number = 1;
        if (number<0) {
            dir = 0;
            number = -number;
        }
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "M".charCodeAt(0);
        buf[3] = "S".charCodeAt(0);
        buf[4] = motor;
        buf[5] = dir;
        buf[6] = speed;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    // blockId=GetCarStatus block="Get Car Run Status"
    // weight=85
    /*
    export function GetCarStatus(): number {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "C".charCodeAt(0);
        buf[3] = "G".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
        let stat = pins.i2cReadNumber(Car_Address, NumberFormat.UInt8LE);
        return stat;
    }
    */

    // blockId=GetCarSpeed block="Get Motor |%motor| Set Speed"
    // weight=85
    /*
    export function GetCarSpeed(motor:MOTOR): number {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "V".charCodeAt(0);
        buf[3] = "G".charCodeAt(0);
        buf[4] = motor;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
        let rxbuf = pins.createBuffer(2);
        rxbuf = pins.i2cReadBuffer(Car_Address,2);
        let speed;
        if (rxbuf[0])
            speed = rxbuf[1];
        else
            speed = -rxbuf[1];
        return speed;
    }
    */

    //% blockId=GetSensor block="distance ahead (mm)"
    //% weight=85
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