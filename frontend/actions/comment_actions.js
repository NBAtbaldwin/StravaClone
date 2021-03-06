import * as ApiUtil from './../util/comment_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const COMMENT_LOADING = 'COMMENT_LOADING';

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment: comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments: comments
});

export const removeComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId: commentId
});

export const commentLoading = () => ({
  type: COMMENT_LOADING,
})

export const fetchComment = id => dispatch => {
  dispatch(commentLoading());
  return ApiUtil.getComment(id).then((comment) => (dispatch(receiveComment(comment))
  ))
};

export const fetchComments = () => dispatch => {
  dispatch(commentLoading());
  return ApiUtil.getComments().then((comments) => (dispatch(receiveComments(comments))
  ))
};

export const createComment = comment => dispatch => (
  ApiUtil.createComment(comment).then((comment) => (dispatch(receiveComment(comment))))
);

export const updateComment = comment => dispatch => (
  ApiUtil.updateComment(comment).then((comment) => (dispatch(receiveComment(comment))))
);

export const deleteComment = id => dispatch => (
  ApiUtil.deleteComment(id).then((comment) => (dispatch(removeComment(id))))
);
