// import logo from './logo.svg';
import './App.css';
import Test from './Test.jsx';
import Test2 from './Test2.jsx';
import Header from './Header/Header.jsx';
import Goods from './Goods';

const headerData = {
  siteName: 'Site name',
  siteHeader: 'Site Header',
  siteSlogan: 'We will...',
  secondHeader: '...',
  nav: [
    {'link': 'nav1', 'text': 'my link'},
    {'link': 'nav1', 'text': 'my link 2'},
    {'link': 'nav1', 'text': 'my link 3'}

  ]
}

const goods = [
  {'title': 'apple', 'cost': 330, 'image': 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-256.png'},
  {'title': 'pear', 'cost': 350, 'image': 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-512.png'},
  {'title': 'peach', 'cost': 370, 'image': 'https://cdn1.iconfinder.com/data/icons/fruit-136/64/Fruit_iconfree_Filled_Outline_peach-healthy-organic-food-fruit_icon-512.png'}
]

// const customColor = '#6d6'
// const styleObj = {
//   fontSize: '36px',
//   color: customColor,
//   fontFamily: 'Georgia',
// };

function App() {
  return (
    <>
      <Header data={headerData}/>
      <hr />
      <Test></Test>
      <Test2></Test2>
      {goods.map(item => <Goods title={item.title} cost={item.cost} image={item.image} />)}
    </>
  );
}

export default App;
