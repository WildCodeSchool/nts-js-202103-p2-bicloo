import React from 'react';
import LogSignButtons from '../tools/LogSignButtons';
import './Profile.css';

export default function Profile() {
  const divStyle = {
    height: '88vh',
  };

  return (
    <div style={divStyle}>
      <section className="profile" id="profile">
        <div className="max-width">
          <div className="profile-content">
            <div className="text-1">Log or Sign up to</div>
            <div className="text-2">see your profile</div>
          </div>
          <LogSignButtons />
        </div>
      </section>
    </div>
  );
}
