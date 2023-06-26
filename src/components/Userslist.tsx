"use client";
type UserListProps = {
  id: string;
  name: string;
  avaliable: boolean;
  toggleAvailability: (id: string, avaliable: boolean) => void;
};

export function Userslist({
  id,
  name,
  avaliable,
  toggleAvailability,
}: UserListProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={avaliable}
        onChange={(e) => toggleAvailability(id, e.target.checked)}
      />
      <label htmlFor={id} className="cursor-pointer">
        {name}
      </label>
    </li>
  );
}
