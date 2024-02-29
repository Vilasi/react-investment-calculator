import { useState } from 'react';

//? Import Components
import Input from './Input';

//? Import CSS
import './UserInputGroup.css';

export default function UserInputGroup() {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input id={'initialInvestment'}>Initial Investment</Input>
        <Input id={'Expected Return'}>Expected Return</Input>
      </div>
      <div className="input-group">
        <Input id={'Annual Investment'}>Annual Investment</Input>
        <Input id={'Duration'}>Duration</Input>
      </div>
    </div>
  );
}
