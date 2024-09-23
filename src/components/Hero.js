import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container flex space-between mt-3">
      <div className="left">
        <p className="text-uppercase">Путешествие на</p>
        <span>красную планету</span>
        <Link to="/here" className="her_btn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Начать путешествие
        </Link>
      </div>

      <div className="right">
        <div className="grid_view_cards">
          <div className="grid-item">
            <span>мы</span>
            <h1 className="font-bold">1</h1>
            <span>на рынке</span>
          </div>

          <div className="grid-item">
            <span>гарантируем</span>
            <h1 className="font-bold">50%</h1>
            <span>безопасность</span>
          </div>

          <div className="grid-item">
            <span>календарик за</span>
            <h1 className="font-bold">2001</h1>
            <span>в подарок</span>
          </div>
          <div className="grid-item">
            <span>путешествие</span>
            <h1 className="font-bold">597</h1>
            <span>дней</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
