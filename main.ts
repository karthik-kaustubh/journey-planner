function Display_Update () {
    OLED12864_I2C.showString(
    0,
    0,
    "Left:" + "Enc:" + OrientBit.getwheelPulseCount(OrientBit.wheelSide.left) + "  Dist: " + OrientBit.getwheelDist(OrientBit.wheelSide.left),
    0
    )
    OLED12864_I2C.showString(
    0,
    2,
    "Right:" + "Enc:" + OrientBit.getwheelPulseCount(OrientBit.wheelSide.right) + "  Dist: " + OrientBit.getwheelDist(OrientBit.wheelSide.right),
    0
    )
}
OLED12864_I2C.init(60)
OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OrientBit.resetWheelRotCnt()
OLED12864_I2C.zoom(false)
for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 32) {
        Display_Update()
        basic.pause(50)
    }
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
    OrientBit.resetWheelRotCnt()
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 11) {
        basic.pause(50)
    }
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(100)
    OrientBit.resetWheelRotCnt()
}
basic.forever(function () {
	
})
