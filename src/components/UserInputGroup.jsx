import { useState } from 'react';

//? Import Components
import Input from './Input';

//? Import CSS
import './UserInputGroup.css';

export default function UserInputGroup({ onUserInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input id={'initialInvestment'} onUserInput={onUserInput}>
          Initial Investment
        </Input>
        <Input id={'expectedReturn'} onUserInput={onUserInput}>
          Expected Return
        </Input>
      </div>
      <div className="input-group">
        <Input id={'annualInvestment'} onUserInput={onUserInput}>
          Annual Investment
        </Input>
        <Input id={'duration'} onUserInput={onUserInput}>
          Duration
        </Input>
      </div>
    </div>
  );
}
