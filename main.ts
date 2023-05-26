namespace combo {
    let combo: string
    let combin: string
    //% block
    //% combo.min=1, combo.max=10
    /**
     * @param comb the combo, eg: AABAA
     */
    export function setCombo(...comb: string[]){
        for(let i=0;i>comb.length;i++){
            combo = combo + comb
        }
    }
    export function onCombo(func: () => void){
        while(true){
            if(combin == combo){
                func()
            }
        }
    }
    input.onButtonPressed(Button.A, function() {
        combin=combin+'A'
    })
    input.onButtonPressed(Button.B, function () {
        combin = combin + 'B'
    })
}
