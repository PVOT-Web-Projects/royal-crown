"use client"
import React, { useEffect } from 'react';
import "./cursor.scss";
import CustomCursor from 'custom-cursor.js';

const Page = () => {
  useEffect(() => {
    const cursor = new CustomCursor('.cursor', {
      hideTrueCursor: true,
      focusElements: [
        {
          elements: '.photo-link',
          focusClass: 'cursor--focused-view',
        },
        'a',
      ],
    });

    cursor.setPosition(-30, -30).initialize();

    return () => {
      cursor.destroy(); // Clean up the cursor on component unmount
    };
  }, []);

  return (
    <div>
      <div className="cursor">
        <div className="cursor-border">
          <span className="text">VIEW</span>
        </div>
      </div>
    </div>
  );
}

export default Page;
