import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs'

const CategoryWrapper = styled.div`
background: #fff;
`;
const Item =styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
  color: grey;
  margin-right: auto;
  margin-left:  12px;
  font-size: 14px;
  }
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <div>
        {records.map(r => {
          return <Item>
            <div className="tags">
              {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              ￥{r.amount}
            </div>
            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;