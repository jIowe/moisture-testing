moisture = 0

def on_forever():
    global moisture
    moisture = pins.analog_read_pin(AnalogPin.P1)
    if moisture > 900:
        basic.show_string("wet!")
    elif moisture < 900:
        basic.show_string("dry!")
    else:
        basic.show_string("Problem!!")
basic.forever(on_forever)
