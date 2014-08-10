


function getawnsers(){
    $.ajax({
            url: "/assets/jsonquestions.json",

            //force to handle it as text
            dataType: "json",
            complete: showajax

        });
        function showajax(response){
            
            raw_data = response.responseText
            var format = JSON.parse(raw_data);
            displayawnsers(response)
        }
}


function displayresults(response, increment){
    console.log(response)
    console.log(increment)
    $('.togglequestions').click(function(){
      $('.displayquestions').empty();  
      var colours = ['yellow','red','green','blue', 'brown', 'blue','white']  
      var questions = response.responseJSON['Questions']
       console.log(questions)
      // chop up object in looop, show each one
      //var questionsarray = questions.splice(0,1)
      var question = questions.splice(0,1)
      console.log(question)
      for (i=0; i < question.length; i++){

        var contentString = $('<div id="content">' + '<h3>' + questions[i].Q + '</h3>' + '<button class="toggleawsners">' + "show answers" + '</button>' );
        contentString.appendTo(".displayquestions")

        $('.toggleawsners').click(function(){
            $('.displayanswers').empty();
            var awnsers = response.responseJSON['Questions']
            console.log(awnsers)
            var answerArray = awnsers.splice(0,1)

            $.each(answerArray,function(i, awnser){
                console.log(awnser)
                var contentAnswers = $('<div id="contentAnswers">' + '<p>' + answerArray[i]['Answers'] + '</p>'  );
                contentAnswers.appendTo(".displayanswers")
            })
        })
      }
    });
}

function displayawnsers(response){
    
    // .each
      //   for (i=0; i < awnsers.length; i++){
  //   // console.log(main[i].Q)
  //   // console.log(currentobject)
  //   // splice on show
  //   var contentString = $('<div id="content">' + '<h3>' + awnsers[i].Q + '</h3>' + '<button class="toggleawsners">' + "show results" + '</button>' );
  //   contentString.appendTo(".displayawnsers")

  // }    
}

$(function(){
     $.ajax({
            url: "/assets/jsonquestions.json",

            //force to handle it as text
            dataType: "json",
            complete: showajax

        });
        function showajax(response){
            
            raw_data = response.responseText
            var format = JSON.parse(raw_data);
            var increment = 0
            displayresults(response, increment)
        }
})
 // $('.togglequestions').click(function(){

    // console.log(data)

    // displayresults(data)


    

   // when i make a najax request it somehow amkes a request to another page which has the data in a json formate 
   // rails auotmatiacally has its in json formate
   // so maybe i can see the questions data in ta rails table 
   // then make a reuqestions to these questions 
   // so table would be question - question description
   // then awnsers, - aswners choices


   // but think how i would be able to get the data with out rails 
   // what would the request url be?????
   // just make the request url the variable name???? 


   // the totrial might have a way ti fugure it out

   // ajax request but simply put the hash variable as the url 
   // put the rueqest into a loop which iterates through each question 
   // then grab the current question its on every time you click on it... 
   // and display the content in p and h1 tags


   // 9:909 on train - able to trigger so it shows all the objects
   // but how can i do so it just displays the current element in the array and everytime you click through???

   // USE BACKPACKERS ID TO DISPLAY QUESTION. in budgie backpackers. 
   // 243 app see gerrys methid 
   // javascript definintive guide 561, 563 

   

  // })
