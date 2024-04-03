import cc from "../src/index"

/**
 * Simple demo that writes a dot at a random position every 100ms
 */
function example1() {
    let { width, height } = cc.size()
    cc.clear()
    cc.hide()
    setInterval(() => {
        let x = Math.floor(Math.random() * width)
        let y = Math.floor(Math.random() * height)
        cc.writeAt(x, y, ".")
    }, 100)
    process.on('exit', cc.show)
}

example1()
