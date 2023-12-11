import React from 'react';

function LandingPage() {
  return (
    <div className="flex items-center justify-center h-screen flex-col text-center space-y-4">
      <h1>Oasis</h1>
      <p className="font-kbbubblegum">A comfy platform to chat with friends and make friends!</p>
      <button className="bg-customColor hover:bg-customColorDark text-white font-bold py-2 px-4 rounded-full">
        Try Now
      </button>
    </div>
  );
}

export default LandingPage;
