
// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// var data = {
//     "Questions": [
//         {
//             "Q": "What is the Best Market to expand into from the UK?",
//             "Answers": [
//                 "North America",
//                 "China",
//                 "Africa"
//             ]
//         },
//         {
//             "Q": "What is the most important factor in Choosing a Market?",
//             "Answers": [
//                 "Customer Demand",
//                 "Competitors (in the market)",
//                 "Infrastructure"
//             ]
//         },
//         {
//             "Q": "What is the biggest challenge to entering a new market?",
//             "Answers": [
//                 "Finances",
//                 "Regulation/Legal",
//                 "People./Culture"
//             ]
//         },
//         {
//             "Q": "Where are you in your entrepreneurship journey?",
//             "Answers": [
//                 "At the starting block",
//                 "Just getting warmed up",
//                 "Really hitting stride",
//                 "Crossing the finish line",
//                 "Sponsoring someones race",
//                 "Cheering from the sidelines"
//             ]
//         },
//         {
//             "Q": "What platform do you prefer?",
//             "Answers": [
//                 "iOS (Apple)",
//                 "Android",
//                 "Windows"
//             ]
//         },
//         {
//             "Q": "What is the challenge to building a mobile product?",
//             "Answers": [
//                 "Speed to Market",
//                 "Cost",
//                 "Skills/Resources"
//             ]
//         },
//         {
//             "Q": "What is the challenge in hiring in any niche area?",
//             "Answers": [
//                 "Lack of Specific Skills",
//                 "Depth of Talent Pool",
//                 "Lack of Experience"
//             ]
//         },
//         {
//             "Q": "What is the key factor in choosing to hire someone?",
//             "Answers": [
//                 "Personality",
//                 "Experience",
//                 "Correct Skill Set"
//             ]
//         },
//         {
//             "Q": "What do you think maintains an Entrepreneur?",
//             "Answers": [
//                 "Passion",
//                 "Money",
//                 "Change the Status Quo"
//             ]
//         },
//         {
//             "Q": "What is the essential skill for an Entrepreneur?",
//             "Answers": [
//                 "Communication",
//                 "Negotiation",
//                 "Financial Acumen"
//             ]
//         },
//         {
//             "Q": "What tech area will have the most influence in 10 years?",
//             "Answers": [
//                 "Medical",
//                 "Media",
//                 "Financial"
//             ]
//         },
//         {
//             "Q": "Do you think we should expand onto other planets?",
//             "Answers": [
//                 "Yes",
//                 "No"
//             ]
//         },
//         {
//             "Q": "Should governments fund large tech projects?",
//             "Answers": [
//                 "Yes",
//                 "No"
//             ]
//         },
//         {
//             "Q": "What should be priority for Funding in the future?",
//             "Answers": [
//                 "Health",
//                 "Energy",
//                 "Food/Natural Resources"
//             ]
//         },
//         {
//             "Q": "Will the old media entities adapt quick enough?",
//             "Answers": [
//                 "Yes",
//                 "No"
//             ]
//         },
//         {
//             "Q": "What do you think, is the best money model for content?",
//             "Answers": [
//                 "Pay as You Consume",
//                 "Subscription",
//                 "Advertising"
//             ]
//         },
//         {
//             "Q": "Is content really king? ",
//             "Answers": [
//                 "Yes",
//                 "No"
//             ]
//         },
//         {
//             "Q": "Where do you primarily go to consume news content?",
//             "Answers": [
//                 "TV/Radio",
//                 "Mobile/Tablet",
//                 "Print/Magazine"
//             ]
//         },
//         {
//             "Q": "Why do you stick with a brand?",
//             "Answers": [
//                 "Loyalty",
//                 "Values",
//                 "Consistency"
//             ]
//         },
//         {
//             "Q": "Are we heading towards a more focused/niche brand economy?",
//             "Answers": [
//                 "Yes",
//                 "No"
//             ]
//         }
//     ]
// }


// function displayresults(response){
    
//   var questions = response.responseJSON['Questions']
//   console.log(questions)
//   // console.log(main)
  
//   var questionsarray = questions.splice(0,1)
//   for (i= 0; i < questionsarray.length; i++){
//     // console.log(questions[i].Q)
//     // console.log(currentobject)
//     console.log(questionsarray)
//     var contentString = $('<div id="content">' + '<h3>' + questions[i].Q + '</h3>');
//     contentString.appendTo(".displayquestions")
//   }
// }
function displayresults(response){
  var questions = response.responseJSON['Questions']
  // console.log(main)
  var main = response.responseJSON['Questions']
  var mainarray = main.splice(0,1)
  for (i=0; i < mainarray.length; i++){
    // console.log(main[i].Q)
    // console.log(currentobject)
    console.log(mainarray)
    var contentString = $('<div id="content">' + '<h3>' + main[i].Q + '</h3>');
    contentString.appendTo(".displayajax")
  }
}




$(function(){
    // url = "/assets/jsonquestions.json"
    // alert(url)
    // function simpleHttpRequest(url, success, failure){
    //     var request = requestObject();
    //     request.open("GET", url, true);
    //     request.onreadystatechange = function(){

    //         var data = eval("(" + request.responseText + ")");
    //         alert(data)
    //     };
    //     request.send(null);
    // }
  $('.performajax').click(function(){
        
         $.ajax({
            url: "/assets/jsonquestions.json",

            //force to handle it as text
            dataType: "json",
            complete: showajax

        });
        function showajax(response){
           
            raw_data = response.responseText
              
            var format = JSON.parse(raw_data);
            displayresults(response)
        }
    });



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








})
