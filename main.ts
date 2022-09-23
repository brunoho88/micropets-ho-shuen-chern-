input.onButtonPressed(Button.A, function () {
    SOS = 5
    music.stopAllSounds()
    music.stopMelody(MelodyStopOptions.All)
    if (options < 5) {
        options += 1
        basic.showNumber(options)
    } else {
        options = 1
        basic.showNumber(options)
    }
})
input.onButtonPressed(Button.B, function () {
    if (options == 1) {
        bright = input.lightLevel()
        if (bright < 100) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else if (options == 2) {
        degreeg = input.compassHeading()
        if (degreeg < 45 || degreeg > 315) {
            basic.showString("N")
        } else if (degreeg < 135) {
            basic.showString("E")
        } else if (degreeg < 225) {
            basic.showString("S")
        } else if (degreeg < 315) {
            basic.showString("W")
        }
    } else if (options == 3) {
        SOS = 1
        while (SOS < 4) {
            basic.showString("SOS")
            basic.pause(100)
            for (let index = 0; index < 3; index++) {
                music.playTone(294, music.beat(BeatFraction.Whole))
                basic.pause(100)
            }
            basic.pause(100)
            for (let index = 0; index < 3; index++) {
                music.playTone(392, music.beat(BeatFraction.Double))
                basic.pause(100)
            }
            basic.pause(100)
            for (let index = 0; index < 3; index++) {
                basic.pause(100)
                music.playTone(294, music.beat(BeatFraction.Whole))
            }
            basic.pause(100)
            SOS += 1
        }
    } else if (options == 4) {
        basic.clearScreen()
        celcius = input.temperature()
        basic.showNumber(celcius)
        basic.showString("celcius")
    } else if (options == 5) {
        hand = randint(1, 3)
        if (hand == 1) {
            basic.showIcon(IconNames.Scissors)
        } else if (hand == 2) {
            basic.showIcon(IconNames.SmallSquare)
        } else {
            basic.showIcon(IconNames.Square)
        }
    } else {
        basic.showNumber(options)
    }
})
let hand = 0
let celcius = 0
let degreeg = 0
let bright = 0
let SOS = 0
let options = 0
options = 0
basic.showString("I am Jeff..")
basic.forever(function () {
    celcius = input.temperature()
})
