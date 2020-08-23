import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['吃饭', '打车']);
  return {tags, setTags};
};
export {useTags};
