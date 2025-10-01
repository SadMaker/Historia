let flag1 = false
let flag2 = false
let flag3 = false
let flag4 = false
let ativo = null

const t1 = document.querySelector("#t1")
const t2 = document.querySelector("#t2")
const t3 = document.querySelector("#t3")
const t4 = document.querySelector("#t4")
const audio_1 = new Audio("./assets/sound/luisa.mp3")
const audio_2 = new Audio("./assets/sound/duda.mp3")
const audio_3 = new Audio("./assets/sound/evelyn.mp3")
const audio_4 = new Audio("./assets/sound/yuri.mp3")

function stop(){
    audio_1.pause()
    audio_1.currentTime = 0
    audio_2.pause()
    audio_2.currentTime = 0
    audio_3.pause()
    audio_3.currentTime = 0
    audio_4.pause()
    audio_4.currentTime = 0

}

function tocar(objectid){
    if(ativo === objectid){
        return undefined
    }else{
        if(objectid === 1){
            stop()
            audio_1.play()
            ativo = objectid
            return
        }
        if(objectid === 2){
            stop()
            audio_2.play()
            ativo = objectid
            return
        }
        if(objectid === 3){
            stop()
            audio_3.play()
            ativo = objectid
            return
        }
        if(objectid === 4){
            stop()
            audio_4.play()
            ativo = objectid
            return
        }
    }
}

t1.addEventListener("click", () => {
    tocar(1)
})

t2.addEventListener("click", () => {
    tocar(2)
})

t3.addEventListener("click", () => {
    tocar(3)
})

t4.addEventListener("click", () => {
    tocar(4)
})