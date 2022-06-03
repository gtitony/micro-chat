input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
basic.forever(function () {
	
})
