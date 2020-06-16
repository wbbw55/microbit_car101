enum MOTOR {
    M1 = 1,
    M2 = 2,
    M3 = 3,
    M4 = 4
}

enum LIGHT {
    FRONT_LEFT = 1,
    FRONT_RIGHT = 2,
    BACK = 3
}

enum DIRECTION{
    NEGATIVE = 0,
    POSATIVE = 1
}

let buf = pins.createBuffer(10);

//% weight=5 color=#9900CC icon="\uf53b"
namespace Microbit_Car {
    const Car_Address = 0x10;

    //% blockId=EnableCar block="Set Car Status to Enable"
    //% weight=65
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
    }

    //% blockId=DisableCar block="Set Car Status to Disable"
    //% weight=65
    export function DisableCar(): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "O".charCodeAt(0);
        buf[3] = "F".charCodeAt(0);
        buf[4] = 0;
        buf[5] = 0;
        buf[6] = 0;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=CarRun block="Run the Car"
    //% weight=65
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

    //% blockId=CarStop block="Stop the Car"
    //% weight=65
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

    //% blockId=SensorOn block="Open the Distance Sensor"
    //% weight=65
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

    //% blockId=SensorOff block="Stop the Distance Sensor"
    //% weight=65
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

    //% blockId=LightOn block="Turn on |%light| Light"
    //% weight=75
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

    //% blockId=LightOff block="Turn Off |%light| Light"
    //% weight=75
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

    //% blockId=SetMecanum block="Set Mecanum Speed to X: |%x| ,Y: |%y| ,a: |%a| "
    //% weight=75
    export function SetMecanum(x: number, y: number, a: number): void {
        let xf, yf, af;
        if (x > 0)
            xf = 1;
        else
        {
            xf = 0;
            x = -x;
        }
        if (y > 0)
            yf = 1;
        else
        {
            yf = 0;
            y = -y;
        }
        if (a > 0)
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

    //% blockId=SetMotor block="Set |%motor| Motor Speed to |%speed| ,Direction |%direction| "
    //% weight=75
    export function SetMotor(motor:MOTOR,direction:DIRECTION,speed:number): void {
        buf[0] = "D".charCodeAt(0);
        buf[1] = "O".charCodeAt(0);
        buf[2] = "L".charCodeAt(0);
        buf[3] = "F".charCodeAt(0);
        buf[4] = motor;
        buf[5] = direction;
        buf[6] = speed;
        buf[7] = 0;
        buf[8] = 0;
        buf[9] = 0;
        pins.i2cWriteBuffer(Car_Address, buf);
    }

    //% blockId=GetCarStatus block="Get Car Run Status"
    //% weight=85
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

    //% blockId=GetCarSpeed block="Get Motor |%motor| Set Speed"
    //% weight=85
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
        rxbuf = pins.i2cReadBuffer(Car_Address, 2)
        let speed;
        if (rxbuf[0] == 1)
            speed = rxbuf[1];
        else
            speed = -rxbuf[1];
        return speed;
    }

    //% blockId=GetSensor block="Get Distance Sensor Data"
    //% weight=85
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