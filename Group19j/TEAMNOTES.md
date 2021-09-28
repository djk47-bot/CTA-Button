Started discussion on styling after class Thurs 9/16
Began to coordinate out of class schedules to meet

9/21 Class Updates:
  - What we learned
    -  implementing two pictures so button changes once the mouse is hovered over it --> good idea and          we could potentially use this for our halloween button. Maybe we can put an image of a bat and          then add "Boo!" text once the mouse is hovered over it.
             Code segmenet seen in class:
             constructor (){
              Super()
              this.imgSrc = ' title of images';
              }
              
   - Button creation walkthrough:
        - "--" is important to include. CSS code signifies that the code is a variable --> can name the  variable whatever you like. Example: --psu-btn-text-color: orange;  
       
  - Our next steps:
    -  Continue coding; adding button features, etc.
    - refining the complexity of out project; what features are important and which ones are rather complex/unnecessary.
    - planning time outside of class to finish and submit assignment

9/28 Class Updates: Comparing code with Nick Alico and Noelle Fajt
  - Similarities in our implementations:
    1) both consistently handling hover and focus states
    2)  Buttons have similar structures: icon within a button tag, both open a link in a new tab
    
  - Differences in implementations:
     1) when hovering over their button, they have an icon that turns 90 degrees
     2) Other group has three buttons, we only have one.
     
  - Code Snippet: 
   For our button, we could implement an icon of a little bat or a ghost that turns when the mouse      hovers over it. Not sure if this is a definite change we will make, but something to consider.
```   
       button:hover #caret-icon {
        transform: rotate(-90deg);
        transition: all 0.2s ease;
        }
```
       
        
