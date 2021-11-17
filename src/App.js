import './App.css';
import PriceCard from './PriceCard';
import './PriceCard.css'

function App() {
  return (
    <>
    <section class="pricing py-5">
    <div class="container">
    <div class="row">

    <div class="col-lg-4">
      <PriceCard title='Free' price='0' users='Single User' storage='5GB Storage'/>
      </div>

      <div class="col-lg-4">
      <PriceCard title='Plus' price='9' users='5 User' storage='50GB Storage'/>
      </div>

      <div class="col-lg-4">
      <PriceCard title='Pro' price='49' users='Unlimited Users' storage='150GB Storage' />
      </div>
      
    </div>
    </div>
    </section>
    </>
  );
}

export default App;
