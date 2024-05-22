import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo1 } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        < Logo1 />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job
            <span>tracking</span>
            app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            expedita soluta architecto eveniet, laudantium doloribus fuga ex
            quisquam pariatur quod excepturi? Corporis sint natus fugiat totam
            atque impedit numquam nulla officia sapiente, odit maxime
            consequuntur consectetur eligendi non voluptatem ullam adipisci
            animi! Hic quasi laborum quidem nisi! Quisquam, libero quaerat!
            Assumenda 
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
