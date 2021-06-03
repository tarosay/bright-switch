input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (bright == 0) {
        bright = 1
    } else {
        basic.showIcon(IconNames.Sad)
        pins.servoWritePin(AnalogPin.P1, 26)
        basic.pause(480)
        pins.servoWritePin(AnalogPin.P1, 100)
        bright = 0
    }
    basic.pause(500)
})
let bright = 0
basic.showIcon(IconNames.Happy)
bright = input.lightLevel()
bright = 0
basic.forever(function () {
    if (input.lightLevel() > 2 && bright == 1) {
        basic.showIcon(IconNames.Sad)
        pins.servoWritePin(AnalogPin.P1, 26)
        basic.pause(480)
        pins.servoWritePin(AnalogPin.P1, 100)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
})
