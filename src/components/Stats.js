export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>🏝️ Add some items to your list! 🏖️</em>
      </footer>
    );
  }

  const packedCount = [...items].filter((el) => el.packed).length;
  const packedPercent = Math.round((packedCount / items.length) * 100);

  return (
    <footer className="stats">
      {packedPercent < 100 ? (
        <em>
          You have {items.length} item{items.length > 1 && "s"} on your list,
          and you have packed {packedCount} ( {packedPercent} %) 💼
        </em>
      ) : (
        <em>You're all packed ✈️</em>
      )}
    </footer>
  );
}
