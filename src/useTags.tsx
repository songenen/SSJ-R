import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    {id: 1, name: '打车'},
    {id: 2, name: '吃饭'},
  ]);
  return {tags, setTags};
};
export {useTags};
