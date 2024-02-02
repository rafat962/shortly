
// function validURL(str) {
//     var pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//         '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
//         '((\\d{1,3}\\.){3}\\d{1,3}))' +
//         '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
//         '(\\?[;&a-z\\d%_.~+=-]*)?' +
//         '(\\#[-a-z\\d_]*)?$',
//     'i'
//     )
//     return !!pattern.test(str)
// }










document.getElementById('menu').addEventListener('click',()=>{
  document.getElementById('menu').classList.toggle('open')
  document.getElementById('main-menu').classList.toggle('flex')
  document.getElementById('main-menu').classList.toggle('hidden')
})













































// linkForm.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     if(input.value === ''){
//         errMsg.innerHTML = 'Please enter something'
//         input.classList.add('border-red-500')
//     } else if(!validURL(input.value)){
//         errMsg.innerHTML = 'Please enter a valid URL'
//         input.classList.add('border-red-500')
//     }else{
//         errMsg.innerHTML = ''
//         input.classList.add('border-green-500')
//     }
// })

