function IconSlide(props) {
  return (
    <section className="iconSlide__container">
      <div className="iconSlide__img-container">
        <img
          className="iconSlide__img"
          alt="attackIcon"
          src={props.imgSrc}
        ></img>
      </div>
      <h3 className="iconSlide__title">{props.title}</h3>
      <span className="iconSlide__desc">{props.desc}</span>
    </section>
  );
}
export default IconSlide;
