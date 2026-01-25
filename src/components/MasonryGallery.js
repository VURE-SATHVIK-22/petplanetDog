import React from 'react';
import ImageReveal from './ImageReveal';

const MasonryGallery = () => {
    const photos = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
            alt: "Veterinarian examining a dog",
            className: "col-span-1 md:col-span-1 md:row-span-2 h-full",
            aspectRatio: "3/4" // Tall
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
            alt: "Surgical preparation",
            className: "col-span-1 md:col-span-2 md:row-span-1",
            aspectRatio: "16/9" // Wide
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
            alt: "Laboratory diagnostics",
            className: "col-span-1 md:col-span-1 md:row-span-1",
            aspectRatio: "1/1" // Square
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&q=80&w=800",
            alt: "Compassionate care",
            className: "col-span-1 md:col-span-1 md:row-span-1",
            aspectRatio: "1/1" // Square
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200",
            alt: "Professional grooming",
            className: "col-span-1 md:col-span-2 md:row-span-1",
            aspectRatio: "21/9" // Ultra Wide
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
            {photos.map((photo) => (
                <div key={photo.id} className={photo.className}>
                    <ImageReveal
                        src={photo.src}
                        alt={photo.alt}
                        aspectRatio={photo.aspectRatio}
                        className="w-full h-full rounded-3xl"
                        triggerStart="top 90%"
                    />
                </div>
            ))}
        </div>
    );
};

export default MasonryGallery;
