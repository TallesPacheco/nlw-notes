import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

const note = {
  date: new Date(),
  content: "Hello world"
}



export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 margin-top-15">
      <img src={logo} alt="nlw experts" />
      <form className="w-full ">  
        <input type="text" name="" 
        className='w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500' 
        placeholder='Busque em suas notas' />
      </form>

      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        
        <NewNoteCard />

        <NoteCard  note={note} />       

      </div>


    </div>
    
  )
}


// Parei no 29