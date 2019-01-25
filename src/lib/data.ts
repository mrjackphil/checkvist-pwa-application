// Turn JSON to FormData format
export const jsonToFormData = (obj: {[i: string]: string}) => {
  return Object.keys(obj).reduce( (p, c) => {
    p.append(c, obj[c]);
    return p;
  }, new FormData());
};
