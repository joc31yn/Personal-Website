import './App.css'
import Contact from './Contact';
import NavBar from './navbar/NavBar';
import red_firework from './imgs/red_firework.png';
import blue_firework from './imgs/blue_firework.png';
function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((e) => observer.observe(e));
  return (
    <>
      <div className="bg-stone-50">
        <NavBar />
        <Contact />
        <br></br>
        <br></br>
        <br></br>
        <p className='font-mono text-5xl'>Welcome to my digital home :)</p>
        <br></br>
        <br></br>
        <br></br>
        <p>I hope you enjoy you're stay and find something cool out of it!</p>
        <br></br>
        <br></br>
        <br></br>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <p className='hide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ea sapiente veniam quod amet iure aperiam in, libero vero necessitatibus quasi aliquam accusamus adipisci explicabo sunt qui quia et nesciunt?</p>
        <img className = "w-30 h-30 hide" src = {blue_firework}/>
        <img className = "w-30 h-30 hide" src = {red_firework}/>
      </div>
    </>
  )
}

export default App;
