import { useState } from 'react'


import './App.css'



const IconButton = ({src, alt, onClick}) => {
return (
<button className='icon' onClick={onClick}>
  <img src={src} alt={alt} width="20px" height="20px" className='nav'/>
</button>
);
}


const data = [
  'Frontend',
  'Backend',
  'Software engineer',
  'Fullstack developer',
  'Beginner in IT'
];

function Cautare() {
const [query, setQuery] = useState('');
const [filteredData, setData] = useState(data);
const [visible, setVisible] = useState(true);

const handleSearch = (event) => {
const searchTerm = event.target.value.toLowerCase();
setQuery(searchTerm);

const filteredResult = data.filter((item) => item.toLowerCase().includes(searchTerm));
setData(filteredResult);
}

if(!visible) return null;

return (
<div className='search-container'>
<input type="text" value={query} onChange={handleSearch} className='search-input'/>
<button type="button" onClick={() => setVisible(false)}>x</button>

<ul>
{ filteredData.length > 0 ? 
  filteredData.map((item, index) =><li key={index}>{item}</li> ) : 
  <li className='error'>Niciun rezultat gasit</li> 
  }
</ul>
</div>
);

}


function Meniu() {
const [showSearch, setShowSearch] = useState(false);


  return (
 <>
  <nav className="container">
<span className="nav">&lt;C/&gt;</span>
<span className="mynav">SinanTokman</span>

<div>
<a href="#">Home</a>
<a href="#">Blogs</a>
</div>

<div>
<IconButton src="/magnifying-glass-tilted-left.svg" alt="Search" onClick = {() => setShowSearch(true)}/> 
<IconButton src="/instagram.svg" alt="Instagram" onClick={() => window.open('https://www.instagram.com/', '_self')} />
<IconButton src="/icons8-discord.svg" alt="Discord" onClick={() => window.open('https://discord.com', '_self')}/>
<IconButton src="/icons8-github.svg" alt="Github" onClick={() => window.open('https://github.com', '_self')}/>
</div>
  </nav>
 {showSearch && <Cautare />}
  </>
  );
}

function Title() {
  return <h1 className='green'>Blogs</h1>;
}


function Line() {
  return (
    <>
<img src="/line.svg" alt="Line" className="line"></img><br />
<h5>My thoughts on technology and business, welcome to subscribe</h5>
</>
  );
}


function SubscribeButton() {
return <button className='button'>Subscribe My Blogs</button> ;
}

function LongLine() {
return <img src="myline.png" alt="myline" ></img>;
}


function App() {
  return (
<div>
  
  {/* <Meniu />
  <Title />
  <Line />
  <SubscribeButton />
  <LongLine /> */}
  <p>AAAAAAAAAAAAAAAA</p>
</div>
  );}

export default App;
