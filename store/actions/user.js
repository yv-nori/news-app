export const addClip = ({ clip }) => {
  return {
    type: 'ADD_CLIP',
    //     名前が同じ場合は省略できる。
    //     clip: clip,
    clip,
  };
};
export const deleteClip = ({ clip }) => {
  return {
    type: 'DELETE_CLIP',
    clip,
  };
};
