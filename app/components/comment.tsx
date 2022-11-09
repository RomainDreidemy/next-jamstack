import React from 'react';
import {Comment} from "../interfaces/comment.interface";

interface CommentProps {
  comment: Comment
}

const Comment = ({comment}: CommentProps) => {
  return (
    <div key={comment.id} className="box mt-5">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div>
              <div className="is-flex is-justify-content-space-between">
                <strong>{comment.pseudo}</strong> <small>{comment.rating}/5</small>
              </div>
              <br />
              {comment.body}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
