import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
box-shadow: 0 0 3px rgba(0,0,0,0.25);
line-height: 24px;
  >ul{
display: flex;
  >li{
width: 33.3333%;
text-align: center;
color: rgba(0,0,0,0.3);

  > a{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4px;  
.icon{
width: 24px;
height: 24px;
        }
        &.selected{
        color: black;
        .icon{
        fill:aqua;
        }
        }
      }
    }
  }
`;

const Nav = () =>{
  return(
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;