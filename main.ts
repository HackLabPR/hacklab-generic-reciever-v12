radio.onReceivedNumber(function (receivedNumber) {
    sensorTempOutdoor = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(sensorTempOutdoor)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let sensorTempOutdoor = 0
radio.setGroup(33)
