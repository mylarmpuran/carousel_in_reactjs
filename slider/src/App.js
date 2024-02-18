import logo from './logo.svg';
import './App.css';
import Slider from './Component/Slider';

const slides = [
"https://i.ibb.co/ncrXc2V/1.png",
"https://i.ibb.co/B3s7v4h/2.png",
"https://i.ibb.co/XXR8kzF/3.png",
"https://i.ibb.co/yg7BSdM/4.png",
]

function App() {
  return (
    <div className="App">
      <div className="max-w-lg">
        <Slider autoSlide={false}>
          {[
            ...slides.map((s) => <img src={s} />)
          ]}
        </Slider>
      </div>
      
      
    </div>
  );
}

export default App;
