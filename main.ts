let distantzia = 0
DFRobotMaqueenPlus.I2CInit()
let _1_atala = 1
let _2_atala = 0
let _3_atala = 0
basic.forever(function () {
    distantzia = DFRobotMaqueenPlus.ultraSonic(PIN.P1, PIN.P2)
})
basic.forever(function () {
    if (_1_atala == 1) {
        if (distantzia > 60) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 140)
        } else if (distantzia > 50) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 110)
        } else if (distantzia > 40) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 80)
        } else if (distantzia > 30) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else if (distantzia > 20) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 20)
        } else if (distantzia > 10) {
            DFRobotMaqueenPlus.mototStop(Motors.ALL)
            _1_atala = 0
            _2_atala = 1
        }
    }
})
basic.forever(function () {
    if (_2_atala == 1) {
        if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
            DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
        } else {
            if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 0) {
                DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 140)
                DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
            } else {
                if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1) {
                    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 140)
                    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
                } else {
                    if (DFRobotMaqueenPlus.readPatrol(Patrol.L2) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R2) == 1 && (DFRobotMaqueenPlus.readPatrol(Patrol.L1) == 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) == 1)) {
                        DFRobotMaqueenPlus.mototStop(Motors.ALL)
                    }
                }
            }
        }
    }
    _2_atala = 0
    _3_atala = 1
})
