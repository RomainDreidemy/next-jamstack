import React, { useCallback, useEffect, useState } from 'react';
import { Comment, CommentCreate } from "../interfaces/comment.interface";
import Api from "../drivers/Api";
import { CommentApi } from "../api/comment-api";

const useComments = (trailerId: number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [comments, setComments] = useState<Comment[]>([])

  const fetchComment = useCallback(async () => {
    setIsLoading(true)
    const response = await CommentApi.byTrailer(Api.clientSideDriver(), trailerId)
    setComments(response.data)
    setIsLoading(false)
  }, [trailerId])

  useEffect(() => {
    fetchComment()
  }, [trailerId]);

  const createComment = useCallback(async (params: CommentCreate): Promise<void> => {
    await CommentApi.create(Api.clientSideDriver(), {trailer: trailerId, ...params})
    await fetchComment()
  },[fetchComment]);


  return { comments, createComment, isLoading }
};

export default useComments;
