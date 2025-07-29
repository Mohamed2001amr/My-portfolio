export default function CustomSection({ id, children, backgroundImage, title, showTitle = true, ...props }) {
  return (
    <section
      id={id}
      className="relative flex items-center justify-between px-5 py-0 m-5 mb-20 rounded-xl min-h-[500px] max-h-[520px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
      }}
      {...props}
    >

      <div className="absolute inset-0 bg-black/30 z-0" />

      {title && (
        <h1
          className={`absolute top-5 left-1/2 transform -translate-x-1/2 text-2xl font-bold text-white z-10 
            px-4 py-1 border border-white rounded-lg bg-white/10 backdrop-blur-sm shadow-inner shadow-white/20
            transition-all duration-1000 ease-in-out ${showTitle ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
        >
          {title}
        </h1>
      )}

      {children}
    </section>
  );
}
