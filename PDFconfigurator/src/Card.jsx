// Adnan
// Look into Card.jsc replicator
// Look into passing name, image, and link

import wordpic from "./assets/word.jpg";

function Card() {
  return (
    <div className="card">
      <img src={wordpic} alt="word document picture"></img>
      <h2>Word Document</h2>
      <p>Convert pdf file from and to word documents</p>
      <a href="cardPage">Learn More</a>
    </div>
  );
}

export default Card;
