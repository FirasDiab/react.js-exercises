import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
   
      <div class="row row-cols-1 row-cols-md-3 g-4">
  <Card name="Firas" address="Amman" image="./images/abudiab.jfif"/>
  <Card name="Yacoub" address="Amman" image="./images/yacoub.jfif" />
  <Card name="Adam" address="Amman" image="./images/yacoub.jfif" />
  <Card name="Lojain" address="Madaba" image="./images/lojain.jfif"/>
  <Card name="Maria" address="Amman" image="./images/maria.jfif"/>
</div>
   
  );
}

export default App;
