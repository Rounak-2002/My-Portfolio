import "./testimonials.scss";

export default function testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="assets/rounak.png" alt="" />
            <img class="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            voluptas dolorum dolores esse in, alias sit
          </div>
          <div className="bottom">
            <h3>Rounak</h3>
            <h4>My Portfolio</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
