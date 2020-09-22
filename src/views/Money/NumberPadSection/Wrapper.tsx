import styled from 'styled-components';

const Wrapper = styled.section`
display: flex;
flex-direction: column;
  > .output{
  background: #fff;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0  5px 5px -5px rgba(0,0,0,0.25);
  }
      > .pad{
        > button{
          font-size: 18px;
          width: 25%;
          height: 64px;
          float: left;
          border: none;
            &.ok{
            height:128px;
            float: right;
            }
            &.zero{
            width: 50%;
            }
           &:nth-child(1){
          background: #b5d6f6;
          }
          &:nth-child(2),&:nth-child(5){
          background: #a0cffb;
          }
          &:nth-child(3),&:nth-child(6),&:nth-child(9){
          background: #74b8f9;
          } 
          &:nth-child(4),&:nth-child(7),&:nth-child(10){
          background: #55a7f6;
          }
           &:nth-child(8),&:nth-child(11),&:nth-child(13){
          background: #5aa9f5;
          } 
          &:nth-child(12){
          background: #228df5;
          }
          &:nth-child(14){
          background: #409ef9;
          }
        }
      }
`;

export {Wrapper}