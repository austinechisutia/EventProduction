// PhotoGrid.jsx
import React from "react";

const PhotoGrid = ({ images }) => {
  return (
   <div className="w-full overflow-x-auto py-6">
  <div
    className="
      grid grid-flow-col 
      auto-cols-[280px] 
      gap-4 
      items-start 
      snap-x snap-mandatory 
      scroll-pt-6 px-4
      cursor-grab active:cursor-grabbing
    "
  >
    {images.map((src, i) => (
      <figure
        className={`snap-start ${i % 2 === 0 ? "row-span-2" : "row-span-1"} aspect-square`}
        key={i}
      >
        <img
          src={src}
          alt={`grid-img-${i}`}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg shadow-md filter grayscale"
        />
      </figure>
    ))}
  </div>
</div>

  );
};

export default PhotoGrid;
