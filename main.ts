let moisture = 0
basic.forever(function on_forever() {
    
    moisture = pins.analogReadPin(AnalogPin.P1)
    if (moisture > 900) {
        basic.showString("wet!")
    } else if (moisture < 900) {
        basic.showString("dry!")
    } else {
        basic.showString("Problem!!")
    }
    
})
