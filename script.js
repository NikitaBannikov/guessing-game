let btnSounnd=document.querySelector('.main__btn_sound')
let audio=document.querySelector('audio')
let video=document.querySelector('video')
let answer=document.querySelector('.main__enter')
let canvas=document.querySelector('.main__canvas')
let index=1
let enter=document.querySelector('.main__btn_enter')

enter.addEventListener('click',()=>{
    if(index>=3){
        index=1
    }else{
        index+=1
    }
    for(let i=1;i<4;i++){
        document.querySelector(`.header_nav_list__${i}`).classList.remove('active')
    }
    document.querySelector(`.header_nav_list__${index}`).classList.add('active')
    enter.style.display='none'
    video.style.display='none'
    canvas.style.display='block'
    audio.src=`${index}.mp3`
    video.src=`${index}.mp4`
})

btnSounnd.addEventListener('click',()=>{
    audio.play()
})

function check(){
    audio.src=`${index}.mp3`
    video.src=`${index}.mp4`
    if(index==1){
        if(answer.value=='лягушка' ||answer.value== 'Лягушка' ||answer.value== 'ЛЯГУШКА'){
            document.querySelector(`.header_nav_list__${index}`).classList.remove('active')
            document.querySelector(`.header_nav_list__${index}`).classList.add('complete')
            canvas.style.display='none'
            video.style.display='block'
            video.play()
            setTimeout(function(){
                enter.style.display='block'
            },10000)
            answer.value=''
        }else{
            wnaswer.value=''
        }
    }
    else if(index==2){
        if(answer.value=='машина' ||answer.value== 'Машина' ||answer.value== 'МАШИНА'){
            document.querySelector(`.header_nav_list__${index}`).classList.remove('active')
            document.querySelector(`.header_nav_list__${index}`).classList.add('complete')
            canvas.style.display='none'
            video.style.display='block'
            video.play()
            setTimeout(function(){
                enter.style.display='block'
            },10000)
            answer.value=''
        }else{
            wnaswer.value=''
        }
    }
    else if(index==3){
        if(answer.value=='пчела' ||answer.value== 'Пчела' ||answer.value== 'ПЧЕЛА'){
            document.querySelector(`.header_nav_list__${index}`).classList.remove('active')
            document.querySelector(`.header_nav_list__${index}`).classList.add('complete')
            canvas.style.display='none'
            video.style.display='block'
            video.play()
            setTimeout(function(){
                enter.style.display='block'
            },10000)
            answer.value=''
        }else{
            wnaswer.value=''
        }
    }

}
enter.addEventListener('click',()=>{
   
})