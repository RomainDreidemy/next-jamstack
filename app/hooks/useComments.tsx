import React, { useCallback, useEffect, useState } from 'react';
import { Directus } from "@directus/sdk";
import { Comment, CommentCreate } from "../interfaces/comment.interface";

const useComments = (trailerId: number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState<Comment[]>([])

  const fetchComment = useCallback(async () => {
    setIsLoading(true)
    const directus = new Directus('http://localhost:8052');
    const response = await directus.items('comments').readByQuery({ filter: { trailer: trailerId } })

    console.log(response.data)
    setComments(response.data)
    setIsLoading(false)
  }, [trailerId])

  useEffect(() => {
    fetchComment()
  }, [trailerId]);

  const createComment = useCallback(async (params: CommentCreate): Promise<void> => {
    const directus = new Directus('http://localhost:8052');
    await directus.items('comments').createOne({trailer: trailerId, ...params})
    await fetchComment()
  },[fetchComment]);


  return { comments, createComment, isLoading }
};

export default useComments;
