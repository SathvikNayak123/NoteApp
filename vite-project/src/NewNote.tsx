import { Notedata, Tag } from "./App";
import { NoteForm } from "./NoteForm";

type NewNoteProps={
  onSubmit:(data:Notedata)=>void
  onAddtag:(tag:Tag)=>void
  availableTags:Tag[]
}

export function NewNote({onSubmit, onAddtag, availableTags}:NewNoteProps){
  return(
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddtag={onAddtag} availableTags={availableTags} />
    </>
  )
}