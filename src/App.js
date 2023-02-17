import './App.css';
import Slider from './components/Slider';

const data = [
  { url: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotov-54.jpg', title: 'striped mongrel cat' },
  { url: 'https://kartinkin.net/pics/uploads/posts/2022-09/1662785417_13-kartinkin-net-p-serii-kot-v-polosku-vkontakte-15.jpg', title: 'siberian shorthair cat' },
  { url: 'https://www.proplan.ru/breeders/sites/default/files/бенгальская%20кошка%202-min.jpg', title: 'bengal cat' },
  { url: 'https://kartinkin.net/pics/uploads/posts/2022-07/1658330392_67-kartinkin-net-p-obizhennii-kot-zhivotnie-krasivo-foto-73.jpg', title: 'fold - eared Scottish cat' }
]

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Slider data={data} auto={true} delay={3000} navs={true} pags={true} />
      </div>
    </div>
  );
}

export default App;
