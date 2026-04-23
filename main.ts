let sonar_distance = 0
let turn_direction = 0
let turn_time = 0
basic.forever(function () {
    sonar_distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar_distance < 15) {
        cuteBot.stopcar()
        basic.pause(100)
        cuteBot.motors(-40, -40)
        basic.pause(300)
        cuteBot.stopcar()
        basic.pause(100)
        for (let index = 0; index < 2; index++) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x000000)
            basic.pause(150)
            turn_direction = randint(0, 1)
            turn_time = randint(200, 500)
            if (turn_direction == 0) {
                cuteBot.motors(-40, 40)
            } else {
                cuteBot.motors(40, -40)
            }
            basic.pause(turn_time)
            cuteBot.stopcar()
            basic.pause(100)
        }
    } else {
        cuteBot.motors(50, 40)
    }
})
