import { useState } from 'react';

//? Import Components
import Input from './Input';

//? Import CSS
import './UserInputGroup.css';

export default function UserInputGroup({ onUserInput, value }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          userInput={value}
          id={'initialInvestment'}
          onUserInput={onUserInput}
        >
          Initial Investment
        </Input>
        <Input
          userInput={value}
          id={'expectedReturn'}
          onUserInput={onUserInput}
        >
          Expected Return
        </Input>
      </div>
      <div className="input-group">
        <Input
          userInput={value}
          id={'annualInvestment'}
          onUserInput={onUserInput}
        >
          Annual Investment
        </Input>
        <Input userInput={value} id={'duration'} onUserInput={onUserInput}>
          Duration
        </Input>
      </div>
    </div>
  );
}
