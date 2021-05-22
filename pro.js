var questions = [
  {question:"What is the task at hand? Why do you feel like procrastinating?"},
  {question:"Is the task important? How would it affect you and your life if you do not finish this task on time?"},
  {question:"What do you think is the smallest step that you can take right now, in order to start with the task?"},
  {question:"How about you start right now? Only 10 minutes at this task and then you can quit. What do you think?"},
  {question:"Before Beginning, make sure you have everything you need with you right now."}
]
var placeholders = [
  {place: "ex: I have a huge assignment due"},
  {place: "ex: Yes, the assignment is important, it accounts for 40% of my grade"},
  {place: "ex: I could start with one question, the easiest one in the assignment"},
  {place: "ex : I could start with one question, its not that bad of an idea, its 10 minutes only after-all."},
  {place: "ex : If you are about to start studying, you better have notes, notebooks pens etc"},
]

;(function(){

  var tTime = 100  // transition transform time from #register in ms
  var wTime = 200  // transition width time from #register in ms
  var eTime = 1000 // transition width time from inputLabel in ms

  // init
  // --------------
  var position = 0

  putQuestion()
  
  progressButton.addEventListener('click', validate)
  inputField.addEventListener('keyup', function(e){
    transform(0, 0) // ie hack to redraw
    if(e.keyCode == 13) validate()
  })

  // functions
  // --------------

  // load the next question
  function putQuestion() {
    inputLabel.innerHTML = questions[position].question
    inputField.value = ''
	document.getElementById('inputField').placeholder = placeholders[position].place
    inputField.type = questions[position].type || 'text'  
    inputField.focus()
    showCurrent()
  }
  
  // when all the questions have been answered
  function done() {
	window.close("procastination.html")
    window.open("pro_timer.html")
    // remove the box if there is no next question
    register.className = 'close'
    
    // add the h1 at the end with the welcome text
    var h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Welcome ' + questions[0].value + '!'))
    setTimeout(function() {
      register.parentElement.appendChild(h1)     
      setTimeout(function() {h1.style.opacity = 1}, 50)
    }, eTime)
	
    
  }

  // when submitting the current question
  function validate() {

    // set the value of the field into the array
    questions[position].value = inputField.value


   
      
      // set the progress of the background
      progress.style.width = ++position * 100 / questions.length + 'vw'

      // if there is a new question, hide current and load next
      if (questions[position]) hideCurrent(putQuestion)
      else hideCurrent(done)
             
    

  }

  // helper
  // --------------

  function hideCurrent(callback) {
    inputContainer.style.opacity = 0
    inputProgress.style.transition = 'none'
    inputProgress.style.width = 0
    setTimeout(callback, wTime)
  }

  function showCurrent(callback) {
    inputContainer.style.opacity = 1
    inputProgress.style.transition = ''
    inputProgress.style.width = '100%'
    setTimeout(callback, wTime)
  }

  function transform(x, y) {
    register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
  }

  function ok(callback) {
    register.className = ''
    setTimeout(transform, tTime * 0, 0, 10)
    setTimeout(transform, tTime * 1, 0, 0)
    setTimeout(callback,  tTime * 2)
  }

  function wrong(callback) {
    register.className = 'wrong'
    for(var i = 0; i < 6; i++) // shaking motion
      setTimeout(transform, tTime * i, (i%2*2-1)*20, 0)
    setTimeout(transform, tTime * 6, 0, 0)
    setTimeout(callback,  tTime * 7)
  }

}())