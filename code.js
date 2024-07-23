document.addEventListener("DOMContentLoaded", function() {
  var artwork = [
    {
      src: "images/god1.jpg",
      description: "<strong>LORD GANESHA</strong><br><br>" +
                   "• <em>Historical Significance:</em> Lord Ganesha, also known as Ganapati, is widely worshiped as the remover of obstacles and the god of beginnings and wisdom. His elephant head symbolizes wisdom and understanding.<br><br>" +
                   "• <em>Iconography:</em> In this drawing, only Lord Ganesha's head is depicted, along with his majestic crown and prominent ears. Traditionally, Ganesha is shown with a human body and four arms, but in this portrayal, the focus is solely on his expressive head and ears, highlighting his wisdom and listening qualities.<br><br>" +
                   "• <em>Festivals and Worship:</em> Ganesh Chaturthi is a major festival dedicated to Lord Ganesha, celebrated with great enthusiasm, including elaborate processions and rituals.<br><br>" +
                   "• <em>Cultural Impact:</em> Lord Ganesha's image is ubiquitous in Hindu culture, and he is often invoked at the start of new ventures and events."
    },
    {
      src: "images/god2.jpg",
      description: "<strong>GODDESS MAA DURGA</strong><br><br>" +
                   "• <em>Historical Significance:</em> Maa Durga, also known as Durga Mata, is a revered Hindu goddess symbolizing strength, power, and protection. She is often depicted riding a lion or tiger, embodying her prowess and courage.<br><br>" +
                   "• <em>Iconography:</em> Maa Durga is typically shown with ten arms, each holding a different weapon, which she uses to combat evil forces. Her many forms represent the convergence of various divine energies.<br><br>" +
                   "• <em>Festivals and Worship:</em> Durga Puja is a major Hindu festival celebrated annually to honor Maa Durga. The festival is marked by elaborate rituals, artistic decorations, and vibrant celebrations, particularly in Bengal.<br><br>" +
                   "• <em>Cultural Impact:</em> Maa Durga is celebrated not just as a deity but as a symbol of feminine strength and resilience. Her worship is widespread across India, and she is revered in various forms and names in different regions."
    },
    {
      src: "images/god3.jpg",
      description: "<strong>LORD HANUMAN</strong><br><br>" +
                   "• <em>Historical Significance:</em> Lord Hanuman is a central figure in Hindu mythology, known for his unwavering devotion to Lord Rama and his immense strength. He symbolizes devotion, bravery, and selfless service.<br><br>" +
                   "• <em>Iconography:</em> Hanuman is depicted as a monkey god with a red face and a strong physique. He often holds a mace and is shown flying or leaping, illustrating his power and agility.<br><br>" +
                   "• <em>Festivals and Worship:</em> Hanuman Jayanti is celebrated to honor his birth. Devotees visit temples and perform rituals to seek his blessings for strength and courage.<br><br>" +
                   "• <em>Cultural Impact:</em> Lord Hanuman's stories are revered in various texts, including the Ramayana, and he is worshipped across India for his heroic deeds and devotion."
    },
    {
      src: "images/god4.jpg",
      description: "<strong>RAM, SITA, AND LAKSHMAN ENTERING AYODHYA</strong><br><br>" +
                   "• <em>Historical Significance:</em> This drawing depicts the joyous return of Lord Rama, Sita, and Lakshman to their kingdom, Ayodhya, after their exile. This event marks the victory of good over evil and the end of their hardships.<br><br>" +
                   "• <em>Iconography:</em> The image often includes the three figures entering a grand city with festive decorations, symbolizing their triumphant return and the celebration by the people of Ayodhya.<br><br>" +
                   "• <em>Festivals and Worship:</em> This event is commemorated during Diwali, one of the most important Hindu festivals, symbolizing the triumph of light over darkness and the return of righteousness.<br><br>" +
                   "• <em>Cultural Impact:</em> The story of Lord Rama's return is central to the Ramayana epic and has inspired countless plays, songs, and celebrations across India."
    },
    {
      src: "images/god5.jpg",
      description: "<strong>LORD HANUMAN</strong><br><br>" +
                   "• <em>Historical Significance:</em> This depiction of Lord Hanuman emphasizes his role as a loyal and devoted servant of Lord Rama. His feats of strength and courage are legendary in Hindu mythology.<br><br>" +
                   "• <em>Iconography:</em> Hanuman is often portrayed with his iconic mace, flying, or in various battle scenes, showcasing his divine strength and dedication.<br><br>" +
                   "• <em>Festivals and Worship:</em> His devotion is celebrated through various rituals and prayers, especially on Hanuman Jayanti, where devotees seek his blessings for strength and protection.<br><br>" +
                   "• <em>Cultural Impact:</em> Lord Hanuman's tales are cherished for their moral lessons on loyalty, bravery, and selflessness, influencing countless aspects of Hindu culture."
    },
    {
      src: "images/god6.jpg",
      description: "<strong>RADHA KRISHNA</strong><br><br>" +
                   "• <em>Historical Significance:</em> Radha Krishna represents the divine love and eternal bond between Radha and Lord Krishna. Their love is considered the epitome of devotion and is celebrated across various traditions.<br><br>" +
                   "• <em>Iconography:</em> Radha Krishna are often depicted together in various intimate and serene poses, highlighting their divine love and unity. Krishna is shown playing the flute while Radha dances or gazes at him.<br><br>" +
                   "• <em>Festivals and Worship:</em> Janmashtami, celebrating Krishna's birth, and Radha Ashtami, honoring Radha, are significant festivals where their divine love is revered and celebrated with devotion.<br><br>" +
                   "• <em>Cultural Impact:</em> Radha Krishna's love story has inspired countless devotional songs, poems, and artworks, symbolizing the pure, selfless nature of divine love.<br><br>" +
                   "• <em>Personal Note:</em> This drawing of Radha Krishna holds a special place in my heart as it symbolizes the deepest form of love and connection, reflecting a bond that transcends all boundaries."
    }
  ];

  var gallery = document.getElementById("art-gallery");

  artwork.forEach(function(piece, index) {
    var img = document.createElement("img");
    img.src = piece.src;
    img.alt = "Art Image " + (index + 1);
    img.addEventListener("click", function() {
      showDetails(piece);
    });
    gallery.appendChild(img);
  });

  function showDetails(piece) {
    var zoomedImageContainer = document.querySelector(".zoomed-image");
    var descriptionContainer = document.querySelector(".description-music");

    zoomedImageContainer.innerHTML = "<img src='" + piece.src + "' alt='Zoomed Image'>";
    descriptionContainer.innerHTML = "<p>" + piece.description + "</p>";
  }
});
