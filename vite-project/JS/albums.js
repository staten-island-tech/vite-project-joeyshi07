const albums = [
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
    artistType: "Band",
    genre: "Rock",
    mood: "Nostalgic",
    decade: "1970s",
    altText:
      "Cover of Fleetwood Mac's *Rumours* featuring a serene blue background.",
  },
  {
    title: "Kind of Blue",
    artist: "Miles Davis",
    artistType: "Solo Artist",
    genre: "Jazz",
    mood: "Melancholy",
    decade: "1950s",
    altText:
      "Cover of Miles Davis's *Kind of Blue* showcasing abstract art in shades of blue.",
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    artistType: "Band",
    genre: "Rock",
    mood: "Angry",
    decade: "1990s",
    altText:
      "Cover of Nirvana's *Nevermind* featuring a baby swimming towards a dollar bill.",
  },
  {
    title: "21",
    artist: "Adele",
    artistType: "Solo Artist",
    genre: "Pop",
    mood: "Wistful",
    decade: "2010s",
    altText:
      "Cover of Adele's *21* with a close-up portrait of Adele against a muted background.",
  },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    artistType: "Band",
    genre: "Rock",
    mood: "Nostalgic",
    decade: "1970s",
    altText:
      "Cover of Pink Floyd's *The Dark Side of the Moon* featuring a prism refracting light.",
  },
  {
    title: "Aerial",
    artist: "Kate Bush",
    artistType: "Solo Artist",
    genre: "Jazz",
    mood: "Romantic",
    decade: "2000s",
    altText:
      "Cover of Kate Bush's *Aerial* with a surreal landscape in soft colors.",
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    artistType: "Solo Artist",
    genre: "Pop",
    mood: "Upbeat",
    decade: "1980s",
    altText:
      "Cover of Michael Jackson's *Thriller* showing him in a classic dance pose.",
  },
  {
    title: "Blue",
    artist: "Joni Mitchell",
    artistType: "Solo Artist",
    genre: "Pop",
    mood: "Melancholy",
    decade: "1970s",
    altText:
      "Cover of Joni Mitchell's *Blue* featuring a close-up of Joni against a blue background.",
  },
  {
    title: "Abbey Road",
    artist: "The Beatles",
    artistType: "Band",
    genre: "Rock",
    mood: "Nostalgic",
    decade: "1960s",
    altText:
      "Cover of The Beatles' *Abbey Road* showing the band crossing the street.",
  },
  {
    title: "The Chronic",
    artist: "Dr. Dre",
    artistType: "Solo Artist",
    genre: "Hip Hop",
    mood: "Upbeat",
    decade: "1990s",
    altText:
      "Cover of Dr. Dre's *The Chronic* with a classic hip-hop aesthetic.",
  },
  {
    title: "OK Computer",
    artist: "Radiohead",
    artistType: "Band",
    genre: "Rock",
    mood: "Wistful",
    decade: "1990s",
    altText:
      "Cover of Radiohead's *OK Computer* featuring abstract art with a dark theme.",
  },
  {
    title: "Beyoncé",
    artist: "Beyoncé",
    artistType: "Solo Artist",
    genre: "R&B",
    mood: "Upbeat",
    decade: "2010s",
    altText:
      "Cover of Beyoncé's self-titled album showcasing a powerful image of the artist.",
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    artistType: "Band",
    genre: "Rock",
    mood: "Upbeat",
    decade: "1980s",
    altText:
      "Cover of AC/DC's *Back in Black* featuring a sleek black background with the band's logo.",
  },
  {
    title: "Blonde",
    artist: "Frank Ocean",
    artistType: "Solo Artist",
    genre: "R&B",
    mood: "Wistful",
    decade: "2010s",
    altText:
      "Cover of Frank Ocean's *Blonde* featuring a minimalist design with a soft color palette.",
  },
  {
    title: "In the Aeroplane Over the Sea",
    artist: "Neutral Milk Hotel",
    artistType: "Band",
    genre: "Indie",
    mood: "Romantic",
    decade: "1990s",
    altText:
      "Cover of Neutral Milk Hotel's *In the Aeroplane Over the Sea* with whimsical artwork.",
  },
  {
    title: "Hotel California",
    artist: "The Eagles",
    artistType: "Band",
    genre: "Rock",
    mood: "Melancholy",
    decade: "1970s",
    altText:
      "Cover of The Eagles' *Hotel California* depicting a classic hotel under twilight.",
  },
  {
    title: "Come Away With Me",
    artist: "Norah Jones",
    artistType: "Solo Artist",
    genre: "Jazz",
    mood: "Romantic",
    decade: "2000s",
    altText:
      "Cover of Norah Jones's *Come Away With Me* featuring a soft, warm photograph of the artist.",
  },
  {
    title: "Born to Run",
    artist: "Bruce Springsteen",
    artistType: "Solo Artist",
    genre: "Rock",
    mood: "Wistful",
    decade: "1970s",
    altText:
      "Cover of Bruce Springsteen's *Born to Run* with a dynamic photo of the artist in action.",
  },
  {
    title: "The Marshall Mathers LP",
    artist: "Eminem",
    artistType: "Solo Artist",
    genre: "Hip Hop",
    mood: "Angry",
    decade: "2000s",
    altText:
      "Cover of Eminem's *The Marshall Mathers LP* with a striking image of the artist.",
  },
  {
    title: "Stankonia",
    artist: "OutKast",
    artistType: "Band",
    genre: "Hip Hop",
    mood: "Upbeat",
    decade: "2000s",
    altText:
      "Cover of OutKast's *Stankonia* featuring vibrant and eclectic artwork.",
  },
  {
    title: "The College Dropout",
    artist: "Kanye West",
    artistType: "Solo Artist",
    genre: "Hip Hop",
    mood: "Wistful",
    decade: "2000s",
    altText:
      "Cover of Kanye West's *The College Dropout* showcasing a cartoon-style illustration.",
  },
  {
    title: "Born This Way",
    artist: "Lady Gaga",
    artistType: "Solo Artist",
    genre: "Pop",
    mood: "Upbeat",
    decade: "2010s",
    altText:
      "Cover of Lady Gaga's *Born This Way* with a bold graphic design of the artist's face.",
  },
  {
    title: "Appetite for Destruction",
    artist: "Guns N' Roses",
    artistType: "Band",
    genre: "Rock",
    mood: "Angry",
    decade: "1980s",
    altText:
      "Cover of Guns N' Roses's *Appetite for Destruction* featuring a striking artwork of skulls.",
  },
  // New Albums
  {
    title: "Blue Train",
    artist: "John Coltrane",
    artistType: "Solo Artist",
    genre: "Jazz",
    mood: "Melancholy",
    decade: "1950s",
    altText:
      "Cover of John Coltrane's *Blue Train* featuring an iconic photo of the artist.",
  },
  {
    title: "The Freewheelin' Bob Dylan",
    artist: "Bob Dylan",
    artistType: "Solo Artist",
    genre: "Indie",
    mood: "Wistful",
    decade: "1960s",
    altText:
      "Cover of Bob Dylan's *The Freewheelin' Bob Dylan* with a classic street scene.",
  },
  {
    title: "A Change Is Gonna Come",
    artist: "Sam Cooke",
    artistType: "Solo Artist",
    genre: "R&B",
    mood: "Romantic",
    decade: "1960s",
    altText:
      "Cover of Sam Cooke's *A Change Is Gonna Come* showcasing a powerful image of the artist.",
  },
  {
    title: "Pet Sounds",
    artist: "The Beach Boys",
    artistType: "Band",
    genre: "Indie",
    mood: "Nostalgic",
    decade: "1960s",
    altText:
      "Cover of The Beach Boys' *Pet Sounds* featuring colorful illustrations of the band.",
  },
  {
    title: "Evermore",
    artist: "Taylor Swift",
    artistType: "Solo Artist",
    genre: "Indie",
    mood: "Nostalgic",
    decade: "2020s",
    altText:
      "Cover of Taylor Swift's *Evermore* featuring a soft, dreamy landscape.",
  },
];
