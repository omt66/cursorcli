import cc from "../src/index"

/**
 * Another simple demo that writes the current ISO date & time every 100ms
 */
function example2() {
    let { width, height } = cc.size()
    cc.clear()
    cc.hide()
    setInterval(() => {
        cc.writeAt(10, 5, `ISO date & time-> ${new Date().toISOString()}`)
    }, 100)
    process.on('exit', cc.show)
}

// example2()

async function ex2() {
    cc.clear()
    let pos
    // pos = await cc.getCurrentPos()
    // console.log("pos1->", pos)
    cc.moveTo(15, 10)
    // cc.writeAt(15, 10, "writeAt(15, 10)")
    pos = await cc.position()
    console.log("pos2->", pos)
}

ex2()
