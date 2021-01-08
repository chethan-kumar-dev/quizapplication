
    var counter=0;
    var arrayAnswers=[
        "Most tweets will now fit 280 characters, up from 140.The new limit will roll out to Twitter users in almost all 40 languages Twitter supports.",
        "Archie is a tool for indexing FTP archives, allowing people to find specific files. It is considered to be the first Internet search engine.",
        " it was Murali Vijay, who broke the marriage between his current wife and teammate Dinesh Karthik, during a Vijay Hazare Trophy match in 2012,.",
        "Oxygen is released by plants which is further used by humans and other animals. But Fungi lack chlorophyll and do not engage in photosynthesis.",
        " US Open 2019 Men's title was won by Rafael Nadal. Rafael Nadal defeated Daniil Medvedev of Russia in the final. This is Nadal's 19th Grand Slam singles titles",
        "PUBG Corporation is an online game developer based in Seoul, South Korea.The company is a subsidiary of Korean publisher Bluehole.",
        " As per the order issued by the Delimitation Commission in 2008 , 412 are general, 84 seats are reserved for Scheduled Castes and 47 seats for the Scheduled Tribes .",
        "Tokyo is the capital of Japan.",
        "The South Asian Association for Regional Cooperation is the regional intergovernmental organization and geopolitical union of states in South Asia.",
        "Over the centuries, paper has been made from a wide variety of materials such as cotton, wheat straw, sugar cane waste, flax, bamboo, wood and linen."
    ]
        console.log(arrayAnswers)
        function f1(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[9];

            var optionBlockone=document.getElementById('optionBlockone')
        //   optionBlockone.children[1,2,3].style.backgroundColor="red";
           for(var i=0; i<optionBlockone.children.length; i++) {
               if(i==3){
                optionBlockone.children[i].style.backgroundColor ="green";
                continue;
               }else{
                optionBlockone.children[i].style.backgroundColor ="red";
            }
        }
           optionBlockone.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockone.children[3]){
            document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
        var sd=document.getElementById("score-card");
        var scoredisplay=document.getElementById('score-display');
        sd.style.transition="2s linear 0s ";
        sd.style.width="300px" ;
        sd.style.height="340px";
        sd.style.transitionProperty="width,height";
        scoredisplay.innerHTML=counter;
        setTimeout(() => {
            document.getElementById('answer').innerHTML="";
        }, 5000);
           setTimeout(() => {
            optionBlockone.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
        function f2(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[8];

            var optionBlocktwo=document.getElementById('optionBlocktwo')
            for(var i=0; i<optionBlocktwo.children.length; i++) {
                if(i==0){
                 optionBlocktwo.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlocktwo.children[i].style.backgroundColor ="red";
             }
         }
           optionBlocktwo.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlocktwo.children[0]){
            counter++;
            document.getElementById('success').play();
    
        }else{
            document.getElementById('failure').play();
        }
    
           setTimeout(() => {
            optionBlocktwo.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
    
        function f3(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[7];

            var optionBlockthree=document.getElementById('optionBlockthree')
            for(var i=0; i<optionBlockthree.children.length; i++) {
                if(i==1){
                 optionBlockthree.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockthree.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockthree.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockthree.children[1]){
            document.getElementById('success').play();
    
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockthree.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f4(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[6];

            var optionBlockfour=document.getElementById('optionBlockfour')
            for(var i=0; i<optionBlockfour.children.length; i++) {
                if(i==3){
                 optionBlockfour.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockfour.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockfour.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockfour.children[3]){
            document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockfour.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f5(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[5];

            var optionBlockfive=document.getElementById('optionBlockfive')
            for(var i=0; i<optionBlockfive.children.length; i++) {
                if(i==0){
                 optionBlockfive.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockfive.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockfive.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockfive.children[0]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockfive.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f6(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[4];

            var optionBlocksix=document.getElementById('optionBlocksix')
            for(var i=0; i<optionBlocksix.children.length; i++) {
                if(i==2){
                 optionBlocksix.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlocksix.children[i].style.backgroundColor ="red";
             }
         }
           optionBlocksix.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlocksix.children[2]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlocksix.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
    
        function f7(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[3];

            var optionBlockseven=document.getElementById('optionBlockseven')
            for(var i=0; i<optionBlockseven.children.length; i++) {
                if(i==1){
                 optionBlockseven.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockseven.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockseven.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockseven.children[1]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockseven.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f8(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[2];

            var optionBlockeight=document.getElementById('optionBlockeight')
            for(var i=0; i<optionBlockeight.children.length; i++) {
                if(i==0){
                 optionBlockeight.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockeight.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockeight.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockeight.children[0]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockeight.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f9(event){
            document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[1];
            var optionBlocknine=document.getElementById('optionBlocknine')
            for(var i=0; i<optionBlocknine.children.length; i++) {
                if(i==1){
                 optionBlocknine.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlocknine.children[i].style.backgroundColor ="red";
             }
         }
           optionBlocknine.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlocknine.children[1]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlocknine.parentElement.remove();
           }, 2000);
           console.log(counter)
        }
    
        function f10(event){
           
          document.getElementById('answer').innerHTML="<span class='question-numbers'>A</span>"+arrayAnswers[0];
            var optionBlockten=document.getElementById('optionBlockten')
            for(var i=0; i<optionBlockten.children.length; i++) {
                if(i==2){
                 optionBlockten.children[i].style.backgroundColor ="green";
                 continue;
                }else{
                 optionBlockten.children[i].style.backgroundColor ="red";
             }
         }
           optionBlockten.parentElement.style.animation="cock 2s linear";
           if(event.target==optionBlockten.children[2]){
               document.getElementById('success').play();
            counter++;
        }else{
            document.getElementById('failure').play();
        }
           setTimeout(() => {
            optionBlockten.parentElement.remove();
           }, 2000);
           console.log(counter)
        }


