const teams = [
    {
        id: 1,
        name: "Arizona Cardinals",
        logo: "https://content.sportslogos.net/logos/7/177/thumbs/kwth8f1cfa2sch5xhjjfaof90.gif",
        city: "Glendale",
        state: "Arizona",
        maincolor: "darkred",
        conference: "NFC",
        division: "West" 
    },
    {
        id: 2,
        name: "Atlanta Falcons",
        logo: "https://content.sportslogos.net/logos/7/173/thumbs/299.gif",
        city: "Atlanta",
        state: "Georgia",
        maincolor: "firebrick",  
        conference: "NFC",
        division: "South"    
    },
    {
        id: 3,
        name: "Baltimore Ravens",
        logo: "https://content.sportslogos.net/logos/7/153/thumbs/318.gif",
        city: "Baltimore",
        state: "Maryland",
        maincolor: "darkslateblue",
        conference: "AFC",
        division: "North"     
    },
    {
        id: 4,
        name: "Buffalo Bills",
        logo: "https://content.sportslogos.net/logos/7/149/thumbs/n0fd1z6xmhigb0eej3323ebwq.gif",
        city: "Buffalo",
        state: "New York",
        maincolor: "darkblue",
        conference: "AFC",
        division: "East"        
    },
    {
        id: 5,
        name: "Carolina Panthers",
        logo: "https://content.sportslogos.net/logos/7/174/thumbs/f1wggq2k8ql88fe33jzhw641u.gif",
        city: "Charlotte",
        state: "North Carolina",
        maincolor: "dodgerblue",
        conference: "NFC",
        division: "South"
    },
    {
        id: 6,
        name: "Chicago Bears",
        logo: "https://content.sportslogos.net/logos/7/169/thumbs/364.gif",
        city: "Chicago",
        state: "Illinois",
        maincolor: "midnightblue",
        conference: "NFC",
        division: "North"      
    },
    {
        id: 7,
        name: "Cincinnati Bengals",
        logo: "https://content.sportslogos.net/logos/7/154/thumbs/403.gif",
        city: "Cincinnati",
        state: "Ohio",
        maincolor: "darkorange",
        conference: "AFC",
        division: "North"       
    },
    {
        id: 8,
        name: "Cleveland Browns",
        logo: "https://content.sportslogos.net/logos/7/155/thumbs/15578552015.gif",
        city: "Cleveland",
        state: "Ohio",
        maincolor: "indianred",
        conference: "AFC",
        division: "North"     
    },
    {
        id: 9,
        name: "Dallas Cowboys",
        logo: "https://content.sportslogos.net/logos/7/165/thumbs/406.gif",
        city: "Dallas",
        state: "Texas",
        maincolor: "midnightblue",
        conference: "NFC",
        division: "East"        
    },
    {
        id: 10,
        name: "Denver Broncos",
        logo: "https://content.sportslogos.net/logos/7/161/thumbs/9ebzja2zfeigaziee8y605aqp.gif",
        city: "Denver",
        state: "Colorado",
        maincolor: "darkorange",
        conference: "AFC",
        division: "West"
    },
    {
        id: 11,
        name: "Detroit Lions",
        logo: "https://content.sportslogos.net/logos/7/170/thumbs/17013982017.gif",
        city: "Detroit",
        state: "Michigan",
        maincolor: "skyblue",
        conference: "NFC",
        division: "North"      
    },
    {
        id: 12,
        name: "Green Bay Packers",
        logo: "https://content.sportslogos.net/logos/7/171/thumbs/dcy03myfhffbki5d7il3.gif",
        city: "Green Bay",
        state: "Wisconsin",
        maincolor: "darkgreen",
        conference: "NFC",
        division: "North"       
    },
    {
        id: 13,
        name: "Houston Texans",
        logo: "https://content.sportslogos.net/logos/7/157/thumbs/570.gif",
        city: "Houston",
        state: "Texas",
        maincolor: "midnightblue",
        conference: "AFC",
        division: "South"       
    },
    {
        id: 14,
        name: "Indianapolis Colts",
        logo: "https://content.sportslogos.net/logos/7/158/thumbs/593.gif",
        city: "Indianapolis",
        state: "Indiana",
        maincolor: "darkblue",
        conference: "AFC",
        division: "South"        
    },
    {
        id: 15,
        name: "Jacksonville Jaguars",
        logo: "https://content.sportslogos.net/logos/7/159/thumbs/15988562013.gif",
        city: "Jacksonville",
        state: "Florida", 
        maincolor: "lightseagreen",
        conference: "AFC",
        division: "South"        
    },
    {
        id: 16,
        name: "Kansas City Chiefs",
        logo: "https://content.sportslogos.net/logos/7/162/thumbs/857.gif",
        city: "Kansas City",
        state: "Missouri",
        maincolor: "red",
        conference: "AFC",
        division: "West"        
    },
    {
        id: 17,
        name: "Las Vegas Raiders",
        logo: "https://content.sportslogos.net/logos/7/6708/thumbs/670885212020.gif",
        city: "Las Vegas",
        state: "Nevada",
        maincolor: "black",
        conference: "AFC",
        division: "West"        
    },
    {
        id: 18,
        name: "Los Angeles Chargers",
        logo: "https://content.sportslogos.net/logos/7/6446/thumbs/644616602020.gif",
        city: "Los Angeles",
        state: "California",
        maincolor: "midnightblue",
        conference: "AC",
        division: "West"        
    },
    {
        id: 19,
        name: "Los Angeles Rams",
        logo: "https://content.sportslogos.net/logos/7/5941/thumbs/594183342020.gif",
        city: "Los Angeles",
        state: "California",
        maincolor: "midnightblue",
        conference: "NFC",
        division: "West"      
    },
    {
        id: 20,
        name: "Miami Dolphins",
        logo: "https://content.sportslogos.net/logos/7/150/thumbs/15073062018.gif",
        city: "Miami",
        state: "Florida",
        maincolor: "lightseagreen",
        conference: "AFC",
        division: "South"        
    },
    {
        id: 21,
        name: "Minnesota Vikings",
        logo: "https://content.sportslogos.net/logos/7/172/thumbs/17227042013.gif",
        city: "Minneapolis",
        state: "Minnesota",
        maincolor: "purple",
        conference: "NFC",
        division: "North"       
    },
    {
        id: 22,
        name: "New England Patriots",
        logo: "https://content.sportslogos.net/logos/7/151/thumbs/y71myf8mlwlk8lbgagh3fd5e0.gif",
        city: "Boston",
        state: "Massachussets",
        maincolor: "midnightblue",
        conference: "AFC",
        division: "East"      
    },
    {
        id: 23,
        name: "New Orleans Saints",
        logo: "https://content.sportslogos.net/logos/7/175/thumbs/907.gif",
        city: "New Orleans",
        state: "Louisiana",
        maincolor: "palegoldenrod",
        conference: "NFC",
        division: "South"        
    },
    {
        id: 24,
        name: "New York Giants",
        logo: "https://content.sportslogos.net/logos/7/166/thumbs/919.gif",
        city: "New York",
        state: "New York",
        maincolor: "midnightblue",
        conference: "NFC",
        division: "East"        
    },
    {
        id: 25,
        name: "New York Jets",
        logo: "https://content.sportslogos.net/logos/7/152/thumbs/15291162019.gif",
        city: "New York",
        state: "New York",
        maincolor: "darkgreen",
        conference: "AFC",
        division: "East"   
    },
    {
        id: 26,
        name: "Philadelphia Eagles",
        logo: "https://content.sportslogos.net/logos/7/167/thumbs/960.gif",
        city: "Philadelphia",
        state: "Pennsylvania",
        maincolor: "lightseagreen",
        conference: "NFC",
        division: "East"       
    },
    {
        id: 27,
        name: "Pittsburgh Steelers",
        logo: "https://content.sportslogos.net/logos/7/156/thumbs/970.gif",
        city: "Pittsburgh",
        state: "Pennsylvania",
        maincolor: "gold",
        conference: "AFC",
        division: "North"        
    },
    {
        id: 28,
        name: "San Francisco 49ers",
        logo: "https://content.sportslogos.net/logos/7/179/thumbs/17994552009.gif",
        city: "San Francisco",
        state: "Carlifornia",
        maincolor: "darkred",
        conference: "NFC",
        division: "West"        
    },
    {
        id: 29,
        name: "Seattle Seahawks",
        logo: "https://content.sportslogos.net/logos/7/180/thumbs/pfiobtreaq7j0pzvadktsc6jv.gif",
        city: "Seattle",
        state: "Washington",
        maincolor: "lawngreen",
        conference: "NFC",
        division: "West"    
    },
    {
        id: 30,
        name: "Tampa Bay Buccaneers",
        logo: "https://content.sportslogos.net/logos/7/176/thumbs/17683632020.gif",
        city: "Tampa",
        state: "Florida",
        maincolor: "darkred",
        conference: "NFC",
        division: "South"       
    },
    {
        id: 31,
        name: "Tennessee Titans",
        logo: "https://content.sportslogos.net/logos/7/160/thumbs/1053.gif",
        city: "Nashville",
        state: "Tennessee",
        maincolor: "lightblue",
        conference: "AFC",
        division: "South"        
    },
    {
        id: 32,
        name: "Washington Redskins",
        logo: "https://content.sportslogos.net/logos/7/168/thumbs/im5xz2q9bjbg44xep08bf5czq.gif",
        city: "Washington",
        state: "DC",
        maincolor: "darkred",
        conference: "NFC",
        division: "East"     
    }
]

export default teams