export default function ImageShow({ imageUrl, alt, show }) {
  return (
    <div className="w-1/3 h-[520px] rounded overflow-hidden relative flex items-center justify-center">
      <img
        src={imageUrl}
        alt={alt}
        className={`max-h-full object-cover transition-all duration-1000 ease-in-out 
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      />
    </div>
  );
}