import React, { useState } from 'react';
import { CommentCreate } from "../interfaces/comment.interface";

interface CommentFormProps {
  onSubmit: (params: CommentCreate) => void
}

const CommentForm = ({onSubmit}: CommentFormProps) => {
  const [pseudo, setPseudo] = useState("")
  const [body, setBody] = useState("")
  const [rating, setRating] = useState(3)

  const onSubmitForm = (e: any) => {
    e.preventDefault()
    onSubmit({pseudo, body, rating})
    cleanForm()
  }

  const cleanForm = () => {
    setPseudo("")
    setBody("")
    setRating(3)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Pseudo" value={pseudo} onChange={(e) => setPseudo(e.target.value)} />
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Votre commentaire" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Note</label>
        <div className="select">
          <select value={rating} onChange={(e) => setRating(+e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" disabled={pseudo.length === 0 || body.length === 0}>Valider</button>
        </div>
        <div className="control">
          <button className="button is-link is-light" onClick={cleanForm}>Annuler</button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
