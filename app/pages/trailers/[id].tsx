import { generateTrailerPath, getTrailerData } from "../../lib/trailer";
import { Trailer } from "../../interfaces/trailer.interface";
import useComments from "../../hooks/useComments";
import CommentForm from "../../components/comment-form";
import { CommentCreate } from "../../interfaces/comment.interface";

interface TrailerProps {
  trailer: Trailer
}

const Trailer = ({ trailer }: TrailerProps) => {
  const { comments, createComment } = useComments(trailer.id)

  const handleCreateComment = async (params: CommentCreate) => {
    await createComment(params)
  }

  return (
    <div className="container mt-5 is-max-desktop">
      <h1 className="title">{trailer.title}</h1>
      <p>{trailer.synopsis}</p>

      <h2 className="subtitle mt-5">Bande annonce</h2>
      <iframe width="560" height="315" src={trailer.url} title={trailer.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>

      <h2 className="subtitle mt-5">Commentaires</h2>

      <CommentForm onSubmit={handleCreateComment} />

      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>{comment.pseudo}</div>
            <div>{comment.body}</div>
            <div>{comment.rating}/5</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await generateTrailerPath();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const trailer = await getTrailerData(params.id);
  return {
    props: {
      trailer,
    },
  };
}

export default Trailer
