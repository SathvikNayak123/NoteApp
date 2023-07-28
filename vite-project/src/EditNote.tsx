import { Notedata, Tag } from "./App";
import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

type EditNoteProps={
  onSubmit:(id:string, data:Notedata)=>void
  onAddtag:(tag:Tag)=>void
  availableTags:Tag[]
}

export function EditNote({onSubmit, onAddtag, availableTags}:EditNoteProps){
  const note=useNote()
  return(
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm title={note.title} markdown={note.markdown} tags={note.tags} onSubmit={data=>onSubmit(note.id,data)} onAddtag={onAddtag} availableTags={availableTags} />
    </>
  )
}