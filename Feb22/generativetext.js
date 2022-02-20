//declaring the array to store the songs from the csv as a global variable so it can be accessed both in the preload() and draw() functions
let songs = [];

function preload() {
  //reading the csv file before anything else is carried out
  songs = loadStrings("songs.csv");
}

//declaring the variable category (which will be used when randomly determining the vibe of the playlist) so it can be accessed both in the preload() and draw() functions

let category;

function setup() {
  createCanvas(600, 400);
  
  //assigning a random integer which corresponds to one of 7 'vibes' 
  category = round(random(0, 6));
}

function draw() {
  background(0);
  
  //Each song in each playlist is by one of these singers; the array is used so the names can easily be grabbed and matched with the corresponding song.
  let singers = [
    "BEYONCE",
    "NICKI MINAJ",
    "RIHANNA",
    "BLACKPINK",
    "DOJA CAT",
    "JHENE AIKO",
    "DRAKE",
    "ARIANA GRANDE",
    "THE WEEKND",
    "TAYLOR SWIFT",
  ];

  //Each row in the csv file has songs by the same artist, and the index of each song corresponds to its vibe; for example, songs at index 0 of each row have a chill vibe
  let singleRow = [];
  
  //initializing the variable that will later be used to create the alternating fill pattern
  let colorPicker = 1;
  
  textFont("Helvetica", 25);
  textStyle(BOLD);
  
  //declaring the size of all the text rows
  const size = 30;
  textSize(size);
  
  //initializing the variable that will be used to place each row just below the other
  let yCoordinate = 90;

  if (category == 0) { //conditional statement if the chill vibe (0) is selected
    fill(176, 38, 255);
    
    text("CHILL VIBES", 0, 60);

    for (let i = 0; i < 10; i++) { //for loop to go over each row in the csv file
      
      if (colorPicker % 2 == 0) { //if statement to make sure each subsequent line is a different color 
        fill(176, 38, 255);
      } else {
        fill(255);
      }

      singleRow = split(songs[i], ","); //assigning each singer's row to the singleRow array

      //assigning the song (correspnding to the vibe denoted by the category variable) to a variable & displaying it with its respective artist
      song = singleRow[category]; 
      text(song + " - " + singers[i], 0, yCoordinate);
      
      //incrementing the colorPicker variable to ensure alternating pattern & the yCoordinate to ensure each song is on its own line
      colorPicker++;
      yCoordinate = yCoordinate + size;
    }

    fill(255);
    text("CHILL VIBES", 0, yCoordinate);
  
  } else {
    
    if (category == 1) { //conditional statement if the sad vibe (1) is selected
      
      fill(12, 191, 233);
      
      text("SAD VIBES", 0, 60);
      
      for (let i = 0; i < 10; i++) {
        
        if (colorPicker % 2 == 0) {
          fill(12, 191, 233);
        } else {
          fill(255);
        }

        singleRow = split(songs[i], ",");
        
        song = singleRow[category];
        text(song + " - " + singers[i], 0, yCoordinate);
        
        colorPicker++;
        yCoordinate = yCoordinate + size;
      }
      
      fill(255);
      text("SAD VIBES", 0, yCoordinate);
      
    } else {
      
      if (category == 2) { //conditional statement if the confidence boost vibe (2) is selected
        
        fill(57, 255, 20);
        
        text("CONFIDENCE BOOST VIBES", 0, 60);
        
        for (let i = 0; i < 10; i++) {
          if (colorPicker % 2 == 0) {
            
            fill(57, 255, 20);
          } else {
            fill(255);
          }

          singleRow = split(songs[i], ",");
          
          song = singleRow[category];
          
          text(song + " - " + singers[i], 0, yCoordinate);
          
          colorPicker++;
          yCoordinate = yCoordinate + size;
        }
        
        fill(255);
        text("CONFIDENCE BOOST VIBES", 0, yCoordinate);
        
      } else {
        
        if (category == 3) { //conditional statement if the dance party vibe (3) is selected
          
          fill(255, 16, 240);
          
          text("DANCE PARTY VIBES", 0, 60);
          
          for (let i = 0; i < 10; i++) {
            
            if (colorPicker % 2 == 0) {
              fill(255, 16, 240);
            } else {
              fill(255);
            }

            singleRow = split(songs[i], ",");
            
            song = singleRow[category];
            text(song + " - " + singers[i], 0, yCoordinate);
            
            colorPicker++;
            yCoordinate = yCoordinate + size;
          }
          
          fill(255);
          text("DANCE PARTY VIBES", 0, yCoordinate);
          
        } else {
          
          if (category == 4) { //conditional statement if the happy vibe (4) is selected
            
            fill(255, 240, 31);
            
            text("HAPPY VIBES", 0, 60);
            
            for (let i = 0; i < 10; i++) {
              
              if (colorPicker % 2 == 0) {
                fill(255, 240, 31);
              } else {
                fill(255);
              }

              singleRow = split(songs[i], ",");
              
              song = singleRow[category];
              text(song + " - " + singers[i], 0, yCoordinate);
              
              colorPicker++;
              yCoordinate = yCoordinate + size;
            }
            
            fill(255);
            text("HAPPY VIBES", 0, yCoordinate);
          } else {
            
            if (category == 5) { //conditional statement if the throwback vibe (5) is selected
              
              fill(255, 95, 31);
              
              text("THROWBACK VIBES", 0, 60);
              
              for (let i = 0; i < 10; i++) {
                
                if (colorPicker % 2 == 0) {
                  fill(255, 95, 31);
                } else {
                  fill(255);
                }

                singleRow = split(songs[i], ",");
                
                song = singleRow[category];
                text(song + " - " + singers[i], 0, yCoordinate);
                
                colorPicker++;
                yCoordinate = yCoordinate + size;
              }
              
              fill(255);
              text("THROWBACK VIBES", 0, yCoordinate);
              
            } else {
              
              if (category == 6) { //conditional statement if the karaoke vibe (6) is selected
                
                fill(255, 49, 49);
                
                text("KARAOKE VIBES", 0, 60);
                
                for (let i = 0; i < 10; i++) {
                  
                  if (colorPicker % 2 == 0) {
                    fill(255, 49, 49);
                  } else {
                    fill(255);
                  }

                  singleRow = split(songs[i], ",");
                  
                  song = singleRow[category];
                  
                  text(song + " - " + singers[i], 0, yCoordinate);
                  
                  colorPicker++;
                  yCoordinate = yCoordinate + size;
                }
                
                fill(255);
                text("KARAOKE VIBES", 0, yCoordinate);
              }
            }
          }
        }
      }
    }
  }
}
