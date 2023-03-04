import React from 'react';
import Eraser from '../assets/tools/eraser.jpeg'
import Pencils from '../assets/tools/pencils.jpg'
import Blender from '../assets/tools/blender.jpg'
import Color from '../assets/tools/colorpencil.jpg'
import Brush from '../assets/tools/brush.jpg'


const Skills = () => {
    const tool = [
        {
            id: 1,
            src: Eraser,
            title: 'Eraser',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Pencils,
            title: 'Charcoal Pencils',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Blender,
            title: 'Blender',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: Color,
            title: 'Color Pencils',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Brush,
            title: 'Brush',
            style: 'shadow-green-400'
        },
    ]
  return (
    <div
          name="tools"
          className="bg-gradient-to-b bg-[#0a192f] w-full h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Tools
              </p>
              <p className="py-6">These are the tools I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {tool.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  );
};

export default Skills;