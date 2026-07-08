function 北を向いているか (方角: number) {
    if (0 <= 方角 && 方角 < 45) {
        return 1
    } else if (315 <= 方角 && 方角 < 360) {
        return 1
    } else {
        return 0
    }
}
let 方角 = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    方角 = 0
    if (北を向いているか(input.compassHeading()) == 1) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
})
