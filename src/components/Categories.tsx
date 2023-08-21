export default function Categories({ children: items }) {
  return (
    <>
      <span className="block max-w-2  h-0.5 bg-amber-600"></span>
      <div className="flex justify-center max-w-full flex-wrap">{items}</div>
    </>
  );
}
