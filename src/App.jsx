import { useEffect } from "react";
import "./App.css";
import model from "./js/model";
import imgFlower from '../public/assets/flower.png';
import imgLeaf from  '../public/assets/leaf.png';
import imgLeaf1 from  '../public/assets/leaf1.png';

function App() {
  useEffect(() => {
    model();
  }, []);

  return (
    <>
      <header>
        <div className="content-fit">
          <div className="logo">ThreeJS</div>
          <nav>
            <ul>
              <li>Contacts</li>
              <li>Category</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="section" id="banner">
        <div className="content-fit">
          <div className="title" data-before="SCROLL DOWN">
            3D ANIMATION
          </div>
        </div>
        <img
          src={imgFlower}
          className="decorate decorate-1"
          alt="flower"
        />
        <img
          src={imgLeaf}
          className="decorate decorate-2"
          alt="leaf"
        />
      </div>
      <div className="section" id="intro">
        <div className="content-fit">
          <div className="number">01</div>
          <div className="des">
            <div className="title">3d animation design for website</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus voluptas a porro libero recusandae quae, aut ratione,
              incidunt laborum, necessitatibus similique enim doloremque ex.
              Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic
              itaque consequatur nisi accusantium veritatis, voluptatem ratione!
              Placeat numquam nisi reiciendis harum quibusdam tempore eaque
              deleniti accusantium, veniam quae eos sed, asperiores laborum
              corporis odit mollitia consequatur adipisci? Quibusdam quis eos
              debitis non esse blanditiis laudantium rerum odit tempora?
              Corrupti maiores velit consequuntur cupiditate reiciendis
              similique provident repudiandae.
            </p>
          </div>
        </div>
      </div>
      <div className="section" id="description">
        <div className="content-fit">
          <div className="number">02</div>
          <div className="des">
            <div className="title">Keep Going!</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus voluptas a porro libero recusandae quae, aut ratione,
              incidunt laborum, necessitatibus similique enim doloremque ex.
              Laudantium obcaecati aspernatur doloremque illo beatae, maxime hic
              itaque consequatur nisi accusantium veritatis, voluptatem ratione!
              Placeat numquam nisi reiciendis harum quibusdam tempore eaque
              deleniti accusantium, veniam quae eos sed, asperiores laborum
              corporis odit mollitia consequatur adipisci? Quibusdam quis eos
              debitis non esse blanditiis laudantium rerum odit tempora?
              Corrupti maiores velit consequuntur cupiditate reiciendis
              similique provident repudiandae.
            </p>
          </div>
        </div>
        <img
          src={imgLeaf1}
          className="decorate decorate-3"
          alt="leaf"
        />
      </div>
      <div className="section" id="contact">
        <div className="content-fit">
          <div className="number">03</div>
          <div className="des">
            <div className="title">CONTACT</div>
            <table>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>
                    <a
                      href="mailto:charlesbuckley122@gmail.com"
                      target="_blank"
                    >
                      charlesbuckley122@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>+1 804.310.1946</td>
                </tr>
                <tr>
                  <td>Website</td>
                  <td>
                    <a href="https://charlesb.me/" target="_blank">
                      charlesb.me
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Github</td>
                  <td>
                    <a href="https://github.com/0xagf0x" target="_blank">
                      @0xagf0x
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="sign">Charles B</div>
          </div>
        </div>
      </div>
      <div id="container3D"></div>
    </>
  );
}

export default App;
